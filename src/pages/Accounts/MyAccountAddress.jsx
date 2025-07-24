import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout";

const MyAccountAddress = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <>
      <ScrollToTop />
      {loaderStatus ? (
        <div className="loader-container">
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
        <AccountLayout>
          {/* Address Section */}
          <div className="d-flex justify-content-between mb-6">
            <h2 className="mb-0">Address</h2>
            <Link
              to="#"
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#addAddressModal"
            >
              Add a new address
            </Link>
          </div>

          <div className="row">
            {/* Home Address */}
            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
              <div className="border p-6 rounded-3">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="homeRadio"
                    defaultChecked
                  />
                  <label
                    className="form-check-label text-dark fw-semi-bold"
                    htmlFor="homeRadio"
                  >
                    Home
                  </label>
                </div>
                <p className="mb-6">
                  Jitu Chauhan
                  <br />
                  4450 North Avenue Oakland, <br />
                  Nebraska, United States,
                  <br />
                  402-776-1106
                </p>
                <Link to="#" className="btn btn-info btn-sm">
                  Default address
                </Link>
                <div className="mt-4">
                  <Link to="#" className="text-inherit">Edit</Link>
                  <Link
                    to="#"
                    className="text-danger ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
              <div className="border p-6 rounded-3">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="officeRadio"
                  />
                  <label
                    className="form-check-label text-dark fw-semi-bold"
                    htmlFor="officeRadio"
                  >
                    Office
                  </label>
                </div>
                <p className="mb-6">
                  Nitu Chauhan
                  <br />
                  3853 Coal Road <br />
                  Tannersville, Pennsylvania, 18372, United States <br />
                  402-776-1106
                </p>
                <Link to="#" className="link-primary">Set as Default</Link>
                <div className="mt-4">
                  <Link to="#" className="text-inherit">Edit</Link>
                  <Link
                    to="#"
                    className="text-danger ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal */}
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex={-1}
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">
                    Delete address
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h6>Are you sure you want to delete this address?</h6>
                  <p className="mb-6">
                    Jitu Chauhan
                    <br />
                    4450 North Avenue Oakland, <br />
                    Nebraska, United States,
                    <br />
                    402-776-1106
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-gray-400"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add Address Modal */}
          <div
            className="modal fade"
            id="addAddressModal"
            tabIndex={-1}
            aria-labelledby="addAddressModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body p-6">
                  <div className="d-flex justify-content-between mb-5">
                    <div>
                      <h5 className="h6 mb-1" id="addAddressModalLabel">
                        New Shipping Address
                      </h5>
                      <p className="small mb-0">
                        Add new shipping address for your order delivery.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>

                  <form>
                    <div className="row g-3">
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="First name" required />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="Last name" required />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="Address Line 1" />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="Address Line 2" />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="City" />
                      </div>
                      <div className="col-12">
                        <select className="form-select">
                          <option selected>India</option>
                          <option value="1">UK</option>
                          <option value="2">USA</option>
                          <option value="3">UAE</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <select className="form-select">
                          <option selected>Gujarat</option>
                          <option value="1">Northern Ireland</option>
                          <option value="2">Alaska</option>
                          <option value="3">Abu Dhabi</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="Zip Code" />
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="Business Name" />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Set as Default
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-end">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button className="btn btn-primary" type="button">
                          Save Address
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AccountLayout>
      )}
    </>
  );
};

export default MyAccountAddress;
