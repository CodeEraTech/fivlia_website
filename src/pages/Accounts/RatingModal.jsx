import React, { useState, useEffect } from "react";
import { useImageUrl } from "../../utils/getSettingsValue";

const RatingModal = ({ isOpen, onClose, order, onSubmit }) => {
  const getImageUrl = useImageUrl();

  // Initialize ratings state safely
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (order?.items) {
      setRatings(
        order.items.map((item) => ({
          productId: item.productId,
          storeId: item.storeId,
          rating: 0,
        }))
      );
    }
  }, [order]);

  if (!isOpen || !order) return null;

  const handleStarClick = (index, star) => {
    const updated = [...ratings];
    updated[index].rating = star;
    setRatings(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const incomplete = ratings.some((r) => r.rating === 0);
    if (incomplete) return alert("Please rate all products before submitting.");

    // Send exact payload
    onSubmit(ratings);

    // Reset ratings
    setRatings(order.items.map((item) => ({
      productId: item.id,
      storeId: item.storeId,
      rating: 0,
    })));
    onClose();
  };

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button className="order-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="order-modal-content">
          <h2 className="order-title">Rate Products - #{order.orderId}</h2>

          <form onSubmit={handleSubmit} className="rating-form">
            {order.items.map((item, index) => (
              <div key={item.id || index} className="order-item">
                <img
                  src={getImageUrl(item.image) || "/assets/img/no_image.jpg"}
                  alt={item.name}
                  className="order-item-img"
                  onError={(e) => (e.target.src = "/assets/img/no_image.jpg")}
                />
                <div className="order-item-info">
                  <h4 className="order-item-name">{item.name}</h4>
                  <div className="order-item-details">
                    <span>
                      <strong>Qty:</strong> {item.quantity}
                    </span>
                    <span>
                      <strong>Price:</strong> ₹{item.price}
                    </span>
                  </div>

                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${star <= ratings[index]?.rating ? "active" : ""}`}
                        onClick={() => handleStarClick(index, star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button type="submit" className="rating-submit-btn">
              Submit Ratings
            </button>
          </form>
        </div>

        <style>{`
          .order-modal-overlay { position: fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.5); z-index:1050; display:flex; align-items:center; justify-content:center; }
          .order-modal { background:#fff; border-radius:14px; max-width:700px; width:95%; max-height:90vh; overflow-y:auto; position:relative; padding:24px; box-shadow:0 10px 30px rgba(0,0,0,0.1); animation: fadeIn 0.2s ease-out; }
          @keyframes fadeIn { from { opacity:0; transform: scale(0.95); } to { opacity:1; transform: scale(1); } }
          .order-close-btn { position:absolute; top:12px; right:16px; background:none; border:none; font-size:1.8rem; cursor:pointer; }
          .order-title { font-size:1.5rem; font-weight:bold; margin-bottom:20px; color:#0aad0a; text-align:center; }
          .order-item { display:flex; gap:12px; background:#f9f9f9; padding:10px; border-radius:10px; align-items:center; border:1px solid #e0e0e0; margin-bottom:15px; }
          .order-item-img { width:80px; height:80px; object-fit:cover; border-radius:8px; background:#fff; }
          .order-item-info { flex:1; }
          .order-item-name { font-size:1rem; font-weight:600; margin-bottom:4px; color:#333; }
          .order-item-details { font-size:0.9rem; color:#555; margin-bottom:6px; }
          .rating-stars { display:flex; gap:6px; font-size:1.6rem; cursor:pointer; }
          .star { color:#ccc; transition:color 0.2s; }
          .star.active { color:#FFD700; }
          .rating-submit-btn { background:#0aad0a; color:#fff; border:none; padding:12px; border-radius:8px; cursor:pointer; font-size:1rem; font-weight:600; transition: background 0.2s; display:block; margin:10px auto 0; }
          .rating-submit-btn:hover { background:#088408; }
        `}</style>
      </div>
    </div>
  );
};

export default RatingModal;