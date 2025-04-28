import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 py-4 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-inter text-primary ml-[-20px]" onClick={handleLinkClick}>
          <span className="text-foreground">Port</span>folio
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>About</a>
          <a href="#skills" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Projects</a>
          <a href="#certifications" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Certifications</a>
          <a href="#experience" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Experience</a>
          <a href="#blog" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Blog</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-md absolute w-full left-0 top-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-8 py-3 flex flex-col space-y-3">
              <a href="#home" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Home</a>
              <a href="#about" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>About</a>
              <a href="#skills" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Skills</a>
              <a href="#projects" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Projects</a>
              <a href="#certifications" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Certifications</a>
              <a href="#experience" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Experience</a>
              <a href="#blog" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Blog</a>
              <a href="#contact" className="py-2 font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
