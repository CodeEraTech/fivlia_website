import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartShimmer from "./CartShimmer";
import { isOutOfStock } from "../utils/stockUtils";
import Swal from "sweetalert2";
import { useImageUrl } from "../utils/getSettingsValue";
import RecommendedProducts from "../ProductList/RecommendedProducts";
import CouponModal from "./CouponModal";
import CouponBanner from "./CouponBanner";

const CartCanvas = () => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  
  const {
    cartItems,
    freeItems,
    cartCount,
    loading,
    error,
    removeCartItem,
    updateCartItem,
    getCartTotal,
    getOriginalCartTotal,
    isInitialized,
    updatingItems,
    removingItems,
    storeId,
    appliedCoupon,
    couponDiscount,
    freeProductSavings,
    removeCoupon,
    fetchCartItems,
  } = useCart();

  const navigate = useNavigate();
  const getImageUrl = useImageUrl();

  const handleQuantityChange = (cartItemId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItem(cartItemId, newQuantity);
    } else {
      // If quantity is 0 or negative, remove the item
      removeCartItem(cartItemId);
    }
  };

  const handleRemoveItem = (cartItemId) => {
    removeCartItem(cartItemId);
  };

  const isItemUpdating = (cartItemId) => {
    return updatingItems.has(cartItemId);
  };

  const isItemRemoving = (cartItemId) => {
    return removingItems.has(cartItemId);
  };

  const isAnyItemProcessing = () => {
    return updatingItems.size > 0 || removingItems.size > 0;
  };

  const handleRemoveCoupon = async () => {
    try {
      await removeCoupon();
    } catch (error) {
      console.error("Error removing coupon:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove coupon. Please try again.",
      });
    }
  };

  const handleCouponApplied = (data) => {
    fetchCartItems();
    Swal.fire({
      icon: "success",
      title: "Coupon Applied!",
      text: data.message || "Coupon applied successfully",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleOpenCouponModal = () => {
    setIsCouponModalOpen(true);
  };

  const handleCloseCouponModal = () => {
    setIsCouponModalOpen(false);
  };

  // Check if any items in cart are out of stock
  const getOutOfStockItems = () => {
    return cartItems.filter((item) => {
      const product = {
        stock: item.stock,
        variants: item.variants || [],
        inventory: item.inventory || [], // Add inventory data
      };
      const selectedVariant = item.varientId
        ? product.variants.find((v) => v._id === item.varientId)
        : null;

      return isOutOfStock(product, selectedVariant);
    });
  };

  const outOfStockItems = getOutOfStockItems();
  const hasOutOfStockItems = outOfStockItems.length > 0;

  const handleCheckout = () => {
    if (hasOutOfStockItems) {
      Swal.fire({
        icon: "warning",
        title: "Out of Stock Items",
        text: `You have ${outOfStockItems.length} item(s) that are out of stock. Please remove them before proceeding to checkout.`,
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
      return;
    }

    const offcanvas = document.getElementById("offcanvasRight");
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
    navigate("/OrderCheckout");
  };

  // Show loading shimmer while initializing
  if (!isInitialized || loading) {
    return (
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
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <CartShimmer />
        </div>
      </div>
    );
  }

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart ({cartCount} items)
          </h5>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body cart-body">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center py-5">
            <div className="mb-3">
              <i className="fa fa-shopping-cart fa-3x text-muted"></i>
            </div>
            <h6 className="text-muted">Your cart is empty</h6>
            <p className="text-muted small">Add some items to get started!</p>
          </div>
        ) : (
          <>
            {/* Scrollable Products Section */}
            <div className="cart-products-section">
              {/* Coupon Banner - Prominent at top */}
              {!appliedCoupon && storeId && cartItems.length > 0 && (
                <div className="mb-3">
                  <CouponBanner
                    storeId={storeId}
                    cartTotal={getOriginalCartTotal()}
                    onApplyCouponClick={handleOpenCouponModal}
                  />
                </div>
              )}

              <ul className="list-group list-group-flush">
                {cartItems.map((item, index) => {
                  const cartItemId = item._id || item.cartItemId;
                  const isUpdating = isItemUpdating(cartItemId);
                  const isRemoving = isItemRemoving(cartItemId);
                  const isProcessing = isUpdating || isRemoving;

                  // Check if item is out of stock
                  const product = {
                    stock: item.stock,
                    variants: item.variants || [],
                    inventory: item.inventory || [], // Add inventory data
                  };
                  const selectedVariant = item.varientId
                    ? product.variants.find((v) => v._id === item.varientId)
                    : null;
                  const itemOutOfStock = isOutOfStock(product, selectedVariant);

                  return (
                    <li
                      key={`${item.productId}-${item.varientId}-${index}`}
                      className="list-group-item py-3 px-0"
                    >
                      <div className="row align-items-center g-2">
                        <div className="col-3 col-sm-2 position-relative">
                          <img
                            src={getImageUrl(item.image)}
                            alt={item.name}
                            className="img-fluid rounded"
                            onError={(e) => {
                              e.target.src = "/assets/img/no_image.jpg";
                            }}
                          />
                          {itemOutOfStock && (
                            <span
                              className="badge bg-danger position-absolute top-0 start-0"
                              style={{ fontSize: "0.7rem" }}
                            >
                              Out of Stock
                            </span>
                          )}
                        </div>
                        <div className="col-6 col-sm-5">
                          <h6 className="mb-0 text-truncate">{item.name}</h6>
                          <span>
                            <small className="text-muted">
                              ₹{item.price} / unit
                            </small>
                          </span>
                          {itemOutOfStock && (
                            <div className="mt-1">
                              <small className="text-danger">
                                <i className="fa fa-exclamation-triangle me-1"></i>
                                This item is out of stock
                              </small>
                            </div>
                          )}
                          <div className="mt-2 small">
                            <button
                              onClick={() => handleRemoveItem(cartItemId)}
                              className="text-decoration-none text-danger border-0 bg-transparent p-0"
                              style={{ cursor: "pointer" }}
                              disabled={isProcessing}
                            >
                              <span className="me-1">
                                <i className="fa fa-trash"></i>
                              </span>
                              {isRemoving ? "Removing..." : "Remove"}
                            </button>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <div className="cart-qty-box">
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() =>
                                handleQuantityChange(
                                  cartItemId,
                                  item.quantity - 1
                                )
                              }
                              disabled={isProcessing || itemOutOfStock}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  cartItemId,
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="cart-qty-input"
                              disabled={isProcessing || itemOutOfStock}
                            />
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() =>
                                handleQuantityChange(
                                  cartItemId,
                                  item.quantity + 1
                                )
                              }
                              disabled={isProcessing || itemOutOfStock}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                            {isProcessing && (
                              <div className="cart-updating-indicator">
                                <div
                                  className="spinner-border spinner-border-sm text-success"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Processing...
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-sm-2 text-end">
                          <span className="fw-bold">
                            ₹{(Number(item.finalPrice ?? item.price) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}

                {freeItems.map((item, index) => (
                  <li
                    key={`free-${item.productId}-${item.varientId}-${index}`}
                    className="list-group-item free-cart-item py-3 px-0"
                  >
                    <div className="row align-items-center g-2">
                      <div className="col-3 col-sm-2 position-relative">
                        <img
                          src={getImageUrl(item.image)}
                          alt={item.name}
                          className="img-fluid rounded"
                          onError={(e) => {
                            e.target.src = "/assets/img/no_image.jpg";
                          }}
                        />
                        <span className="badge bg-success position-absolute top-0 start-0">
                          FREE
                        </span>
                      </div>
                      <div className="col-6 col-sm-5">
                        <h6 className="mb-1 text-truncate">{item.name}</h6>
                        <small className="text-success d-block">
                          Added by offer
                        </small>
                        {item.offerTitle && (
                          <small className="text-muted d-block text-truncate">
                            {item.offerTitle}
                          </small>
                        )}
                      </div>
                      <div className="col-3 col-sm-3">
                        <div className="cart-free-qty">Qty {item.quantity}</div>
                      </div>
                      <div className="col-12 col-sm-2 text-end">
                        <span className="fw-bold text-success">₹0.00</span>
                        {Number(item.basePrice) > 0 && (
                          <small className="text-muted d-block text-decoration-line-through">
                            ₹{(Number(item.basePrice) * item.quantity).toFixed(2)}
                          </small>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <RecommendedProducts />
            </div>
          </>
        )}
      </div>
      {/* Coupon Section */}
      {cartItems.length > 0 && (
        <div className="cart-coupon-section">
          {appliedCoupon ? (
            <div className="applied-coupon-card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="coupon-icon-small">
                    <i className="fa fa-check-circle text-success"></i>
                  </div>
                  <div className="ms-2">
                    <small className="text-success fw-bold d-block">
                      Coupon Applied
                    </small>
                    <small className="text-muted">
                      {freeItems.length > 0
                        ? `${freeItems.length} free item${freeItems.length > 1 ? "s" : ""} added`
                        : `You saved ₹${couponDiscount.toFixed(2)}`}
                    </small>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={handleRemoveCoupon}
                  disabled={loading}
                >
                  {loading ? "Removing..." : "Remove"}
                </button>
              </div>
            </div>
          ) : (
            <button
              className="btn btn-outline-success w-100"
              onClick={handleOpenCouponModal}
              disabled={isAnyItemProcessing()}
            >
              <i className="fa fa-tag me-2"></i>
              Apply Coupon
            </button>
          )}
        </div>
      )}
      {/* Fixed Checkout Section */}
      {cartItems.length > 0 && (
        <div className="cart-checkout-section">
          <div className="cart-checkout-inner">
            {/* Subtotal breakdown */}
            <div className="price-breakdown mb-3">
              {couponDiscount > 0 && (
                <>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Original Price:</span>
                    <span className="text-muted">
                      ₹{getOriginalCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-success">Coupon Discount:</span>
                    <span className="text-success">
                      - ₹{couponDiscount.toFixed(2)}
                    </span>
                  </div>
                  <hr className="my-2" />
                </>
              )}
              {freeItems.length > 0 && (
                <>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-success">Free Product:</span>
                    <span className="text-success">
                      ₹0.00
                    </span>
                  </div>
                  {freeProductSavings > 0 && (
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Free Product Value:</span>
                      <span className="text-muted">
                        ₹{freeProductSavings.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <hr className="my-2" />
                </>
              )}
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Total:</h5>
                <h5 className="mb-0 text-success">₹{getCartTotal().toFixed(2)}</h5>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className={`btn w-100 ${
                hasOutOfStockItems ? "btn-warning" : "btn-success"
              } ${isAnyItemProcessing() ? "disabled" : ""}`}
              style={{
                pointerEvents:
                  isAnyItemProcessing() || hasOutOfStockItems ? "none" : "auto",
                opacity: isAnyItemProcessing() || hasOutOfStockItems ? 0.6 : 1,
              }}
              disabled={isAnyItemProcessing() || hasOutOfStockItems}
            >
              {isAnyItemProcessing() ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating...
                </>
              ) : hasOutOfStockItems ? (
                <>
                  <i className="fa fa-exclamation-triangle me-2"></i>
                  Remove Out of Stock Items
                </>
              ) : (
                "Proceed to Checkout"
              )}
            </button>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      <CouponModal
        storeId={storeId}
        cartItems={cartItems}
        onCouponApplied={handleCouponApplied}
        appliedCouponId={appliedCoupon}
        isOpen={isCouponModalOpen}
        onClose={handleCloseCouponModal}
      />

      <style>{`
        .cart-body {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-height: 0;
          padding-bottom: 0;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .cart-products-section {
          flex: 0 0 auto;
          min-height: 0;
          overflow-y: visible;
          overflow-x: hidden;
          padding-bottom: 20px;
        }

        .cart-coupon-section {
          flex-shrink: 0;
          position: static;
          background: white;
          padding: 0.75rem 1rem;
          border-top: 1px solid #e0e0e0;
          z-index: 9;
        }

        .applied-coupon-card {
          background: linear-gradient(135deg, #f0f9f0 0%, #e8f5e9 100%);
          border: 1px solid #0aad0a;
          border-radius: 8px;
          padding: 0.75rem;
        }

        .coupon-icon-small {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .cart-checkout-section {
          flex-shrink: 0;
          position: static;
          background: white;
          padding: 0.85rem 1rem;
          border-top: 1px solid #e0e0e0;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          z-index: 10;
          overflow: hidden;
        }

        .cart-checkout-inner {
          margin: 0;
        }

        #offcanvasRight {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .free-cart-item {
          background: #f3fbf4;
        }

        .cart-free-qty {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 72px;
          height: 34px;
          border: 1px solid #bfe7c4;
          border-radius: 7px;
          color: #198754;
          background: #ffffff;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .price-breakdown {
          font-size: 0.9rem;
        }

        .cart-qty-box {
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 7px;
          background: #fafafa;
          gap: 6px;
          height: 40px;
          min-width: 110px;
          max-width: 140px;
          position: relative;
        }

        .cart-qty-btn {
          background: none;
          border: none;
          font-size: 1.3rem;
          color: #0aad0a;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.15s;
          box-shadow: 0 1px 2px rgba(10,173,10,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cart-qty-btn:hover:not(:disabled) {
          background: #e6f7e6;
        }

        .cart-qty-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cart-qty-input {
          width: 32px;
          text-align: center;
          font-size: 1rem;
          border: none;
          background: transparent;
          outline: none;
          height: 32px;
          line-height: 32px;
          flex-shrink: 0;
        }

        .cart-qty-input:disabled {
          opacity: 0.6;
        }

        .cart-updating-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 4px;
          padding: 2px;
        }

        .btn.disabled {
          cursor: not-allowed;
        }

        .list-group-item {
          overflow-x: hidden;
        }

        .row {
          margin: 0;
        }

        .col-3, .col-6, .col-12, .col-sm-2, .col-sm-3, .col-sm-5 {
          padding: 0 8px;
        }

        @media (max-width: 576px) {
          .cart-body {
            flex: 1 1 auto;
          }

          .cart-coupon-section {
            padding: 0.5rem;
          }

          .cart-checkout-section {
            padding: 0.75rem;
          }
          
          .cart-qty-box {
            height: 36px;
            min-width: 100px;
            max-width: 120px;
          }
          
          .cart-qty-btn {
            width: 28px;
            height: 28px;
            font-size: 1.1rem;
          }
          
          .cart-qty-input {
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-size: 0.9rem;
          }

          .col-3, .col-6, .col-12 {
            padding: 0 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default CartCanvas;
