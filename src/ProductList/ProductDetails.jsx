import { useLocation, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RelatedProducts from "./RelatedProducts";
import AddToCartButton from "../Component/AddToCartButton";
import { useImageUrl } from "../utils/getSettingsValue";
import {
  isOutOfStock,
  getStockStatusText,
  getStockStatusColor,
  getAvailableStock,
} from "../utils/stockUtils";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getImageUrl = useImageUrl();
  const product = location.state?.product;

  if (!product)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <div style={{ fontSize: "1.2rem", color: "#e53935", marginBottom: 16 }}>
          No product data provided.
          <br />
          Please access this page via the product search or product list.
        </div>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "0.5rem 1.5rem",
            background: "#0aad0a",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    );

  // Gather all images (main + variants)
  const images =
    product.productImageUrl && Array.isArray(product.productImageUrl)
      ? product.productImageUrl
      : product.image
      ? [product.image]
      : [];

  const variants = product.variants || [];
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const selectedVariant = variants[selectedVariantIdx] || {};

  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [descExpanded, setDescExpanded] = useState(false);

  // Reset selected image, quantity, and variant when product changes
  useEffect(() => {
    setSelectedImage(images[0] || "");
    setQuantity(1);
    setSelectedVariantIdx(0);
  }, [product]);

  // Check stock status
  const outOfStock = isOutOfStock(product, selectedVariant);
  const stockStatusText = getStockStatusText(product, selectedVariant);
  const stockStatusColor = getStockStatusColor(product, selectedVariant);
  const availableStock = getAvailableStock(product, selectedVariant);

  return (
    <div
      className="container-fluid pqv-modal-content"
      style={{
        margin: "2rem auto",
        background: "transparent",
        boxShadow: "none",
        borderRadius: 0,
        border: "none",
        overflowX: "hidden",
      }}
    >
      <div className="pqv-details-row">
        {/* Left: Images */}
        <div className="pqv-modal-left">
          <div className="pqv-main-image-wrapper">
            <img
              src={getImageUrl(selectedImage || "/assets/img/no_image.jpg")}
              alt={product.productName || product.name}
              className="pqv-main-image"
              onError={(e) => {
                e.target.src = "/assets/img/no_image.jpg";
              }}
            />
          </div>
          {images.length > 1 && (
            <div className="pqv-thumbnails">
              {images.map((img, idx) => (
                <img
                  key={img + idx}
                  src={getImageUrl(img || "/assets/img/no_image.jpg")}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`pqv-thumbnail${
                    selectedImage === img ? " selected" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                  onError={(e) => {
                    e.target.src = "/assets/img/no_image.jpg";
                  }}
                />
              ))}
            </div>
          )}
        </div>
        {/* Right: Info */}
        <div className="pqv-modal-right">
          <h2 className="pqv-product-name">
            {product.name || product.productName}
          </h2>
          <div className="pqv-product-meta">
            {/* <span className="pqv-category">
              {Array.isArray(product.category)
                ? product.category.map((c) => c.name).join(", ")
                : product.category?.name || product.category}

              {product.isVeg !== 0 && (
                <span
                  style={{
                    color: product.isVeg === 1 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  &nbsp;({product.isVeg === 1 ? "Veg" : "NonVeg"})
                </span>
              )}
            </span> */}
            {(product.brand || product.brand_Name.name) && (
              <>
                <span className="pqv-brand">SKU: {product.sku}</span>
                <span className="pqv-brand">
                  Brand:{" "}
                  <Link
                    to={`/brand?id=${
                      product.brandId || product.brand_Name?._id
                    }`}
                  >
                    {product.brand || product.brand_Name.name}
                  </Link>
                </span>
              </>
            )}
            {product.storeId && (
              <>
                <div className="text-small mb-1">
                  <span className="text-muted">
                    Sold By:{" "}
                    <Link to={`/seller-products?id=${product.storeId}`}>
                      {product.soldBy}
                    </Link>
                  </span>
                </div>
              </>
            )}
          </div>
          {/* Variant Selector */}
          {variants.length > 0 && (
            <div className="pqv-variant-selector">
              {variants.map((variant, idx) => (
                <button
                  key={variant._id || idx}
                  className={`pqv-variant-pill${
                    selectedVariantIdx === idx ? " selected" : ""
                  }`}
                  onClick={() => setSelectedVariantIdx(idx)}
                  type="button"
                >
                  {variant.variantValue ||
                    variant.attributeName ||
                    `Variant ${idx + 1}`}
                </button>
              ))}
            </div>
          )}
          <div className="pqv-product-desc">
            {product.description && product.description.length > 200 ? (
              <>
                {descExpanded
                  ? product.description
                  : product.description.slice(0, 200) + "..."}
                <button
                  className="pqv-readmore-btn"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0aad0a",
                    cursor: "pointer",
                    fontWeight: 500,
                    marginLeft: 8,
                    fontSize: "1em",
                    padding: 0,
                  }}
                  onClick={() => setDescExpanded((e) => !e)}
                >
                  {descExpanded ? "Read less" : "Read more"}
                </button>
              </>
            ) : (
              product.description
            )}
          </div>
          <div className="pqv-product-price">
            <span className="pqv-price">
              ₹{selectedVariant.sell_price || product.price}
            </span>
            {selectedVariant.mrp &&
              selectedVariant.mrp >
                (selectedVariant.sell_price || product.price) && (
                <span className="pqv-mrp">₹{selectedVariant.mrp}</span>
              )}
            {selectedVariant.discountValue && (
              <span className="pqv-discount">
                {selectedVariant.discountValue}% OFF
              </span>
            )}
          </div>

          {/* Stock Information */}
          <div className="pqv-stock-info" style={{ marginBottom: "1rem" }}>
            <div className="d-flex align-items-center">
              <span
                className="badge"
                style={{
                  backgroundColor: stockStatusColor,
                  color: "white",
                  fontSize: "0.8rem",
                  padding: "0.5rem 0.75rem",
                }}
              >
                {stockStatusText}
              </span>
              {!outOfStock && availableStock < 10 && (
                <small className="text-warning ms-2">
                  <i className="fa fa-exclamation-triangle me-1"></i>
                  Only {availableStock} left!
                </small>
              )}
            </div>
          </div>

          <div className="pqv-qty-add-row">
            <div className="pqv-qty-row">
              <div className="pqv-qty-box">
                <button
                  className="pqv-qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={outOfStock}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={outOfStock ? 0 : availableStock}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(
                        1,
                        Math.min(availableStock, parseInt(e.target.value) || 1)
                      )
                    )
                  }
                  className="pqv-qty-input"
                  disabled={outOfStock}
                />
                <button
                  className="pqv-qty-btn"
                  onClick={() =>
                    setQuantity((q) => Math.min(availableStock, q + 1))
                  }
                  aria-label="Increase quantity"
                  disabled={outOfStock || quantity >= availableStock}
                >
                  +
                </button>
              </div>
            </div>
            <AddToCartButton
              product={product}
              quantity={quantity}
              selectedVariant={selectedVariant}
              className="pqv-add-to-cart-btn"
            />
            <Link to={`/explore-other-seller?id=${product.id || product._id}`+`&sid=${product.storeId}`}>
              Explore Other Sellers
            </Link>
          </div>
        </div>
      </div>
      <div className="pqv-related-section">
        <hr className="pqv-separator" />
        <RelatedProducts productId={product._id || product.id} />
      </div>
      <style>{`
.pqv-details-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
}
@media (max-width: 900px) {
  .pqv-details-row {
    flex-direction: column;
    gap: 18px;
  }
  .pqv-modal-left, .pqv-modal-right {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .pqv-main-image-wrapper {
    width: 100vw;
    max-width: 100vw;
    height: 240px;
  }
}
@media (max-width: 600px) {
  .pqv-main-image-wrapper {
    width: 100vw;
    max-width: 100vw;
    height: 180px;
  }
  .pqv-product-name {
    font-size: 1.2rem;
  }
  .pqv-product-price {
    font-size: 1.1rem;
  }
  .pqv-add-to-cart-btn {
    font-size: 1rem;
    padding: 10px 10vw;
  }
  .pqv-modal-content {
    overflow-x: hidden;
  }
}
.pqv-modal-left {
  flex: 1.1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pqv-main-image-wrapper {
  width: 340px;
  height: 340px;
  background: #fafafa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.pqv-main-image {
  max-width: 95%;
  max-height: 95%;
  border-radius: 10px;
  object-fit: contain;
}
.pqv-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}
.pqv-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 7px;
  border: 2px solid transparent;
  cursor: pointer;
  background: #f5f5f5;
  transition: border 0.15s;
}
.pqv-thumbnail.selected {
  border: 2px solid #0aad0a;
}
.pqv-modal-right {
  flex: 1.2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 18px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  min-height: 0;
  padding-right: 32px;
  background: transparent;
}
.pqv-product-name {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.2em;
  color: #222;
}
.pqv-product-meta {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5em;
  display: flex;
  gap: 18px;
}
.pqv-brand {
  color: #444;
  font-weight: 500;
}
.pqv-product-desc {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 0.7em;
  line-height: 1.5;
}
.pqv-product-price {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0aad0a;
  display: flex;
  align-items: center;
  gap: 12px;
}
.pqv-mrp {
  font-size: 1.1rem;
  color: #b0b0b0;
  text-decoration: line-through;
  font-weight: 400;
}
.pqv-qty-row {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;
}
.pqv-qty-box {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  background: #fafafa;
  padding: 2px 8px;
  gap: 6px;
  height: 48px;
  min-width: 110px;
}
.pqv-qty-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  color: #0aad0a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.15s;
  box-shadow: 0 1px 2px rgba(10,173,10,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pqv-qty-btn:hover {
  background: #e6f7e6;
}
.pqv-qty-input {
  width: 40px;
  text-align: center;
  font-size: 1.1rem;
  border: none;
  background: transparent;
  outline: none;
  height: 40px;
  line-height: 40px;
}
.pqv-add-to-cart-btn {
  background: linear-gradient(90deg, #0aad0a 60%, #0a8d0a 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 32px;
  margin-top: 0;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(10,173,10,0.10);
  transition: background 0.18s, box-shadow 0.18s, transform 0.13s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  height: 48px;
  min-width: 160px;
}
.pqv-add-to-cart-btn:hover {
  background: linear-gradient(90deg, #0a8d0a 60%, #0aad0a 100%);
  box-shadow: 0 4px 16px rgba(10,173,10,0.08);
}
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
.pqv-separator {
  margin: 24px 0 16px 0;
  border: none;
  border-top: 1.5px solid #e0e0e0;
  width: 100%;
}
.pqv-qty-add-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: flex-start;
}
@media (max-width: 700px) {
  .pqv-qty-add-row {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .pqv-qty-row, .pqv-qty-box, .pqv-add-to-cart-btn {
    height: 40px;
    min-width: unset;
    padding-left: 0;
    padding-right: 0;
  }
}
`}</style>
    </div>
  );
};

export default ProductDetails;
