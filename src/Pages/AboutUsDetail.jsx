// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUsDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const values = [
    "Quality First: Every product is crafted with precision to meet international standards.",
    "Innovation: We constantly innovate to deliver better solutions for a changing world.",
    "Integrity: We operate with transparency and fairness in all our business practices.",
    "Sustainability: Committed to eco-friendly processes and sustainable growth.",
  ];

  return (
    <section className="w-full bg-black text-white px-4 sm:px-8 md:px-16 py-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our journey, mission, and values that drive TapiTubes towards excellence in steel tube manufacturing.
        </p>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12 max-w-5xl mx-auto px-2 sm:px-0"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
          Our Story
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          TapiTubes Ltd. has been a pioneer in high-quality steel tubes and pipes for decades. Established with a vision to provide durable, reliable, and precision-engineered products, we have grown into a trusted name serving diverse industries across India and abroad.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 max-w-5xl mx-auto px-2 sm:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            To deliver world-class steel tube solutions that meet the evolving demands of our customers, ensuring quality, sustainability, and innovation at every step.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            To be recognized as a leading provider of steel solutions, setting industry benchmarks in quality, efficiency, and customer satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12 max-w-5xl mx-auto px-2 sm:px-0"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-6">Our Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base md:text-lg">
          {values.map((val, idx) => (
            <li
              key={idx}
              className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full"
            >
              {val}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Journey */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-2 sm:px-0"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-6">Our Journey</h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          From a small setup producing standard steel tubes, we have expanded our portfolio to include ERW Black, Oval, Round, and Rectangular Tubes, catering to industrial, construction, and infrastructure projects. Our state-of-the-art facilities and skilled workforce ensure that each product meets the highest standards of quality and performance.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUsDetail;
