import React, { useEffect, useState, useRef } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";
import ProductQuickViewModal from "./ProductQuickViewModal";

const RelatedProducts = ({ productId }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [modalKey, setModalKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(`${ENDPOINTS.RELATED_PRODUCTS}&productId=${productId}`)
      .then((res) => {
        setRelated(res.data.relatedProducts || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  // Map product to robust structure for modal
  const mapProductForModal = (prod) => ({
    id: prod._id,
    name: prod.productName || prod.name,
    image: prod.productImageUrl && prod.productImageUrl[0],
    price: prod.sell_price || prod.price,
    mrp: prod.mrp,
    brand: prod.brand_Name && prod.brand_Name.name,
    category: prod.category && prod.category[0] && prod.category[0].name,
    category_id: prod.category && prod.category[0] && prod.category[0]._id,
    rating: prod.rating || 0,
    review_count: prod.review_count || 0,
    discount_percentage: prod.discount_percentage || 0,
    is_hot: prod.is_hot || false,
    is_new: prod.is_new || false,
    description: prod.description || '',
    productImageUrl: prod.productImageUrl,
    variants: prod.variants || [],
  });

  // When modal closes, if a pending product exists, open it
  useEffect(() => {
    if (!modalProduct && pendingProduct) {
      setModalProduct(pendingProduct);
      setModalKey(Date.now());
      setPendingProduct(null);
    }
  }, [modalProduct, pendingProduct]);

  const handleQuickView = (prod) => {
    const mapped = mapProductForModal(prod);
    if (modalProduct) {
      setPendingProduct(mapped);
      setModalProduct(null); // This will trigger the effect above
    } else {
      setModalProduct(mapped);
      setModalKey(Date.now());
    }
  };

  const handleModalClose = () => {
    setModalProduct(null);
  };

  if (loading) return <div className="related-loading">Loading related products...</div>;
  if (error) return <div className="related-error">{error}</div>;
  if (!related.length) return <div className="related-empty">No related products found.</div>;

  return (
    <div className="related-products-row-wrapper">
      {modalProduct && (
        <ProductQuickViewModal
          key={modalKey}
          product={modalProduct}
          isOpen={!!modalProduct}
          onClose={handleModalClose}
          onAddToCart={() => {}}
        />
      )}
      <h3 className="related-title">Related Products</h3>
      <div className="related-products-row">
        {related.map((prod) => (
          <div className="related-product-modern-card" key={prod._id}>
            <div className="related-modern-img-wrap">
              <img
                src={prod.productImageUrl && prod.productImageUrl[0]}
                alt={prod.productName}
                className="related-modern-img"
                onError={e => { e.target.src = 'https://via.placeholder.com/60x60?text=No+Image'; }}
              />
            </div>
            <div className="related-modern-info">
              <div className="related-modern-name" title={prod.productName}>{prod.productName}</div>
              <div className="related-modern-bottom">
                <span className="related-modern-price">₹{prod.sell_price}</span>
                <button className="related-modern-add" title="Quick View" onClick={() => handleQuickView(prod)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .related-products-row-wrapper {
          width: 100%;
          margin: 0 auto;
          padding: 0 0 8px 0;
        }
        .related-title {
          text-align: center;
          font-size: 1.18rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #222;
          letter-spacing: 0.5px;
        }
        .related-products-row {
          display: flex;
          flex-direction: row;
          gap: 24px;
          overflow-x: auto;
          padding: 16px 0 16px 0;
          scrollbar-width: thin;
          justify-content: flex-start;
        }
        .related-product-modern-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(10,173,10,0.07), 0 1.5px 6px rgba(0,0,0,0.04);
          border: 1.5px solid #f0f0f0;
          min-width: 240px;
          max-width: 270px;
          width: 24vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 22px 14px 18px 14px;
          transition: box-shadow 0.18s, border 0.18s, transform 0.13s;
          cursor: pointer;
          height: 100%;
          justify-content: space-between;
        }
        .related-product-modern-card:hover {
          box-shadow: 0 6px 24px rgba(10,173,10,0.13), 0 2px 8px rgba(0,0,0,0.08);
          border: 1.5px solid #0aad0a;
          transform: translateY(-2px) scale(1.03);
        }
        .related-modern-img-wrap {
          width: 100px;
          height: 100px;
          border-radius: 16px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .related-modern-img {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 12px;
          background: #fff;
        }
        .related-modern-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1 1 auto;
          justify-content: space-between;
        }
        .related-modern-name {
          font-size: 1.08rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
          text-align: center;
          word-break: break-word;
          white-space: normal;
          max-width: 180px;
        }
        .related-modern-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 32px;
        }
        .related-modern-price {
          font-size: 1.18rem;
          color: #0aad0a;
          font-weight: 700;
        }
        .related-modern-add {
          background: #0aad0a;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          margin-left: 2px;
          cursor: pointer;
          transition: background 0.15s, box-shadow 0.15s;
          box-shadow: 0 1px 4px rgba(10,173,10,0.08);
        }
        .related-modern-add:hover {
          background: #0a8d0a;
        }
        @media (max-width: 900px) {
          .related-product-modern-card {
            min-width: 180px;
            max-width: 210px;
            width: 44vw;
            padding: 14px 6px 12px 6px;
          }
          .related-modern-img-wrap {
            width: 70px;
            height: 70px;
          }
          .related-modern-img {
            width: 60px;
            height: 60px;
          }
          .related-modern-name {
            max-width: 90px;
            font-size: 0.97rem;
          }
        }
        @media (max-width: 600px) {
          .related-product-modern-card {
            min-width: 130px;
            max-width: 150px;
            width: 70vw;
            padding: 10px 4px 10px 4px;
          }
          .related-modern-img-wrap {
            width: 48px;
            height: 48px;
          }
          .related-modern-img {
            width: 40px;
            height: 40px;
          }
          .related-modern-name {
            max-width: 60px;
            font-size: 0.89rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RelatedProducts; 