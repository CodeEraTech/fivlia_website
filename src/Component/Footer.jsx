import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import amazonpay from "../images/amazonpay.svg";
import american from "../images/american-express.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import visa from "../images/visa.svg";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
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
                We deliver more than your expectations and help you to grow your business exponentially by providing customized applications. So, don’t just think, get ready to convert your ideas into reality.
              </p>
              <div className="payment-icons" style={{ marginTop: 16 }}>
                <img src={amazonpay} alt="Amazon Pay" />
                <img src={american} alt="American Express" />
                <img src={mastercard} alt="Mastercard" />
                <img src={paypal} alt="Paypal" />
                <img src={visa} alt="Visa" />
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-title">For Consumers</div>
              <ul className="footer-link-list">
                <li><Link to="/Careers">Careers</Link></li>
                <li><Link to="/Coupons">Promos &amp; Coupons</Link></li>
                <li><Link to="/MyAccountOrder">Shipping</Link></li>
                <li><Link to="/MyAccountOrder">Product Returns</Link></li>
                <li><Link to="/MyAcconutPaymentMethod">Payments</Link></li>
                <li><Link to="/Faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-title">Get to know us</div>
              <ul className="footer-link-list">
                <li><Link to="/AboutUs">Company</Link></li>
                <li><Link to="/AboutUs">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/helpcenter">Help Center</Link></li>
                <li><Link to="/Blog">Our Value</Link></li>
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
                <Link to="#" className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
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
