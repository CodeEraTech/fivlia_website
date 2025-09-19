import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "../ScrollToTop";
import FilterSideBar from "./FilterSideBar";
import FilterDropdown from "./FilterDropdown";
import PriceFilter from "./PriceFilter";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import ProductItem from "../../ProductList/ProductItem";
import ProductShimmer from "../../ProductList/ProductShimmer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dropdown() {
  const query = useQuery();
  const categoryId = query.get("category");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // This holds all products fetched
  const [filteredProducts, setFilteredProducts] = useState([]); // This holds the products after filters
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subCategory: [],
    subSubCategory: [],
  });
  const [selectedProductFilter, setSelectedProductFilter] = useState(null);
  const [availableFilters, setAvailableFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [backendPage, setBackendPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState(new Set());
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const getImageUrl = useImageUrl();
  const prevCategoryIdRef = useRef(null);
  const PRODUCTS_PER_BACKEND_PAGE = 60;
  const PRODUCTS_PER_PAGE = 20;

  // Reset products when categoryId changes
  useEffect(() => {
    setAllProducts([]); // Reset all products
    setFilteredProducts([]); // Reset filtered products
    setBackendPage(1); // Reset page count
    setFetchedPages(new Set()); // Reset the pages that were fetched
    setHasMoreProducts(true); // Reset hasMoreProducts
    setSelectedProductFilter(null); // Reset product filter
    setAvailableFilters([]); // Reset available filters
    setPriceRange([0, 10000]); // Reset price range
    handleFilterChange({ category: [], subCategory: [], subSubCategory: [] }); // Reset filters
    fetchProducts(1); // Start fetching products again
  }, [categoryId]);

  const fetchProducts = async (pageToFetch) => {
    if (
      categoryId === prevCategoryIdRef.current &&
      (fetchedPages.has(pageToFetch) || !hasMoreProducts)
    ) {
      return;
    } else {
      prevCategoryIdRef.current = categoryId;
    }
    setLoading(true);
    setError(null);

    try {
      let url = `${ENDPOINTS.PRODUCTS}&limit=${PRODUCTS_PER_BACKEND_PAGE}&page=${pageToFetch}`;
      if (categoryId) {
        url += `&id=${categoryId}`;
      }

      const res = await get(url);
      const data = res.data.products || res.data.result || [];

      if (data.length === 0) {
        setHasMoreProducts(false); // No more products to load
        return;
      }

      const mapped = data.map((prod) => {
        const variant =
          prod.variants && prod.variants[0] ? prod.variants[0] : {};
        return {
          id: prod._id,
          name: prod.productName || prod.name,
          image: getImageUrl(prod.productImageUrl && prod.productImageUrl[0]),
          price: variant.sell_price || prod.sell_price || prod.price,
          mrp: variant.mrp || prod.mrp,
          discount_percentage:
            variant.discountValue || prod.discount_percentage || 0,
          category: prod.category?.[0]?.name,
          category_id: prod.category?.[0]?._id,
          subCategory: prod.subCategory || [],
          subSubCategory: prod.subSubCategory || [],
          brand: prod.brand_Name?.name,
          brandId: prod.brand_Name?._id || "",
          rating: prod.rating?.rate || prod.rating || 0,
          review_count: prod.rating?.users || 0,
          is_hot: prod.is_hot || prod.feature_product || false,
          is_new: prod.is_new || false,
          description: prod.description || "",
          productImageUrl: prod.productImageUrl,
          variants: prod.variants || [],
          filter: prod.filter || [],
          inventory: prod.inventory || [],
          isVeg: prod.isVeg,
          sku: prod.sku,
          soldBy: prod.storeName || "",
          storeId: prod.storeId || null,
          isOfficalStore: prod.official || false,
        };
      });

      // Avoid adding duplicates in the products
      setAllProducts((prev) => {
        const existingProductIds = new Set(prev.map((prod) => prod.id));
        const newProducts = mapped.filter(
          (prod) => !existingProductIds.has(prod.id)
        );
        return [...prev, ...newProducts];
      });

      setFilteredProducts((prev) => {
        const existingProductIds = new Set(prev.map((prod) => prod.id));
        const newProducts = mapped.filter(
          (prod) => !existingProductIds.has(prod.id)
        );
        return [...prev, ...newProducts];
      });

      if (
        res.data.filter &&
        Array.isArray(res.data.filter) &&
        res.data.filter.length > 0
      ) {
        setAvailableFilters(res.data.filter);
      }

      setFetchedPages((prev) => new Set(prev).add(pageToFetch)); // Mark the current page as fetched
      setBackendPage((prev) => prev + 1); // Increase the backend page number
    } catch (err) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories on load
  useEffect(() => {
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        setCategories(res.data?.result || []);
      })
      .catch(() => {});
  }, []);

  // Apply filters when filters or products change
  useEffect(() => {
    if (allProducts.length > 0) {
      applyFilters();
    }
  }, [selectedProductFilter, priceRange, allProducts]);

  useEffect(() => {
    const requiredProductCount = currentPage * PRODUCTS_PER_PAGE;
    if (allProducts.length < requiredProductCount && hasMoreProducts) {
      fetchProducts(backendPage); // Fetch more products if needed
    }
  }, [currentPage]);

  const applyFilters = () => {
    let filtered = allProducts;

    // Apply category filter
    if (selectedFilters.category && selectedFilters.category.length > 0) {
      filtered = filtered.filter((prod) =>
        selectedFilters.category.includes(prod.category_id)
      );
    }

    // Apply subCategory filter
    if (selectedFilters.subCategory && selectedFilters.subCategory.length > 0) {
      filtered = filtered.filter(
        (prod) =>
          prod.subCategory &&
          prod.subCategory.some((sub) =>
            selectedFilters.subCategory.includes(sub._id || sub.id)
          )
      );
    }

    // Apply subSubCategory filter
    if (
      selectedFilters.subSubCategory &&
      selectedFilters.subSubCategory.length > 0
    ) {
      filtered = filtered.filter(
        (prod) =>
          prod.subSubCategory &&
          prod.subSubCategory.some((subSub) =>
            selectedFilters.subSubCategory.includes(subSub._id || subSub.id)
          )
      );
    }

    // Apply price range filter
    if (priceRange && priceRange.length === 2) {
      const [minPrice, maxPrice] = priceRange;
      filtered = filtered.filter((prod) => {
        const productPrice = prod.price || 0;
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
    }

    // Apply additional product filter
    if (selectedProductFilter) {
      filtered = filtered.filter((prod) =>
        prod.filter?.some((filterItem) =>
          filterItem.selected?.some(
            (selected) => selected._id === selectedProductFilter
          )
        )
      );
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1); // Reset pagination
    applyFilters(); // Apply the filters
  };

  const handleProductFilterChange = (filterId) => {
    setSelectedProductFilter(filterId);
    setCurrentPage(1); // Reset pagination
    applyFilters(); // Apply the filters
  };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  let categoryName = "All Products";
  if (selectedFilters.category?.length > 0) {
    const category = categories.find(
      (cat) => cat._id === selectedFilters.category[0]
    );
    if (category) {
      if (selectedFilters.subSubCategory?.length > 0) {
        const subcat = category.subcat?.find(
          (sub) => sub._id === selectedFilters.subCategory[0]
        );
        const subsubcat = subcat?.subsubcat?.find(
          (subsub) => subsub._id === selectedFilters.subSubCategory[0]
        );
        if (subsubcat) categoryName = subsubcat.name;
      } else if (selectedFilters.subCategory?.length > 0) {
        const subcat = category.subcat?.find(
          (sub) => sub._id === selectedFilters.subCategory[0]
        );
        if (subcat) categoryName = subcat.name;
      } else {
        categoryName = category.name;
      }
    }
  }

  return (
    <div>
      <ScrollToTop />
      <div className="container">
        <div className="row">
          <FilterSideBar
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
          <div
            className="col-lg-9 col-md-8"
            style={{ paddingTop: "2rem", paddingRight: 0 }}
          >
            <div className="card mb-4 bg-light border-0">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h1 className="mb-0">{categoryName}</h1>
                  <div className="ms-auto mt-3 mt-md-0 d-flex align-items-center gap-3 flex-wrap">
                    <PriceFilter
                      onPriceChange={setPriceRange}
                      maxPrice={10000}
                      currentPriceRange={priceRange}
                    />
                    <FilterDropdown
                      filters={availableFilters}
                      selectedFilter={selectedProductFilter}
                      onFilterChange={handleProductFilterChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {loading && allProducts.length === 0 ? (
              <ProductShimmer count={12} />
            ) : error ? (
              <div className="text-center text-danger py-5">{error}</div>
            ) : (
              <ProductItem products={paginatedProducts} />
            )}

            {totalPages > 1 && (
              <nav aria-label="Product pagination" className="mt-4">
                <ul className="pagination justify-content-center flex-wrap">
                  <li
                    className={`page-item${
                      currentPage === 1 ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fa fa-chevron-left" />
                    </button>
                  </li>
                  {(() => {
                    const pages = [];
                    const DOTS = "...";
                    const pageNeighbours = 2;
                    let startPage = Math.max(2, currentPage - pageNeighbours);
                    let endPage = Math.min(
                      totalPages - 1,
                      currentPage + pageNeighbours
                    );

                    if (currentPage <= 1 + pageNeighbours) {
                      endPage = Math.min(
                        1 + 2 * pageNeighbours,
                        totalPages - 1
                      );
                    }
                    if (currentPage >= totalPages - pageNeighbours) {
                      startPage = Math.max(totalPages - 2 * pageNeighbours, 2);
                    }

                    pages.push(
                      <li
                        key={1}
                        className={`page-item${
                          currentPage === 1 ? " active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(1)}
                        >
                          1
                        </button>
                      </li>
                    );

                    if (startPage > 2) {
                      pages.push(
                        <li key="dots-left" className="page-item disabled">
                          <span className="page-link">{DOTS}</span>
                        </li>
                      );
                    }

                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(
                        <li
                          key={i}
                          className={`page-item${
                            currentPage === i ? " active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(i)}
                          >
                            {i}
                          </button>
                        </li>
                      );
                    }

                    if (endPage < totalPages - 1) {
                      pages.push(
                        <li key="dots-right" className="page-item disabled">
                          <span className="page-link">{DOTS}</span>
                        </li>
                      );
                    }

                    if (totalPages > 1) {
                      pages.push(
                        <li
                          key={totalPages}
                          className={`page-item${
                            currentPage === totalPages ? " active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(totalPages)}
                          >
                            {totalPages}
                          </button>
                        </li>
                      );
                    }

                    return pages;
                  })()}
                  <li
                    className={`page-item${
                      currentPage === totalPages ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fa fa-chevron-right" />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
