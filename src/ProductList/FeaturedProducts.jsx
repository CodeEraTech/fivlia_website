import React, { useEffect, useState } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";
import Slider from "react-slick";
import ProductQuickViewModal from "./ProductQuickViewModal";
import bannerdeal from "../images/banner-deal1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [modalKey, setModalKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(ENDPOINTS.FEATURED_PRODUCTS)
      .then((res) => {
        setProducts(res.data.products || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Map products to match card structure
  const mappedProducts = products.map(prod => ({
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
  }));

  // Modal logic
  React.useEffect(() => {
    if (!modalProduct && pendingProduct) {
      setModalProduct(pendingProduct);
      setModalKey(Date.now());
      setPendingProduct(null);
    }
  }, [modalProduct, pendingProduct]);

  const handleQuickView = (prod) => {
    if (modalProduct) {
      setPendingProduct(prod);
      setModalProduct(null);
    } else {
      setModalProduct(prod);
      setModalKey(Date.now());
    }
  };
  const handleModalClose = () => setModalProduct(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Helper to ensure rating is always a number
  const getNumericRating = (rating) => {
    const num = typeof rating === 'number' ? rating : Number(rating && rating.rate !== undefined ? rating.rate : rating);
    return isNaN(num) ? 0 : num;
  };

  if (loading) return <div className="featured-loading">Loading featured products...</div>;
  if (error) return <div className="featured-error">{error}</div>;
  if (!mappedProducts.length) return <div className="featured-empty">No featured products found.</div>;

  return (
    <section className="mt-8">
      {modalProduct && (
        <ProductQuickViewModal
          key={modalKey}
          product={modalProduct}
          isOpen={!!modalProduct}
          onClose={handleModalClose}
          onAddToCart={() => {}}
        />
      )}
      <style>{`
        /* Fix product card height (reduced) */
        .card.card-product {
          min-height: 320px;
          max-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
        }
        /* Center product image */
        .card.card-product .text-center.position-relative {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card.card-product img.mb-3.img-fluid {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        /* Ensure slider dots are not overlapped and reduce gap */
        .image-itemss .slick-dots {
          margin-top: 8px !important;
          margin-bottom: 0 !important;
          position: relative;
          bottom: 0;
        }
        .image-itemss .slick-dots li {
          margin: 0 2px !important;
        }
        .image-itemss .slick-dots li button:before {
          font-size: 10px !important;
        }
        .card-product .btn-action {
          border: none !important;
          background: none !important;
          box-shadow: none !important;
        }
        .card-product .btn-action:focus, .card-product .btn-action:active, .card-product .btn-action:hover {
          border: none !important;
          background: none !important;
          box-shadow: none !important;
        }
        .card-product .fa-heart {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
          background: #0aad0a !important;
          color: #fff !important;
          border-radius: 7px;
          padding: 6px 8px;
          font-size: 1.1rem;
          transition: background 0.18s;
        }
        .card-product .fa-heart:hover {
          background: #088a08 !important;
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-6">
            <div className="section-head text-center mt-8">
              <h3 className="h3style" data-title="Daily Best Sells">
                Featured Products
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-3 fade-in-left">
            <div
              className="pt-8 px-8 rounded-3"
              style={{
                background: `url(${bannerdeal})no-repeat`,
                backgroundSize: "cover",
                height: 400,
              }}
            >
              <div>
                <h3 className="fw-bold text-white">
                  100% Organic Coffee Beans.
                </h3>
                <p className="text-white">Get the best deal before close.</p>
                <a href="#" className="btn btn-primary">
                  Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="image-itemss">
              <Slider {...sliderSettings}>
                {mappedProducts.map((prod) => {
                  const numericRating = getNumericRating(prod.rating);
                  return (
                    <div className="images swiper-slide px-4" key={prod.id}>
                      <div className="col">
                        <div className="card card-product">
                          <div className="card-body">
                            <div className="text-center position-relative ">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="mb-3 img-fluid"
                                style={{ height: 120, objectFit: "cover", cursor: "pointer" }}
                                onClick={() => handleQuickView(prod)}
                                onError={e => { e.target.src = 'https://via.placeholder.com/200x200?text=No+Image'; }}
                              />
                              {/* Star rating below image */}
                              <div style={{ margin: '0.25rem 0 0.5rem 0' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i
                                    key={i}
                                    className={
                                      i < Math.floor(numericRating)
                                        ? 'fa fa-star text-warning'
                                        : (i < numericRating ? 'fa fa-star-half-o text-warning' : 'fa fa-star-o text-warning')
                                    }
                                    style={{ fontSize: '1rem', marginRight: 2 }}
                                  />
                                ))}
                                <span style={{ fontSize: '0.9rem', color: '#888', marginLeft: 4 }}>
                                  {numericRating.toFixed(1)}
                                </span>
                              </div>
                              <div className="card-product-action">
                                <button
                                  className="btn-action"
                                  title="Wishlist"
                                  style={{ marginRight: 8, border: 'none', background: 'none', boxShadow: 'none' }}
                                >
                                  <i className="fa fa-heart" />
                                </button>
                              </div>
                            </div>
                            <div className="text-small mb-1">
                              <span className="text-muted small">{prod.category}</span>
                            </div>
                            <h2 className="fs-6">
                              <span
                                className="text-inherit text-decoration-none"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleQuickView(prod)}
                              >
                                {prod.name}
                              </span>
                            </h2>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <span className="text-dark">₹{prod.price}</span>{' '}
                                {prod.mrp && prod.mrp > prod.price && (
                                  <span className="text-decoration-line-through text-muted">
                                    ₹{prod.mrp}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 