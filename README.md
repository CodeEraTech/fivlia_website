# fivlia_website
React.js Quick Commerce Website



import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/careers/ContactUs.jsx";
import Shop from "./pages/Shop/Shop";
import OrderCheckout from "./pages/OrderCheckout";
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import OtpVerification from "./pages/Accounts/OtpVerification";
import DeleteAccount from "./pages/Accounts/DeleteAccount";
import ProductDetails from "./ProductList/ProductDetails";
import BrandDetail from "./pages/Shop/BrandDetail";
import CmsPage from "./Component/CmsPage.jsx";
import BecomeASeller from "./pages/careers/BecomeASeller.jsx";
import BecomeADeliveryPartner from "./pages/careers/BecomeADeliveryPartner.jsx";
import SellerProducts from "./ProductList/SellerProducts.jsx";
import SimilarProducts from "./ProductList/SimilarProducts.jsx";
import { isOpenInApp } from "./utils/isOpenInApp";

// ✅ new import for open-app route
import OpenApp from "./pages/OpenApp";

const App = () => {
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    const isInApp = isOpenInApp();
    setHideLayout(isInApp);
  }, []);

  return (
    <div>
      <Router>
        {!hideLayout && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/OrderCheckout" element={<OrderCheckout />} />
          <Route path="/MyAccount" element={<MyAccountSetting />} />
          <Route path="/brand" element={<BrandDetail />} />
          <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
          <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/become-a-seller" element={<BecomeASeller />} />
          <Route path="/become-a-delivery-partner" element={<BecomeADeliveryPartner />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/seller-products" element={<SellerProducts />} />
          <Route path="/explore-other-seller" element={<SimilarProducts />} />
          <Route path="/:pageSlug" element={<CmsPage />} />

          {/* ✅ New route for app opening */}
          <Route path="/open-app" element={<OpenApp />} />
        </Routes>

        {!hideLayout && <Footer />}
      </Router>
    </div>
  );
};

export default App;


import { useEffect } from "react";

const OpenApp = () => {
  useEffect(() => {
    const appScheme = "myapp://home"; // 🔹 Flutter dev gives this
    const webFallback = "https://yourdomain.com"; // 🔹 your live site

    const now = Date.now();
    window.location.href = appScheme;

    const timer = setTimeout(() => {
      if (Date.now() - now < 2000) {
        window.location.href = webFallback;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h3>Opening your app...</h3>
      <p>If nothing happens, <a href="https://yourdomain.com">click here</a>.</p>
    </div>
  );
};

export default OpenApp;
