import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "../redux/productSlice";
import { motion } from "framer-motion"; // ✅ for animations

const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ✅ Skeleton loader component
  const SkeletonCard = () => (
    <div className="relative group animate-pulse">
      <div className="w-full h-[240px] sm:h-[300px] md:h-[340px] bg-gray-700/50 rounded-xl"></div>
      <div className="mt-4 h-5 w-3/4 bg-gray-600/60 rounded mx-auto"></div>
    </div>
  );

  if (loading) {
    return (
      <section className="w-full h-auto bg-black text-white px-4 sm:px-6 md:px-10 py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg">
            Our Products
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Discover our wide range of high-quality steel tubes designed with precision, durability, and trust.
          </p>
        </div>

        {/* Skeleton grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5.5rem]">
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) return <p className="text-red-500 text-center py-20">Error: {error}</p>;

  return (
    <section className="w-full h-auto bg-black text-white px-4 sm:px-6 md:px-10 py-14">
      {/* Heading with smooth animation */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg"
        >
          Our Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Discover our wide range of high-quality steel tubes designed with precision, durability, and trust.
        </motion.p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5.5rem]">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
          >
            <img
              src={product.mainImage?.url}
              alt={product.name}
              className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <Link to={`/product/${product._id}`}>
              <button
                className={`absolute bottom-[3.5rem] ${
                  index % 2 === 0 ? "right-6" : "left-6"
                } bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition`}
              >
                Discover
              </button>
            </Link>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Product;
