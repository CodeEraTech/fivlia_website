import React, { useState } from "react";
import { post } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";

const DeleteAccount = () => {
  const [accountType, setAccountType] = useState("user");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!fullName || !phone || !reason) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!agree) {
      setError("You must agree before submitting.");
      return;
    }

    setLoading(true);

    try {
      await post(ENDPOINTS.DELETE_ACCOUNT, {
        accountType,
        fullName,
        phone,
        email,
        reason,
      });

      setSuccess("Your deletion request has been submitted successfully.");
      setFullName("");
      setPhone("");
      setEmail("");
      setReason("");
      setAgree(false);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "#f5f6fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <style>{`
        h2 {
          font-weight: 600;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }
        p.description {
          font-size: 0.95rem;
          color: #555;
          text-align: center;
          margin-bottom: 30px;
        }
        input, select, button {
          width: 100%;
          max-width: 800px;
          padding: 14px 16px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 0.95rem;
          transition: 0.2s;
        }
        input:focus, select:focus {
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0,123,255,0.3);
          outline: none;
        }
        button {
          background: #ff4d4f;
          color: #fff;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #d9363e;
        }
        .radio-group {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .radio-group label {
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          cursor: pointer;
        }
        .radio-group input {
          margin-right: 6px;
        }
        .checkbox-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #ff4d4f;
          cursor: pointer;
        }
        .alert {
          padding: 10px 15px;
          border-radius: 6px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          max-width: 800px;
          width: 100%;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
        }
        .helper-text {
          margin-top: 10px;
          font-size: 0.85rem;
          color: #555;
          font-weight: bold;
          text-align: center;
          max-width: 800px;
          width: 100%;
        }
      `}</style>

      <h2>Account Deletion Request</h2>
      <p className="description">
        Request permanent deletion of your account (User, Seller, or Driver). Once deleted, all your data and history will be removed. This cannot be undone.
      </p>

      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="user"
              checked={accountType === "user"}
              onChange={() => setAccountType("user")}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="driver"
              checked={accountType === "driver"}
              onChange={() => setAccountType("driver")}
            />
            Driver
          </label>
          <label>
            <input
              type="radio"
              value="seller"
              checked={accountType === "seller"}
              onChange={() => setAccountType("seller")}
            />
            Seller
          </label>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Registered Email ID (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value="">Reason for Deletion</option>
          <option value="privacy">Privacy Concerns</option>
          <option value="not_using">Not Using Service</option>
          <option value="other">Other</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I understand that my account and data will be permanently deleted.
        </label>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Request Account Deletion"}
        </button>

        <p className="helper-text">
          Once submitted, your account deletion request will be processed within 24-48 hours.
        </p>
      </form>
    </div>
  );
};

export default DeleteAccount;
