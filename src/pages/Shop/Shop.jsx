import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'
import assortment from "../../images/assortment-citrus-fruits.png";
import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import product1 from "../../images/category-baby-care.jpg";
import product2 from "../../images/category-atta-rice-dal.jpg";
import product3 from "../../images/category-bakery-biscuits.jpg";
import product4 from "../../images/category-chicken-meat-fish.jpg";
import product5 from "../../images/category-cleaning-essentials.jpg";
import product6 from "../../images/category-dairy-bread-eggs.jpg";
import product7 from "../../images/category-instant-food.jpg";
import product8 from "../../images/category-pet-care.jpg";
import product9 from "../../images/category-snack-munchies.jpg";
import product10 from "../../images/category-tea-coffee-drinks.jpg";
import ScrollToTop from "../ScrollToTop";
import FilterSideBar from "./FilterSideBar";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints.jsx";
import ProductItem from "../../ProductList/ProductItem";

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
  const [selectedFilters, setSelectedFilters] = useState({ category: [], subCategory: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 20;

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
            image: prod.productImageUrl && prod.productImageUrl[0],
            price: variant.sell_price || prod.sell_price || prod.price,
            mrp: variant.mrp || prod.mrp,
            discount_percentage: variant.discountValue || prod.discount_percentage || 0,
            category: prod.category && prod.category[0] && prod.category[0].name,
            category_id: prod.category && prod.category[0] && prod.category[0]._id,
            subCategory: prod.subCategory || [],
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

  // Filtering logic
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1); // Reset to first page on filter change
    let filtered = allProducts;
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(prod => filters.category.includes(prod.category_id));
    }
    if (filters.subCategory && filters.subCategory.length > 0) {
      filtered = filtered.filter(prod => prod.subCategory && prod.subCategory.some(sub => filters.subCategory.includes(sub._id || sub.id)));
    }
    setFilteredProducts(filtered);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

     // loading
     const [loaderStatus, setLoaderStatus] = useState(true);
     useEffect(() => {
       setTimeout(() => {
         setLoaderStatus(false);
       }, 1500);
     }, []);
   
  // Get current category name for banner
  let categoryName = "All Products";
  if (filteredProducts.length > 0 && filteredProducts[0].category) {
    categoryName = filteredProducts[0].category;
  }

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperclassName="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <div className="container ">
            <div className="row">
              {/* Vertical Dropdowns Column */}
              <FilterSideBar onFilterChange={handleFilterChange} />
              {/* Cards Column */}
              <div className="col-lg-9 col-md-8" style={{ paddingTop: '2rem', paddingRight: 0 }}>
                {/* Top banner for category name */}
                <div className="card mb-4 bg-light border-0">
                  <div className="card-body p-4">
                    <h1 className="mb-0">{categoryName}</h1>
                  </div>
                </div>
                {loading ? (
                  <div className="text-center py-5">Loading products...</div>
                ) : error ? (
                  <div className="text-center text-danger py-5">{error}</div>
                ) : (
                  <ProductItem products={paginatedProducts} />
                )}
                {/* Pagination */}
                {totalPages > 1 && (
                  <nav aria-label="Product pagination" className="mt-4">
                    <ul className="pagination justify-content-center">
                      <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous" disabled={currentPage === 1}>
                          <i className="fa fa-chevron-left" />
                        </button>
                      </li>
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <li key={idx + 1} className={`page-item${currentPage === idx + 1 ? ' active' : ''}`}>
                          <button className="page-link" onClick={() => handlePageChange(idx + 1)}>{idx + 1}</button>
                        </li>
                      ))}
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
        </>
      )}
    </div>
  );
}

const dropdownData = [
  {
    title: "Dairy, Bread & Eggs",
    items: [
      "Milk",
      "Milk Drinks",
      "Curd & Yogurt",
      "Eggs",
      "Bread",
      "Buns & Bakery",
      "Butter & More",
      "Cheese",
      "Paneer & Tofu",
      "Cream & Whitener",
      "Condensed Milk",
      "Vegan Drinks",
    ],
  },
  {
    title: "Snacks & Munchies",
    items: [
      "Chips & Crisps",
      "Nachos",
      "Popcorn",
      "Bhujia & Mixtures",
      "Namkeen Snacks",
      "Healthy Snacks",
      "Cakes & Rolls",
      "Energy Bars",
      "Papad & Fryums",
      "Rusks & Wafers",
    ],
  },
  {
    title: "Fruits & Vegetables",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Organic Fruits & Vegetables",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Flower Bouquets, Bunches",
    ],
  },
  {
    title: "Cold Drinks & Juices" ,
    items: [
      "Soft Drinks",
      "Fruit Juices",
      "Coldpress",
      "Energy Drinks",
      "Water & Ice Cubes",
      "Soda & Mixers",
      "Concentrates & Syrups",
      "Detox & Energy Drinks",
      "Juice Collection",
    ],
  },
];


export default Dropdown;
