import React, { useEffect, useState } from "react";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useImageUrl } from "../utils/getSettingsValue";
import ProductItem from "./ProductItem";
import ProductShimmer from "./ProductShimmer";
import { useSearchParams } from "react-router-dom";
import CategoryChips from "../utils/CategoryChips";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import EmptyBox from "../animations/empty_box.json";

// Responsive breakpoints/settings for the banner carousel
const bannerCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SellerProducts = () => {
  const [searchParams] = useSearchParams();
  const sellerId = searchParams.get("id");

  const [seller, setSeller] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // keep unfiltered list
  const [filteredProducts, setFilteredProducts] = useState([]); // filtered list
  const [categories, setCategories] = useState([]);
  const [defaultImg, setDefaultImg] = useState([]); // Default images
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
        const defaultImg = response?.data?.sellerImage || [];
        const advertisementImages = response?.data?.advertisementImages || [];

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
          soldBy: sellerData?.storeName || "",
          storeId: sellerData?._id || null,
        }));
        
        setSeller(sellerData);
        setAllProducts(processedProducts);
        setFilteredProducts(processedProducts);
        setCategories(catList);
        setDefaultImg(defaultImg);
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
      updatedProducts = updatedProducts.filter(
        (p) => p.category_id === item._id
      );
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
        <style>{`
        .image-slider {
          position: relative;
          width: 100%;
        }

        .carousel-item {
          position: relative;
          height: 500px;
        }

        .slider-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
          border-radius:10px;
        }

        .store-name-overlay {
          position: absolute;
          top: 90%;
          left: 25%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 2rem;
          font-weight: bold;
          z-index: 2;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }
        `}</style>
        {/* Image Slider Section */}
        {(!seller?.advertisementImages?.length && defaultImg.length > 0) ||
        seller?.advertisementImages?.length > 0 ? (
          <div className="image-slider" style={{ position: "relative" }}>
            <div className="carousel-inner">
              {(seller?.advertisementImages?.length > 0
                ? seller.advertisementImages
                : defaultImg
              ).map((image, index) => (
                <div
                  className={`carousel-item${index === 0 ? " active" : ""}`}
                  key={index}
                  style={{ position: "relative" }}
                >
                    <div
                      style={{
                        background: `url(${getImageUrl(
                          image
                        )}) no-repeat center center`,
                        backgroundSize: "cover",
                        borderRadius: ".5rem",
                        minHeight: 500,
                        width: "100%",
                        transition: "min-height 0.3s",
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      <div className="slider-overlay"></div>
                      <div className="store-name-overlay">
                        Products By {seller?.storeName}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Store Header Section */}
        {seller?.storeName && !loading ? (
          <div className="row align-items-center text-center mb-6">
            {/* <div className="col-12">
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
            </div> */}
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

        {/* Loading & Error Handling */}
        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <ProductShimmer count={10} />
            </div>
          </div>
        ) : error ? (
          <div className="row">
            <div className="col-12 text-center">
              {/* <div className="alert alert-danger">{error}</div> */}
              <div style={{display:"flex", justifyContent:"center"}}>
                <Lottie 
                  animationData={EmptyBox} 
                  loop={true} 
                  style={{ width: 300, height: 300 }}
                />
              </div>
                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                  No products available
                </h2>
                <p className="text-gray-500 mt-2 max-w-md">
                  It seems this seller hasn’t added any products yet or the store is currently offline.  
                  Please check back later or explore other stores.
                </p>
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
