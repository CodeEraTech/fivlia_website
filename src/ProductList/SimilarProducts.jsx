import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import ProductShimmer from "./ProductShimmer";
import { useImageUrl } from "../utils/getSettingsValue";
import { useSearchParams } from "react-router-dom";

const SimilarProducts = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    if (!productId) return;

    const fetchSimilarProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await get(
          `${ENDPOINTS.SIMILAR_PRODUCT}/${productId}`,
          { authRequired: true }
        );

        if (response.data && response.data.products) {
          const processedProducts = response.data.products.map(
            (product) => ({
              id: product._id,
              name: product.productName,
              description: product.description,
              image: getImageUrl(product.productImageUrl?.[0]),
              price: product.sell_price || product.variants?.[0]?.sell_price,
              mrp: product.mrp || product.variants?.[0]?.mrp,
              category: product.category?.[0]?.name || "Category",
              category_id: product.category?.[0]?._id || "",
              brand: product.brand_Name?.name || "Brand",
              brandId: product.brand_Name?._id || "",
              unit: product.unit?.name || "",
              tax: product.tax,
              rating: 4.5,
              review_count: 0,
              discount_percentage: product.variants?.[0]?.discountValue || 0,
              is_hot: product.feature_product || false,
              is_new: false,
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
            })
          );

          setProducts(processedProducts);
        } else {
          setError("No similar products found.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch similar products");
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [productId]);

  // Loading State
  if (loading) {
    return (
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className="h3style" data-title="Similar Products">
                  Similar Products
                </h3>
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

  // Error State
  if (error) {
    return (
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className="h3style" data-title="Similar Products">
                  Similar Products
                </h3>
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

  // Render UI
  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <div className="section-head text-center mt-8">
              <h3 className="h3style" data-title="Similar Products">
                Similar Products
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>
        <ProductItem products={products} />
      </div>
    </section>
  );
};

export default SimilarProducts;
