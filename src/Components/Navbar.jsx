import { Menu, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";
import MenuOverlay from "./MenuOverlay";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const [hideLinks, setHideLinks] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = window.innerHeight * 0.1; // 10% of viewport height

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        // scrolling down → hide links
        setHideLinks(true);
      } else {
        // scrolling up → show only if above threshold
        if (currentY <= threshold) {
          setHideLinks(false);
        } else {
          setHideLinks(true);
        }
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white px-6 py-4 flex items-center justify-between z-50 transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <img
          className="logo transition-transform duration-300 hover:scale-105"
          src="../assets/Logo.png"
          alt="companyLogo"
          width={81}
          height={48}
        />
      </Link>

      {/* Desktop Nav Links (hidden when scrolling down or above threshold) */}
      <div
        className={`hidden md:flex items-center gap-8 text-sm font-poppins transition-all duration-300 ${
          hideLinks ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Link
          to="/PeoplePage"
          className="uppercase cursor-pointer hover:text-[#405FFC] transition"
        >
          Partners
        </Link>
        <Link
          to="/AboutUsDetail"
          className="uppercase cursor-pointer hover:text-[#405FFC] transition"
        >
          About Us
        </Link>
        <Link
          to="/products"
          className="uppercase cursor-pointer hover:text-[#405FFC] transition"
        >
          Products
        </Link>

        {/* Search Icon */}
        <SearchIcon
          className="w-5 h-5 cursor-pointer hover:text-[#405FFC] transition"
          onClick={() => setSearchOpen(true)}
        />
      </div>

      {/* Always visible: Mobile Icons */}
      <div className="flex items-center gap-4 md:hidden">
        <SearchIcon
          className="w-6 h-6 cursor-pointer hover:text-[#405FFC] transition"
          onClick={() => setSearchOpen(true)}
        />
        <Menu
          className="w-7 h-7 cursor-pointer hover:text-[#405FFC] transition"
          onClick={() => setMenuOverlayOpen(true)}
        />
      </div>

      {/* When desktop nav links are hidden, show search + menu */}
      {hideLinks && (
        <div className="hidden md:flex items-center gap-4">
          <SearchIcon
            className="w-6 h-6 cursor-pointer hover:text-[#405FFC] transition"
            onClick={() => setSearchOpen(true)}
          />
          <Menu
            className="w-7 h-7 cursor-pointer hover:text-[#405FFC] transition"
            onClick={() => setMenuOverlayOpen(true)}
          />
        </div>
      )}

      {/* Overlays */}
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MenuOverlay
        open={menuOverlayOpen}
        onClose={() => setMenuOverlayOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
