import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { API_BASE_URL, ENDPOINTS } from "../../apis/endpoints";
import { post } from "../../apis/apiClient.jsx";
const BecomeADeliveryPartner = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleType: "",
    regNumber: "",
    licenseNumber: "",
    additionalInfo: "",
    approveStatus: "pending_admin_approval",
  });

  // const [files, setFiles] = useState({
  //   profileImage: null,
  //   drivingLicence: null,
  //   idProof: null,
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files: newFiles } = e.target;

    // Append new files to the existing ones (if any)
    setFiles((prev) => {
      const existingFiles = prev[name] ? Array.from(prev[name]) : [];
      return {
        ...prev,
        [name]: [...existingFiles, ...Array.from(newFiles)],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("driverName", `${formData.firstName} ${formData.lastName}`);
      data.append("email", formData.email);
      data.append("approveStatus", "pending_admin_approval");
      // example
      data.append(
        "address",
        JSON.stringify({
          mobileNo: formData.phone,
          vehicleType: formData.vehicleType,
          regNumber: formData.regNumber,
        })
      );

      // if (files.profileImage?.length > 0)
      //         data.append("image", files.profileImage[0]);

      //       // Aadhar (Front & Back)
      //       if (files.idProof?.length > 0)
      //         for (let file of files.idProof) data.append("aadharCard", file);

      //       // Driving Licence (Front & Back)
      //       if (files.drivingLicence?.length > 0)
      //         for (let file of files.drivingLicence)
      //           data.append("drivingLicence", file);

      await post(`${API_BASE_URL}${ENDPOINTS.DRIVERSUBMIT}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your delivery partner application has been submitted. Our team will contact you shortly.",
        confirmButtonColor: "#0aad0a",
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return Swal.fire({
          icon: "warning",
          title: "Already Exists",
          text: error.response.data.message, // ← backend message shown here
        });
      }

      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong. Please try again later.",
      });
    }
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
                    <h1 className="h3">Become a Delivery Partner</h1>
                    <p className="lead mb-0">
                      Want to deliver with us? Fill out the form below, and our
                      team will review your application.
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
                        onChange={handleChange}
                        placeholder="Enter Your Last Name"
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
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Phone<span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>

                    {/* Vehicle Type */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Vehicle Type</label>
                      <input
                        type="text"
                        name="vehicleType"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Bike, Scooter, Car, Van, etc."
                      />
                    </div>

                    {/* Vehicle Reg No */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Vehicle Registration Number
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="regNumber"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="e.g., DL01AB1234"
                        required
                      />
                    </div>

                    {/* Driving License Number */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Driving License Number
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter DL Number"
                        required
                      />
                    </div>

                    {/* <div className="col-md-6 mb-3">
                    <label>Profile Image</label>
                    <input
                      type="file"
                      name="profileImage"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div> */}
                    {/* Upload ID Proof */}
                    {/* <div className="col-md-12 mb-3">
                      <label className="form-label">
                        Upload ID Proof (Front and Back)<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        name="idProof"
                        className="form-control"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        required
                      />
                      {files.idProof && files.idProof.length > 0 && (
                          <small className="text-success d-block mt-1">
                            {Array.from(files.idProof)
                              .map((f) => f.name)
                              .join(", ")}
                          </small>
                        )}
                    </div> */}
                    {/* Upload Driving License */}
                    {/* <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Upload Driving License (Front and Back)<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="drivingLicence"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        required
                      />
                      {files.drivingLicence && files.drivingLicence.length > 0 && (
                        <small className="text-success d-block mt-1">
                          {Array.from(files.drivingLicence)
                            .map((f) => f.name)
                            .join(", ")}
                        </small>
                      )}
                    </div> */}
                    {/* Additional Comments */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">
                        Additional Information
                      </label>
                      <textarea
                        rows={3}
                        className="form-control"
                        placeholder="Any additional comments or availability notes"
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

export default BecomeADeliveryPartner;
