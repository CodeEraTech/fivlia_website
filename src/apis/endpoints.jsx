import { getApps, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// export const DEFAULT_API_BASE_URL = "https://api.fivlia.in";
// export const DEFAULT_API_BASE_URL = "https://api.fivlia.com";
// export const DEFAULT_API_BASE_URL = "https://api.fivlia.in";
// export const DEFAULT_API_BASE_URL = "http://localhost:8080";
export const DEFAULT_API_BASE_URL = "https://api.fivlia.co.in";
export const USE_FIREBASE_API_URL = true; // Set to true to enable Firebase-based API URL fetching

const firebaseConfig = {
  apiKey: "AIzaSyCOtUDhG_Sk6ewi8CRBHYNJVwtWy-pWYh0",
  authDomain: "fivlia-quick-commerce.firebaseapp.com",
  projectId: "fivlia-quick-commerce",
  storageBucket: "fivlia-quick-commerce.firebasestorage.app",
  messagingSenderId: "566192067637",
};

export let API_BASE_URL = DEFAULT_API_BASE_URL;

const hasFirebaseConfig = () =>
  Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/+$/, "");
const withTimeout = (promise, timeoutMs = 4000) =>
  Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Firebase API base URL request timed out."));
      }, timeoutMs);
    }),
  ]);

let apiBaseUrlPromise = null;

export const getApiBaseUrl = () => API_BASE_URL;

export const initializeApiBaseUrl = async () => {
  if (!USE_FIREBASE_API_URL) {
    API_BASE_URL = DEFAULT_API_BASE_URL;
    return API_BASE_URL;
  }

  if (apiBaseUrlPromise) {
    return apiBaseUrlPromise;
  }

  apiBaseUrlPromise = (async () => {
    if (!hasFirebaseConfig()) {
      console.warn(
        "Firebase API config is incomplete. Falling back to direct API base URL."
      );
      API_BASE_URL = DEFAULT_API_BASE_URL;
      return API_BASE_URL;
    }

    try {
      const app = getApps().length
        ? getApps()[0]
        : initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const apiConfigSnapshot = await withTimeout(
        getDoc(doc(firestore, "config", "api"))
      );
      const firebaseApiBaseUrl = apiConfigSnapshot.data()?.base_url?.trim();

      API_BASE_URL = firebaseApiBaseUrl
        ? normalizeBaseUrl(firebaseApiBaseUrl)
        : DEFAULT_API_BASE_URL;
    } catch (error) {
      console.error(
        "Unable to load API base URL from Firebase. Falling back to direct API base URL.",
        error
      );
      API_BASE_URL = DEFAULT_API_BASE_URL;
    }

    return API_BASE_URL;
  })();

  return apiBaseUrlPromise;
};

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
  APPDOWNLOAD: "/getDownloadAppPages",

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
  GET_SELLER_COUPONS: "/seller/get-coupons",
};
