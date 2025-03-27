import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when window resizes past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll behavior for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-primary font-bold text-xl tracking-tight">Danish<span className="text-black">Khan</span></a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-700 hover:text-primary font-medium transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-primary font-medium transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              className="text-gray-700 hover:text-primary p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-white shadow-md ${isMenuOpen ? '' : 'hidden'}`}
      >
        <div className="px-4 py-3 space-y-1">
          <a 
            href="#home" 
            className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
