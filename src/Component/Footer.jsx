import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import payFooter from "../images/payment_footer.png";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useAuth } from "../contexts/AuthContext";


const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const [pages, setPages] = useState([]);
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    get(ENDPOINTS.PAGES)
      .then((res) => {
        let activePages = res.data?.getPage;
        activePages = activePages.filter(p => p.status && p.pageSlug && p.pageTitle);
        setPages(activePages || []);
      })
      .catch((err) => {
        // console.error("Error fetching pages:", err);
      });
  }, []);
  return (
    <div>
      <style>{`
        .footer-modern {
          background: #f8f9fa;
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .footer-modern .footer-main {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          justify-content: space-between;
        }
        .footer-modern .footer-section {
          flex: 1 1 220px;
          min-width: 220px;
          margin-bottom: 2rem;
        }
        .footer-modern .footer-logo img {
          width: 180px;
          margin-bottom: 1rem;
        }
        .footer-modern .footer-title {
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 1rem;
          letter-spacing: 0.01em;
        }
        .footer-modern .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-modern .footer-link-list li {
          margin-bottom: 0.5rem;
        }
        .footer-modern .footer-link-list a {
          color: #21313c;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .footer-modern .footer-link-list a:hover {
          color: #0aad0a;
        }
        .footer-modern .payment-icons img {
          height: 32px;
          margin-right: 0.5rem;
        }
        .footer-modern .newsletter-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .footer-modern .newsletter-item input {
          flex: 1;
          border-radius: 10px;
          border: 1.5px solid #e0e0e0;
          padding: 0.7rem 1.2rem;
          font-size: 1.08rem;
          background: #fff;
          transition: border 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 4px rgba(10,173,10,0.04);
        }
        .footer-modern .newsletter-item input:focus {
          border: 1.5px solid #0aad0a;
          outline: none;
          box-shadow: 0 2px 8px rgba(10,173,10,0.08);
        }
        .footer-modern .newsletter-item button {
          background: linear-gradient(90deg, #0aad0a 60%, #0a8d0a 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          width: 48px;
          height: 48px;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 4px rgba(10,173,10,0.08);
        }
        .footer-modern .newsletter-item button:hover {
          background: linear-gradient(90deg, #0a8d0a 60%, #0aad0a 100%);
          box-shadow: 0 2px 8px rgba(10,173,10,0.12);
        }
        .footer-modern .social-media {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .footer-modern .social-media a {
          color: #30574e;
          font-size: 1.5rem;
          width: 44px;
          height: 44px;
          border: 1.5px solid #e0e0e0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          transition: color 0.2s, border 0.2s, box-shadow 0.2s;
        }
        .footer-modern .social-media a:hover {
          color: #0aad0a;
          border: 1.5px solid #0aad0a;
          box-shadow: 0 2px 8px rgba(10,173,10,0.08);
        }
        .footer-modern .footer-bar {
          border-top: 1px solid #e0e0e0;
          margin-top: 2rem;
          padding-top: 1rem;
          font-size: 0.98rem;
          color: #888;
        }
        @media (max-width: 767px) {
          .footer-modern .footer-main {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer-modern .footer-section {
            min-width: 0;
          }
        }
      `}</style>
      <footer className="footer-modern mt-8">
        <div className="container">
          <div className="footer-main">
            <div className="footer-section">
              <div className="footer-logo">
                <Link to="/">
                  <span style={{
                    color: '#30574e',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    letterSpacing: '0.15em',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 8px rgba(48,87,78,0.08)'
                  }}>
                    FIVLIA
                  </span>
                </Link>
              </div>
              <p style={{ marginBottom: 24 }}>
                FIVLIA is fast delivery platform within minutes that facilitates the delivery of various items, including groceries, food, personal care items. We connects users with local stores and
                restaurants for quick delivery.
              </p>
              {/* <div className="payment-icons" style={{ marginTop: 16 }}>
                <img src={payFooter} alt=""/>
              </div> */}
            </div>
            <div className="footer-section">
              <div className="footer-title">For Consumers</div>
              <ul className="footer-link-list">
                {pages.map((page, index) => (
                  <React.Fragment key={page._id}>
                    <li>
                      <Link
                        to={`/${page.pageSlug}`}
                        className="text-decoration-none text-muted"
                      >
                        {page.pageTitle}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-title">Usefull Links</div>
              <ul className="footer-link-list">
                <li>
                  <Link className="text-decoration-none text-muted" to="/become-a-seller">Sell With Us</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-muted" to="/become-a-delivery-partner">Deliver With Us</Link>
                </li>

                {isLoggedIn ? (
                  <>
                    <li>
                      <Link className="text-decoration-none text-muted" to="/MyAccountOrder">Track Orders</Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none text-muted" to="/MyAccountOrder">My Accounts</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                        className="text-muted"
                      >
                        Track Orders
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                        className="text-muted"
                      >
                        My Accounts
                      </a>
                    </li>
                  </>
                )}
                <li>
                  <Link className="text-decoration-none text-muted" to="/delete-account">Delete Account</Link>
                </li>
              </ul>

            </div>
            <div className="footer-section">
  <div className="footer-title">Download App</div>
  <ul className="footer-link-list">
    

    {/* Play Store Links */}
    <li>
      <a
        href="https://play.google.com/store/apps/details?id=com.fivlia.user"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center"
      >
       <i className="fab fa-google-play me-2"></i> User App
      </a>
    </li>
    <li>
  <a
    href="https://apps.apple.com/in/app/fivlia-delivery-in-minutes/id6748902989"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center"
  >
    <i className="fab fa-apple me-2"></i>User App (iOS)
  </a>
</li>

    <li>
      <a
        href="https://play.google.com/store/apps/details?id=com.fivlia.delivery.fivliadelivery"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center"
      >
         <i className="fab fa-google-play me-2"></i>Delivery App
      </a>
    </li>
  </ul>
</div>

            <div className="footer-section">
              <div className="footer-title">Stay Connected</div>
              <form className="newsletter-item" onSubmit={e => e.preventDefault()}>
                <input type="email" id="email" placeholder="Your Email" className="form-control form-control-lg" required />
                <button type="submit"><i className="fa fa-paper-plane" /></button>
              </form>
              <div className="social-media">
                <Link to="https://www.facebook.com/profile.php?id=100090157863841" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                <Link to="https://www.youtube.com/channel/UCnX8Bt9yXNWUY7xWAycLGVw" className="twitter"><i className="fab fa-youtube"></i></Link>
                <Link to="https://www.instagram.com/fivliaindia" className="instagram"><i className="fab fa-instagram"></i></Link>
                <Link to="https://www.linkedin.com/in/fivlia-online-shopping-925641377/" className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar ">
          <div className="container text-center">
            <div className="footer-copy">
              <div className="copyright">
                © {year} All Rights Reserved By -
                <Link to="#" target="_blank"> @fivlia</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
