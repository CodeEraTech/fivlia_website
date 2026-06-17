import React, { useEffect, useState, useMemo } from "react";
import { get, post } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useImageUrl } from "../utils/getSettingsValue";

const CouponModal = ({ storeId, cartItems, onCouponApplied, appliedCouponId, isOpen, onClose }) => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [applyingCoupon, setApplyingCoupon] = useState(null);
  const getImageUrl = useImageUrl();
  const now = useMemo(() => new Date(), [isOpen]);

  // Calculate cart total (use original price if available)
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = item.originalPrice || item.price;
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const cartProductIds = useMemo(() => {
    return new Set(
      cartItems
        .map((item) => item.productId?._id || item.productId)
        .filter(Boolean)
        .map(String)
    );
  }, [cartItems]);

  const visibleCoupons = useMemo(() => {
    return coupons.filter((coupon) => {
      if (coupon.status === false) return false;
      if (coupon.approvalStatus && coupon.approvalStatus !== "approved") {
        return false;
      }

      const startsAt = coupon.fromTo ? new Date(coupon.fromTo) : null;
      const expiresAt = coupon.expireDate ? new Date(coupon.expireDate) : null;

      return (!startsAt || startsAt <= now) && (!expiresAt || expiresAt >= now);
    });
  }, [coupons, now]);

  useEffect(() => {
    if (storeId && isOpen) {
      fetchCoupons();
    }
  }, [storeId, isOpen]);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await get(`${ENDPOINTS.GET_SELLER_COUPONS}/${storeId}`, {
        authRequired: true,
      });

      if (response.data && response.data.coupons) {
        setCoupons(response.data.coupons);
      }
    } catch (err) {
      console.error("Error fetching coupons:", err);
      setError("Failed to load coupons");
    } finally {
      setLoading(false);
    }
  };

  const handleApplyCoupon = async (coupon) => {
    const minOrder = coupon.minimumOrderAmount || coupon.limit || 0;
    
    // Check minimum order requirement
    if (coupon.discountScope !== "selected_products" && minOrder > 0 && cartTotal < minOrder) {
      alert(`Minimum order of ₹${minOrder} required to apply this coupon. Add ₹${(minOrder - cartTotal).toFixed(2)} more to your cart.`);
      return;
    }

    const eligibility = getCouponEligibility(coupon);
    if (!eligibility.eligible) {
      alert(eligibility.message);
      return;
    }

    try {
      setApplyingCoupon(coupon._id);
      const cartIds = cartItems.map((item) => item._id);

      const response = await post(
        ENDPOINTS.APPLY_COUPON,
        {
          cartIds,
          couponId: coupon._id,
        },
        { authRequired: true }
      );

      if (response.data) {
        // Close modal
        onClose();

        // Callback to parent to refresh cart
        if (onCouponApplied) {
          onCouponApplied(response.data);
        }
      }
    } catch (err) {
      console.error("Error applying coupon:", err);
      alert(err.response?.data?.message || "Failed to apply coupon");
    } finally {
      setApplyingCoupon(null);
    }
  };

  const getCouponTypeLabel = (coupon) => {
    if (coupon.offerType === "cart_discount") {
      if (coupon.discountScope === "selected_products") {
        return "Product Discount";
      }
      return "Cart Discount";
    } else if (coupon.offerType === "free_product") {
      return "Free Product";
    }
    return "Offer";
  };

  const getCouponDescription = (coupon) => {
    if (coupon.offerType === "cart_discount") {
      const offerValue = parseFloat(coupon.offer) || 0;
      return `Get ${offerValue}% off`;
    } else if (coupon.offerType === "free_product") {
      return `Get ${coupon.freeProductId?.productName || "Free Product"} free`;
    }
    return coupon.title || "Special Offer";
  };

  const getCouponEligibility = (coupon) => {
    const minOrder = coupon.minimumOrderAmount || coupon.limit || 0;
    const offerProductIds = Array.isArray(coupon.productId)
      ? coupon.productId.map((product) => product?._id || product).filter(Boolean)
      : [];
    const isSelectedProductsCoupon =
      coupon.offerType === "cart_discount" &&
      coupon.discountScope === "selected_products";

    if (isSelectedProductsCoupon) {
      if (offerProductIds.length === 0) {
        return {
          eligible: false,
          message: "This offer is not linked to any product",
          type: "warning"
        };
      }

      const hasEligibleProduct = offerProductIds.some((productId) =>
        cartProductIds.has(String(productId))
      );

      if (!hasEligibleProduct) {
        return {
          eligible: false,
          message: "Eligible products are not in your cart",
          type: "warning"
        };
      }

      return {
        eligible: true,
        message: "Eligible product in cart",
        type: "success"
      };
    }
    
    if (minOrder > 0) {
      if (cartTotal >= minOrder) {
        return {
          eligible: true,
          message: `Min. order ₹${minOrder}`,
          type: "success"
        };
      } else {
        const shortfall = minOrder - cartTotal;
        return {
          eligible: false,
          message: `Add ₹${shortfall.toFixed(2)} more to unlock`,
          type: "warning"
        };
      }
    }
    
    return {
      eligible: true,
      message: "No minimum order",
      type: "success"
    };
  };

  const getScopeText = (coupon) => {
    if (coupon.offerType === "cart_discount" && coupon.discountScope === "selected_products") {
      return "On selected products";
    }
    return "On entire cart";
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Custom Backdrop */}
      <div 
        className="custom-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="custom-modal">
        <div className="custom-modal-dialog">
          <div className="custom-modal-content">
          <div className="modal-header border-bottom">
            <h5 className="modal-title" id="couponModalLabel">
              <i className="fa fa-tag me-2 text-success"></i>
              Available Coupons
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-3">
            {/* Current Cart Total Info */}
              <div className="coupon-modal-cart-summary mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-muted small">Your cart total:</span>
                <span className="fw-bold text-success">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted small">Loading coupons...</p>
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : visibleCoupons.length === 0 ? (
              <div className="text-center py-5">
                <i className="fa fa-ticket fa-3x text-muted mb-3"></i>
                <p className="text-muted">No coupons available at the moment</p>
              </div>
            ) : (
              <div className="coupon-modal-list">
                {visibleCoupons.map((coupon) => {
                  const isApplied = String(appliedCouponId) === String(coupon._id);
                  const isApplying = applyingCoupon === coupon._id;
                  const eligibility = getCouponEligibility(coupon);

                  return (
                    <div
                      key={coupon._id}
                      className={`coupon-modal-card mb-3 ${isApplied ? "applied" : ""} ${!eligibility.eligible ? "locked" : ""}`}
                    >
                      <div className="coupon-modal-card-header">
                        <div className="d-flex align-items-start justify-content-between">
                          <div className="d-flex align-items-center flex-grow-1">
                            <div className="coupon-modal-icon">
                              <i className={`fa ${coupon.offerType === "free_product" ? "fa-gift" : "fa-percent"} text-success`}></i>
                            </div>
                            <div className="ms-3 flex-grow-1">
                              <h6 className="mb-0 fw-bold">{coupon.title}</h6>
                              <small className="text-success d-block">
                                {getCouponTypeLabel(coupon)}
                              </small>
                              <small className="text-muted d-block">
                                {getScopeText(coupon)}
                              </small>
                            </div>
                          </div>
                          {isApplied && (
                            <span className="badge bg-success ms-2">Applied</span>
                          )}
                        </div>
                      </div>

                      <div className="coupon-modal-card-body">
                        <div className="coupon-modal-description mb-2">
                          <p className="mb-0 fw-semibold text-dark">
                            {getCouponDescription(coupon)}
                          </p>
                        </div>

                        {coupon.offerType === "free_product" &&
                          coupon.freeProductId?.productThumbnailUrl && (
                            <div className="coupon-modal-free-product mb-2">
                              <img
                                src={getImageUrl(
                                  coupon.freeProductId.productThumbnailUrl
                                )}
                                alt={coupon.freeProductId.productName}
                                className="rounded"
                                style={{
                                  maxHeight: "50px",
                                  objectFit: "cover",
                                }}
                              />
                              <span className="ms-2 small text-muted">
                                Free: {coupon.freeProductId.productName}
                              </span>
                            </div>
                          )}

                        <div className="coupon-modal-details">
                          <div className={`coupon-modal-eligibility ${eligibility.type}`}>
                            <i className={`fa ${eligibility.eligible ? "fa-check-circle" : "fa-info-circle"} me-1`}></i>
                            {eligibility.message}
                          </div>

                          {coupon.expireDate && (
                            <small className="text-muted d-block mt-2">
                              <i className="fa fa-clock me-1"></i>
                              Valid till:{" "}
                              {new Date(coupon.expireDate).toLocaleDateString()}
                            </small>
                          )}
                        </div>

                        <button
                          className={`btn btn-sm w-100 mt-3 ${
                            isApplied
                              ? "btn-outline-success"
                              : eligibility.eligible
                              ? "btn-success"
                              : "btn-outline-secondary"
                          }`}
                          onClick={() => handleApplyCoupon(coupon)}
                          disabled={isApplying || isApplied || !eligibility.eligible}
                        >
                          {isApplying ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                              ></span>
                              Applying...
                            </>
                          ) : isApplied ? (
                            <>
                              <i className="fa fa-check me-2"></i>
                              Applied
                            </>
                          ) : eligibility.eligible ? (
                            "Apply Coupon"
                          ) : (
                            <>
                              <i className="fa fa-lock me-2"></i>
                              Add more items
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

      <style>{`
        .custom-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1040;
          animation: fadeIn 0.15s ease-in;
        }

        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          pointer-events: none;
        }

        .custom-modal-dialog {
          max-width: 500px;
          width: 100%;
          pointer-events: auto;
          animation: slideIn 0.3s ease-out;
        }

        .custom-modal-content {
          background: white;
          border-radius: 8px;
          box-shadow: 0 18px 50px rgba(16, 24, 40, 0.24);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .custom-modal-content .modal-header {
          flex-shrink: 0;
          padding: 1rem 1.1rem;
          background: #ffffff;
        }

        .custom-modal-content .modal-body {
          overflow: hidden;
          min-height: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .coupon-modal-cart-summary {
          background: #f0faf1;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid #ccefd0;
        }

        .coupon-modal-list {
          max-height: 60vh;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .coupon-modal-card {
          border: 1px dashed #c8d0d8;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
          padding: 0;
        }

        .coupon-modal-card:hover:not(.locked) {
          border-color: #0aad0a;
          box-shadow: 0 4px 12px rgba(10, 173, 10, 0.15);
          transform: translateY(-2px);
        }

        .coupon-modal-card.applied {
          border-color: #0aad0a;
          border-style: solid;
          background: #f5fbf5;
        }

        .coupon-modal-card.locked {
          opacity: 0.8;
          background: #f8f9fa;
        }

        .coupon-modal-card-header {
          padding: 1rem;
          background: #ffffff;
          border-bottom: 1px dashed #dee2e6;
        }

        .coupon-modal-icon {
          width: 42px;
          height: 42px;
          background: #e8f5e9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .coupon-modal-card-body {
          padding: 1rem;
        }

        .coupon-modal-description {
          font-size: 0.95rem;
        }

        .coupon-modal-details {
          background: #f8f9fa;
          padding: 0.75rem;
          border-radius: 8px;
          margin-top: 0.75rem;
        }

        .coupon-modal-eligibility {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .coupon-modal-eligibility.success {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .coupon-modal-eligibility.warning {
          background: #fff3e0;
          color: #e65100;
        }

        .coupon-modal-free-product {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px dashed #dee2e6;
        }

        .coupon-modal-free-product img {
          max-width: 50px;
        }

        @media (max-width: 576px) {
          .custom-modal {
            align-items: flex-end;
            padding: 0.75rem;
          }

          .custom-modal-dialog {
            margin: 0;
          }

          .custom-modal-content {
            max-height: 86vh;
          }

          .coupon-modal-list {
            max-height: 58vh;
          }

          .coupon-modal-icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .coupon-modal-card-header h6 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default CouponModal;
