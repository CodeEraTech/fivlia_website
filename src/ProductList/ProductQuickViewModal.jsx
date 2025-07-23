import React, { useState } from "react";
import './ProductQuickViewModal.css';
import RelatedProducts from "./RelatedProducts";

const ProductQuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!product) return null;

  // Gather all images (main + variants)
  const images = product.productImageUrl && Array.isArray(product.productImageUrl)
    ? product.productImageUrl
    : product.image
      ? [product.image]
      : [];

  const variants = product.variants || [];
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const selectedVariant = variants[selectedVariantIdx] || {};

  const [selectedImage, setSelectedImage] = useState(images[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [descExpanded, setDescExpanded] = useState(false);

  // Reset selected image, quantity, and variant when product changes
  React.useEffect(() => {
    setSelectedImage(images[0] || '');
    setQuantity(1);
    setSelectedVariantIdx(0);
  }, [product]);

  if (!isOpen) return null;

  return (
    <div className="pqv-modal-overlay" onClick={onClose}>
      <div className="pqv-modal" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button className="pqv-close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="pqv-modal-content">
          <div className="pqv-details-row">
            {/* Left: Images */}
            <div className="pqv-modal-left">
              <div className="pqv-main-image-wrapper">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="pqv-main-image"
                  onError={e => { e.target.src = 'https://via.placeholder.com/400x400?text=No+Image'; }}
                />
              </div>
              {images.length > 1 && (
                <div className="pqv-thumbnails">
                  {images.map((img, idx) => (
                    <img
                      key={img + idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`pqv-thumbnail${selectedImage === img ? ' selected' : ''}`}
                      onClick={() => setSelectedImage(img)}
                      onError={e => { e.target.src = 'https://via.placeholder.com/60x60?text=No+Image'; }}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Right: Info */}
            <div className="pqv-modal-right">
              <h2 className="pqv-product-name">{product.name}</h2>
              <div className="pqv-product-meta">
                <span className="pqv-category">{product.category}</span>
                {product.brand && product.brand.toLowerCase() !== "unbranded" && (
                  <span className="pqv-brand">Brand: {product.brand}</span>
                )}
              </div>
              {/* Variant Selector */}
              {variants.length > 0 && (
                <div className="pqv-variant-selector">
                  {variants.map((variant, idx) => (
                    <button
                      key={variant._id || idx}
                      className={`pqv-variant-pill${selectedVariantIdx === idx ? ' selected' : ''}`}
                      onClick={() => setSelectedVariantIdx(idx)}
                      type="button"
                    >
                      {variant.variantValue || variant.attributeName || `Variant ${idx + 1}`}
                    </button>
                  ))}
                </div>
              )}
              <div className="pqv-product-desc">
                {product.description && product.description.length > 200 ? (
                  <>
                    {descExpanded
                      ? product.description
                      : product.description.slice(0, 200) + '...'}
                    <button
                      className="pqv-readmore-btn"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#0aad0a',
                        cursor: 'pointer',
                        fontWeight: 500,
                        marginLeft: 8,
                        fontSize: '1em',
                        padding: 0
                      }}
                      onClick={() => setDescExpanded(e => !e)}
                    >
                      {descExpanded ? 'Read less' : 'Read more'}
                    </button>
                  </>
                ) : (
                  product.description
                )}
              </div>
              <div className="pqv-product-price">
                <span className="pqv-price">₹{selectedVariant.sell_price || product.price}</span>
                {selectedVariant.mrp && selectedVariant.mrp > (selectedVariant.sell_price || product.price) && (
                  <span className="pqv-mrp">₹{selectedVariant.mrp}</span>
                )}
                {selectedVariant.discountValue && (
                  <span className="pqv-discount">{selectedVariant.discountValue}% OFF</span>
                )}
              </div>
              <div className="pqv-qty-add-row">
                <div className="pqv-qty-row">
                  <div className="pqv-qty-box">
                    <button
                      className="pqv-qty-btn"
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >-</button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="pqv-qty-input"
                    />
                    <button
                      className="pqv-qty-btn"
                      onClick={() => setQuantity(q => q + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                </div>
                <button
                  className="pqv-add-to-cart-btn"
                  onClick={() => onAddToCart({ ...product, selectedVariant }, quantity)}
                >
                  <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> Add to Cart
                </button>
              </div>
              {/* Variant Pills CSS */}
              <style>{`
                .pqv-variant-selector {
                  display: flex;
                  gap: 10px;
                  margin-bottom: 1rem;
                }
                .pqv-variant-pill {
                  border: 1px solid #0aad0a;
                  background: #fff;
                  color: #0aad0a;
                  border-radius: 20px;
                  padding: 6px 18px;
                  cursor: pointer;
                  font-weight: 500;
                  transition: background 0.18s, color 0.18s;
                }
                .pqv-variant-pill.selected,
                .pqv-variant-pill:hover {
                  background: #0aad0a;
                  color: #fff;
                }
              `}</style>
            </div>
          </div>
          <div className="pqv-related-section">
            <hr className="pqv-separator" />
            <RelatedProducts productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickViewModal; 