import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppLogo from "../assets/app_logo.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mt-4 mx-4 bg-[#0f0d11]/80 backdrop-blur-md rounded-full px-5 py-2 flex justify-between items-center shadow-md shadow-black/30">
      {/* Logo */}
      <div className="h-10 bg-brand-velvet/75 rounded-full shadow-md shadow-black/50">
        <div className="h-full flex justify-center items-center px-4">
          <img src={AppLogo} className="w-5 mr-2" alt="Pamagsalin Logo" />
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100">
            Pamagsalin
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center h-10 bg-brand-velvet/75 rounded-full shadow-md shadow-black/50 px-8">
        <div className="flex gap-8 font-poppins text-sm text-white font-light">
          <a href="#download" className="hover:text-brand-pink transition-colors">
            Download
          </a>
          <a href="#features" className="hover:text-brand-pink transition-colors">
            Features
          </a>
          <a href="#tech" className="hover:text-brand-pink transition-colors">
            Tech
          </a>
          <a href="#developers" className="hover:text-brand-pink transition-colors">
            Developers
          </a>
        </div>
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="hidden lg:flex h-10 bg-brand-pink rounded-full justify-center items-center ml-5 cursor-pointer shadow-md shadow-brand-pink/30 hover:scale-105 transition-transform"
      >
        <p className="px-4 font-poppins font-semibold text-sm">Contact Us</p>
      </a>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="lg:hidden text-white p-2 rounded-md hover:bg-brand-velvet/60 transition"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#0f0d11]/95 backdrop-blur-md rounded-2xl shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-5 py-6 font-poppins text-white text-sm">
            <a
              href="#download"
              className="hover:text-brand-pink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Download
            </a>
            <a
              href="#features"
              className="hover:text-brand-pink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#tech"
              className="hover:text-brand-pink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Tech
            </a>
            <a
              href="#developers"
              className="hover:text-brand-pink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Developers
            </a>
            <a
              href="#contact"
              className="bg-brand-pink px-6 py-2 rounded-full font-semibold shadow-md shadow-brand-pink/30 hover:scale-105 transition-transform"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
