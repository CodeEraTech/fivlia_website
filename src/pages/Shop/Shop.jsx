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

  useEffect(() => {
    setLoading(true);
    setError(null);
    let url = ENDPOINTS.SEARCH_PRODUCTS;
    if (categoryId) {
      url += `&category=${categoryId}`;
    }
    get(url)
      .then((res) => {
        console.log(res.data,url,3445);
        const data = res.data.products || res.data.result || [];
        setProducts(
          data.map((prod) => ({
            id: prod._id,
            name: prod.productName || prod.name,
            image: prod.productImageUrl && prod.productImageUrl[0],
            price: prod.sell_price || prod.price,
            mrp: prod.mrp,
            brand: prod.brand_Name && prod.brand_Name.name,
            category: prod.category && prod.category[0] && prod.category[0].name,
            category_id: prod.category && prod.category[0] && prod.category[0]._id,
            rating: typeof prod.rating === "object" && prod.rating !== null
              ? prod.rating.rate || 0
              : prod.rating || 0,
            review_count: prod.review_count || 0,
            discount_percentage: prod.discount_percentage || 0,
            is_hot: prod.is_hot || false,
            is_new: prod.is_new || false,
            description: prod.description || '',
            productImageUrl: prod.productImageUrl,
          }))
        );
      })
      .catch((err) => setError(err.message || "Failed to fetch products"))
      .finally(() => setLoading(false));
  }, [categoryId]);

     // loading
     const [loaderStatus, setLoaderStatus] = useState(true);
     useEffect(() => {
       setTimeout(() => {
         setLoaderStatus(false);
       }, 1500);
     }, []);
   
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
              <FilterSideBar />
              {/* Cards Column */}
              <div className="col-lg-9 col-md-8">
                {loading ? (
                  <div className="text-center py-5">Loading products...</div>
                ) : error ? (
                  <div className="text-center text-danger py-5">{error}</div>
                ) : (
                  <ProductItem products={products} />
                )}
                {/* Pagination should be here, after products, not outside the main content column */}
                <div className="row mt-8">
                  <div className="col">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <Link
                            className="page-link  mx-1 rounded-3 "
                            to="#"
                            aria-label="Previous"
                          >
                            <i className="fa fa-chevron-left" />
                          </Link>
                        </li>
                        <li className="page-item ">
                          <Link className="page-link  mx-1 rounded-3 active" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            12
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link mx-1 rounded-3 text-body"
                            to="#"
                            aria-label="Next"
                          >
                            <i className="fa fa-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
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
