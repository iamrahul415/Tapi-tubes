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
      to: "/newsroom",
      sub: ["Press Releases"],
    },
  ];

  const rightLinks = [
    { number: "06", label: "Press Releases", to: "/PressReleasePage" },
    { number: "07", label: "Portfolio", to: "/portfolio" },
  ];

  return (
    <div className="fixed inset-0 bg-black text-white z-50">
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
        className="absolute top-6 right-8 text-[#FFFFFF] hover:text-white tracking-widest text-sm"
        onClick={onClose}
      >
        CLOSE
      </button>

      {/* Menu Content */}
      <div className="flex h-full items-center justify-evenly px-24">
        {/* Left Section */}
        <ul className="flex flex-col gap-10 text-3xl font-semibold font-poppins">
          {leftLinks.map((link, idx) => (
            <li
              key={idx}
              className="group flex flex-col relative cursor-pointer"
            >
              {/* Main Link with Hover Slash */}
              <Link
                to={link.to}
                onClick={onClose}
                className="flex items-baseline gap-3 transition"
              >
                <span className="text-sm text-gray-400 group-hover:text-[#405FFC] transition">
                  {link.number}
                </span>
                {/* Slash appears on hover */}
                <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition">
                  <span className="absolute -left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition">
                    /
                  </span>
                  {link.label}
                </span>
              </Link>

              {/* Subtitles (appear on hover) */}
              {link.sub && (
                <div className="ml-10 mt-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
                  {link.sub.join(" | ")}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex flex-col gap-10 text-3xl font-semibold font-poppins">
          {/* Right links with hover effect */}
          <ul className="flex flex-col gap-6">
            {rightLinks.map((link, idx) => (
              <li
                key={idx}
                className="group flex flex-col relative cursor-pointer"
              >
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="flex items-baseline gap-3 transition"
                >
                  <span className="text-sm text-gray-400 group-hover:text-[#405FFC] transition">
                    {link.number}
                  </span>
                  <span className="relative flex items-center gap-5 group-hover:text-[#405FFC] transition">
                    <span className="absolute -left-10 text-[#405FFC] opacity-0 group-hover:opacity-100 transition">
                      /
                    </span>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:contact@tapitubes.com"
              className="flex items-center gap-2 text-[#405FFC]"
            >
              <img src="/assets/Email.png" /> contact@tapitubes.com
            </a>
            <a
              href="tel:181144421145"
              className="flex items-center gap-2 text-[#405FFC]"
            >
              <img src="/assets/Call.png" /> +91 9876543210
            </a>
            <a
              href="https://wa.me/919123931313"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#405FFC]"
            >
              <img src="/assets/whatsApp.png" /> +91 9874563210
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <img src="/assets/FbIcon.png" className="cursor-pointer" />
            <img src="/assets/InstaIcon.png" className="cursor-pointer" />
            <img src="/assets/LinkdinIcon.png" className="cursor-pointer" />
            <img src="/assets/UtubeIcon.png" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
