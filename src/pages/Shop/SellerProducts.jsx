import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import ProductItem from "../../ProductList/ProductItem";
import ProductShimmer from "../../ProductList/ProductShimmer";
import { useSearchParams } from "react-router-dom";
import CategoryChips from "../../utils/CategoryChips";

const SellerProducts = () => {
  const [searchParams] = useSearchParams();
  const sellerId = searchParams.get("id");

  const [seller, setSeller] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // keep unfiltered list
  const [filteredProducts, setFilteredProducts] = useState([]); // filtered list
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getImageUrl = useImageUrl();

  // keep selected state for chips
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await get(
          `${ENDPOINTS.SELLER_PRODUCTS}?id=${sellerId}`
        );

        const sellerData = response?.data?.seller || {};
        const productList = response?.data?.products || [];
        const catList = response?.data?.categories || [];

        const processedProducts = productList.map((prod) => ({
          id: prod._id,
          name: prod.productName,
          description: prod.description,
          image: getImageUrl(
            prod.productImageUrl?.[0] || prod.productThumbnailUrl
          ),
          price: prod.variants?.[0]?.sell_price || prod.sell_price || 0,
          mrp: prod.variants?.[0]?.mrp || prod.mrp || 0,
          category: prod.category?.[0]?.name || "Category",
          category_id: prod.category?.[0]?._id || "",
          subCategory_id: prod.subCategory?.[0]?._id || "",
          subSubCategory_id: prod.subSubCategory?.[0]?._id || "",
          brand: prod.brand_Name?.name || sellerData?.brandName || "",
          brandId: prod.brand_Name?._id || "",
          unit: prod.unit?.name || "",
          tax: prod.tax || 0,
          rating: prod.rating?.rate || 0,
          review_count: prod.rating?.users || 0,
          discount_percentage: prod.variants?.[0]?.discountValue || 0,
          is_hot: prod.feature_product || false,
          is_new: prod.ribbon?.toLowerCase() === "new",
          sku: prod.sku,
          status: prod.status,
          inCart: prod.inCart?.status || false,
          variants: prod.variants || [],
          inventory: prod.inventory || [],
          isVeg: prod.isVeg,
        }));

        setSeller(sellerData);
        setAllProducts(processedProducts);
        setFilteredProducts(processedProducts);
        setCategories(catList);
      } catch (err) {
        console.error("Error fetching seller details:", err);
        setError("Something went wrong while fetching seller details.");
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) {
      fetchSellerData();
    } else {
      setError("Invalid seller ID.");
      setLoading(false);
    }
  }, [sellerId]);

  // filter logic
  const handleSelect = (item, level) => {
    let updatedProducts = [...allProducts];
    if (level === "category") {
      setSelectedCategory(item);
      setSelectedSubCategory(null);
      setSelectedSubSubCategory(null);
      updatedProducts = updatedProducts.filter((p) => p.category_id === item._id);
    }

    if (level === "subcategory") {
      setSelectedSubCategory(item);
      setSelectedSubSubCategory(null);

      updatedProducts = updatedProducts.filter(
        (p) => p.subCategory_id === item._id
      );

      // if no subSubCategory exist → treat as final
      if (!item.subSubCategory || item.subSubCategory.length === 0) {
        setSelectedSubSubCategory(null);
      }
    }

    if (level === "subsubcategory") {
      setSelectedSubSubCategory(item);

      updatedProducts = updatedProducts.filter(
        (p) => p.subSubCategory_id === item._id
      );
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        {seller?.storeName && !loading ? (
          <div className="row align-items-center text-center mb-6">
            <div className="col-12">
              <div className="section-head">
                <h3
                  className="h3style"
                  data-title={seller?.storeName || "Store"}
                >
                  Products By {seller?.storeName}
                </h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
            <div className="col-12">
              <CategoryChips
                data={categories.subcat ? [categories] : categories}
                onSelectCategory={handleSelect}
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                selectedSubSubCategory={selectedSubSubCategory}
              />
            </div>
          </div>
        ) : null}

        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <ProductShimmer count={10} />
            </div>
          </div>
        ) : error ? (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-danger">{error}</div>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-warning">
                No products found for this selection.
              </div>
            </div>
          </div>
        ) : (
          <ProductItem products={filteredProducts} />
        )}
      </div>
    </section>
  );
};

export default SellerProducts;