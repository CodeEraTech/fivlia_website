import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import ProductQuickViewModal from "./ProductQuickViewModal";
import { calculateDeliveryTime } from "../apis/googleMapsApi";

const ProductItem = ({ products = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const navigate = useNavigate();

  const handleAddClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: "Product has been added to your cart!",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  const handleQuickView = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalProduct(null);
  };

  const handleModalAddToCart = (product, quantity) => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `${quantity} x ${product.name} added to your cart!`,
      showConfirmButton: true,
      timer: 3000,
    });
    setModalOpen(false);
    setModalProduct(null);
  };

  // Helper function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa fa-star" />);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fa fa-star-half-o" />);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa fa-star-o" />);
    }
    return stars;
  };

  // Helper function to render badge
  const renderBadge = (product) => {
    if (product.discount_percentage > 0) {
      return <span className="badge bg-danger">{product.discount_percentage}% OFF</span>;
    }
    if (product.is_hot) {
      return <span className="badge bg-danger">Hot</span>;
    }
    if (product.is_new) {
      return <span className="badge bg-success">New</span>;
    }
    return null;
  };

  // Helper function to get delivery time
  const getDeliveryTime = (product) => {
    // Use product ID or a random seed to generate consistent delivery time
    const seed = product.id || Math.random();
    const deliveryTime = calculateDeliveryTime(seed, seed);
    return deliveryTime;
  };

  if (!products || products.length === 0) {
    return (
      <div className="product-flex-wrap">
        <div className="text-center w-100">
          <p className="text-muted">No products available</p>
        </div>
        <style>{`
          .product-flex-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: flex-start;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 280px;
            width: 280px;
            max-width: 280px;
            min-width: 280px;
            display: flex;
          }
          .product-flex-wrap .card-product {
            min-height: 420px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .product-flex-wrap .card-product .card-body {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            justify-content: space-between;
          }
          @media (max-width: 1200px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 45vw;
              width: 45vw;
              max-width: 100vw;
              min-width: 220px;
            }
          }
          @media (max-width: 900px) {
            .product-flex-wrap {
              gap: 1.2rem;
            }
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 90vw;
              width: 90vw;
              max-width: 100vw;
              min-width: 180px;
            }
          }
          @media (max-width: 600px) {
            .product-flex-wrap {
              gap: 0.7rem;
            }
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 98vw;
              width: 98vw;
              max-width: 100vw;
              min-width: 140px;
            }
            .product-flex-wrap .card-product {
              min-height: 320px;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <ProductQuickViewModal
        product={modalProduct}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onAddToCart={handleModalAddToCart}
      />
      <div className="product-flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="col fade-zoom">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  {renderBadge(product) && (
                    <div className="position-absolute top-0 start-0">
                      {renderBadge(product)}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-3 img-fluid"
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                    onError={(e) => {
                      e.target.src = '/assets/img/no_image.jpg';
                    }}
                  />
                  {/* <div className="card-product-action" style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                      style={{ marginRight: '4px', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    >
                      <i className="fa fa-heart" />
                    </button>
                    <button
                      className="btn-action"
                      title="Quick View"
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                      onClick={() => handleQuickView(product)}
                    >
                      <i className="fa fa-eye" />
                    </button>
                  </div> */}
                </div>
                {/* Category and Delivery Time Row */}
                <div className="category-delivery-row">
                  <span className="text-muted small">{product.category}</span>
                  <div className="delivery-time-display">
                    <i className="fa fa-clock-o" style={{ marginRight: '4px', color: '#0AAD0A' }}></i>
                    <span className="delivery-time-text">{getDeliveryTime(product)} min</span>
                  </div>
                </div>
                {product.brand && (
                  <div className="text-small mb-1">
                    <span className="text-muted">Brand: {product.brand}</span>
                  </div>
                )}
                <h2 className="fs-6">
                  <span
                    className="text-inherit text-decoration-none"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                  >
                    {product.name}
                  </span>
                </h2>
                <div>
                  <small className="text-warning">
                    {renderStars(product.rating)}
                  </small>{' '}
                  <span className="text-muted small">
                    {product.rating} ({product.review_count})
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-dark">₹{product.price}</span>{' '}
                    {product.mrp && product.mrp > product.price && (
                      <span className="text-decoration-line-through text-muted">
                        ₹{product.mrp}
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleQuickView(product)}
                    >
                      <i className="fa fa-plus" />{' '}
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <style>{`
          .product-flex-wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 230px;
            width: 230px;
            max-width: 230px;
            min-width: 230px;
            display: flex;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .card-product {
            min-height: 420px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .product-flex-wrap .card-product .card-body {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            justify-content: space-between;
          }
          .category-delivery-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }
          .delivery-time-display {
            background: rgba(10, 173, 10, 0.1);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
          }
          .delivery-time-text {
            font-size: 0.75rem;
            color: #0AAD0A;
            font-weight: 600;
          }
          @media (max-width: 1200px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 23vw;
              width: 23vw;
              max-width: 100vw;
              min-width: 160px;
            }
          }
          @media (max-width: 900px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 45vw;
              width: 45vw;
              max-width: 100vw;
              min-width: 140px;
            }
          }
          @media (max-width: 600px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 1 1 100%;
              width: 100%;
              max-width: 100%;
              min-width: 0;
              box-sizing: border-box;
            }
            .product-flex-wrap {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .product-flex-wrap .card-product {
              min-height: 320px;
            }
            .delivery-time-text {
              font-size: 0.7rem;
            }
            .delivery-time-display {
              padding: 0.2rem 0.4rem;
            }
          }
        `}</style>
        <style>{`
          .btn-action {
            background: #0aad0a !important;
            color: #fff !important;
            border-radius: 7px;
            padding: 6px 8px;
            font-size: 1.1rem;
            transition: background 0.18s;
            border: none;
            outline: none;
            box-shadow: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .btn-action:focus, .btn-action:active, .btn-action:hover {
            background: #088a08 !important;
            color: #fff !important;
            border: none;
            outline: none;
            box-shadow: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default ProductItem;
