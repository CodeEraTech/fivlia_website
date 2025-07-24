// src/components/AccountLayout.jsx
import React from "react";
import { Link } from "react-router-dom";

const AccountLayout = ({ children, activePath = "" }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Mobile Header */}
          <div className="col-12">
            <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
              <h3 className="fs-5 mb-0">Account Setting</h3>
              <button
                className="btn btn-outline-gray-400 text-muted d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAccount"
                aria-controls="offcanvasAccount"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
            <div className="pt-10 pe-lg-10">
              <h6 className="text-uppercase text-muted mb-3">Your Information</h6>
              <ul className="nav flex-column nav-pills nav-pills-dark mb-4">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activePath === "order" ? "active" : ""}`}
                    to="/MyAccountOrder"
                  >
                    <i className="fas fa-truck me-2" />
                    Track Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activePath === "setting" ? "active" : ""}`}
                    to="/MyAccountSetting"
                  >
                    <i className="fas fa-cog me-2" />
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activePath === "address" ? "active" : ""}`}
                    to="/MyAccountAddress"
                  >
                    <i className="fas fa-map-marker-alt me-2" />
                    Address
                  </Link>
                </li>
              </ul>

              <h6 className="text-uppercase text-muted mb-3">Other</h6>
              <ul className="nav flex-column nav-pills nav-pills-dark">
                <li className="nav-item">
                  <Link className="nav-link" to="/MyAcconutPaymentMethod">
                    <i className="fas fa-credit-card me-2" />
                    Payment Method
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/MyAcconutNotification">
                    <i className="fas fa-bell me-2" />
                    Notification
                  </Link>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/Grocery-react/">
                    <i className="fas fa-sign-out-alt me-2" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8 col-12">{children}</div>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasAccount"
        aria-labelledby="offcanvasAccountLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasAccountLabel">
            My Account
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body">
          <h6 className="text-uppercase text-muted mb-3">Your Information</h6>
          <ul className="nav flex-column nav-pills nav-pills-dark mb-4">
            <li className="nav-item">
              <a className="nav-link" href="/MyAccountOrder">
                <i className="fas fa-truck me-2" />
                Track Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/MyAccountSetting">
                <i className="fas fa-cog me-2" />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAccountAddress">
                <i className="fas fa-map-marker-alt me-2" />
                Address
              </a>
            </li>
          </ul>

          <h6 className="text-uppercase text-muted mb-3">Other</h6>
          <ul className="nav flex-column nav-pills nav-pills-dark">
            <li className="nav-item">
              <a className="nav-link" href="/MyAcconutPaymentMethod">
                <i className="fas fa-credit-card me-2" />
                Payment Method
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAcconutNotification">
                <i className="fas fa-bell me-2" />
                Notification
              </a>
            </li>
            <li className="nav-item">
              <hr />
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="/Grocery-react/">
                <i className="fas fa-sign-out-alt me-2" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
