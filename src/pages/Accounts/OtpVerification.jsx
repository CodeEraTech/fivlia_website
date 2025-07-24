import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useAuth } from "../../Component/AuthContext";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const mobile = localStorage.getItem("mobile");
  const { login } = useAuth();

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (otp.length !== 6 || /\D/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      const res = await post(ENDPOINTS.VERIFY_OTP, {
        mobileNumber: mobile,
        otp,
      });

      const msg = res.data.message?.toLowerCase();

      if (msg && msg.includes("login successful")) {
        if (res.data.token) {
          login(res.data.token);
        }

        setSuccess("Login successful! Redirecting...");
        localStorage.removeItem("mobile");

        if (window.bootstrap?.Modal?.getInstance) {
          const modalEl = document.getElementById("userModal");
          if (modalEl) {
            const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
            modalInstance?.hide();
          }
        }

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setError(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }

    setLoading(false);
  };

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const otpArr = otp.split("");
    otpArr[index] = value;
    const newOtp = otpArr.join("").padEnd(6, "");
    setOtp(newOtp);

    if (value && index < 5) {
      const next = document.getElementById(`otp-box-${index + 1}`);
      next?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-box-${index - 1}`);
      prev?.focus();
    }
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "60vh" }}
    >
        <style>{`
       input[type="text"].form-control {
  padding: 8px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-shadow: none;
}

      `}</style>
      <h2 className="mb-4">OTP Verification</h2>

      {mobile && (
        <div className="mb-2 text-secondary">
          OTP sent to: <b>{mobile}</b>
        </div>
      )}

      <form
        onSubmit={handleVerify}
        style={{ maxWidth: 400, width: "100%" }}
        autoComplete="off"
      >
        <div className="mb-3">
          <label className="form-label">Enter OTP</label>
          <div className="d-flex gap-2 justify-content-between">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="form-control text-center"
                style={{ width: "40px", fontSize: "20px" }}
                value={otp[index] || ""}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                id={`otp-box-${index}`}
                autoFocus={index === 0}
              />
            ))}
          </div>
        </div>

        {error && <div className="alert alert-danger mt-2">{error}</div>}
        {success && <div className="alert alert-success mt-2">{success}</div>}

        <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;
