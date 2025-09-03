import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { get,post } from "../../apis/apiClient.jsx";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {API_BASE_URL, ENDPOINTS } from '../../apis/endpoints';
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
  const [markerPosition, setMarkerPosition] = useState({ lat: 29.1492, lng: 75.7217 }); // Default to Delhi
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [otpData, setOtpData] = useState({
    emailOtp: "",
    phoneOtp: "",
  });
  const [verifying, setVerifying] = useState(false);

  const [error,setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    storeName: "",
    aadharCard: [],
    panCard: [],
    email: "",
    PhoneNumber: "",
    gstNumber: "",
    additionalInfo: "",
    city: "",
    zone: "",
  });
  const [city, setCity] = useState([]);
  const [zone, setZone] = useState([]);

 const MapClickHandler = () => {
  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng); // moves the marker
      setLatitude(e.latlng.lat);   // sets latitude state
      setLongitude(e.latlng.lng);  // sets longitude state
    },
  });
  return null; // must return null
};


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
    setOtpModal(true); // Open OTP modal
  } catch (error) {
    Swal.fire("Error", error.response?.data?.message || "Failed to send OTP", "error");
  }
};

const verifyOtp = async () => {
  if (!otpData.emailOtp && !otpData.phoneOtp) {
    Swal.fire("Error", "Enter at least one OTP to verify.", "error");
    return;
  }

  setVerifying(true);
  try {
    const res = await post(`${API_BASE_URL}${ENDPOINTS.VERIFY_OTP}`, {
      email: formData.email,
      otpEmail: otpData.emailOtp,
      PhoneNumber: formData.PhoneNumber,
      otp: otpData.phoneOtp,
      type: "register", // or "login" for login flow
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

const verifyGST = async () => {
  console.log(formData.gstNumber)
    if (!formData.gstNumber) return Swal.fire("Error", "Enter GST Number", "error");
    try {
      const res = await get(`${API_BASE_URL}${ENDPOINTS.GSTDETAIL}?gst=${formData.gstNumber}`);
      if (res.data.success) {
        const gst = res.data.gstDetails;

      // Update formData with fetched GST details
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
      console.log(error)
      Swal.fire("Error", "Failed to verify GST number", "error");
    }
  };

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
      .catch((err) => {
        if (isMounted) setError("Failed to load categories");
      })
      .finally(() => {
        if (isMounted) setLoaderStatus(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle city selection
const handleCityChange = (e) => {
  const selectedCity = e.target.value;

  // update city in formData
  setFormData((prev) => ({ ...prev, city: selectedCity, zone: [] }));

  // filter zones for the selected city
  const selected = city.find((c) => c.city === selectedCity);
  setZone(selected?.zones || []);
};

// Handle zone selection
const handleZoneChange = (e) => {
  const selectedZoneId = e.target.value;

  setFormData((prev) => ({
    ...prev,
    zone: [selectedZoneId],
  }));

  // Find zone coordinates
  const currentCity = city.find((c) => c.city === formData.city);
  const selectedZone = currentCity?.zones.find((z) => z._id === selectedZoneId);

  if (selectedZone) {
    const newPos = {
      lat: selectedZone.latitude,
      lng: selectedZone.longitude,
    };
    setMarkerPosition(newPos);
    setLatitude(selectedZone.latitude);
    setLongitude(selectedZone.longitude);
  }
};

const MapUpdater = ({ position }) => {
  const map = useMapEvents({});
  useEffect(() => {
    map.setView(position, map.getZoom(), { animate: true });
  }, [position, map]);
  return null;
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const form = new FormData();

  // Add basic fields
  form.append("firstName", formData.firstName);
  form.append("lastName", formData.lastName);
  form.append("storeName", formData.storeName);
  form.append("email", formData.email);
  form.append("PhoneNumber", formData.PhoneNumber);
  form.append("gstNumber", formData.gstNumber);
  form.append("additionalInfo", formData.additionalInfo);
  form.append("city", formData.city); // <-- city name
  form.append("image", formData.image);
  form.append("latitude", latitude);   // ✅ add this
  form.append("longitude", longitude); // ✅ add this


  // Add single zone ID
  if (formData.zone) {
    form.append("zone", formData.zone);
  }

  // Add Aadhar and PAN files
  formData.aadharCard.forEach((file) => form.append("aadharCard", file));
  formData.panCard.forEach((file) => form.append("panCard", file));

  try {
    const res = await post(`${API_BASE_URL}${ENDPOINTS.SUBMIT}`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    Swal.fire("Success", res.data.message, "success");
    setOtpModal(true);  
  } catch (error) {
    const message = error.response?.data?.message || "Submission failed";
    Swal.fire("Error", message, "error");
  }
};



const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClassName="magnifying-glass-wrapper"
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
                      Interested in selling your products on our platform? Fill out the form below, and our team will get in touch with you.
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
                        placeholder="Enter Your First Name"
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
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>

                    {/* Store / Business Name */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">
                        Store / Business Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="storeName"
                        className="form-control"
                        value={formData.storeName}
                        onChange={handleChange}
                        placeholder="Your Store Name"
                        required
                      />
                    </div>

{/* Store Image */}
<div className="col-md-12 mb-3">
  <label className="form-label">
    Store Image<span className="text-danger">*</span>
  </label>
  <input
    type="file"
    name="image"
    className="form-control"
    accept="image/*"
    onChange={(e) => setFormData((prev) => ({ 
      ...prev, 
      image: e.target.files[0] 
    }))}
    required
  />
</div>


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
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        name="PhoneNumber"
                        className="form-control"
                        value={formData.PhoneNumber}
                        onChange={handleChange}
                        placeholder="Enter WhatsApp Number With Country Code"
                      />
                    </div>

                    {/* GST Number */}
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
                          placeholder="Enter Your GST Number"
                          required
                        />
                        <button type="button" className="btn btn-secondary ms-2" onClick={verifyGST}>Verify</button>
                      </div>
                    </div>
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

      {/* Map + Latitude/Longitude + Additional Info */}
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




{otpModal && (
  <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
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
              setOtpData((prev) => ({ ...prev, emailOtp: e.target.value }))
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
              setOtpData((prev) => ({ ...prev, phoneOtp: e.target.value }))
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


                    {/* Additional Comments */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Additional Information</label>
                      <textarea
                        rows={3}
                        className="form-control"
                        placeholder="Any additional comments or questions"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">
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