import React, { useEffect, useState } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

const CouponBanner = ({ storeId, cartTotal, onApplyCouponClick }) => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (storeId) {
      fetchCoupons();
    }
  }, [storeId]);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const response = await get(`${ENDPOINTS.GET_SELLER_COUPONS}/${storeId}`, {
        authRequired: true,
      });

      if (response.data && response.data.coupons) {
        // Filter active coupons
        const activeCoupons = response.data.coupons.filter(
          (coupon) => coupon.status === true
        );
        setCoupons(activeCoupons);
      }
    } catch (err) {
      console.error("Error fetching coupons:", err);
    } finally {
      setLoading(false);
    }
  };

  const getBestCoupon = () => {
    if (!coupons || coupons.length === 0) return null;

    // Find the first coupon user can apply
    const eligibleCoupon = coupons.find((coupon) => {
      const minOrder = coupon.minimumOrderAmount || coupon.limit || 0;
      return cartTotal >= minOrder;
    });

    if (eligibleCoupon) return eligibleCoupon;

    // If no eligible, find the one closest to being eligible
    const sortedCoupons = [...coupons].sort((a, b) => {
      const minA = a.minimumOrderAmount || a.limit || 0;
      const minB = b.minimumOrderAmount || b.limit || 0;
      return minA - minB;
    });

    return sortedCoupons[0];
  };

  const getCouponMessage = (coupon) => {
    const minOrder = coupon.minimumOrderAmount || coupon.limit || 0;
    const offerValue = parseFloat(coupon.offer) || 0;

    if (cartTotal >= minOrder) {
      // Eligible
      if (coupon.offerType === "cart_discount") {
        if (coupon.discountType === "percentage" || offerValue <= 100) {
          return `${offerValue}% OFF available! Click to apply`;
        } else {
          return `₹${offerValue} OFF available! Click to apply`;
        }
      } else {
        return `Free ${coupon.freeProductId?.productName || "Product"} available!`;
      }
    } else {
      // Not eligible
      const shortfall = minOrder - cartTotal;
      return `Add ₹${shortfall.toFixed(0)} more to get ${
        coupon.offerType === "cart_discount"
          ? coupon.discountType === "percentage" || offerValue <= 100
            ? `${offerValue}% OFF`
            : `₹${offerValue} OFF`
          : `Free ${coupon.freeProductId?.productName || "Product"}`
      }`;
    }
  };

  if (loading || !coupons || coupons.length === 0) {
    return null;
  }

  const bestCoupon = getBestCoupon();
  if (!bestCoupon) return null;

  const isEligible = cartTotal >= (bestCoupon.minimumOrderAmount || bestCoupon.limit || 0);

  return (
    <div
      className={`coupon-banner ${isEligible ? "eligible" : "locked"}`}
      onClick={onApplyCouponClick}
      style={{ cursor: "pointer" }}
    >
      <div className="coupon-banner-content">
        <div className="coupon-banner-icon">
          <i className={`fa ${isEligible ? "fa-gift" : "fa-tag"}`}></i>
        </div>
        <div className="coupon-banner-text">
          <div className="coupon-banner-title">
            {isEligible ? (
              <>
                <i className="fa fa-check-circle text-success me-1"></i>
                <strong>Coupon Available!</strong>
              </>
            ) : (
              <>
                <i className="fa fa-info-circle text-warning me-1"></i>
                <strong>Unlock Offer</strong>
              </>
            )}
          </div>
          <div className="coupon-banner-message">{getCouponMessage(bestCoupon)}</div>
          {coupons.length > 1 && (
            <div className="coupon-banner-more">
              +{coupons.length - 1} more {coupons.length === 2 ? "offer" : "offers"}
            </div>
          )}
        </div>
        <div className="coupon-banner-arrow">
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>

      <style>{`
        .coupon-banner {
          background: linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);
          border: 2px dashed #ffa726;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          animation: shimmer 3s infinite;
        }

        .coupon-banner.eligible {
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
          border-color: #66bb6a;
        }

        .coupon-banner:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .coupon-banner.eligible:hover {
          border-color: #4caf50;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .coupon-banner.locked:hover {
          border-color: #ff9800;
          box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
        }

        @keyframes shimmer {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 167, 38, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 167, 38, 0.5);
          }
        }

        .coupon-banner.eligible {
          animation: pulse-green 3s infinite;
        }

        @keyframes pulse-green {
          0%, 100% {
            box-shadow: 0 0 0 rgba(76, 175, 80, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
          }
        }

        .coupon-banner-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .coupon-banner-icon {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .coupon-banner.eligible .coupon-banner-icon {
          color: #4caf50;
          animation: bounce 2s infinite;
        }

        .coupon-banner.locked .coupon-banner-icon {
          color: #ff9800;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .coupon-banner-text {
          flex: 1;
        }

        .coupon-banner-title {
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
        }

        .coupon-banner-message {
          font-size: 0.85rem;
          color: #424242;
          line-height: 1.4;
        }

        .coupon-banner-more {
          font-size: 0.75rem;
          color: #666;
          margin-top: 0.25rem;
        }

        .coupon-banner-arrow {
          font-size: 1.2rem;
          color: #666;
          flex-shrink: 0;
        }

        .coupon-banner.eligible .coupon-banner-arrow {
          color: #4caf50;
        }

        .coupon-banner.locked .coupon-banner-arrow {
          color: #ff9800;
        }

        @media (max-width: 576px) {
          .coupon-banner {
            padding: 0.75rem;
          }

          .coupon-banner-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .coupon-banner-title {
            font-size: 0.85rem;
          }

          .coupon-banner-message {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CouponBanner;
