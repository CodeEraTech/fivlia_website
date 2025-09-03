import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { get, post } from "../../apis/apiClient.jsx";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { API_BASE_URL, ENDPOINTS } from "../../apis/endpoints";
import { useNavigate } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const BecomeASeller = () => {
  const navigate = useNavigate();
  const [loaderStatus, setLoaderStatus] = useState(true);
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    storeName: "",
    email: "",
    PhoneNumber: "",
    gstNumber: "",
    additionalInfo: "",
    city: "",
    zone: "",
    aadharCard: [],
    panCard: [],
  });

  const [city, setCity] = useState([]);
  const [zone, setZone] = useState([]);

  // Map click handler
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      },
    });
    return null;
  };

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Send OTP
  const sendOtp = async () => {
    if (!formData.email || !formData.PhoneNumber) {
      Swal.fire("Error", "Email and phone number are required to send OTP.", "error");
      return;
    }
    try {
      await post(`${API_BASE_URL}${ENDPOINTS.SEND_OTP}`, {
        email: formData.email,
        PhoneNumber: formData.PhoneNumber,
      });
      Swal.fire("Success", "OTP sent to your email and phone.", "success");
      setOtpModal(true);
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Failed to send OTP", "error");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otpData.emailOtp && !otpData.phoneOtp) {
      Swal.fire("Error", "Enter at least one OTP to verify.", "error");
      return;
    }
    setVerifying(true);
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
      Swal.fire("Error", error.response?.data?.message || "OTP verification failed", "error");
    } finally {
      setVerifying(false);
    }
  };

  // Verify GST
  const verifyGST = async () => {
    if (!formData.gstNumber) return Swal.fire("Error", "Enter GST Number", "error");
    try {
      const res = await get(
        `${API_BASE_URL}${ENDPOINTS.GSTDETAIL}?gst=${formData.gstNumber}`
      );
      if (res.data.success) {
        const gst = res.data.gstDetails;
        setFormData((prev) => ({
          ...prev,
          firstName: gst.name?.split(" ")[0] || "",
          lastName: gst.name?.split(" ")[1] || "",
          storeName: gst.tradename || "",
        }));
        setGstDetails(gst);
        Swal.fire("Verified", "GST Details fetched successfully", "success");
      } else {
        Swal.fire("Error", "Invalid GST Number", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Failed to verify GST number", "error");
    }
  };

  // Fetch cities
  useEffect(() => {
    let isMounted = true;
    setLoaderStatus(true);
    get(ENDPOINTS.GETCITY)
      .then((res) => {
        if (isMounted) {
          setCity(res.data || []);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) setError("Failed to load categories");
      })
      .finally(() => {
        if (isMounted) setLoaderStatus(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // City change
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData((prev) => ({ ...prev, city: selectedCity, zone: [] }));
    const selected = city.find((c) => c.city === selectedCity);
    setZone(selected?.zones || []);
  };

  // Zone change
  const handleZoneChange = (e) => {
    const selectedZoneId = e.target.value;
    setFormData((prev) => ({ ...prev, zone: [selectedZoneId] }));
    const currentCity = city.find((c) => c.city === formData.city);
    const selectedZone = currentCity?.zones.find((z) => z._id === selectedZoneId);
    if (selectedZone) {
      const newPos = { lat: selectedZone.latitude, lng: selectedZone.longitude };
      setMarkerPosition(newPos);
      setLatitude(selectedZone.latitude);
      setLongitude(selectedZone.longitude);
    }
  };

  // Map updater
  const MapUpdater = ({ position }) => {
    const map = useMapEvents({});
    useEffect(() => {
      map.setView(position, map.getZoom(), { animate: true });
    }, [position, map]);
    return null;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("storeName", formData.storeName);
    form.append("email", formData.email);
    form.append("PhoneNumber", formData.PhoneNumber);
    form.append("gstNumber", formData.gstNumber);
    form.append("additionalInfo", formData.additionalInfo);
    form.append("city", formData.city);
    form.append("Latitude", latitude);
    form.append("Longitude", longitude);

    if (formData.zone) {
      form.append("zone", formData.zone);
    }

    // Files
    formData.aadharCard.forEach((file) => form.append("aadharCard", file));
    formData.panCard.forEach((file) => form.append("panCard", file));

    try {
      const res = await post(`${API_BASE_URL}${ENDPOINTS.SUBMIT}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Swal.fire("Success", res.data.message, "success");
      setOtpModal(true);
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Submission failed", "error");
    }
  };

  // Handle text changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {loaderStatus ? (
        <div
          className="loader-container d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <section className="my-lg-14 my-8">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8 col-12">
                  <div className="mb-8">
                    <h1 className="h3">Become a Seller</h1>
                    <p className="lead mb-0">
                      Interested in selling your products on our platform? Fill out
                      the form below, and our team will get in touch with you.
                    </p>
                  </div>
                  <form className="row" onSubmit={handleSubmit}>
                    {/* GST */}
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

                    {/* Store Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Store / Business Name<span className="text-danger">*</span>
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
                    <div className="col-md-12 mb-3">
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
                      <label className="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg> WhatsApp Number</label>
                      <input
                        type="tel"
                        name="PhoneNumber"
                        className="form-control"
                        value={formData.PhoneNumber}
                        onChange={handleChange}
                        placeholder="Enter WhatsApp Number With country code"
                      />
                    </div>

                    {/* City */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        City<span className="text-danger">*</span>
                      </label>
                      <select
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleCityChange}
                        required
                      >
                        <option value="">Select City</option>
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
                        Zone<span className="text-danger">*</span>
                      </label>
                      <select
                        name="zone"
                        className="form-control"
                        value={formData.zone[0] || ""}
                        onChange={handleZoneChange}
                        required
                      >
                        <option value="">Select Zone</option>
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
                          zoom={15}
                          style={{ height: "100%", width: "100%" }}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <Marker position={markerPosition} />
                          <MapClickHandler />
                          <MapUpdater position={markerPosition} />
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
                            onChange={(e) => setLatitude(parseFloat(e.target.value))}
                          />
                        </div>
                        <div style={{ flex: "1 1 150px" }}>
                          <label className="form-label">Longitude</label>
                          <input
                            type="number"
                            step="0.000001"
                            className="form-control"
                            value={longitude || ""}
                            onChange={(e) => setLongitude(parseFloat(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>

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
                                placeholder="Enter email OTP"
                              />
                            </div>
                            <div className="mb-3">
                              <label>WhatsApp OTP</label>
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
                                placeholder="Enter WhatsApp OTP"
                              />
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
                      <button type="submit" style={{ width: "80%" }} className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BecomeASeller;