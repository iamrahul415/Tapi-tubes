// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutLeft from "/assets/craneLeft.png";
import aboutRight from "/assets/craneRight.png";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about-us-detail"); 
  };

  return (
    <section
      id="About-us"
      className="relative w-full bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Pipe Icons (absolute positioned) */}
      <img
        src="/assets/pipeIcon1.png"
        alt="pipe left"
        className="absolute top-0 left-0 w-16 sm:w-20 lg:w-24"
      />
      <img
        src="/assets/pipeIcon2.png"
        alt="pipe right"
        className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24"
      />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-[55px] text-[#405FFC] font-poppins font-medium text-center uppercase mb-8">
        About Us
      </h2>

      {/* Content Flex */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Image → hidden on mobile */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="hidden sm:block flex-shrink-0"
        >
          <img
            src={aboutLeft}
            alt="About us left"
            className="w-40 sm:w-60 lg:w-[280px] h-auto object-cover"
          />
        </motion.div>

        {/* Center Text with Animation */}
        <div className="flex-1 text-center px-2 sm:px-4">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg sm:text-xl lg:text-[35px] leading-relaxed lg:leading-[1.225] text-white font-poppins"
          >
            Who We Are <br /> At Tapitubes, we are dedicated to delivering
            high-quality steel tubes and pipes that power industries,
            infrastructure, and innovation. With a strong foundation in
            precision engineering and a commitment to excellence, we have built
            a reputation as a trusted name in the steel tube industry.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border border-[#405FFC] text-[#405FFC] font-poppins font-bold uppercase rounded-xl hover:bg-[#405FFC] hover:text-white transition"
            onClick={handleKnowMore} // ✅ Add click
          >
            Know More
          </motion.button>
        </div>

        {/* Right Image → hidden on mobile */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="hidden sm:block flex-shrink-0"
        >
          <img
            src={aboutRight}
            alt="About us right"
            className="w-40 sm:w-60 lg:w-[280px] h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
