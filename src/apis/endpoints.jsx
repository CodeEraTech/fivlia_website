// Place your API base URL here
export const API_BASE_URL = "https://api.fivlia.in";
// export const API_BASE_URL = "http://172.93.223.239:8080";


// Define all endpoints here
export const ENDPOINTS = {
  VERIFY_MOBILE: "/verifyMobile",
  GET_SETTINGS: "/getSettings",
  LOGIN: "/login",
  VERIFY_OTP: "/verifyOtp",
  REGISTER: "/register",
  CATEGORIES: "/getMainCategory",
  BRANDS: "/getBrand",
  BANNERS: "/website/forwebgetBanner?lat=29.145848762271545&lng=75.73472849177169",
  //BANNERS: "/getAllBanner",
  POPULAR_PRODUCTS: "/website/bestSelling?lat=29.1553958&lng=75.7218976",
  RELATED_PRODUCTS: '/website/relatedProducts?lat=29.1553958&lng=75.7218976',
  FEATURED_PRODUCTS: '/website/featureProduct?lat=29.1553958&lng=75.7218976',
  SEARCH_PRODUCTS: '/website/searchProduct?lat=29.1553958&lng=75.7218976',
  PRODUCTS: "/website/getProduct?lat=29.1553958&lng=75.7218976",
  ADD_TO_CART: "/addCart",
  GET_CART: "/getCart",
  UPDATE_CART: "/updateCart",
  REMOVE_CART: "/removeCart",
  GET_ADDRESS: "/getAddress",
  ADD_ADDRESS: "/address",
  GET_DELIVERY_ESTIMATE: "/getDeliveryEstimateForWebsite",
  PLACE_ORDER: "/placeOrder",
  VERIFY_PAYMENT: '/verifyPayment',
  GET_ORDERS: "/getOrderDetails",
  PAGES:"/getPage",
  SAVE_CONTACT_US:"/save-contact-us"
}; 