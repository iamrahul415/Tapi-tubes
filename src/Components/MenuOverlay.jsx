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
      to: "/Products",
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
      <div className="absolute top-6 left-6">
        <Link to="/" onClick={onClose}>
          <img
            src="../assets/Logo.png"
            alt="companyLogo"
            width={81}
            height={48}
            className="cursor-pointer hover:scale-105 transition"
          />
        </Link>
      </div>
      <button
        className="absolute top-6 right-8 text-[#FFFFFF] hover:text-[#405FFC] tracking-widest text-sm"
        onClick={onClose}
      >
        CLOSE
      </button>

      {/* Menu Content */}
      <div className="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-evenly px-6 sm:px-10 lg:px-24 py-24 gap-16">
        {/* Left Section */}
        <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-2xl sm:text-3xl font-semibold font-poppins text-center lg:text-left">
          {leftLinks.map((link, idx) => (
            <li
              key={idx}
              className="group flex flex-col relative cursor-pointer"
            >
              <Link
                to={link.to}
                onClick={onClose}
                className="flex items-baseline gap-3 justify-center lg:justify-start transition"
              >
                <span className="text-sm text-gray-400 group-hover:text-[#405FFC] transition">
                  {link.number}
                </span>
                <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition">
                  <span className="absolute -left-6 lg:-left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition">
                    /
                  </span>
                  {link.label}
                </span>
              </Link>

              {link.sub && (
                <div className="mt-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
                  {link.sub.join(" | ")}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex flex-col gap-8 sm:gap-10 text-2xl sm:text-3xl font-semibold font-poppins text-center lg:text-left">
          {/* Right links */}
          <ul className="flex flex-col gap-4 sm:gap-6">
            {rightLinks.map((link, idx) => (
              <li
                key={idx}
                className="group flex flex-col relative cursor-pointer"
              >
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="flex items-baseline gap-3 justify-center lg:justify-start transition"
                >
                  <span className="text-sm text-gray-400 group-hover:text-[#405FFC] transition">
                    {link.number}
                  </span>
                  <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition">
                    <span className="absolute -left-6 lg:-left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition">
                      /
                    </span>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-sm mt-6">
            <a
              href="mailto:contact@tapitubes.com"
              className="flex items-center justify-center lg:justify-start gap-2 text-[#405FFC]"
            >
              <img src="/assets/Email.png" alt="email" /> contact@tapitubes.com
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
              <img src="/assets/whatsApp.png" alt="whatsapp" /> +91 9874563210
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center lg:justify-start">
            <img src="/assets/FbIcon.png" className="cursor-pointer w-6 sm:w-7" alt="fb"/>
            <img src="/assets/InstaIcon.png" className="cursor-pointer w-6 sm:w-7" alt="insta"/>
            <img src="/assets/LinkdinIcon.png" className="cursor-pointer w-6 sm:w-7" alt="linkedin"/>
            <img src="/assets/UtubeIcon.png" className="cursor-pointer w-6 sm:w-7" alt="yt"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
