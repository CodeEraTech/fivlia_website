import { useState } from "react";
import Swal from "sweetalert2";
import { post } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation for required fields
    const { firstName, lastName, phone, message } = formData;
    if (!firstName || !lastName || !phone || !message) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    // Show loading alert (uncancellable)
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we submit your message.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // API call
    try {
      const response = await post(ENDPOINTS.SAVE_CONTACT_US, formData);
      Swal.close();
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your message has been sent successfully. We’ll get back to you soon.",
          confirmButtonColor: "#0aad0a",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your message. Please try again later.",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="mb-5 text-center">
            <h1 className="h3">Contact Us</h1>
            <p className="lead">
              Have a question or need help? Fill out the form below and we'll
              get back to you as soon as possible.
            </p>
          </div>
          <form className="row" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                First Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Last Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email (optional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Phone<span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="col-md-12 mb-4">
              <label className="form-label">
                Message<span className="text-danger">*</span>
              </label>
              <textarea
                rows={4}
                className="form-control"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-md-12 text-center">
              <button
                style={{ width: "70%" }}
                type="submit"
                className="btn btn-primary px-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
