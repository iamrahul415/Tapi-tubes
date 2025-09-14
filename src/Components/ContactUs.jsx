// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center py-16 md:py-20"
      style={{
        backgroundImage: "url('/assets/BackgroundImg.png')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/100 -z-20"></div>

      {/* Decorative image on large screens (side swing) */}
      <motion.img
        src="/assets/phone.png"
        alt="Decorative"
        className="absolute hidden lg:block w-[200px] xl:w-[266px] h-auto object-contain opacity-70 -z-10 left-[20%] top-[-2%] -translate-y-1/2 origin-top"
        animate={{
          rotate: [-10, 10, -10], // swinging
          y: [0, -15, 0],         // floating
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative image on small screens (center watermark behind form) */}
      <motion.img
        src="/assets/phone.png"
        alt="Decorative"
        className="absolute lg:hidden w-40 sm:w-48 md:w-56 h-auto object-fill opacity-30 -z-10 top-[1%] left-20  -translate-x-1/2 -translate-y-1/2 origin-top"
        animate={{
          rotate: [-10, 10, -10],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-[#405FFC] mb-10">
          Contact Us
        </h2>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {/* Left Inputs */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            />
          </div>

          {/* Right Message Box */}
          <div>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full h-48 sm:h-56 md:h-60 resize-none px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            ></textarea>
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border border-[#405FFC] text-[#405FFC] font-poppins font-bold uppercase rounded-xl hover:bg-[#405FFC] hover:text-white transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
