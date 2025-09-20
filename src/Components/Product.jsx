import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 py-14">
        <div className="mb-5">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-left">
            PRODUCT
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 relative max-w-7xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-96 h-72 bg-gray-700/50 rounded-xl mx-auto animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  if (error)
    return <p className="text-red-500 text-center py-20">Error: {error}</p>;

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 py-[0.5rem]">
      {/* Heading */}
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-semibold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-left ml-[2]"
        >
          PRODUCT
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        {/* Left side with 2 products */}
        <div className="space-y-20 relative z-10">
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
              <div className="relative w-[621px] h-[414px] rounded-xl border-4 border-transparent group-hover:border-blue-500 overflow-hidden shadow-2xl transition-transform duration-500 ease-out mx-auto group-hover:scale-105">
                <img
                  src={product.mainImage?.url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Link to={`/product/${product._id}`}>
                  <motion.button
                    className="absolute bottom-6 right-6 bg-blue-600/90 hover:bg-blue-500 px-5 py-2 text-white font-semibold rounded-md transition-all duration-300 shadow-lg z-20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discover
                  </motion.button>
                </Link>
              </div>
                <h3 className="mt-4 text-lg font-bold font-poppins text-white text-center leading-tight">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Right side with 1 product + decorative images */}
        <div className="relative z-10">
          {/* Decorative Top Image */}
          <div className="absolute -top-20 right-0 w-[41rem] h-[16rem] opacity-50">
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
              className="relative group mt-40"
            >
              <div className="relative w-[621px] h-[414px] rounded-xl border-4 border-transparent group-hover:border-blue-500 overflow-hidden shadow-2xl transition-transform duration-500 ease-out mx-auto">
                <img
                  src={products[2].mainImage?.url}
                  alt={products[2].name}
                  className="w-full h-full object-cover"
                />
                <Link to={`/product/${products[2]._id}`}>
                  <motion.button
                    className="absolute bottom-6 right-6 bg-blue-600/90 hover:bg-blue-500 px-5 py-2 text-white font-semibold rounded-md transition-all duration-300 shadow-lg z-20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discover
                  </motion.button>
                </Link>
              </div>
              <h3 className="mt-4 text-lg font-bold font-poppins text-white text-center leading-tight">
                {products[2].name}
              </h3>
            </motion.div>
          )}

          {/* Decorative Bottom Image */}
          <div className="absolute -bottom-28 right-0 w-[35rem] h-[28rem] opacity-50">
            <img
              src="../assets/Img1.png"
              alt="Decorative"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-20 relative z-10">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-10 py-3 rounded-md font-semibold tracking-wider transition-all duration-300"
        >
          KNOW MORE
        </motion.button>
      </div>
    </section>
  );
};

export default Product;
