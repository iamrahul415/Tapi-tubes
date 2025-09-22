import { Link } from "react-router-dom";

function MenuOverlay({ open, onClose }) {
  if (!open) return null;

  const leftLinks = [
    {
      number: "01",
      label: "Company",
      to: "/",
      sub: ["About Us", "Locations"],
    },
    {
      number: "02",
      label: "Products",
      to: "/product",
      sub: ["Round Tube", "Square Tube", "Rectangle Tube"],
    },
    {
      number: "03",
      label: "People",
      to: "/PeoplePage",
      sub: ["Team Members"],
    },
    {
      number: "04",
      label: "Careers",
      to: "/CareerPage",
      sub: ["Job Opportunity"],
    },
    {
      number: "05",
      label: "Newsroom",
      to: "/PressReleasePage",
      sub: ["Press Releases"],
    },
  ];

  const rightLinks = [
    { number: "06", label: "Press Releases", to: "/PressReleasePage" },
    { number: "07", label: "Portfolio", to: "/" },
  ];

  return (
    <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto">
      {/* Header: Logo + Close */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link to="/" onClick={onClose}>
          <img
            src="../assets/Logo.png"
            alt="companyLogo"
            width={70}
            height={42}
            className="cursor-pointer hover:scale-105 transition"
          />
        </Link>
      </div>
      <button
        className="absolute top-4 right-5 sm:top-6 sm:right-8 text-white hover:text-[#405FFC] tracking-widest text-sm sm:text-base"
        onClick={onClose}
      >
        CLOSE
      </button>

      {/* Menu Content */}
      <div
        className="
          flex flex-col lg:flex-row 
          h-full 
          items-center 
          justify-center lg:justify-evenly 
          px-4 sm:px-8 lg:px-24 
          py-16 sm:py-24 
          sm:gap-16
        "
      >
        {/* Left Section */}
        <ul
          className="
            flex flex-col 
            gap-4 sm:gap-6 lg:gap-10 
            text-xl sm:text-2xl lg:text-3xl 
            font-bold font-poppins 
            text-center lg:text-left
          "
        >
          {leftLinks.map((link, idx) => (
            <li key={idx} className="group relative cursor-pointer">
              <Link
                to={link.to}
                onClick={onClose}
                className="flex items-baseline gap-2 sm:gap-3 justify-center lg:justify-start transition-colors duration-300"
              >
                <span className="relative -top-4 sm:-top-5 text-[0.65rem] sm:text-[0.7rem] text-gray-400 group-hover:text-[#405FFC] transition-colors duration-300">
                  {link.number}
                </span>
                <span className="relative flex items-center gap-3 sm:gap-5 group-hover:text-[#405FFC] transition-colors duration-300 tracking-[0.2em]">
                  <span className="absolute -left-5 lg:-left-10 w-6 text-[#405FFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    /
                  </span>
                  {link.label}
                </span>
              </Link>

              {/* Sub-links with | separators */}
              {link.sub && (
                <ul
                  className="
                    mt-1 ml-0 lg:ml-7 
                    flex flex-row flex-wrap 
                    justify-center lg:justify-start
                    text-xs sm:text-sm 
                    text-gray-400 
                    opacity-0 group-hover:opacity-100 
                    transition-all
                  "
                >
                  {link.sub.map((sublink, i) => (
                    <li
                      key={i}
                      className="hover:text-[#405FFC] cursor-pointer transition-colors duration-300"
                    >
                      {sublink}
                      {i < link.sub.length - 1 && (
                        <span className="mx-2 text-gray-500">|</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div
          className="
            flex flex-col 
            gap-6 sm:gap-8 lg:gap-10 
            text-xl sm:text-2xl lg:text-3xl 
            font-bold font-poppins 
            text-center lg:text-left
          "
        >
          <ul className="flex flex-col gap-3 sm:gap-4">
            {rightLinks.map((link, idx) => (
              <li key={idx} className="group relative cursor-pointer">
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="flex items-baseline gap-2 sm:gap-3 justify-center lg:justify-start transition-colors duration-300"
                >
                  <span className="relative -top-3 sm:-top-4 text-[0.65rem] sm:text-[0.7rem] text-gray-400 group-hover:text-[#405FFC] transition-colors duration-300">
                    {link.number}
                  </span>
                  <span className="relative flex items-center gap-3 sm:gap-5 group-hover:text-[#405FFC] transition-colors duration-300 tracking-[0.2em]">
                    <span className="absolute -left-5 lg:-left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      /
                    </span>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm mt-4 sm:mt-6">
            <a
              href="mailto:contact@tapitubes.com"
              className="flex items-center justify-center lg:justify-start gap-2 text-[#405FFC]"
            >
              <img src="../assets/Email.png" alt="email" />
              contact@tapitubes.com
            </a>
            <a
              href="tel:181144421145"
              className="flex items-center justify-center lg:justify-start gap-2 text-[#405FFC]"
            >
              <img src="/assets/Call.png" alt="call" /> +91 9876543210
            </a>
            <a
              href="https://wa.me/919123931313"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 text-[#405FFC]"
            >
              <img src="../assets/whatsApp.png" alt="whatsapp" /> +91 9874563210
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center lg:justify-start">
            <img src="/assets/FbIcon.png" className="cursor-pointer" alt="fb" />
            <img
              src="/assets/InstaIcon.png"
              className="cursor-pointer"
              alt="insta"
            />
            <img
              src="/assets/LinkdinIcon.png"
              className="cursor-pointer"
              alt="linkedin"
            />
            <img
              src="/assets/UtubeIcon.png"
              className="cursor-pointer"
              alt="yt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
