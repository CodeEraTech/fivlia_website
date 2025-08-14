// react 
import React from "react";
// css
import "./App.css";
// browserrouter 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from './Component/Header';
import Footer from "./Component/Footer";
// pages
import Home from "./pages/Home";
// About pages
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import BlogCategory from "./pages/About/BlogCategory";
import Contact from "./pages/About/Contact";
// Shop pages
import Shop from "./pages/Shop/Shop";
import OrderCheckout from "./pages/OrderCheckout";
// Store pages
import StoreList from "./pages/store/StoreList";
import SingleShop from "./pages/store/SingleShop";
// Account pages
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAcconutNotification from "./pages/Accounts/MyAcconutNotification";
import MyAcconutPaymentMethod from "./pages/Accounts/MyAcconutPaymentMethod";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import MyAccountForgetPassword from "./pages/Accounts/MyAccountForgetPassword";
import MyAccountSignIn from "./pages/Accounts/MyAccountSignIn";
import MyAccountSignUp from "./pages/Accounts/MyAccountSignUp";
import FAQ from "./pages/FooterElements/Faq";
import Coupons from "./pages/FooterElements/Coupons";
import Careers from "./pages/FooterElements/Careers";
import HelpCenter from "./pages/FooterElements/HelpCenter";
import OtpVerification from "./pages/Accounts/OtpVerification";
import ProductDetails from './ProductList/ProductDetails';
import BrandDetail from "./pages/Shop/BrandDetail";
import CmsPage from "./Component/CmsPage.jsx";


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/OrderCheckout" element={<OrderCheckout />} />
          <Route path="/MyAccount" element={<MyAccountSetting />} />
          <Route path="/brand" element={<BrandDetail />} />
          
          {/* Store pages */}
          <Route path="/StoreList" element={<StoreList />} />
          <Route path="/SingleShop" element={<SingleShop />} />
          {/* Accounts pages */}
          <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
          <Route path="/MyAcconutNotification" element={<MyAcconutNotification />} />
          <Route path="/MyAcconutPaymentMethod" element={<MyAcconutPaymentMethod />} />
          <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
          <Route path="/MyAccountForgetPassword" element={<MyAccountForgetPassword />} />
          <Route path="/MyAccountSignIn" element={<MyAccountSignIn />} />
          <Route path="/MyAccountSignUp" element={<MyAccountSignUp />} />
           <Route path="/otp-verification" element={<OtpVerification />} />
          {/* About pages */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogCategory" element={<BlogCategory />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* Footer Elements */}
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
             <Route path="/:pageSlug" element={<CmsPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
