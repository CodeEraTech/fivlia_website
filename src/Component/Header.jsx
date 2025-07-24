import React, { useState, useEffect, useRef } from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import menubanner from "../images/menu-banner.jpg";
import productimage1 from '../images/product-img-1.jpg'
import productimage2 from '../images/product-img-2.jpg'
import productimage3 from '../images/product-img-3.jpg'
import productimage4 from '../images/product-img-4.jpg'
import productimage5 from '../images/product-img-5.jpg'
import { Link } from "react-router-dom";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import ProductQuickViewModal from '../ProductList/ProductQuickViewModal';

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef();
  const inputRef = useRef();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Debounced search effect
  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      get(`${ENDPOINTS.SEARCH_PRODUCTS}&search=${encodeURIComponent(searchQuery)}`)
        .then((res) => {
          setSuggestions(res.data?.products || []);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch suggestions");
          setLoading(false);
        });
    }, 300); // 300ms debounce
    return () => clearTimeout(debounceTimeout.current);
  }, [searchQuery]);

  // Hide suggestions on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch categories for All Departments menu
  useEffect(() => {
    let isMounted = true;
    setCatLoading(true);
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        if (isMounted) {
          setCategories(res.data?.result || []);
          setCatError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setCatError("Failed to load categories");
      })
      .finally(() => {
        if (isMounted) setCatLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <style>{`
        .navbar-nav .nav-link:focus, .navbar-nav .nav-link:active, .navbar-nav .nav-link:focus-visible,
        .navbar-nav .dropdown-item:focus, .navbar-nav .dropdown-item:active, .navbar-nav .dropdown-item:focus-visible,
        .navbar-toggler:focus, .navbar-toggler:active, .navbar-toggler:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        @media (min-width: 600px) {
          .search-suggestion-dropdown {
            min-width: 420px !important;
            max-width: 540px !important;
            left: 0 !important;
            right: auto !important;
          }
        }
        @media (min-width: 900px) {
          .search-suggestion-dropdown {
            min-width: 520px !important;
            max-width: 700px !important;
          }
        }
      `}</style>
      <>
        <div className="border-bottom pb-5">
          <div className="bg-light py-1">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-12 d-flex " style={{ alignItems: 'center' }}>
                  <span> Super Value Deals - Save more with coupons</span>
                </div>
                <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block" style={{ marginLeft: '20px' }}>
                  <div className="list-inline">
                    <div className="list-inline-item">
                      <Link
                        to="/ShopWishList"
                        className="text-muted position-relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          5
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        to="#!"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        className="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        to="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="container  displaydesign">
          <div className="row g-4">
            {/* Remove the search bar in the .container.displaydesign row (top section) */}
            <div className="col-4 col-sm-4 col-lg-3 py-2 d-flex" style={{ justifyContent: 'center' }}>
              {/* Button trigger modal */}
              {/* <button
            type="button"
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="/ShoplocationModal"
          >
            <i className="feather-icon icon-map-pin me-2" />
            Location
          </button> */}
              <div className="list-inline">
                <div className="list-inline-item">
                  <Link to="/ShopWishList" className="text-muted position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    to="#!"
                    className="text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    to="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
          <div style={{ position: 'relative', flex: 1, maxWidth: 600, minWidth: 220, marginLeft: 16, marginRight: 16 }}>
            <input
              ref={inputRef}
              className="form-control responsivesearch"
              style={{ width: '100%', minWidth: 120, paddingRight: 40, borderRadius: 12, fontSize: '1rem', boxShadow: '0 2px 8px rgba(48,87,78,0.06)' }}
              id="product-search-input"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyUp={e => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              autoComplete="off"
              aria-label="Search for products"
            />
            <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#30574e', pointerEvents: 'none' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            {showSuggestions && (searchQuery || loading || error) && (
              <div
                className="search-suggestion-dropdown"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderTop: 'none',
                  maxHeight: 400,
                  width: '100%',
                  overflowY: 'auto',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  borderRadius: '0 0 8px 8px',
                  transition: 'width 0.2s',
                  minWidth: 320,
                  // Remove minWidth for mobile, increase for larger screens
                }}
              >
                {loading && <div className="p-2 text-center text-muted">Loading...</div>}
                {error && <div className="p-2 text-danger">{error}</div>}
                {!loading && !error && suggestions.length === 0 && searchQuery && (
                  <div className="p-2 text-muted">No products found</div>
                )}
                {!loading && !error && suggestions.map(product => (
                  <div
                    key={product._id || product.id || product.productName}
                    className="d-flex align-items-center p-2 suggestion-item"
                    style={{ cursor: 'pointer', borderBottom: '1px solid #f0f0f0', transition: 'background 0.2s' }}
                    onMouseDown={() => {
                      setShowSuggestions(false);
                      setQuickViewProduct(product);
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f6f6f6'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <img src={product.productThumbnailUrl || (product.productImageUrl && product.productImageUrl[0]) || ''} alt={product.productName} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6, marginRight: 16, background: '#f8f8f8' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '1rem', color: '#30574e' }}>{product.productName}</div>
                      <div style={{ fontSize: '0.95em', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.category && product.category[0]?.name}</div>
                      {product.variants && product.variants[0] && (
                        <div style={{ fontSize: '0.95em', color: '#222', marginTop: 2 }}>
                          ₹{product.variants[0].sell_price} <span style={{ textDecoration: 'line-through', color: '#aaa', marginLeft: 4, fontSize: '0.9em' }}>{product.variants[0].mrp > product.variants[0].sell_price ? `₹${product.variants[0].mrp}` : ''}</span>
                          {product.variants[0].discountValue ? <span style={{ color: '#e53935', marginLeft: 8, fontWeight: 500 }}>-{product.variants[0].discountValue}%</span> : null}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {quickViewProduct && (
              <ProductQuickViewModal
                product={quickViewProduct}
                show={!!quickViewProduct}
                onHide={() => setQuickViewProduct(null)}
              />
            )}
          </div>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <div className={`containerr ${isOpen ? 'change' : ''}`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

      <div className={`navbar-collapse${isOpen ? ' show' : ' collapse'}`} id="mobile_nav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
        <ul className="navbar-nav navbar-light">
          <li className="nav-item dmenu dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </span>{" "}
              All Departments
            </Link>
            <div
              className="dropdown-menu sm-menu"
              aria-labelledby="navbarDropdown"
              style={{ minWidth: 220 }}
            >
              {catLoading && <div className="dropdown-item text-muted">Loading...</div>}
              {catError && <div className="dropdown-item text-danger">{catError}</div>}
              {!catLoading && !catError && categories.length === 0 && (
                <div className="dropdown-item text-muted">No categories found</div>
              )}
              {!catLoading && !catError && categories.map((cat, idx) => (
                <Link
                  className="dropdown-item"
                  to={`/Shop?category=${cat.id || cat._id || idx}`}
                  key={cat.id || cat._id || idx}
                  aria-label={`Go to ${cat.name} category`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
            
          </div> */}
    </div>
      </nav >
  <>
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email address"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                  <small className="form-text">
                    By Signup, you agree to our{" "}
                    <Link to="#!">Terms of Service</Link> &amp;{" "}
                    <Link to="#!">Privacy Policy</Link>
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Already have an account? <Link to="/MyAccountSignIn">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              Shop Cart
            </h5>
            <small>Location in 382480</small>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-danger" role="alert">
            You’ve got FREE delivery. Start checkout now!
          </div>
          <div>
            <div className="py-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 px-0 border-top">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage1}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Organic Banana</h6>
                      <span>
                        <small className="text-muted">.98 / lb</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$35.00</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage2}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Garlic, 250g</h6>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$20.97</span>
                      <span className="text-decoration-line-through text-muted small">
                        $26.97
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage3}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Onion, 1kg</h6>
                      <span>
                        <small className="text-muted">1 kg</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$25.00</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage4}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Ginger</h6>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$39.87</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0 border-bottom">
                  <div className="row row align-items-center">
                    <div className="col-2">
                      <img
                        src={productimage5}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">
                        Apple Royal Gala, 4 Pieces Box
                      </h6>
                      <span>
                        <small className="text-muted">4 Apple</small>
                      </span>
                      <div className="mt-2 small">
                        {" "}
                        <Link to="#!" className="text-decoration-none">
                          {" "}
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          Remove
                        </Link>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group  flex-nowrap justify-content-center  ">
                        <input
                          type="button"
                          defaultValue="-"
                          className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step={1}
                          max={10}
                          defaultValue={1}
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$39.87</span>
                      <span className="text-decoration-line-through text-muted small">
                        $45.00
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                type="submit"
              >
                {" "}
                Go to Checkout <span className="fw-bold">$120.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-6">
              <div className="d-flex justify-content-between align-items-start ">
                <div>
                  <h5 className="mb-1" id="locationModalLabel">
                    Choose your Delivery Location
                  </h5>
                  <p className="mb-0 small">
                    Enter your address and we will specify the offer you
                    area.{" "}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="my-5">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search your area"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Select Location</h6>
                <Link
                  to="#"
                  className="btn btn-outline-gray-400 text-muted btn-sm"
                >
                  Clear All
                </Link>
              </div>
              <div>
                <div data-simplebar style={{ height: 300 }}>
                  <div className="list-group list-group-flush">
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                    >
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Alaska</span>
                      <span>Min:$30</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </Link>
                    <Link
                      to="#"
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    </div >
  );
};

export default Header;
