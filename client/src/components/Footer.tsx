const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-inter">
              <span className="text-white">Port</span><span className="text-primary">folio</span>
            </a>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Designed and built with ❤️ by a passionate CSE student
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/archie-sahu-1b3b47280" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:archiesahu19@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
