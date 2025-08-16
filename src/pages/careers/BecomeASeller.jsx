import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";

const BecomeASeller = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your seller inquiry has been submitted. Our team will contact you soon.",
      confirmButtonColor: "#0aad0a"
    });
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
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        placeholder="Your Store Name"
                        required
                      />
                    </div>

                    {/* Product Category */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Product Category</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g., Electronics, Clothing, Handmade Crafts"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                    </div>

                    {/* GST Number */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        GST Number<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your GST Number"
                        required
                      />
                    </div>

                    {/* GST Certificate Upload */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Upload GST Certificate<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                      />
                    </div>

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