import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

const UserLoginModal = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    let formattedMobile = mobile.replace(/\D/g, "");

    // Validate and format number
    if (formattedMobile.length === 10) {
      formattedMobile = "+91" + formattedMobile;
    } else if (formattedMobile.length === 12 && formattedMobile.startsWith("91")) {
      formattedMobile = "+" + formattedMobile;
    } else if (!formattedMobile.startsWith("+91")) {
      setError("Please enter a valid 10 digit mobile number");
      setLoading(false);
      return;
    }

    // Direct redirect for test number
    if (formattedMobile === "+919999999999") {
      localStorage.setItem("mobile", formattedMobile);
      const modalEl = document.getElementById("userModal");
      if (modalEl && window.bootstrap?.Modal) {
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.hide();
      }
      navigate("/otp-verification");
      setLoading(false);
      return;
    }

    try {
      const verifyRes = await post(ENDPOINTS.VERIFY_MOBILE, {
        mobileNumber: formattedMobile,
      });

      if (verifyRes.data.status === 1) {
        const loginRes = await post(ENDPOINTS.LOGIN, {
          mobileNumber: formattedMobile,
        });

        if (loginRes.data.message?.toLowerCase().includes("otp sent")) {
          localStorage.setItem("mobile", formattedMobile);
          const modalEl = document.getElementById("userModal");
          if (modalEl && window.bootstrap?.Modal) {
            const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.hide();
          }
          navigate("/otp-verification");
        } else {
          setError(loginRes.data.message || "Error sending OTP");
        }
      } else if (verifyRes.data.status === 0) {
        const regRes = await post(ENDPOINTS.REGISTER, {
          mobileNumber: formattedMobile,
        });

        if (regRes.data.message?.toLowerCase().includes("otp sent")) {
          localStorage.setItem("mobile", formattedMobile);
          const modalEl = document.getElementById("userModal");
          if (modalEl && window.bootstrap?.Modal) {
            const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.hide();
          }
          navigate("/otp-verification");
        } else {
          setError(regRes.data.message || "Error sending OTP");
        }
      } else {
        setError(verifyRes.data.message || "Error verifying mobile");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div
      className="modal fade"
      id="userModal"
      tabIndex={-1}
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
              Mobile Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSendOtp}>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Enter 10 digit mobile number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  disabled={loading}
                />
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? "Sending OTP..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginModal;
