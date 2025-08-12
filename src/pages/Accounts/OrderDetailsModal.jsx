import React from "react";
import { useImageUrl } from "../../utils/getSettingsValue";

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!order || !isOpen) return null;
  const getImageUrl = useImageUrl();

  // Calculate subtotal & Platform Fee
  const subtotal = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const platformFeeAmount = subtotal * (order.platformFee / 100);

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button className="order-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="order-modal-content">
          <h2 className="order-title">Order Details - #{order.orderId}</h2>

          <div className="order-items">
            {order.items.map((item, index) => (
              <div className="order-item" key={index}>
                <img
                  src={getImageUrl(item.image) || "/assets/img/no_image.jpg"}
                  alt={item.name}
                  className="order-item-img"
                  onError={(e) => {
                    e.target.src = "/assets/img/no_image.jpg";
                  }}
                />
                <div className="order-item-info">
                  <h4 className="order-item-name">{item.name}</h4>
                  <div className="order-item-details">
                    <span><strong>Qty:</strong> {item.quantity}</span>
                    <span><strong>Price:</strong> ₹{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <hr />
          <div className="order-summary">
            <div className="summary-item">
              <strong>Subtotal:</strong> ₹{subtotal}
            </div>
            <div className="summary-item">
              <strong >Delivery Charges:</strong> ₹{order.deliveryCharges}
            </div>
            <div className="summary-item">
              <strong>Platform Fee:</strong> ₹{platformFeeAmount}
            </div>
            <hr />
            <div className="summary-item">
              <strong>Total Amount:</strong> ₹{order.totalPrice}
            </div>
            <div className="">
              <strong style={{color:'#000', fontSize:'0.9rem'}}>Delivery Address:</strong> <br />
              {order.addressId.fullName}, <br />
              {order.addressId.fullAddress}, <br />
              {order.addressId.moibleNumber}
            </div>
          </div>
        </div>

        {/* Inline styles */}
        <style>{`
          .order-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1050;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .order-modal {
            background: #fff;
            border-radius: 14px;
            max-width: 800px;
            width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.2s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .order-close-btn {
            position: absolute;
            top: 12px;
            right: 16px;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
          }

          .order-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #0aad0a;
            text-align: center;
          }

          .order-items {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .order-item {
            display: flex;
            gap: 12px;
            background: #f9f9f9;
            padding: 6px;
            border-radius: 10px;
            align-items: center;
            border: 1px solid #e0e0e0;
            max-height: 150px;
            overflow: hidden;
          }

          .order-item-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            background: #fff;
          }

          .order-item-info {
            flex: 1;
          }

          .order-item-name {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 3px;
            color: #333;
            max-width: 100%; 
          }

          .order-item-details {
            display: flex;
            flex-direction: column;
            font-size: 0.95rem;
            color: #555;
          }

          .summary-item {
            font-size: 0.9rem;
            margin-bottom: 2px;
            color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .order-summary {
            margin-top: 20px;
            font-size: 1rem;
            color: #555;
          }

          @media (max-width: 600px) {
            .order-modal {
              padding: 16px;
            }

            .order-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .order-item-img {
              width: 100%;
              height: auto;
              border-radius: 6px;
            }

            .order-item-details {
              flex-direction: column;
              gap: 6px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default OrderDetailsModal;