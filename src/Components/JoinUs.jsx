import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const JoinUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID2,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID3,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY2
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage("✅ Application submitted successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage("❌ Failed to submit. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-black text-white">
      {/* Left Side */}
      <div
        className="relative flex flex-col justify-center items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/BackgroundImg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-medium tracking-[0.225em] font-poppins mb-4">
            Join us
          </h2>
          <p className="text-[#FFFFFF] font-poppins mb-6 max-w-xs mx-auto -tracking-normal">
            Please feel free to <br /> reach out to us and we’ll get back to you
            promptly.
          </p>
          <img
            src="assets/EnquiryImg.png"
            alt="Illustration"
            className="mx-auto mb-6 w-80"
          />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex justify-start items-start bg-black p-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-md space-y-4"
        >
          <h3 className="text-xl font-normal font-poppins text-[#405FFC] mb-2">
            Fill in your details below and click submit
          </h3>

          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            name="company_name"
            placeholder="Previous Company Name"
            className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            name="contact_number"
            placeholder="Contact Number"
            required
            className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />

          {/* Resume Upload */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Resume Link (Google Drive, Dropbox, etc.)
            </label>
            <input
              type="url"
              name="resume_link"
              placeholder="Paste your resume link here"
              required
              className="w-full p-5 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold uppercase disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {statusMessage && (
            <p className="mt-4 text-sm text-gray-300">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
