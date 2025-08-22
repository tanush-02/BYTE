import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap first
import "./index.css"; // CSS second

// import HomePage from "./landing_page/home/HomePage/HomePage.js";
// import Signup from "./landing_page/signup/Signup.js";
// import ProductPage from "./landing_page/products/ProductPage";
// import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    { <Routes>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>}
    <Footer /> 
  </BrowserRouter>
);