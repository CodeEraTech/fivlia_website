import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ScrollToTop from "../ScrollToTop";
import { get, post } from "../../apis/apiClient.jsx";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  LayersControl,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { API_BASE_URL, ENDPOINTS } from "../../apis/endpoints";
import { useNavigate } from "react-router-dom";
import { Switch, FormControlLabel } from "@mui/material";
const { BaseLayer } = LayersControl;

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const BecomeASeller = () => {
  const navigate = useNavigate();
  const [gstDetails, setGstDetails] = useState(null);
  const [otpModal, setOtpModal] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 29.1492,
    lng: 75.7217,
  });
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [otpData, setOtpData] = useState({ emailOtp: "", phoneOtp: "" });
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    storeName: "",
    email: "",
    PhoneNumber: "",
    gstNumber: "",
    additionalInfo: "",
    sellFood: false,
    fullAddress: "",
    fsiNumber: "",
    city: "",
    zone: "",
    aadharCard: [],
    panCard: [],
  });

  const [city, setCity] = useState([]);
  const [zone, setZone] = useState([]);
  const [zoneRadius, setZoneRadius] = useState(null);
  const [zoneCenter, setZoneCenter] = useState(null); // ✅ fixed zone center

  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Resend OTP
  const resendOtp = async () => {
    await handleSubmit({ preventDefault: () => {} });
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otpData.emailOtp && !otpData.phoneOtp) {
      Swal.fire("Error", "Enter at least one OTP to verify.", "error");
      return;
    }

    setVerifying(true);
    Swal.fire({
      title: "Verifying OTP...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await post(`${API_BASE_URL}${ENDPOINTS.SELLER_VERIFY_OTP}`, {
        email: formData.email,
        otpEmail: otpData.emailOtp,
        PhoneNumber: formData.PhoneNumber,
        otp: otpData.phoneOtp,
        type: "register",
      });
      Swal.fire("Success", res.data.message, "success");
      navigate("/");
      setOtpModal(false);
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "OTP verification failed",
        "error"
      );
    } finally {
      setVerifying(false);
    }
  };

  // Verify GST
  const verifyGST = async () => {
    if (!formData.gstNumber)
      return Swal.fire("Error", "Enter GST Number", "error");
    try {
      const res = await get(
        `${API_BASE_URL}${ENDPOINTS.GSTDETAIL}?gst=${formData.gstNumber}`
      );
      if (res.data.success) {
        const gst = res.data.gstDetails;
        const bno = gst.pradr?.bno || "";
        const st = gst.pradr?.st || "";
        const loc = gst.pradr?.loc || "";

        const fullAddress = [bno, st, loc].filter(Boolean).join(", ");
        setFormData((prev) => ({
          ...prev,
          storeName: gst.tradename || "",
          fullAddress,
        }));
        setGstDetails(gst);
        Swal.fire("Verified", "GST Details fetched successfully", "success");
      } else {
        Swal.fire("Error", "Invalid GST Number", "error");
      }
    } catch {
      Swal.fire("Error", "Failed to verify GST number", "error");
    }
  };

  // Fetch cities
  useEffect(() => {
    let isMounted = true;
    get(ENDPOINTS.GETCITY)
      .then((res) => {
        if (isMounted) {
          setCity(res.data || []);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) setError("Failed to load cities. Please try again.");
      })
      .finally(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  // City change
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData((prev) => ({ ...prev, city: selectedCity, zone: "" }));
    const selected = city.find((c) => c.city === selectedCity);
    setZone(selected?.zones || []);
  };

  // Zone change
  const handleZoneChange = (e) => {
    const selectedZoneId = e.target.value;
    setFormData((prev) => ({ ...prev, zone: [selectedZoneId] }));

    const currentCity = city.find((c) => c.city === formData.city);
    const selectedZone = currentCity?.zones.find(
      (z) => z._id === selectedZoneId
    );
    if (selectedZone) {
      const newCenter = {
        lat: selectedZone.latitude,
        lng: selectedZone.longitude,
      };
      setMarkerPosition(newCenter);
      setLatitude(selectedZone.latitude);
      setLongitude(selectedZone.longitude);
      setZoneRadius(selectedZone.range);
      setZoneCenter(newCenter);
    }
  };

  // Map updater (restrict clicks inside fixed circle)
  const MapUpdater = () => {
    useMapEvents({
      click: (e) => {
        if (!zoneCenter || !zoneRadius) return;

        const clickedLat = e.latlng.lat;
        const clickedLon = e.latlng.lng;
        const distance = L.latLng(zoneCenter.lat, zoneCenter.lng).distanceTo(
          L.latLng(clickedLat, clickedLon)
        );

        if (distance > zoneRadius) {
          Swal.fire("Error", "You clicked outside the allowed zone!", "error");
          return;
        }

        // move marker if inside zone
        setMarkerPosition(e.latlng);
        setLatitude(clickedLat);
        setLongitude(clickedLon);
      },
    });
    return null;
  };

  // Submit form
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // --- NEW: distance check before processing ---
    const selectedZoneId = Array.isArray(formData.zone)
      ? formData.zone[0]
      : formData.zone;
    if (!selectedZoneId) {
      return Swal.fire(
        "Error",
        "Please select a zone before submitting.",
        "error"
      );
    }

    // find selected zone object from city data
    const currentCity = city.find((c) => c.city === formData.city);
    const selectedZone = currentCity?.zones?.find(
      (z) => z._id === selectedZoneId
    );

    if (!selectedZone) {
      return Swal.fire(
        "Error",
        "Selected zone not found. Please re-select the zone.",
        "error"
      );
    }

    // ensure lat/lng exist and are numbers
    const zoneLat = Number(selectedZone.latitude);
    const zoneLng = Number(selectedZone.longitude);
    const submitLat = Number(latitude);
    const submitLng = Number(longitude);

    if (!isFinite(zoneLat) || !isFinite(zoneLng)) {
      return Swal.fire("Error", "Zone coordinates are invalid.", "error");
    }
    if (!isFinite(submitLat) || !isFinite(submitLng)) {
      return Swal.fire(
        "Error",
        "Please set a valid location on the map before submitting.",
        "error"
      );
    }

    // compute distance in meters using Leaflet
    const distanceMeters = L.latLng(zoneLat, zoneLng).distanceTo(
      L.latLng(submitLat, submitLng)
    );

    const MAX_DISTANCE_METERS = Number(selectedZone.range);
    if (distanceMeters >= MAX_DISTANCE_METERS) {
      return Swal.fire({
        title: "Invalid Location",
        html: `The selected location is outside the allowed zone. Please update it.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Update Location",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setMarkerPosition({ lat: zoneLat, lng: zoneLng });
          setLatitude(zoneLat);
          setLongitude(zoneLng);
          Swal.fire("Updated", "Marker moved to zone center.", "success");
        }
      });
    }
    // --- END distance check ---
    Swal.fire({
      title: "Processing...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    let phone = formData.PhoneNumber.trim();
    if (phone && !phone.startsWith("+91")) {
      phone = "+91" + phone.replace(/^0+/, "");
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "aadharCard" && key !== "panCard") {
        form.append(key, value);
      }
    });
    form.append("Latitude", latitude);
    form.append("Longitude", longitude);
    formData.aadharCard.forEach((file) => form.append("aadharCard", file));
    formData.panCard.forEach((file) => form.append("panCard", file));

    const params = new URLSearchParams(window.location.search);
    const defValue = params.get("def");
    if (defValue) {
      form.append("referralCode", defValue);
    }

    try {
      const res = await post(`${API_BASE_URL}${ENDPOINTS.SUBMIT}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Swal.fire("Success", res.data.message, "success");
      setOtpModal(true);
      setResendTimer(60);
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Submission failed",
        "error"
      );
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber") {
      let phone = value.trim();
      if (phone && !phone.startsWith("+91")) {
        phone = "+91" + phone.replace(/^0+/, "");
      }
      setFormData((prev) => ({ ...prev, [name]: phone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div>
      <>
        <ScrollToTop />
        <section className="my-lg-14 my-8">
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 col-12">
                {/* === FORM CONTENT HERE === */}
                <div className="mb-8">
                  <h1 className="h3">Become a Seller</h1>
                  <p className="lead mb-0">
                    Interested in selling your products on our platform? Fill
                    out the form below, and our team will get in touch with you.
                  </p>
                </div>
                <form className="row" onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Aadhar Upload */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Aadhar Card<span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      multiple
                      accept="image/*"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          aadharCard: Array.from(e.target.files),
                        }))
                      }
                      required
                    />
                  </div>
                  {/* GST */}
                  {/* Material-UI Switch */}
                  <div className="col-md-6 mb-3">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.sellFood}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              sellFood: e.target.checked,
                            }))
                          }
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "green", // the circle color when checked
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                              {
                                backgroundColor: "green", // the track color when checked
                              },
                          }}
                        />
                      }
                      label="Do You Sell Food?"
                      className="form-label"
                      sx={{
                        marginTop: "30px",
                      }}
                    />
                  </div>

                  {/* Conditionally show GST or FSI */}
                  {!formData.sellFood ? (
                    // If selling food, ask GST
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        GST Number<span className="text-danger">*</span>
                      </label>
                      <div className="d-flex">
                        <input
                          type="text"
                          className="form-control"
                          name="gstNumber"
                          value={formData.gstNumber}
                          onChange={handleChange}
                          required
                        />
                        <button
                          type="button"
                          className="btn btn-secondary ms-2"
                          onClick={verifyGST}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  ) : (
                    // If not selling food, ask FSI Number
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        FSSAI License No.<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fsiNumber"
                        value={formData.fsiNumber || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  {/* Store Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Store / Business Name
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="storeName"
                      className="form-control"
                      value={formData.storeName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* PAN Upload
                                      <div className="col-md-12 mb-3">
                                        <label className="form-label">
                                          PAN Card<span className="text-danger">*</span>
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control"
                                          multiple
                                          accept="image/*"
                                          onChange={(e) =>
                                            setFormData((prev) => ({
                                              ...prev,
                                              panCard: Array.from(e.target.files),
                                            }))
                                          }
                                          required
                                        />
                                      </div> */}

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>{" "}
                      WhatsApp/Phone Number
                    </label>
                    <input
                      type="tel"
                      name="PhoneNumber"
                      className="form-control"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                      placeholder="Enter WhatsApp/Phone Number With country code"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">
                      Full Address.<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullAddress"
                      value={formData.fullAddress || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* City */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Selling City<span className="text-danger">*</span>
                    </label>
                    <select
                      name="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleCityChange}
                      required
                    >
                      <option value="">Select Selling City</option>
                      {city.map((c) => (
                        <option key={c._id} value={c.city}>
                          {c.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Zone */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Selling Zone<span className="text-danger">*</span>
                    </label>
                    <select
                      name="zone"
                      className="form-control"
                      value={formData.zone[0] || ""}
                      onChange={handleZoneChange}
                      required
                    >
                      <option value="">Select Selling Zone</option>
                      {zone.map((z) => (
                        <option key={z._id} value={z._id}>
                          {z.zoneTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Map */}
                  <div className="mb-3">
                    <div style={{ height: "400px", width: "100%" }}>
                      <MapContainer
                        center={markerPosition}
                        zoom={12}
                        style={{ height: "100%", width: "100%" }}
                      >
                        <LayersControl position="topright">
                          <BaseLayer checked name="Street View">
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          </BaseLayer>
                          <BaseLayer name="Satellite View">
                            <TileLayer
                              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                              attribution="&copy; <a href='https://www.google.com/maps'>Google Maps</a>"
                            />
                          </BaseLayer>
                          <BaseLayer name="Hybrid View">
                            <TileLayer
                              url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                              attribution="&copy; <a href='https://www.google.com/maps'>Google Maps</a>"
                            />
                          </BaseLayer>
                        </LayersControl>

                        {/* ✅ Circle fixed at zone center */}
                        {zoneRadius && zoneCenter && (
                          <Circle
                            center={zoneCenter}
                            radius={zoneRadius}
                            color="lightgreen"
                            fillColor="lightgreen"
                            fillOpacity={0.4}
                          />
                        )}

                        {/* Marker */}
                        <Marker position={markerPosition} />

                        {/* Click control */}
                        <MapUpdater />
                      </MapContainer>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-2">
                      <div style={{ flex: "1 1 150px" }}>
                        <label className="form-label">Latitude</label>
                        <input
                          type="number"
                          step="0.000001"
                          className="form-control"
                          value={latitude || ""}
                          onChange={(e) =>
                            setLatitude(parseFloat(e.target.value))
                          }
                        />
                      </div>
                      <div style={{ flex: "1 1 150px" }}>
                        <label className="form-label">Longitude</label>
                        <input
                          type="number"
                          step="0.000001"
                          className="form-control"
                          value={longitude || ""}
                          onChange={(e) =>
                            setLongitude(parseFloat(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Additional Information</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-md-12 justify-content-center d-flex mt-3">
                    <button
                      type="submit"
                      style={{ width: "80%" }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* OTP Modal */}
                {otpModal && (
                  <div
                    className="modal d-block"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content p-3">
                        <h5 className="mb-3">Verify Your OTP</h5>
                        <div className="mb-3">
                          <label>WhatsApp/Phone OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            value={otpData.phoneOtp}
                            onChange={(e) =>
                              setOtpData((prev) => ({
                                ...prev,
                                phoneOtp: e.target.value,
                              }))
                            }
                            placeholder="Enter WhatsApp/Phone OTP"
                          />
                        </div>
                        <div className="mb-2">
                          <label>Email OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            value={otpData.emailOtp}
                            onChange={(e) =>
                              setOtpData((prev) => ({
                                ...prev,
                                emailOtp: e.target.value,
                              }))
                            }
                            placeholder="Enter Email OTP"
                          />
                        </div>
                        <div className="mb-3">
                          <h6>
                            Check your spam/junk folder if the OTP isn’t in your
                            inbox.
                          </h6>
                        </div>
                        <div className="mb-3 text-muted">
                          {resendTimer > 0 ? (
                            <span style={{ color: "red" }}>
                              You can request a new OTP in {resendTimer} seconds
                            </span>
                          ) : (
                            <span
                              onClick={resendOtp}
                              style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                                color: "blue",
                              }}
                            >
                              Resend OTP
                            </span>
                          )}
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-secondary me-2"
                            onClick={() => setOtpModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={verifyOtp}
                            disabled={verifying}
                          >
                            {verifying ? "Verifying..." : "Verify OTP"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default BecomeASeller;
