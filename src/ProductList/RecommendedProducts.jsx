import React, { useEffect, useState, useRef } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";
import ProductQuickViewModal from "./ProductQuickViewModal";
import { useImageUrl } from "../utils/getSettingsValue";

const RecommendedProducts = () => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [modalKey, setModalKey] = useState(0);
  const getImageUrl = useImageUrl();
  const containerRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(`${ENDPOINTS.RECOMMANDED_PRODUCTS}`, { authRequired: true })
      .then((res) => {
        setRecommended(res.data.relatedProducts || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!modalProduct && pendingProduct) {
      setModalProduct(pendingProduct);
      setModalKey(Date.now());
      setPendingProduct(null);
    }
  }, [modalProduct, pendingProduct]);

  const handleQuickView = (prod) => {
    const mapped = mapProductForModal(prod);
    console.log(prod, mapped, 8747843);
    if (modalProduct) {
      setPendingProduct(mapped);
      setModalProduct(null);
    } else {
      setModalProduct(mapped);
      setModalKey(Date.now());
    }
  };

  const handleModalClose = () => {
    setModalProduct(null);
  };

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollWidth > el.clientWidth + el.scrollLeft);
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [recommended]);

  if (loading) {
    return (
      <div className="container">
        <CustomShimmer count={5} />
      </div>
    );
  }

  if (error) return <div className="related-error"></div>; //{error}
  if (!recommended.length)
    return <div className="related-empty">No recommended products found.</div>;

  const mappedProducts = recommended.map((product) => ({
    id: product._id,
    name: product.productName,
    description: product.description,
    image: getImageUrl(product.productImageUrl?.[0]),
    price: product.sell_price || product.variants[0].sell_price,
    mrp: product.mrp || product.variants[0].mrp,
    category: product.category?.[0]?.name || "Category",
    category_id: product.category?.[0]?._id || "",
    brand: product.brand_Name?.name || "Brand",
    brandId: product.brand_Name?._id || "",
    unit: product.unit?.name || "",
    tax: product.tax,
    rating: 4.5, // Default rating since not in API
    review_count: 0, // Default since not in API
    discount_percentage: product.variants?.[0]?.discountValue || 0,
    is_hot: product.feature_product || false,
    is_new: false, // Default since not in API
    sku: product.sku,
    status: product.status,
    productImageUrl: product.productImageUrl,
    inCart: product.inCart?.status || false,
    variants: product.variants || [],
    inventory: product.inventory || [],
    isVeg: product.isVeg,
    soldBy: product.storeName || "",
    storeId: product.storeId || null,
    isOfficalStore: product.official || false,
    slug: product.slug,
  }));

  return (
    <div className="container recommended-products-container">
      <style>{`
        .recommended-products-container {
          position: relative;
          padding-top: 10px;
        }

        .section-head-recom h3 {
          font-size: 16px;
          margin-bottom: 0px;
        }

        .recommended-products-scroll-container {
          position: relative;
        }

        .recommended-products-row {
          display: flex;
          overflow-x: auto;
          gap: 15px;
          scroll-behavior: smooth;
          padding: 10px 0;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }

        .recommended-products-row::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .recommended-product-box {
          display: flex;
          align-items: center;
          width: 250px;
          height:110px;
          background: #fff;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          flex-shrink: 0;
        }

        .recommended-product-img {
          width: 80px;
          height: 80px;
          border-radius: 6px;
          object-fit: cover;
          cursor: pointer;
          margin-right: 15px;
        }

        .product-details {
          flex: 1;
        }

        .product-name {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-sku {
          font-size: 14px;
          color: #666;
        }

        .add-to-cart-btn {
          background: #0aad0a;
          color: #fff;
          border: none;
          padding: 2px 10px;
          font-size: 14px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .add-to-cart-btn:hover {
          background: #0aad0a;
        }

        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .scroll-button.left {
          left: -10px;
        }

        .scroll-button.right {
          right: -10px;
        }

        .scroll-button i {
          font-size: 16px;
          color: #333;
        }

        .shimmer-container {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding: 10px 0;
        }

        .shimmer-box {
          display: flex;
          align-items: center;
          width: 320px;
          height: 100px;
          background-color: #f0f0f0;
          border-radius: 8px;
          padding: 10px;
        }

        .shimmer-img {
          width: 80px;
          height: 80px;
          background: #ddd;
          border-radius: 6px;
          flex-shrink: 0;
          animation: shimmer 1.5s infinite linear;
        }

        .shimmer-content {
          margin-left: 15px;
          flex: 1;
        }

        .shimmer-line {
          height: 16px;
          background: #ddd;
          margin-bottom: 8px;
          border-radius: 4px;
          animation: shimmer 1.5s infinite linear;
        }

        .shimmer-line.short {
          width: 60%;
        }

        .shimmer-line.long {
          width: 90%;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      {modalProduct && (
        <ProductQuickViewModal
          key={modalKey}
          product={modalProduct}
          isOpen={!!modalProduct}
          onClose={handleModalClose}
          onAddToCart={() => {}}
        />
      )}

      <div className="section-head-recom text-left">
        <h3 className="" data-title="Recommended Products">
          Recommended Products
        </h3>
      </div>

      <div className="recommended-products-scroll-container">
        {showLeft && (
          <button className="scroll-button left" onClick={scrollLeft}>
            <i className="fa fa-chevron-left" />
          </button>
        )}
        <div className="recommended-products-row" ref={containerRef}>
          {mappedProducts.map((product) => (
            <div key={product.id} className="recommended-product-box">
              <img
                src={product.image}
                alt={product.name}
                className="recommended-product-img"
                onClick={() => handleQuickView(product)}
              />
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-meta">
                  <div className="product-sku">SKU: {product.sku}</div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleQuickView(product)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showRight && (
          <button className="scroll-button right" onClick={scrollRight}>
            <i className="fa fa-chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
};

// Custom shimmer loader
const CustomShimmer = ({ count = 5 }) => {
  return (
    <div className="shimmer-container">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="shimmer-box">
          <div className="shimmer-img"></div>
          <div className="shimmer-content">
            <div className="shimmer-line long"></div>
            <div className="shimmer-line short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Dummy mapProductForModal to prevent error if missing
function mapProductForModal(product) {
  return product;
}

export default RecommendedProducts;
