import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Component/Header';
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/careers/ContactUs.jsx";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/careers/Blog";
import BlogDetail from "./pages/careers/BLogDetail.jsx";
import OrderCheckout from "./pages/OrderCheckout";
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import OtpVerification from "./pages/Accounts/OtpVerification";
import DeleteAccount from "./pages/Accounts/DeleteAccount";
import ProductDetails from './ProductList/ProductDetails';
import BrandDetail from "./pages/Shop/BrandDetail";
import CmsPage from "./Component/CmsPage.jsx";
import BecomeASeller from "./pages/careers/BecomeASeller.jsx";
import BecomeADeliveryPartner from "./pages/careers/BecomeADeliveryPartner.jsx";
import SellerProducts from "./ProductList/SellerProducts.jsx";
import SimilarProducts from "./ProductList/SimilarProducts.jsx";
import { isOpenInApp } from "./utils/isOpenInApp";
import { HelmetProvider } from "react-helmet-async";


const App = () => {
  const [hideLayout, setHideLayout] = useState(false);
  useEffect(() => {
    const isInApp = isOpenInApp();
    setHideLayout(isInApp);
  }, []);

  return (
    <div>
      <HelmetProvider>
      <Router>
        {!hideLayout && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/OrderCheckout" element={<OrderCheckout />} />
          <Route path="/MyAccount" element={<MyAccountSetting />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
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
        </Routes>
        {!hideLayout && <Footer />}
      </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;
