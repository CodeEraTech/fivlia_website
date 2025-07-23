// Place your API base URL here
export const API_BASE_URL = "https://api.fivlia.in";

// Define all endpoints here
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  CATEGORIES: "/getMainCategory",
  BANNERS: "/getAllBanner",
  POPULAR_PRODUCTS: "/website/bestSelling?lat=29.1553958&lng=75.7218976",
  RELATED_PRODUCTS: '/website/relatedProducts?lat=29.1553958&lng=75.7218976',
  FEATURED_PRODUCTS: '/website/featureProduct?lat=29.1553958&lng=75.7218976',
  SEARCH_PRODUCTS: '/website/searchProduct?lat=29.1553958&lng=75.7218976',
  PRODUCTS: "/website/getProduct?lat=29.1553958&lng=75.7218976",
  
}; 