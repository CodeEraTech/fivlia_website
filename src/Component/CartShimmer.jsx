import React from 'react';

const CartShimmer = () => {
  return (
    <div className="cart-shimmer">
      {/* Header Shimmer */}
      <div className="shimmer-header mb-3">
        <div className="shimmer-title"></div>
        <div className="shimmer-subtitle"></div>
      </div>

      {/* Alert Shimmer */}
      <div className="shimmer-alert mb-3"></div>

      {/* Cart Items Shimmer */}
      {[1, 2, 3].map((item) => (
        <div key={item} className="shimmer-cart-item mb-3">
          <div className="row align-items-center">
            <div className="col-2">
              <div className="shimmer-image"></div>
            </div>
            <div className="col-5">
              <div className="shimmer-product-name mb-2"></div>
              <div className="shimmer-product-price mb-2"></div>
              <div className="shimmer-remove-btn"></div>
            </div>
            <div className="col-3">
              <div className="shimmer-quantity-controls"></div>
            </div>
            <div className="col-2">
              <div className="shimmer-price"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer Shimmer */}
      <div className="shimmer-footer mt-4">
        <div className="shimmer-total mb-3"></div>
        <div className="shimmer-checkout-btn"></div>
      </div>

      <style>{`
        .cart-shimmer {
          padding: 1rem;
        }

        .shimmer-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .shimmer-title {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 60%;
        }

        .shimmer-subtitle {
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 40%;
        }

        .shimmer-alert {
          height: 40px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .shimmer-cart-item {
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
        }

        .shimmer-image {
          width: 60px;
          height: 60px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .shimmer-product-name {
          height: 18px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 80%;
        }

        .shimmer-product-price {
          height: 14px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 60%;
        }

        .shimmer-remove-btn {
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 40%;
        }

        .shimmer-quantity-controls {
          height: 32px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
        }

        .shimmer-price {
          height: 20px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .shimmer-footer {
          border-top: 1px solid #e0e0e0;
          padding-top: 1rem;
        }

        .shimmer-total {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 50%;
        }

        .shimmer-checkout-btn {
          height: 48px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CartShimmer; 