import { useState } from "react";
import Swal from "sweetalert2";
import { post } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import HERO_BG from "../../images/franchise.jfif";


const FranchiseEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    message: "",
    franchiseInvestment: false,
    investWithUs: false,
  });

  const states = [
  // States
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email, franchiseInvestment, investWithUs } =
      formData;

    if (!fullName || !phone || !email) {
      Swal.fire("Missing Details", "Please fill all required fields.", "error");
      return;
    }

    if (!franchiseInvestment && !investWithUs) {
      Swal.fire(
        "Selection Required",
        "Please select at least one investment option.",
        "warning"
      );
      return;
    }

    Swal.fire({
      title: "Submitting Enquiry",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await post(ENDPOINTS.FRANCHISE_ENQUIRY, formData);

      Swal.fire(
        "Thank you for your interest",
        "We appreciate your interest in partnering with us. Your enquiry has been received and our team will reach out to you within 42 hours.",
        "success"
      );

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        state: "",
        city: "",
        message: "",
        franchiseInvestment: false,
        investWithUs: false,
      });
    } catch (err) {
      Swal.fire(
        "Error",
        "Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f8fafc" }}>
      <style>{`
        .franchise-hero {
          height: 320px;
          background: url(${HERO_BG}) center/cover no-repeat;
          position: relative;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .franchise-hero::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,rgba(48,87,78,.85),rgba(0,0,0,.55));
        }
        .hero-text{
          position:relative;
          color:#fff;
          text-align:center;
          z-index:1;
        }
        .franchise-card{
          background:#fff;
          border-radius:18px;
          padding:2.5rem;
        }
        .form-control:focus,.form-select:focus{
          border-color:#30574e;
          box-shadow:0 0 0 .2rem rgba(48,87,78,.25);
        }
        .submit-btn{
          background:linear-gradient(90deg,#30574e,#3f7a6b);
          border:none;
        }
        .form-check-input {
          cursor: pointer;
        }

        .form-check-input:checked {
          background-color: #30574e;
          border-color: #30574e;
        }

        /* Custom white tick SVG */
        .form-check-input:checked[type="checkbox"] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3e%3c/svg%3e");
        }
      `}</style>

      {/* Hero */}
      <div className="franchise-hero">
        <div className="hero-text">
          <div
            style={{
              color: "#30574e",
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "0.15em",
              fontFamily: "Montserrat, Arial, sans-serif",
              textTransform: "uppercase",
              background: "#fff",
              padding: "8px 18px",
              borderRadius: "8px",
            }}
          >
            FIVLIA
          </div>
          <h1 className="mt-3 text-white">Franchise Enquiry</h1>
          <p>Grow with us. Build a scalable & profitable business.</p>
        </div>
      </div>

      {/* Form */}
      <div className="container my-5">
        <div className="col-lg-8 mx-auto">
          <div className="franchise-card shadow-lg">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-3"
                name="phone"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="form-control mb-3"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />

              <select
                className="form-select mb-3"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <input
                className="form-control mb-3"
                name="city"
                placeholder="Preferred Franchise Location"
                value={formData.city}
                onChange={handleChange}
              />

              {/* NEW TEXTAREA */}
              <textarea
                className="form-control mb-4"
                rows="4"
                name="message"
                placeholder="Tell us more about your interest, expectations or questions"
                value={formData.message}
                onChange={handleChange}
              />

              {/* CHECKBOXES */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="franchiseInvestment"
                  checked={formData.franchiseInvestment}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Investment approx ₹10 lacs per zone (depending on availbility
                  and city)
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="investWithUs"
                  checked={formData.investWithUs}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Invest with us (<strong>Upto 18% returns annually</strong>)
                </label>
              </div>

              <button className="btn btn-lg submit-btn text-white w-100">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseEnquiry;
