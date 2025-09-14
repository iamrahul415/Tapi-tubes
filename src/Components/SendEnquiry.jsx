const SendEnquiry = () => {
  return (
    <div
      id="send-enquiry"
      className="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-black text-white"
    >
      {/* Left Side */}
      <div
        className="relative flex flex-col justify-center items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/BackgroundImg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-medium tracking-[0.225em] font-poppins mb-4">Send Enquiry</h2>
          <p className="text-[#FFFFFF] font-poppins mb-6 max-w-xs mx-auto -tracking-normal">
            Please feel free to <br/> reach out to us and we’ll get back to you
            promptly.
          </p>
          {/* Illustration Image */}
          <img
            src="assets/EnquiryImg.png"
            alt="Illustration"
            className="mx-auto mb-6 w-60"
          />
          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img src="assets/WtspIcon.png" alt="whtsLogo" />
              <span className="text-lg">+91 9876543210</span>
            </div>
            <div className="w-full h-px bg-[#ffffff]"></div>
            <div className="flex items-center justify-center space-x-3">
              <img src="assets/CallIcon.png" alt="callLogo" />
              <span className="text-lg">+91 9874563210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="flex justify-start items-start bg-black p-8">
        <form className="w-full max-w-md space-y-4">
          <h3 className="text-xl font-normal font-poppins text-[#405FFC] mb-2">
            Fill in your details below and click submit
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <input
            type="number"
            placeholder="Quantity (In Tones)"
            className="w-full p-3 rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
          />
          <textarea
            placeholder="Query"
            className="w-full p-3 resize-none rounded-md bg-transparent border border-[#405FFC] focus:border-blue-900 outline-none"
            rows="3"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendEnquiry;
