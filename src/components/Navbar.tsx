
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold gradient-text">
            Infinite
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Services", "About", "Projects", "Team", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 hover:text-infinite-purple transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-infinite-purple to-infinite-orange text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {["Services", "About", "Projects", "Team", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-700 hover:text-infinite-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-infinite-purple to-infinite-orange text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
