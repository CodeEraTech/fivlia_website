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
              <h3 className="fs-5 mb-0">Account</h3>
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
                     className={`nav-link ${activePath === "address" ? "active" : ""}`}
                     to="/MyAccountAddress"
                   >
                     <i className="fas fa-map-marker-alt me-2" />
                     Address Book
                   </Link>
                 </li>
               </ul>

              <h6 className="text-uppercase text-muted mb-3">Other</h6>
              <ul className="nav flex-column nav-pills nav-pills-dark">
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    <i className="fas fa-info-circle me-2" />
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/PrivacyPolicy">
                    <i className="fas fa-shield-alt me-2" />
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TermsConditions">
                    <i className="fas fa-file-contract me-2" />
                    Terms & Conditions
                  </Link>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-danger btn btn-link text-start w-100"
                    onClick={() => {
                      localStorage.clear();
                      sessionStorage.clear();
                      window.location.href = "/";
                    }}
                  >
                    <i className="fas fa-sign-out-alt me-2" />
                    Logout
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-danger btn btn-link text-start w-100"
                    onClick={() => {
                      // Add delete account functionality here
                      if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                        // Delete account logic
                        localStorage.clear();
                        sessionStorage.clear();
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="fas fa-trash-alt me-2" />
                    Delete Account
                  </button>
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
              <a className="nav-link" href="/About">
                <i className="fas fa-info-circle me-2" />
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PrivacyPolicy">
                <i className="fas fa-shield-alt me-2" />
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TermsConditions">
                <i className="fas fa-file-contract me-2" />
                Terms & Conditions
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
             <li className="nav-item">
               <a className="nav-link text-danger" href="#" onClick={(e) => {
                 e.preventDefault();
                 if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                   // Delete account logic
                   localStorage.clear();
                   sessionStorage.clear();
                   window.location.href = "/";
                 }
               }}>
                 <i className="fas fa-trash-alt me-2" />
                 Delete Account
               </a>
             </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
