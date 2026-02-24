export const API_BASE_URL = "https://api.fivlia.com";
// export const API_BASE_URL = "https://api.fivlia.in";
// export const API_BASE_URL = "http://localhost:8080";
// export const API_BASE_URL = "https://api.fivlia.co.in";

// Get location from localStorage
const getUserLocation = () => {
  try {
    const stored = localStorage.getItem("userLocation");
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        lat: parsed?.lat || "",
        lng: parsed?.lng || "",
      };
    }
  } catch (err) {
    console.error("Error parsing userLocation from localStorage:", err);
  }
  return { lat: "", lng: "" };
};

const { lat, lng } = getUserLocation();

// Define all endpoints here
export const ENDPOINTS = {
  VERIFY_MOBILE: "/verifyMobile",
  GET_SETTINGS: "/getSettings",
  LOGIN: "/login",
  SELLER_VERIFY_OTP: "/seller/verifyOtp",
  VERIFY_OTP: "/verifyOtp",
  REGISTER: "/register",
  GETCITY: "/getAllZone",
  SUBMIT: "/addSeller",
  DRIVERSUBMIT: "/driver",
  GSTDETAIL: "/getDetailsGst",
  CATEGORIES: "/getMainCategory",
  BRANDS: "/getBrand",
  BLOG: "/getBlog",
  APPDOWNLOAD:"/getDownloadAppPages",

  // Location based endpoints
  BANNERS: `/website/forwebgetBanner?lat=${lat}&lng=${lng}`,
  POPULAR_PRODUCTS: `/website/bestSelling?lat=${lat}&lng=${lng}`,
  RELATED_PRODUCTS: `/website/relatedProducts?lat=${lat}&lng=${lng}`,
  FEATURED_PRODUCTS: `/website/featureProduct?lat=${lat}&lng=${lng}`,
  SEARCH_PRODUCTS: `/website/searchProduct?lat=${lat}&lng=${lng}`,
  PRODUCTS: `/website/getProduct?lat=${lat}&lng=${lng}`,
  PRODUCTS_COUNT: `/products-count?lat=${lat}&lng=${lng}`,
  TOP_SELLERS: `/top-seller?lat=${lat}&lng=${lng}`,
  PRODUCT_DETAILS: (slug) =>
    `/website/forwebGetSingleProduct/${slug}?lat=${lat}&lng=${lng}`,

  ADD_TO_CART: "/addCart",
  GET_CART: "/getCart",
  UPDATE_CART: "/updateCart",
  REMOVE_CART: "/removeCart",
  GET_ADDRESS: "/getAddress",
  ADD_ADDRESS: "/address",
  SET_DEFAULT_ADDRESS: "/setDefault",
  GET_DELIVERY_ESTIMATE: "/getDeliveryEstimateForWebsite",
  PLACE_ORDER: "/placeOrder",
  VERIFY_PAYMENT: "/verifyPayment",
  GET_ORDERS: "/getOrderDetails",
  PAGES: "/getPage",
  SAVE_CONTACT_US: "/save-contact-us",
  SELLER_PRODUCTS: "/seller-products",
  RECOMMANDED_PRODUCTS: "/recommedProduct",
  SIMILAR_PRODUCT: "/checkSimilarProduct",
  SUBMIT_RATING: "/rating",
  UPDATE_LOCATION: "/location",
  TRACK_MAP_USAGE: "/track-map-usage",
  GET_CHARITY: "/getCharity",
  GET_CHARITY_CONTENT: "/getCharityContent",
  FRANCHISE_ENQUIRY: "/frenchise-enquiry",
  GET_SELLER_COUPONS: "/seller/get-coupons"
};
