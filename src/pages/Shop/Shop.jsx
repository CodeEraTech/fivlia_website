import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const getImageUrl = useImageUrl();

  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([]);
  const [categories, setCategories] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [backendPage, setBackendPage] = useState(1);

  const PRODUCTS_PER_BACKEND_PAGE = 60;

  const buildQueryParams = () => {
    const params = {};

    const catArr = query.getAll("category");
    if (catArr && catArr.length > 0) {
      params.category = catArr;
    }

    const subArr = query.getAll("subCategory");
    if (subArr && subArr.length > 0) {
      params.subCategory = subArr;
    }

    const ssArr = query.getAll("subSubCategory");
    if (ssArr && ssArr.length > 0) {
      params.subSubCategory = ssArr;
    }

    const priceMin = query.get("priceMin");
    const priceMax = query.get("priceMax");
    if (priceMin != null && priceMax != null) {
      params.priceMin = priceMin;
      params.priceMax = priceMax;
    }

    const filterId = query.get("filterId");
    if (filterId) {
      params.filterId = filterId;
    }

    const sellerArr = query.getAll("seller");
    if (sellerArr && sellerArr.length > 0) {
      params.seller = sellerArr;
    }

    return params;
  };

  const fetchProducts = useCallback(
    async (page = 1, isReset = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);
      try {
        const baseParams = buildQueryParams();
        baseParams.page = page;
        baseParams.limit = PRODUCTS_PER_BACKEND_PAGE;

        const urlParams = new URLSearchParams();
        for (const key in baseParams) {
          const val = baseParams[key];
          if (Array.isArray(val)) {
            val.forEach((v) => urlParams.append(key, v));
          } else {
            urlParams.append(key, val);
          }
        }

        const url = `${ENDPOINTS.PRODUCTS}&${urlParams.toString()}`;
        const res = await get(url);
        const data = res.data.products.map((prod) => {
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

        if (isReset) {
          setProducts(data);
          setBackendPage(2);
        } else {
          setProducts((prev) => {
            const existingIds = new Set(prev.map((p) => p._id));
            const newOnes = data.filter((p) => !existingIds.has(p._id));
            return [...prev, ...newOnes];
          });
          setBackendPage((prev) => prev + 1);
        }

        if (res.data.filter && Array.isArray(res.data.filter)) {
          setAvailableFilters(res.data.filter);
        }

        setHasMore(data.length >= PRODUCTS_PER_BACKEND_PAGE);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    },
    [loading, query.toString()]
  );

  // Effect: run when query changes (filters changed)
  useEffect(() => {
    setBackendPage(1);
    setHasMore(true);
    fetchProducts(1, true);
  }, [query.toString()]);

  // Fetch categories once
  useEffect(() => {
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        setCategories(res.data?.result || []);
      })
      .catch(() => {});
  }, []);

  const handleFilterChange = (filters) => {
    const params = {};

    if (filters.category && filters.category.length)
      params.category = filters.category;
    if (filters.subCategory && filters.subCategory.length)
      params.subCategory = filters.subCategory;
    if (filters.subSubCategory && filters.subSubCategory.length)
      params.subSubCategory = filters.subSubCategory;

    const priceMin = query.get("priceMin");
    const priceMax = query.get("priceMax");
    if (priceMin != null && priceMax != null) {
      params.priceMin = priceMin;
      params.priceMax = priceMax;
    }
    const filterId = query.get("filterId");
    if (filterId) {
      params.filterId = filterId;
    }
    const sellerId = query.get("seller");
    if (sellerId) {
      params.seller = sellerId;
    }

    const qs = new URLSearchParams();
    for (const key in params) {
      const val = params[key];
      if (Array.isArray(val)) {
        val.forEach((v) => qs.append(key, v));
      } else {
        qs.append(key, val);
      }
    }
    navigate({ search: qs.toString() });
  };

  const handlePriceChange = ([min, max]) => {
    const params = {};

    query.getAll("category").forEach((c) => {
      params.category = params.category || [];
      params.category.push(c);
    });
    query.getAll("subCategory").forEach((sc) => {
      params.subCategory = params.subCategory || [];
      params.subCategory.push(sc);
    });
    query.getAll("subSubCategory").forEach((ssc) => {
      params.subSubCategory = params.subSubCategory || [];
      params.subSubCategory.push(ssc);
    });

    params.priceMin = min;
    params.priceMax = max;

    const filterId = query.get("filterId");
    if (filterId) params.filterId = filterId;

    const qs = new URLSearchParams();
    for (const key in params) {
      const val = params[key];
      if (Array.isArray(val)) {
        val.forEach((v) => qs.append(key, v));
      } else {
        qs.append(key, val);
      }
    }
    navigate({ search: qs.toString() });
  };

  const handleProductFilterChange = (filterId) => {
    const params = {};

    query.getAll("category").forEach((c) => {
      params.category = params.category || [];
      params.category.push(c);
    });
    query.getAll("subCategory").forEach((sc) => {
      params.subCategory = params.subCategory || [];
      params.subCategory.push(sc);
    });
    query.getAll("subSubCategory").forEach((ssc) => {
      params.subSubCategory = params.subSubCategory || [];
      params.subSubCategory.push(ssc);
    });

    const priceMin = query.get("priceMin");
    const priceMax = query.get("priceMax");
    if (priceMin != null && priceMax != null) {
      params.priceMin = priceMin;
      params.priceMax = priceMax;
    }

    if (filterId) {
      params.filterId = filterId;
    }

    const qs = new URLSearchParams();
    for (const key in params) {
      const val = params[key];
      if (Array.isArray(val)) {
        val.forEach((v) => qs.append(key, v));
      } else {
        qs.append(key, val);
      }
    }
    navigate({ search: qs.toString() });
  };

  // Pagination UI (client‑side slicing)
  const PRODUCTS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Derive heading name
  let categoryName = "All Products";
  const catArr = query.getAll("category");
  if (catArr.length > 0 && categories.length > 0) {
    const catObj = categories.find((c) => c._id === catArr[0]);
    if (catObj) {
      const subArr = query.getAll("subCategory");
      const ssArr = query.getAll("subSubCategory");
      if (subArr.length > 0 && catObj.subcat) {
        const subObj = catObj.subcat.find((s) => s._id === subArr[0]);
        if (subObj) {
          if (ssArr.length > 0 && subObj.subsubcat) {
            const ssObj = subObj.subsubcat.find((s) => s._id === ssArr[0]);
            if (ssObj) {
              categoryName = ssObj.name;
            } else {
              categoryName = subObj.name;
            }
          } else {
            categoryName = subObj.name;
          }
        }
      } else {
        categoryName = catObj.name;
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
            selectedFilters={{
              seller: query.getAll("seller"),
              category: query.getAll("category"),
              subCategory: query.getAll("subCategory"),
              subSubCategory: query.getAll("subSubCategory"),
            }}
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
                      onPriceChange={handlePriceChange}
                      maxPrice={10000}
                      currentPriceRange={[
                        Number(query.get("priceMin")) || 0,
                        Number(query.get("priceMax")) || 10000,
                      ]}
                    />
                    <FilterDropdown
                      filters={availableFilters}
                      selectedFilter={query.get("filterId")}
                      onFilterChange={handleProductFilterChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {loading && products.length === 0 ? (
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
