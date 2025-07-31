import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import CartShimmer from "./CartShimmer";

const CartCanvas = () => {
  const { 
    cartItems, 
    cartCount, 
    loading, 
    error, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    isInitialized
  } = useCart();

  const handleQuantityChange = (productId, varientId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, varientId, newQuantity);
    } else {
      removeFromCart(productId, varientId);
    }
  };

  const handleRemoveItem = (productId, varientId) => {
    removeFromCart(productId, varientId);
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
      <div className="offcanvas-body">
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
            {/* <div className="alert alert-danger" role="alert">
              You've got FREE delivery. Start checkout now!
            </div> */}
            <div>
              <div className="py-3">
                <ul className="list-group list-group-flush">
                  {cartItems.map((item, index) => (
                    <li key={`${item.productId}-${item.varientId}-${index}`} className="list-group-item py-3 px-0">
                      <div className="row align-items-center">
                        <div className="col-2">
                          <img
                            src={item.image || '/assets/img/no_image.jpg'}
                            alt={item.name}
                            className="img-fluid rounded"
                            onError={(e) => {
                              e.target.src = '/assets/img/no_image.jpg';
                            }}
                          />
                        </div>
                        <div className="col-5">
                          <h6 className="mb-0">{item.name}</h6>
                          <span>
                            <small className="text-muted">₹{item.price} / unit</small>
                          </span>
                          <div className="mt-2 small">
                            <button
                              onClick={() => handleRemoveItem(item.productId, item.varientId)}
                              className="text-decoration-none text-danger border-0 bg-transparent p-0"
                              style={{ cursor: 'pointer' }}
                            >
                              <span className="me-1">
                                <i className="fa fa-trash"></i>
                              </span>
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="input-group flex-nowrap justify-content-center">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.productId, item.varientId, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.productId, item.varientId, parseInt(e.target.value) || 1)}
                              className="form-control text-center"
                              style={{ width: '50px' }}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.productId, item.varientId, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-2 text-end">
                          <span className="fw-bold">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cart Summary */}
              <div className="border-top pt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="mb-0">Total:</h6>
                  <h6 className="mb-0 text-success">₹{getCartTotal()}</h6>
                </div>
                <Link 
                  to="/ShopCart" 
                  className="btn btn-success w-100"
                  data-bs-dismiss="offcanvas"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartCanvas; 