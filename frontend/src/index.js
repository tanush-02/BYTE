import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./index.css";

import HomePage from "./landing_page/home/HomePage/HomePage.js";
import Auth from "./landing_page/signup/Auth.js"; // ✅ use new Auth component
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import CropPrices from "./landing_page/Market/CropPrice.js";


import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/market" element={<CropPrices />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<Auth />} /> {/* ✅ Signup + Signin */}
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer /> 
  </BrowserRouter>
);
