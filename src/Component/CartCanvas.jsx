import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import CartShimmer from "./CartShimmer";

const CartCanvas = () => {
  const { 
    cartItems, 
    cartCount, 
    loading, 
    error, 
    removeCartItem, 
    updateCartItem, 
    getCartTotal,
    isInitialized,
    updatingItems,
    removingItems
  } = useCart();

  const navigate = useNavigate();

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

  const handleCheckout = () => {
    const offcanvas = document.getElementById('offcanvasRight');
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
    navigate('/OrderCheckout');
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
              <ul className="list-group list-group-flush">
                {cartItems.map((item, index) => {
                  const cartItemId = item._id || item.cartItemId;
                  const isUpdating = isItemUpdating(cartItemId);
                  const isRemoving = isItemRemoving(cartItemId);
                  const isProcessing = isUpdating || isRemoving;
                  
                  return (
                    <li key={`${item.productId}-${item.varientId}-${index}`} className="list-group-item py-3 px-0">
                      <div className="row align-items-center g-2">
                        <div className="col-3 col-sm-2">
                          <img
                            src={item.image || '/assets/img/no_image.jpg'}
                            alt={item.name}
                            className="img-fluid rounded"
                            onError={(e) => {
                              e.target.src = '/assets/img/no_image.jpg';
                            }}
                          />
                        </div>
                        <div className="col-6 col-sm-5">
                          <h6 className="mb-0 text-truncate">{item.name}</h6>
                          <span>
                            <small className="text-muted">₹{item.price} / unit</small>
                          </span>
                          <div className="mt-2 small">
                            <button
                              onClick={() => handleRemoveItem(cartItemId)}
                              className="text-decoration-none text-danger border-0 bg-transparent p-0"
                              style={{ cursor: 'pointer' }}
                              disabled={isProcessing}
                            >
                              <span className="me-1">
                                <i className="fa fa-trash"></i>
                              </span>
                              {isRemoving ? 'Removing...' : 'Remove'}
                            </button>
                          </div>
                        </div>
                        <div className="col-3 col-sm-3">
                          <div className="cart-qty-box">
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() => handleQuantityChange(cartItemId, item.quantity - 1)}
                              disabled={isProcessing}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(cartItemId, parseInt(e.target.value) || 1)}
                              className="cart-qty-input"
                              disabled={isProcessing}
                            />
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() => handleQuantityChange(cartItemId, item.quantity + 1)}
                              disabled={isProcessing}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                            {isProcessing && (
                              <div className="cart-updating-indicator">
                                <div className="spinner-border spinner-border-sm text-success" role="status">
                                  <span className="visually-hidden">Processing...</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-sm-2 text-end">
                          <span className="fw-bold">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Fixed Checkout Section */}
      {cartItems.length > 0 && (
        <div className="cart-checkout-section">
          <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Total:</h6>
              <h6 className="mb-0 text-success">₹{getCartTotal()}</h6>
            </div>
            <button 
              onClick={handleCheckout}
              className={`btn btn-success w-100 ${isAnyItemProcessing() ? 'disabled' : ''}`}
              style={{ 
                pointerEvents: isAnyItemProcessing() ? 'none' : 'auto',
                opacity: isAnyItemProcessing() ? 0.6 : 1
              }}
              disabled={isAnyItemProcessing()}
            >
              {isAnyItemProcessing() ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Updating...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .cart-body {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 120px);
          padding-bottom: 0;
          overflow-x: hidden;
        }

        .cart-products-section {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 20px;
        }

        .cart-checkout-section {
          position: sticky;
          bottom: 0;
          background: white;
          padding: 1rem;
          border-top: 1px solid #e0e0e0;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          z-index: 10;
          overflow: hidden;
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
            height: calc(100vh - 100px);
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