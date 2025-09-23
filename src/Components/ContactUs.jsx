// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID1, // replace with your EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage("❌ Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center py-16 md:py-20"
      style={{
        backgroundImage: "url('/assets/BackgroundImg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/100 -z-20"></div>

      {/* Decorative image on large screens */}
      <motion.img
        src="/assets/phone.png"
        alt="Decorative"
        className="absolute hidden lg:block w-[200px] xl:w-[266px] h-auto object-contain opacity-70 -z-10 left-[20%] top-[-2%] -translate-y-1/2 origin-top"
        animate={{ rotate: [-10, 10, -10], y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative image on small screens */}
      <motion.img
        src="/assets/phone.png"
        alt="Decorative"
        className="absolute lg:hidden w-40 sm:w-48 md:w-56 h-auto object-fill opacity-30 -z-10 top-[1%] left-20 -translate-x-1/2 -translate-y-1/2 origin-top"
        animate={{ rotate: [-10, 10, -10], y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-[#405FFC] mb-10">
          Contact Us
        </h2>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative"
        >
          {/* Left Inputs */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            />
          </div>

          {/* Message Box */}
          <div>
            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full h-48 sm:h-56 md:h-60 resize-none px-4 py-3 rounded-xl bg-black/80 text-white border border-[#405FFC] focus:border-[#405FFC] focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border border-[#405FFC] text-[#405FFC] font-poppins font-bold uppercase rounded-xl hover:bg-[#405FFC] hover:text-white transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <p className="mt-4 text-sm text-gray-300">{statusMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
