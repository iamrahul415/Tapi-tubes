import { motion } from "framer-motion";
import product1 from "/assets/Product1Img.jpg";
import product2 from "/assets/Product2Img.png";
import product3 from "/assets/Product3Img.jpg";

export default function Portfolio() {
  const products = [
    {
      img: product1,
      title1: "ERW Black",
      title2: "Ractangular Tubes",
      desc1: "Shape: Hollow rectangular cross-section",
      desc2: "Uses: Structural applications, frames, furniture, construction, general engineering",
      desc3: "Advantage: High strength-to-weight ratio, good for load-bearing structures",
    },
    {
      img: product2,
      title1: "ERW Black",
      title2: "Round Tubes",
      desc1: "Shape: Hollow circular cross-section",
      desc2: "Uses: Pipelines, scaffolding, automotive, general engineering",
      desc3: "Advantage: Excellent torsional strength, versatile usage",
    },
    {
      img: product3,
      title1: "ERW Black",
      title2: "Square Tubes",
      desc1: "Shape: Hollow square cross-section",
      desc2: "Uses: Furniture, gates, structural support, fabrication",
      desc3: "Advantage: Good resistance to bending, easy to weld",
    },
  ];

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
      ></div>

      <div className="relative max-w-6xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Headings with animation */}
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl cursor-pointer bg-black/40 backdrop-blur-sm
                         transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[#405FFC]/30"
            >
              <img
                src={p.img}
                alt={p.title1}
                className="w-full aspect-video object-cover mb-4 border-[3px] sm:border-[4px] border-[#405FFC] rounded-xl"
              />
              <h3 className="text-lg sm:text-xl text-[#FFFFFF] text-left">{p.title1}</h3>
              <h3 className="text-lg sm:text-xl text-[#FFFFFF] mb-2 text-left">{p.title2}</h3>

              <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">{p.desc1}</p>
              <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">{p.desc2}</p>
              <p className="text-xs sm:text-sm text-[#A9A9A9] mb-2 text-left">{p.desc3}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
