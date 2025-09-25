// src/components/Portfolio.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "../redux/productSlice"; // adjust path if needed
import { Link } from "react-router-dom";

export default function Portfolio() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center py-16 sm:py-20 overflow-hidden">
      {/* Overlay Background */}
      <div
        className="absolute inset-0 bg-black/100"
        style={{
          backgroundImage: "url('/assets/BackgroundImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[55px] text-[#405FFC] mb-4 font-semibold uppercase"
        >
          Portfolio
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-lg lg:text-[45px] mb-10 text-[#FFFFFF] font-semibold"
        >
          What product do you wish to enquire / purchase ?
        </motion.h2>

        {/* Loading & Error */}
        {loading && <p className="text-white mb-8">Loading products...</p>}
        {error && <p className="text-red-500 mb-8">{error}</p>}

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products &&
            products.map((p, idx) => {
              // Prepare benefit titles
              const benefitTitles = Array.isArray(p.benefits)
                ? p.benefits.map((b) => b.point).join(", ")
                : "";

              // Prepare application titles
              const applicationTitles = Array.isArray(p.applications)
                ? p.applications.map((a) => a.point).join(", ")
                : "";

              return (
                <Link
                  key={p._id || idx}
                  to={`/product/${p._id}`}
                  className="block p-4 sm:p-6 rounded-2xl cursor-pointer bg-black/40 backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[#405FFC]/30"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={p.mainImage?.url || "/assets/fallback.jpg"}
                      alt={p.title1 || p.name}
                      className="w-full aspect-video object-cover mb-4 border-[3px] sm:border-[4px] border-[#405FFC] rounded-xl"
                    />

                    <h3 className="text-lg sm:text-xl text-[#FFFFFF] text-left">
                      {p.title1 || p.name}
                    </h3>
                    <h3 className="text-lg sm:text-xl text-[#FFFFFF] mb-2 text-left">
                      {p.title2 || ""}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">
                      {typeof p.desc1 === "object"
                        ? `${p.desc1.point}: ${p.desc1.description}`
                        : p.desc1}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">
                      {typeof p.desc2 === "object"
                        ? `${p.desc2.point}: ${p.desc2.description}`
                        : p.desc2}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">
                      {typeof p.desc3 === "object"
                        ? `${p.desc3.point}: ${p.desc3.description}`
                        : p.desc3}
                    </p>

                    {/* Benefits Title */}
                    {benefitTitles && (
                      <h4 className="text-sm sm:text-base text-[#405FFC] font-semibold mt-4 text-left">
                        Benefits: {benefitTitles}
                      </h4>
                    )}

                    {/* Applications Title */}
                    {applicationTitles && (
                      <h4 className="text-sm sm:text-base text-[#405FFC] font-semibold mt-2 text-left">
                        Applications: {applicationTitles}
                      </h4>
                    )}
                  </motion.div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
