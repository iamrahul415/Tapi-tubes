import { X, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Search({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50">
      {/* Header: Logo + Close Button */}
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

      <X
        className="absolute top-6 right-6 w-8 h-8 cursor-pointer text-white hover:text-[#405FFC] transition"
        onClick={onClose}
      />

      {/* Search Input (Centered with icon inside) */}
      <div className="w-11/12 sm:w-1/2 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-3 rounded-lg text-lg text-black focus:outline-none pr-12"
          autoFocus
        />
        <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#405FFC] cursor-pointer hover:text-black transition" />
      </div>
    </div>
  );
}

export default Search;
