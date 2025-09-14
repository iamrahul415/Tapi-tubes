export default function Footer() {
  return (
    <div className="w-full bg-[#000000] text-white px-6 sm:px-10 md:px-20 py-12">
      {/* Top Row: Logo + Social + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/assets/Logo2.png"
            alt="logo"
            className="w-[70px] sm:w-[80px] h-auto"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <img
            src="/assets/FbIcon.png"
            alt="Facebook"
            className="cursor-pointer"
          />
          <img
            src="/assets/InstaIcon.png"
            alt="Instagram"
            className="cursor-pointer"
          />
          <img
            src="/assets/LinkdinIcon.png"
            alt="LinkedIn"
            className="cursor-pointer"
          />
          <img
            src="/assets/UtubeIcon.png"
            alt="YouTube"
            className="cursor-pointer"
          />
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-1/3">
          <p className="uppercase tracking-widest text-sm text-[#9A9595] mb-3">
            Newsletter
          </p>
          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-sm uppercase font-poppins text-[#FFFFFF] w-full p-2 focus:outline-none"
            />
            <button className="text-[#FFFFFF] text-lg ml-2">→</button>
          </div>
        </div>
      </div>

      {/* Middle Section: Links */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 max-w-5xl mx-auto text-center md:text-left">
        {/* Company */}
        <div>
          <h3 className="text-[#405FFC] font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">Location</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-[#405FFC] font-semibold mb-4">PORTFOLIO</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Application</li>
            <li className="cursor-pointer">Steel Making Process</li>
          </ul>
        </div>

        {/* Newsroom */}
        <div>
          <h3 className="text-[#405FFC] font-semibold mb-4">NEWSROOM</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Press Releases</li>
          </ul>
        </div>

        {/* Miscellaneous */}
        <div>
          <h3 className="text-[#405FFC] font-semibold mb-4">MISCELLANEOUS</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Disclaimer</li>
            <li className="cursor-pointer">Policies</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[#9A9595] text-xs mt-10 gap-3">
        <p>2025 © TAPTUBES</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
