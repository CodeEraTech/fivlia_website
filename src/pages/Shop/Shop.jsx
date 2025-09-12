import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "../ScrollToTop";
import FilterSideBar from "./FilterSideBar";
import FilterDropdown from "./FilterDropdown";
import PriceFilter from "./PriceFilter";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from '../../apis/endpoints';
import { useImageUrl } from '../../utils/getSettingsValue';
import ProductItem from "../../ProductList/ProductItem";
import ProductShimmer from '../../ProductList/ProductShimmer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dropdown() {
  const query = useQuery();
  const categoryId = query.get("category");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({ category: [], subCategory: [], subSubCategory: [] });
  const [selectedProductFilter, setSelectedProductFilter] = useState(null);
  const [availableFilters, setAvailableFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const PRODUCTS_PER_PAGE = 20;
  const getImageUrl = useImageUrl();
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    setSelectedProductFilter(null);
    setAvailableFilters([]);
    setPriceRange([0, 10000]);
    handleFilterChange({ category: [], subCategory: [], subSubCategory: [] });
    let url = ENDPOINTS.PRODUCTS;
    if (categoryId) {
      url += `&id=${categoryId}`;
    }
    get(url)
      .then((res) => {
        const data = res.data.products || res.data.result || [];
        const mapped = data.map((prod) => {
          const variant = prod.variants && prod.variants[0] ? prod.variants[0] : {};
          return {
            id: prod._id,
            name: prod.productName || prod.name,
            image: getImageUrl(prod.productImageUrl && prod.productImageUrl[0]),
            price: variant.sell_price || prod.sell_price || prod.price,
            mrp: variant.mrp || prod.mrp,
            discount_percentage: variant.discountValue || prod.discount_percentage || 0,
            category: prod.category && prod.category[0] && prod.category[0].name,
            category_id: prod.category && prod.category[0] && prod.category[0]._id,
            subCategory: prod.subCategory || [],
            subSubCategory: prod.subSubCategory || [],
            brand: prod.brand_Name && prod.brand_Name.name,
            brandId: prod.brand_Name?._id || '',
            rating: prod.rating && (prod.rating.rate || prod.rating) || 0,
            review_count: prod.rating && prod.rating.users || 0,
            is_hot: prod.is_hot || prod.feature_product || false,
            is_new: prod.is_new || false,
            description: prod.description || '',
            productImageUrl: prod.productImageUrl,
            variants: prod.variants || [],
            filter: prod.filter || [],
            inventory: prod.inventory || [],
            isVeg: prod.isVeg,
            sku: prod.sku,
            soldBy: prod.soldBy || { name: "Fivlia" },
            storeId: prod.storeId || null,
            isOfficalStore: prod.official || false,
          };
        });
        setAllProducts(mapped);
        setFilteredProducts(mapped);
        
        // Only set filters if res.data.filter exists and is not empty
        if (res.data.filter && Array.isArray(res.data.filter) && res.data.filter.length > 0) {
          setAvailableFilters(res.data.filter);
        } else {
          setAvailableFilters([]);
        }
      })
      .catch((err) => setError(err.message || "Failed to fetch products"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Apply filters when selectedProductFilter or priceRange changes
  useEffect(() => {
    if (allProducts.length > 0) {
      applyFilters();
    }
  }, [selectedProductFilter, priceRange, allProducts]);

  // Reset price range when category changes
  useEffect(() => {
    setPriceRange([0, 10000]);
  }, [selectedFilters.category]);

  // Load categories
  useEffect(() => {
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        setCategories(res.data?.result || []);
      })
      .catch((err) => {
        // console.error("Failed to load categories:", err);
      });
  }, []);

  // Handle product filter change
  const handleProductFilterChange = (filterId) => {
    setSelectedProductFilter(filterId);
    setCurrentPage(1); // Reset to first page on filter change
    applyFilters();
  };

  // Apply all filters
  const applyFilters = () => {
    let filtered = allProducts;
    
    // Apply category filters
    if (selectedFilters.category && selectedFilters.category.length > 0) {
      filtered = filtered.filter(prod => selectedFilters.category.includes(prod.category_id));
    }
    
    if (selectedFilters.subCategory && selectedFilters.subCategory.length > 0) {
      filtered = filtered.filter(prod => 
        prod.subCategory && prod.subCategory.some(sub => 
          selectedFilters.subCategory.includes(sub._id || sub.id)
        )
      );
    }
    
    if (selectedFilters.subSubCategory && selectedFilters.subSubCategory.length > 0) {
      filtered = filtered.filter(prod => 
        prod.subSubCategory && prod.subSubCategory.some(subSub => 
          selectedFilters.subSubCategory.includes(subSub._id || subSub.id)
        )
      );
    }
    
    // Apply price filter
    if (priceRange && priceRange.length === 2) {
      const [minPrice, maxPrice] = priceRange;
      if (minPrice > 0 || maxPrice < 10000) {
        filtered = filtered.filter(prod => {
          const productPrice = prod.price || 0;
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
      }
    }
    
    // Apply product filter
    if (selectedProductFilter) {
      filtered = filtered.filter(prod => {
        if (!prod.filter || !Array.isArray(prod.filter)) {
          return false;
        }
        
        return prod.filter.some(filterItem => 
          filterItem.selected && filterItem.selected.some(selected => 
            selected._id === selectedProductFilter
          )
        );
      });
    }
    
    setFilteredProducts(filtered);
  };

  // Filtering logic
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
    applyFilters();
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Get current category name for banner
  let categoryName = "All Products";
  
  if (selectedFilters.category && selectedFilters.category.length > 0) {
    // Find the category name from the categories data
    const category = categories.find(cat => cat._id === selectedFilters.category[0]);
    if (category) {
      // Check for subsubcategory first (highest priority)
      if (selectedFilters.subSubCategory && selectedFilters.subSubCategory.length > 0) {
        const subcat = category.subcat?.find(sub => sub._id === selectedFilters.subCategory[0]);
        if (subcat) {
          const subsubcat = subcat.subsubcat?.find(subsub => subsub._id === selectedFilters.subSubCategory[0]);
          if (subsubcat) {
            categoryName = subsubcat.name;
          }
        }
      } 
      // Check for subcategory
      else if (selectedFilters.subCategory && selectedFilters.subCategory.length > 0) {
        const subcat = category.subcat?.find(sub => sub._id === selectedFilters.subCategory[0]);
        if (subcat) {
          categoryName = subcat.name;
        }
      } 
      // Main category
      else {
        categoryName = category.name;
      }
    }
  }

  return (
    <div>
      <ScrollToTop />
      <div className="container ">
        <div className="row">
          {/* Vertical Dropdowns Column */}
            <FilterSideBar onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
          {/* Cards Column */}
          <div className="col-lg-9 col-md-8" style={{ paddingTop: '2rem', paddingRight: 0 }}>
            {/* Top banner for category name */}
            <div className="card mb-4 bg-light border-0">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h1 className="mb-0 mb-md-0">{categoryName}</h1>
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
            
            {loading ? (
              <ProductShimmer count={12} />
            ) : error ? (
              <div className="text-center text-danger py-5">{error}</div>
            ) : (
              <ProductItem products={paginatedProducts} />
            )}
            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Product pagination" className="mt-4">
                <ul className="pagination justify-content-center flex-wrap">
                  <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous" disabled={currentPage === 1}>
                      <i className="fa fa-chevron-left" />
                    </button>
                  </li>
                  {(() => {
                    const pages = [];
                    const DOTS = '...';
                    const pageNeighbours = 2;
                    let startPage = Math.max(2, currentPage - pageNeighbours);
                    let endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
                    if (currentPage <= 1 + pageNeighbours) {
                      endPage = Math.min(1 + 2 * pageNeighbours, totalPages - 1);
                    }
                    if (currentPage >= totalPages - pageNeighbours) {
                      startPage = Math.max(totalPages - 2 * pageNeighbours, 2);
                    }
                    // Always show first page
                    pages.push(
                      <li key={1} className={`page-item${currentPage === 1 ? ' active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
                      </li>
                    );
                    // Show left dots if needed
                    if (startPage > 2) {
                      pages.push(
                        <li key="dots-left" className="page-item disabled"><span className="page-link">{DOTS}</span></li>
                      );
                    }
                    // Show middle pages
                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(
                        <li key={i} className={`page-item${currentPage === i ? ' active' : ''}`}>
                          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
                        </li>
                      );
                    }
                    // Show right dots if needed
                    if (endPage < totalPages - 1) {
                      pages.push(
                        <li key="dots-right" className="page-item disabled"><span className="page-link">{DOTS}</span></li>
                      );
                    }
                    // Always show last page
                    if (totalPages > 1) {
                      pages.push(
                        <li key={totalPages} className={`page-item${currentPage === totalPages ? ' active' : ''}`}>
                          <button className="page-link" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                        </li>
                      );
                    }
                    return pages;
                  })()}
                  <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next" disabled={currentPage === totalPages}>
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
