import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import ProductQuickViewModal from "./ProductQuickViewModal";

const ProductItem = ({ products = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

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

  if (!products || products.length === 0) {
    return (
      <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
        <div className="col-12 text-center">
          <p className="text-muted">No products available</p>
        </div>
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
      <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
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
                    onClick={() => handleQuickView(product)}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                    }}
                  />
                  <div className="card-product-action">
                    <Link
                      to="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                      style={{ marginRight: '8px' }}
                    >
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="text-small mb-1">
                  <Link to={`/category/${product.category_id}`} className="text-decoration-none text-muted">
                    <small>{product.category}</small>
                  </Link>
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
                    onClick={() => handleQuickView(product)}
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
      </div>
    </>
  );
};

export default ProductItem;
