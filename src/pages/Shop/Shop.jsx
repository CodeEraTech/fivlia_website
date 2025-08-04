import React, { useEffect, useState } from "react";
import assortment from "../../images/assortment-citrus-fruits.png";
import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from "../ScrollToTop";
import FilterSideBar from "./FilterSideBar";
import { get } from "../../apis/apiClient";
import { ENDPOINTS, useDynamicImageUrl } from '../../apis/endpoints';
import ProductItem from "../../ProductList/ProductItem";
import ProductShimmer from '../../ProductList/ProductShimmer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dropdown() {
  const query = useQuery();
  const categoryId = query.get("category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({ category: [], subCategory: [], subSubCategory: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const PRODUCTS_PER_PAGE = 20;
  const getImageUrl = useDynamicImageUrl();

  useEffect(() => {
    setLoading(true);
    setError(null);
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
            rating: prod.rating && (prod.rating.rate || prod.rating) || 0,
            review_count: prod.rating && prod.rating.users || 0,
            is_hot: prod.is_hot || prod.feature_product || false,
            is_new: prod.is_new || false,
            description: prod.description || '',
            productImageUrl: prod.productImageUrl,
            variants: prod.variants || [],
          };
        });
        setAllProducts(mapped);
        setFilteredProducts(mapped);
      })
      .catch((err) => setError(err.message || "Failed to fetch products"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Load categories
  useEffect(() => {
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        setCategories(res.data?.result || []);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });
  }, []);

  // Filtering logic
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1); // Reset to first page on filter change
    let filtered = allProducts;
    
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(prod => filters.category.includes(prod.category_id));
    }
    
    if (filters.subCategory && filters.subCategory.length > 0) {
      filtered = filtered.filter(prod => 
        prod.subCategory && prod.subCategory.some(sub => 
          filters.subCategory.includes(sub._id || sub.id)
        )
      );
    }
    
    if (filters.subSubCategory && filters.subSubCategory.length > 0) {
      filtered = filtered.filter(prod => 
        prod.subSubCategory && prod.subSubCategory.some(subSub => 
          filters.subSubCategory.includes(subSub._id || subSub.id)
        )
      );
    }
    
    setFilteredProducts(filtered);
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
                <h1 className="mb-0">{categoryName}</h1>
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
