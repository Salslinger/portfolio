import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Helper to handle both internal scrolling and cross-page navigation
  const handleNavigation = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false); // Close mobile menu immediately

    // Navigate home with state for the observer/useEffect in Home component
    navigate("/", { state: { scrollTo: sectionId } });

    // If already on the home page, perform immediate smooth scroll
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-[#1A1717] text-white z-50 p-4">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-amber-300 transition-colors"
          onClick={handleNavigation("home")}
        >
          <User size={28} />
          <p className="font-bold text-xl">KN</p>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links - Mobile & Desktop Logic */}
        <div
          className={`
          ${menuOpen ? "flex shadow-2xl" : "hidden"} 
          lg:flex flex-col lg:flex-row 
          absolute lg:static top-full left-0 w-full lg:justify-center 
          bg-[#1A1717] lg:bg-transparent 
          items-center lg:space-x-12 p-6 lg:p-0
          transition-all duration-300 ease-in-out
        `}
        >
          <a
            href="#about"
            onClick={handleNavigation("about")}
            className="py-4 lg:py-0 hover:text-amber-300 transition-colors text-lg"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleNavigation("skills")}
            className="py-4 lg:py-0 hover:text-amber-300 transition-colors text-lg"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={handleNavigation("experience")}
            className="py-4 lg:py-0 hover:text-amber-300 transition-colors text-lg"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={handleNavigation("projects")}
            className="py-4 lg:py-0 hover:text-amber-300 transition-colors text-lg"
          >
            Projects
          </a>

          {/* Contact link specifically scrolls to the 'about' section as requested */}
          <a
            href="/"
            onClick={handleNavigation("home")}
            className="py-4 lg:py-0 hover:text-amber-300 transition-colors text-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
