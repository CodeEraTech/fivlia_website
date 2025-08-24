import React, { useEffect, useState } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductShimmer from './ProductShimmer';
import { useImageUrl } from "../utils/getSettingsValue";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(ENDPOINTS.FEATURED_PRODUCTS)
      .then((response) => {
        if (response.data && response.data.products) {
          const processedProducts = response.data.products.map((product) => ({
            id: product._id,
            name: product.productName,
            description: product.description,
            image: getImageUrl(product.productImageUrl?.[0]),
            price: product.sell_price || product.variants[0].sell_price,
            mrp: product.mrp || product.variants[0].mrp,
            category: product.category?.[0]?.name || 'Category',
            category_id: product.category?.[0]?._id || '',
            brand: product.brand_Name?.name || 'Brand',
            brandId: product.brand_Name?._id || '',
            unit: product.unit?.name || '',
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
          }));
          setProducts(processedProducts);
        } else {
          setError('Failed to fetch popular products');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return (
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className='h3style' data-title="Featured Products">Featured Products</h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <ProductShimmer count={10} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className='h3style' data-title="Featured Products">Featured Products</h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-warning" role="alert">
                <i className="fa fa-exclamation-triangle me-2"></i>
                {error}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Featured Products Start*/}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className='h3style' data-title="Featured Products">Featured Products</h3>
                <div className="wt-separator bg-primarys">
                </div>
                <div className="wt-separator2 bg-primarys">
                </div>
              </div>
            </div>
          </div>
          <ProductItem products={products} />
        </div>
      </section>
      {/* Featured Products End*/}
    </div>
  );
};

export default FeaturedProducts; 