import { useState } from "react";
import Swal from "sweetalert2";
import { post } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import natureHumanity from "../../images/natureHumanity.avif";
const HumanityDonation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const presetAmounts = [100, 500, 1000, 2000];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePresetClick = (value) => {
    setFormData((prev) => ({ ...prev, amount: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phone, amount } = formData;

    if (!fullName || !phone || !amount) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all required fields (Full Name, Phone, Amount).",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    Swal.fire({
      title: "Processing Donation...",
      text: "Please wait while we record your donation.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await post(ENDPOINTS.SAVE_DONATION, formData);
      Swal.close();
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your contribution has been received. Together, we make a difference.",
          confirmButtonColor: "#0aad0a",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          amount: "",
          message: "",
        });
      } else {
        throw new Error("Failed to process donation.");
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error processing your donation. Please try again later.",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f9fafb" }}>
      <style>
        {`
          .donation-hero {
            position: relative;
            background-image:url(${natureHumanity}) ;
            background-size: cover;
            background-position: center;
            height: 360px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .donation-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom right, rgba(25,135,84,0.65), rgba(0,0,0,0.35));
            backdrop-filter: brightness(1.05);
          }
          .hero-content {
            position: relative;
            z-index: 2;
            color: white;
            padding: 0 20px;
            animation: fadeIn 1.3s ease-in-out;
          }
          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(90deg, #22c55e, #198754);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 3px 8px rgba(0,0,0,0.2);
            margin-bottom: 0.6rem;
          }
          .hero-subtitle {
            font-size: 1.15rem;
            color: #f1fdf4;
            text-shadow: 0 2px 6px rgba(0,0,0,0.3);
            max-width: 700px;
            margin: 0 auto;
          }
          .donation-card {
            background: #fff;
            border-radius: 18px;
            padding: 3rem 2rem;
            transition: all 0.3s ease;
          }
          .donation-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          }
          .preset-btn {
            border: 2px solid #198754;
            border-radius: 25px;
            padding: 8px 20px;
            margin: 5px;
            background: white;
            color: #198754;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.25s ease;
          }
          .preset-btn:hover, .preset-btn.active {
            background: #198754;
            color: white;
          }
          .form-control:focus {
            border-color: #198754;
            box-shadow: 0 0 0 0.2rem rgba(25,135,84,0.25);
          }
          .btn-success {
            background: linear-gradient(90deg, #198754, #22c55e);
            border: none;
            transition: 0.3s;
          }
          .btn-success:hover {
            background: linear-gradient(90deg, #22c55e, #198754);
            transform: scale(1.03);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.3rem;
            }
            .hero-subtitle {
              font-size: 1rem;
            }
            .donation-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="donation-hero">
        <div className="hero-content">
          <h1 className="hero-title">Humanity Donation</h1>
          <p className="hero-subtitle">
            Every act of kindness matters. Together, let’s bring hope, help, and humanity.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="donation-card shadow-lg">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-success mb-2">Make a Donation</h2>
                <p className="text-muted">
                  Your generosity helps us provide food, shelter, and care to those in need.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Email (optional)</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Phone<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3 text-center">
                  <label className="form-label fw-semibold d-block mb-2">
                    Quick Select Donation Amount
                  </label>
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`preset-btn ${formData.amount == amt ? "active" : ""}`}
                      onClick={() => handlePresetClick(amt)}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Donation Amount (₹)<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="amount"
                    placeholder="Enter amount you wish to donate"
                    min="1"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Message / Purpose (optional)</label>
                  <textarea
                    rows={4}
                    className="form-control form-control-lg"
                    name="message"
                    placeholder="Leave a message or purpose of your donation"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-lg btn-success px-5 w-75">
                    ❤️ Donate Now
                  </button>
                </div>
              </form>

              <div className="text-center mt-4 text-muted small">
                <i className="bi bi-people-fill text-success me-1"></i>
                100% of your donation goes directly to humanitarian aid.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanityDonation;
