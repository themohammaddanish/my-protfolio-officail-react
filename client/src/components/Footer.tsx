export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Section */}
          <div className="mb-16 bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Latest Updates</h3>
                <p className="text-gray-400">Subscribe to my newsletter to receive updates on new projects and insights.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-700/50 text-white border border-gray-600 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button 
                    type="submit" 
                    className="bg-primary hover:bg-blue-600 text-white rounded-lg px-5 py-3 font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-5">
                <h3 className="text-2xl font-bold text-white">
                  Danish<span className="text-primary">Khan</span>
                </h3>
              </div>
              <p className="mb-5 text-gray-400 max-w-xs leading-relaxed">
                UI/UX Designer and Developer creating beautiful, functional digital experiences for forward-thinking companies.
              </p>
              <div className="flex space-x-4 mb-6">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors" 
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors" 
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors" 
                  aria-label="Dribbble"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors" 
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Navigation
                <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-primary flex items-center transition-colors">
                    <span className="mr-2">›</span> Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary flex items-center transition-colors">
                    <span className="mr-2">›</span> About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-primary flex items-center transition-colors">
                    <span className="mr-2">›</span> Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-primary flex items-center transition-colors">
                    <span className="mr-2">›</span> Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary flex items-center transition-colors">
                    <span className="mr-2">›</span> Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-primary transition-colors">
                  <a href="#" className="block">UI/UX Design</a>
                </li>
                <li className="text-gray-400 hover:text-primary transition-colors">
                  <a href="#" className="block">Web Development</a>
                </li>
                <li className="text-gray-400 hover:text-primary transition-colors">
                  <a href="#" className="block">Logo Designing</a>
                </li>
                <li className="text-gray-400 hover:text-primary transition-colors">
                  <a href="#" className="block">Brand Identity</a>
                </li>
                <li className="text-gray-400 hover:text-primary transition-colors">
                  <a href="#" className="block">Digital Strategy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-envelope text-primary mt-1.5 mr-3"></i>
                  <span>
                    <a href="mailto:mohameddaniss2@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      mohameddaniss2@
                      gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt text-primary mt-1.5 mr-3"></i>
                  <span>
                    <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">
                      +977 9767384214
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary mt-1.5 mr-3"></i>
                  <span>
                    Biratngar,<br />
                    Nepal
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-primary mt-1.5 mr-3"></i>
                  <span>
                    Sun - Fri: 9am - 9pm<br />
                    Weekend: Closed
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Danish Khan. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <a 
          href="#home"
          className="flex items-center justify-center w-12 h-12 bg-primary hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}
