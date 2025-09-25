import { useEffect } from "react";
import { Link } from "react-router-dom";

function MenuOverlay({ open, onClose }) {
  // Stop body scroll when overlay is open
 useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Revert to default overflow
    }

    return () => {
      document.body.style.overflow = ""; // Revert to default overflow on unmount
    };
  }, [open]);

  if (!open) return null;

  const allLinks = [
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
    {
      number: "06", 
      label: "Press Releases", 
      to: "/PressReleasePage", 
      sub: ["Blogs"]
    },
    {
      number: "07", 
      label: "Portfolio", 
      to: "/", 
      sub: ["Case Studies"]
    },
  ];

  // Split links for desktop layout
  const leftLinks = allLinks.slice(0, 5);
  const rightLinks = allLinks.slice(5);

  return (
    <div className="fixed inset-0 bg-black text-white z-50 overflow-hidden">
      {/* Header: Logo + Close */}
      <div className="flex justify-between items-center p-4 sm:p-6">
        <Link to="/" onClick={onClose}>
          <img
            src="../assets/Logo.png"
            alt="companyLogo"
            width={60}
            height={36}
            className="sm:w-[70px] sm:h-[42px] cursor-pointer hover:scale-105 transition"
          />
        </Link>
        <button
          className="text-white hover:text-[#405FFC] tracking-widest text-sm sm:text-base transition-colors duration-300"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>

      {/* Menu Content - Mobile First Design */}
      <div className="px-4 sm:px-8 lg:px-24 pb-8">
        {/* Mobile Layout: Two Column */}
        <div className="block lg:hidden">
          <div className="pt-8 flex gap-6">
            {/* Left Column: Navigation Links */}
            <div className="flex-1">
              <ul className="flex flex-col gap-6">
                {allLinks.map((link, idx) => (
                  <li key={idx} className="group relative">
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className="block transition-colors duration-300"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-[10px] text-gray-400 group-hover:text-[#405FFC] transition-colors duration-300 mt-1 min-w-[20px]">
                          {link.number}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 group-hover:text-[#405FFC] transition-colors duration-300">
                            <span className="opacity-0 group-hover:opacity-100 text-[#405FFC] transition-opacity duration-300 text-sm">
                              /
                            </span>
                            <span className="text-[20px] font-bold font-poppins tracking-[0.1em]">
                              {link.label}
                            </span>
                          </div>
                          
                          {/* Sub-links - Always Visible */}
                          {link.sub && (
                            <div className="mt-1 ml-4">
                              <div className="flex flex-col gap-1 text-[16px] text-gray-400">
                                {link.sub.map((sublink, i) => (
                                  <span
                                    key={i}
                                    className="hover:text-[#405FFC] transition-colors duration-300"
                                  >
                                    {sublink}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact & Social */}
            <div className="w-40 flex flex-col gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-[20px] font-bold mb-4 text-[#405FFC]">Contact</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:contact@tapitubes.com"
                    className="flex items-center gap-2 text-[#405FFC] hover:text-white transition-colors duration-300"
                  >
                    <img src="../assets/Email.png" alt="email" className="w-4 h-4" />
                    <span className="text-[14px] leading-tight">contact@tapitubes.com</span>
                  </a>
                  <a
                    href="tel:181144421145"
                    className="flex items-center gap-2 text-[#405FFC] hover:text-white transition-colors duration-300"
                  >
                    <img src="/assets/Call.png" alt="call" className="w-4 h-4" />
                    <span className="text-[16px]">+91 9876543210</span>
                  </a>
                  <a
                    href="https://wa.me/919123931313"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#405FFC] hover:text-white transition-colors duration-300"
                  >
                    <img src="../assets/whatsApp.png" alt="whatsapp" className="w-4 h-4" />
                    <span className="text-[16px]">+91 9874563210</span>
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-[20px] font-bold mb-4 text-[#405FFC]">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  <img 
                    src="/assets/FbIcon.png" 
                    className="cursor-pointer hover:scale-110 transition-transform duration-300 w-6 h-6" 
                    alt="fb" 
                  />
                  <img
                    src="/assets/InstaIcon.png"
                    className="cursor-pointer hover:scale-110 transition-transform duration-300 w-6 h-6"
                    alt="insta"
                  />
                  <img
                    src="/assets/LinkdinIcon.png"
                    className="cursor-pointer hover:scale-110 transition-transform duration-300 w-6 h-6"
                    alt="linkedin"
                  />
                  <img
                    src="/assets/UtubeIcon.png"
                    className="cursor-pointer hover:scale-110 transition-transform duration-300 w-6 h-6"
                    alt="yt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Two Columns */}
        <div className="hidden lg:flex h-[calc(100vh-120px)] items-center justify-evenly">
          {/* Left Section */}
          <ul className="flex flex-col gap-10 text-3xl font-bold font-poppins">
            {leftLinks.map((link, idx) => (
              <li key={idx} className="group relative cursor-pointer">
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="flex items-baseline gap-3 transition-colors duration-300"
                >
                  <span className="relative -top-5 text-[0.7rem] text-gray-400 group-hover:text-[#405FFC] transition-colors duration-300">
                    {link.number}
                  </span>
                  <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition-colors duration-300 tracking-[0.2em]">
                    <span className="absolute -left-10 w-6 text-[#405FFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      /
                    </span>
                    {link.label}
                  </span>
                </Link>

                {/* Sub-links */}
                {link.sub && (
                  <ul className="mt-1 ml-7 flex flex-row flex-wrap text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
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
          <div className="flex flex-col gap-10 text-3xl font-bold font-poppins">
            <ul className="flex flex-col gap-10">
              {rightLinks.map((link, idx) => (
                <li key={idx} className="group relative cursor-pointer">
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="flex items-baseline gap-3 transition-colors duration-300"
                  >
                    <span className="relative -top-4 text-[0.7rem] text-gray-400 group-hover:text-[#405FFC] transition-colors duration-300">
                      {link.number}
                    </span>
                    <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition-colors duration-300 tracking-[0.2em]">
                      <span className="absolute -left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        /
                      </span>
                      {link.label}
                    </span>
                  </Link>

                  {/* Sub-links */}
                  {link.sub && (
                    <ul className="mt-1 ml-7 flex flex-row flex-wrap text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
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

            {/* Contact */}
            <div className="flex flex-col gap-4 text-sm mt-6">
              <a
                href="mailto:contact@tapitubes.com"
                className="flex items-center gap-2 text-[#405FFC]"
              >
                <img src="../assets/Email.png" alt="email" />
                contact@tapitubes.com
              </a>
              <a
                href="tel:181144421145"
                className="flex items-center gap-2 text-[#405FFC]"
              >
                <img src="/assets/Call.png" alt="call" /> +91 9876543210
              </a>
              <a
                href="https://wa.me/919123931313"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#405FFC]"
              >
                <img src="../assets/whatsApp.png" alt="whatsapp" /> +91 9874563210
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
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
    </div>
  );
}

export default MenuOverlay;