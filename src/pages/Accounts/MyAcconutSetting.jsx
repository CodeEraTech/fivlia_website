import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout"; // Adjust path as needed

const MyAccountSetting = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <AccountLayout activePath="setting">
        {loaderStatus ? (
          <div className="loader-container text-center py-5">
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
          <div className="p-6 p-lg-10">
            <div className="mb-6">
              <h2 className="mb-0">Account Setting</h2>
            </div>

            {/* Account Details */}
            <div>
              <h5 className="mb-4">Account details</h5>
              <div className="row">
                <div className="col-lg-5">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Nigam Mishra" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-5">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" placeholder="Phone number" />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary" type="submit">
                        Save Details
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <hr className="my-10" />

            {/* Password Change */}
            <div className="pe-lg-14">
              <h5 className="mb-4">Password</h5>
              <form className="row row-cols-1 row-cols-lg-2">
                <div className="mb-3 col">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" placeholder="**********" />
                </div>
                <div className="mb-3 col">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" placeholder="**********" />
                </div>
                <div className="col-12">
                  <p className="mb-4">
                    Can’t remember your current password?
                    <Link to="#"> Reset your password.</Link>
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Save Password
                  </Link>
                </div>
              </form>
            </div>

            <hr className="my-10" />

            {/* Delete Account */}
            <div>
              <h5 className="mb-4">Delete Account</h5>
              <p className="mb-2">Would you like to delete your account?</p>
              <p className="mb-5">
                This account contains 12 orders. Deleting your account will remove all associated order details.
              </p>
              <Link to="#" className="btn btn-outline-danger">
                I want to delete my account
              </Link>
            </div>
          </div>
        )}
      </AccountLayout>
    </div>
  );
};

export default MyAccountSetting;
