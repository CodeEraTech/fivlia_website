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
import { Helmet } from "react-helmet-async";
import ShareButtons from "../utils/ShareButtons";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getImageUrl = useImageUrl();

  // ✅ Always declare all hooks before any conditional returns
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(location.state?.product || null);

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [descExpanded, setDescExpanded] = useState(false);

  const slug = location.pathname.split("/").pop();

  // ✅ Fetch product if not passed via state
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setError(null);
        setLoading(true);

        // If product already exists from router state, skip API call
        if (location.state?.product) {
          setProduct(location.state.product);
          setLoading(false);
          return;
        }

        if (slug) {
          const response = await get(ENDPOINTS.PRODUCT_DETAILS(slug));
          const apiProduct = response.data?.product;

          if (apiProduct) {
            const processedProduct = {
              id: apiProduct._id,
              name: apiProduct.productName,
              description: apiProduct.description,
              image: getImageUrl(apiProduct.productImageUrl?.[0]),
              price:
                apiProduct.sell_price || apiProduct.variants?.[0]?.sell_price,
              mrp: apiProduct.mrp || apiProduct.variants?.[0]?.mrp,
              category: apiProduct.category?.[0]?.name || "Category",
              category_id: apiProduct.category?.[0]?._id || "",
              brand: apiProduct.brand_Name?.name || "Brand",
              brandId: apiProduct.brand_Name?._id || "",
              unit: apiProduct.unit?.name || "",
              tax: apiProduct.tax,
              rating: 4.5,
              review_count: 0,
              discount_percentage: apiProduct.variants?.[0]?.discountValue || 0,
              is_hot: apiProduct.feature_product || false,
              is_new: false,
              sku: apiProduct.sku,
              status: apiProduct.status,
              productImageUrl: apiProduct.productImageUrl,
              inCart: apiProduct.inCart?.status || false,
              variants: apiProduct.variants || [],
              inventory: apiProduct.inventory || [],
              isVeg: apiProduct.isVeg,
              soldBy: apiProduct.storeName || "",
              storeId: apiProduct.storeId || null,
              isOfficalStore: apiProduct.official || false,
              slug: apiProduct.slug,
            };
            setProduct(processedProduct);
          } else {
            setError("Product not found");
          }
        } else {
          setError("No product slug found");
        }
      } catch (err) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  // ✅ Update image/variant state when product changes
  useEffect(() => {
    if (product) {
      const images =
        product.productImageUrl && Array.isArray(product.productImageUrl)
          ? product.productImageUrl
          : product.image
          ? [product.image]
          : [];
      setSelectedImage(images[0] || "");
      setQuantity(1);
      setSelectedVariantIdx(0);
    }
  }, [product]);

  // ✅ Early return AFTER all hooks
  if (loading)
    return (
      <center>
        <h5>Loading...</h5>
      </center>
    );
  if (!product || error)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <div style={{ fontSize: "1.2rem", color: "#e53935", marginBottom: 16 }}>
          {error || "No product data provided."}
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

  // ✅ Normal rendering (now safe)
  const images =
    product.productImageUrl && Array.isArray(product.productImageUrl)
      ? product.productImageUrl
      : product.image
      ? [product.image]
      : [];

  const variants = product.variants || [];
  const selectedVariant = variants[selectedVariantIdx] || {};

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
      {/* SEO Tags */}
      <Helmet>
        <title>{product.productName || product.name}</title>
        <meta
          property="og:title"
          content={product.productName || product.name}
        />
        <meta
          property="og:description"
          content={product.description?.slice(0, 100)}
        />
        <meta
          property="og:image"
          content={getImageUrl(selectedImage || "/assets/img/no_image.jpg")}
        />
        <meta
          property="og:url"
          content={`https://fivlia.com/product/${product.id}`}
        />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={product.productName || product.name}
        />
        <meta
          name="twitter:description"
          content={product.description?.slice(0, 100)}
        />
        <meta
          name="twitter:image"
          content={getImageUrl(selectedImage || "/assets/img/no_image.jpg")}
        />
      </Helmet>

      <div className="pqv-details-row">
        {/* LEFT: Images */}
        <div className="pqv-modal-left">
          <div className="pqv-main-image-wrapper">
            <img
              src={getImageUrl(selectedImage || "/assets/img/no_image.jpg")}
              alt={product.productName || product.name}
              className="pqv-main-image"
              onError={(e) => (e.target.src = "/assets/img/no_image.jpg")}
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
                  onError={(e) => (e.target.src = "/assets/img/no_image.jpg")}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div className="pqv-modal-right">
          <h2 className="pqv-product-name">
            {product.name || product.productName}
          </h2>

          {/* META */}
          <div className="pqv-product-meta">
            {(product.brand || product.brand_Name?.name) && (
              <>
                <span className="pqv-brand">SKU: {product.sku}</span>
                <span className="pqv-brand">
                  Brand:{" "}
                  <Link
                    to={`/brand?id=${
                      product.brandId || product.brand_Name?._id
                    }`}
                  >
                    {product.brand || product.brand_Name?.name}
                  </Link>
                </span>
              </>
            )}
            {product.storeId && (
              <div className="text-small mb-1">
                <span className="text-muted">
                  Sold By:{" "}
                  <Link to={`/seller-products?id=${product.storeId}`}>
                    {product.soldBy}
                  </Link>
                </span>
              </div>
            )}
          </div>

          {/* VARIANTS */}
          {variants.length > 0 && (
            <div className="pqv-variant-selector">
              {variants.map((variant, idx) => (
                <button
                  key={variant._id || idx}
                  className={`pqv-variant-pill${
                    selectedVariantIdx === idx ? " selected" : ""
                  }`}
                  onClick={() => setSelectedVariantIdx(idx)}
                >
                  {variant.variantValue ||
                    variant.attributeName ||
                    `Variant ${idx + 1}`}
                </button>
              ))}
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="pqv-product-desc">
            {product.description?.length > 200 ? (
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

          {/* PRICE */}
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
            <ShareButtons product={product} />
          </div>

          {/* STOCK */}
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

          {/* QUANTITY + CART */}
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
            <Link
              to={
                `/explore-other-seller?id=${product.id || product._id}` +
                `&sid=${product.storeId}`
              }
            >
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
