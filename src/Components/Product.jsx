import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "../redux/productSlice";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const lastClickTime = useRef(0);

  const handleDiscoverClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();

    const now = Date.now();
    if (now - lastClickTime.current < 1000) return;
    lastClickTime.current = now;

    navigate(`/product/${productId}`);
  };

 // Loading state
  if (loading) {
    return (
      <section className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Loading products...</p>
        </div>
      </section>
    );
  }

  if (error)
    return <p className="text-red-500 text-center py-20">Error: {error}</p>;

  return (
    <section className="w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-16 sm:py-24">
      {/* Heading */}
      <div className="mb-10 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-left"
        >
          PRODUCT
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left side with 2 products */}
        <div className="space-y-10 sm:space-y-16 relative z-10">
          {products.slice(0, 2).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="relative group"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl border-2 sm:border-4 border-transparent group-hover:border-blue-500 overflow-hidden shadow-2xl transition-transform duration-500 ease-out mx-auto group-hover:scale-105">
                <img
                  src={product.mainImage?.url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => handleDiscoverClick(e, product._id)}
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600/90 hover:bg-blue-500 px-4 sm:px-5 py-2 text-sm sm:text-base text-white font-semibold rounded-md transition-all duration-300 shadow-lg z-20 cursor-pointer"
                >
                  Discover
                </button>
              </div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold font-poppins text-white text-center leading-tight">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Right side with 1 product + decorative images */}
        <div className="relative z-10 mt-10 lg:mt-0">
          {/* Decorative Top Image - hidden on mobile */}
          <div className="hidden sm:block absolute -top-10 right-0 w-64 sm:w-[28rem] h-32 sm:h-64 opacity-50 pointer-events-none">
            <img
              src="../assets/Img2.png"
              alt="Decorative"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product */}
          {products[2] && (
            <motion.div
              key={products[2]._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="relative group  sm:mt-16 lg:mt-40"
            >
              <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl border-2 sm:border-4 border-transparent group-hover:border-blue-500 overflow-hidden shadow-2xl transition-transform duration-500 ease-out mx-auto group-hover:scale-105">
                <img
                  src={products[2].mainImage?.url}
                  alt={products[2].name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => handleDiscoverClick(e, products[2]._id)}
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600/90 hover:bg-blue-500 px-4 sm:px-5 py-2 text-sm sm:text-base text-white font-semibold rounded-md transition-all duration-300 shadow-lg z-20 cursor-pointer"
                >
                  Discover
                </button>
              </div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold font-poppins text-white text-center leading-tight">
                {products[2].name}
              </h3>
            </motion.div>
          )}

          {/* Decorative Bottom Image - hidden on mobile */}
          <div className="hidden sm:block absolute -bottom-16 right-0 w-64 sm:w-[35rem] h-40 sm:h-[25rem] opacity-50 pointer-events-none">
            <img
              src="../assets/Img1.png"
              alt="Decorative"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-12 sm:mt-20 relative z-10">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 sm:px-10 py-2 sm:py-3 rounded-md font-semibold tracking-wider transition-all duration-300 text-sm sm:text-base"
        >
          KNOW MORE
        </motion.button>
      </div>
    </section>
  );
};

export default Product;
