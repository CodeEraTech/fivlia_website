import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import LocationDeliveryInfo from "./LocationDeliveryInfo";
import UserLoginModal from "./UserLoginModal";
import CartCanvas from "./CartCanvas";
import { useImageUrl } from '../utils/getSettingsValue';



const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef();
  const inputRef = useRef();
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState(null);
  const searchWrapperRef = useRef();
  const { isLoggedIn, logout } = useAuth();
  const { cartCount, isInitialized } = useCart();
  const [topBrands, setTopBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(true);
  const [brandError, setBrandError] = useState(null);
  const getImageUrl = useImageUrl();
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSuggestionClick = (product) => {
    navigate(`/product/${product._id || product.id}`,
      { state: { product } }
    );
    setShowSuggestions(false);
    setSearchQuery("");
    setSuggestions([]);
  };

   const handleLogout = () => {
          logout(); 
    navigate("/");
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
      get(`${ENDPOINTS.SEARCH_PRODUCTS}&name=${encodeURIComponent(searchQuery)}`)
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
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
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

  useEffect(() => {
    setBrandLoading(true);
    get(ENDPOINTS.BRANDS)
      .then((res) => {
        const sortedBrands = res.data?.featuredBrands.sort((a, b) => {
          return a.brandName.localeCompare(b.brandName);
        });
        setTopBrands(sortedBrands || []);
        setBrandError(null);
      })
      .catch((err) => {
        setBrandError("Failed to load top brands");
      })
      .finally(() => {
        setBrandLoading(false);
      });
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
        .navbar-nav .nav-link {
          font-weight: 600 !important;
          letter-spacing: 0.02em !important;
          font-size: 1.0rem !important;
        }
        
        /* Top menu responsive styles */
        .top-menu ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .top-menu .list-inline-item {
          margin-right: 0;
        }
        .top-menu .list-inline-item a {
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .top-menu .list-inline-item a:hover {
          color: #30574e !important;
        }
        
        /* Desktop layout for >991px */
        @media (min-width: 992px) {
          .header-search-desktop {
            display: flex !important;
            flex: 1 1 0;
            max-width: 520px;
            margin: 0 2rem;
            align-items: center;
          }
          .header-icons-desktop {
            display: flex !important;
            align-items: center;
            gap: 1.5rem;
            justify-content: flex-end;
          }
          .header-search-mobile,
          .header-icons-mobile {
            display: none !important;
          }
        }
        @media (max-width: 991.98px) {
          .header-search-desktop,
          .header-icons-desktop {
            display: none !important;
          }
          .header-search-mobile {
            display: flex !important;
            flex: 1 1 0;
            min-width: 0;
          }
          .header-icons-mobile {
            display: flex !important;
            justify-content: flex-end;
            gap: 1.5rem;
          }
        }
        
        /* Mobile responsive for top menu */
          @media (max-width: 576px) {
            .top-menu ul {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 0.25rem;
            }
            .top-menu .list-inline-item {
              margin-bottom: 0;
            }
          }
      `}</style>
      <style>{`
        .search-suggestion-dropdown, .search-suggestion-dropdown * {
          pointer-events: auto !important;
          z-index: 9999 !important;
        }
        .suggestion-item, .suggestion-item * {
          pointer-events: auto !important;
        }
      `}</style>
      <>
        {/* Top Deals Row */}
        <div className="border-bottom pb-5">
          <div className="bg-light py-3">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="flex-grow-1">
                  <nav className="top-menu">
                    <ul className="list-inline mb-0 d-flex flex-wrap align-items-center">
                      <li className="list-inline-item">
                        <Link to="/AboutUs" className="text-decoration-none text-muted">About Us</Link>
                      </li>
                      <li className="list-inline-item">
                        <span className="text-muted mx-2">|</span>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="text-decoration-none text-muted">Terms</Link>
                      </li>
                      <li className="list-inline-item">
                        <span className="text-muted mx-2">|</span>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="text-decoration-none text-muted">Privacy</Link>
                      </li>
                      <li className="list-inline-item">
                        <span className="text-muted mx-2">|</span>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/Contact" className="text-decoration-none text-muted">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Desktop icons in top deals row */}
                <div className="d-none d-lg-flex header-icons-desktop gap-3">
                  {/* <Link to="/ShopWishList" className="text-muted position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">5<span className="visually-hidden">unread messages</span></span>
                  </Link> */}
          <div className="list-inline-item d-inline-block">
          {!isLoggedIn ? (
            <a
              href="#"
              className="text-muted"
              data-bs-toggle="modal"
              data-bs-target="#userModal"
              title="Login"
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
            </a>
          ) : (
           <button
              className="btn text-muted d-inline-block p-0"
              onClick={() => navigate("/MyAccountOrder")}
              title="My Profile"
              style={{ lineHeight: '1' }}
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
            </button>
          )}
        </div>
                  <Link className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" to="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    {isInitialized && cartCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#198754' }}>
                        {cartCount}
                        <span className="visually-hidden">items in cart</span>
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Mobile search and icons row (unchanged) */}
      <div className="container">
        <div className="header-search-mobile">
            <LocationDeliveryInfo/>
        </div>
        <div className="d-flex align-items-center header-search-mobile py-2" style={{ borderBottom: '1px solid #eee' }}>
          <div className="flex-grow-1" ref={searchWrapperRef} style={{ position: 'relative', maxWidth: 'calc(100% - 120px)' }}>
            {/* Search input and suggestions (mobile/tablet) */}
            <input
              ref={inputRef}
              className="form-control responsivesearch px-3"
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
                  zIndex: 1050,
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderTop: 'none',
                  maxHeight: 400,
                  width: '100%',
                  overflowY: 'auto',
                  overflowx:'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  borderRadius: '0 0 8px 8px',
                  transition: 'width 0.2s',
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
                    onClick={() => handleSuggestionClick(product)}
                  >
                    <img src={getImageUrl(product.productThumbnailUrl || (product.productImageUrl && product.productImageUrl[0]) || product.image)}
                      alt={product.productName || product.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6, marginRight: 16, background: '#f8f8f8' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '1rem', color: '#30574e' }}>{product.productName || product.name}</div>
                      <div style={{ fontSize: '0.95em', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.category?.[0]?.name || (product.category && product.category.name) || ''}</div>
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
          </div>
          {/* Mobile icons row */}
          <div className="d-flex align-items-center gap-3 header-icons-mobile flex-shrink-0 ms-3" style={{ minWidth: 100, justifyContent: 'flex-end' }}>
            {/* <Link to="/ShopWishList" className="text-muted position-relative">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">5<span className="visually-hidden">unread messages</span></span>
            </Link> */}
                 <div className="list-inline-item d-inline-block">
          {!isLoggedIn ? (
            <a
              href="#"
              className="text-muted"
              data-bs-toggle="modal"
              data-bs-target="#userModal"
              title="Login"
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
            </a>
          ) : (
            <button
            className="btn text-muted d-inline-block p-0"
            onClick={() => navigate("/MyAccountOrder")}
            title="My Profile"
            style={{ lineHeight: '1' }}
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
          </button>
          )}
        </div>
            <Link className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" to="#offcanvasExample" role="button" aria-controls="offcanvasRight">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              {isInitialized && cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#198754' }}>
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop navbar with search in center */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container d-flex align-items-center w-100">
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
          <div className="header-search-desktop">
              <LocationDeliveryInfo/>
          </div>
          {/* Desktop search box between logo and nav links */}
          <div className="header-search-desktop ms-3 me-4" ref={searchWrapperRef} style={{ display: 'none', flex: 1, maxWidth: 520, position: 'relative' }}>
            <input
              ref={inputRef}
              className="form-control responsivesearch"
              style={{ width: '100%', minWidth: 300, paddingRight: 40, borderRadius: 12, fontSize: '1rem', boxShadow: '0 2px 8px rgba(48,87,78,0.06)' }}
              id="product-search-input-desktop"
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
                  overflowx:'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  borderRadius: '0 0 8px 8px',
                  transition: 'width 0.2s',
                  minWidth: 320,
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
                    onClick={() => handleSuggestionClick(product)}
                  >
                    <img src={getImageUrl(product.productThumbnailUrl || (product.productImageUrl && product.productImageUrl[0]) || product.image || '')} alt={product.productName || product.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6, marginRight: 16, background: '#f8f8f8' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '1rem', color: '#30574e' }}>{product.productName || product.name}</div>
                      <div style={{ fontSize: '0.95em', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.category?.[0]?.name || (product.category && product.category.name) || ''}</div>
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
          </div>
          {/* Hamburger menu and nav links remain as before */}
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
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right ms-auto"></ul>
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
                  {/* <span className="me-1">
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
                  </span>{" "} */}
                  Categories
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
                  {/* <span className="me-1">
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
                  </span>{" "} */}
                  Top Brands
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ minWidth: 220 }}
                >
                  {brandLoading && <div className="dropdown-item text-muted">Loading...</div>}
                  {brandError && <div className="dropdown-item text-danger">{brandError}</div>}
                  {!brandLoading && !brandError && topBrands.length === 0 && (
                    <div className="dropdown-item text-muted">No categories found</div>
                  )}
                  {!brandLoading && !brandError && topBrands.map((brand, idx) => (
                    <Link
                      to={`/brand?id=${brand.id || brand._id || idx}`}
                      key={brand.id || brand._id || idx}
                      aria-label={`Go to ${brand.brandName} brand`}
                      className="dropdown-item"
                    >
                      {brand.brandName}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  <>
    <UserLoginModal />
    <CartCanvas />
  </>
  </div >
);
};

export default Header;
