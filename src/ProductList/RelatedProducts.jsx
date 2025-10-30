import React, { useEffect, useState, useRef } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints.jsx";
import ProductQuickViewModal from "./ProductQuickViewModal";
import ProductItem from "./ProductItem";
import ProductShimmer from "./ProductShimmer";
import { useImageUrl } from "../utils/getSettingsValue";

const RelatedProducts = ({ productId }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [modalKey, setModalKey] = useState(0);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(`${ENDPOINTS.RELATED_PRODUCTS}&productId=${productId}`)
      .then((res) => {
        console.log("response fetch:", res.data.relatedProducts);
        setRelated(res.data.relatedProducts || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

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

  if (loading)
    return (
      <div className="container">
        <ProductShimmer count={10} />
      </div>
    );
  if (error) return <div className="related-error">{error}</div>;
  if (!related.length)
    return <div className="related-empty">No related products found.</div>;

  // Map related products to the same shape as in PopularProducts
  const mappedProducts = related.map((product) => ({
    id: product._id,
    name: product.productName,
    description: product.description,
    image: getImageUrl(product.productImageUrl?.[0]),
    price:
      (product.variants &&
        product.variants[0] &&
        product.variants[0].sell_price) ||
      product.sell_price ||
      product.price,
    mrp:
      (product.variants && product.variants[0] && product.variants[0].mrp) ||
      product.mrp,
    category:
      (product.category && product.category[0] && product.category[0].name) ||
      "Category",
    category_id:
      (product.category && product.category[0] && product.category[0]._id) ||
      "",
    brand: (product.brand_Name && product.brand_Name.name) || "Brand",
    brandId: product.brand_Name?._id || "",
    unit: (product.unit && product.unit.name) || "",
    tax: product.tax,
    rating: 4.5, // Default rating since not in API
    review_count: 0, // Default since not in API
    discount_percentage:
      (product.variants &&
        product.variants[0] &&
        product.variants[0].discountValue) ||
      0,
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
    <div className="container related-products-row-wrapper">
      {modalProduct && (
        <ProductQuickViewModal
          key={modalKey}
          product={modalProduct}
          isOpen={!!modalProduct}
          onClose={handleModalClose}
          onAddToCart={() => {}}
        />
      )}
      <div className="row">
        <div className="col-12 mb-6">
          <div className="section-head text-center mt-8">
            <h3 className="h3style" data-title="Related Products">
              Related Products
            </h3>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <ProductItem products={mappedProducts} />
    </div>
  );
};

export default RelatedProducts;
