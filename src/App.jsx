import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUsDetail from "./Pages/AboutUsDetail";
import ProductPage from "./Pages/ProductPage";
import Product1Page from "./Pages/Product1Page";
import Product2Page from "./Pages/Product2Page";
import Product3Page from "./Pages/Product3Page";
import CareerPage from "./Pages/CareerPage";
import PeoplePage from "./Pages/PeoplePage";
import PressReleasePage from "./Pages/PressReleasePage";
import Footer from "./Components/Footer";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // Use 'auto' instead of 'smooth' for immediate scroll
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us-detail" element={<AboutUsDetail />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Product1Page" element={<Product1Page />} />
        <Route path="/Product2Page" element={<Product2Page />} />
        <Route path="/Product3Page" element={<Product3Page />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/PeoplePage" element={<PeoplePage />} />
        <Route path="/PressReleasePage" element={<PressReleasePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
