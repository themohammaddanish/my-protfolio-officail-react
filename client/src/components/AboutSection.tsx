export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              I'm a creative technologist who thrives at the intersection of design and Programming
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden relative transform transition-transform duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                <img 
                  src="https://i.postimg.cc/287kS9MR/IMG-20241203-110545-864.webp" 
                  alt="Profile image" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Md Danish Khan</h3>
                  <p className="text-gray-600 mb-4">UI/UX Designer & Programmer</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110" aria-label="LinkedIn">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110" aria-label="GitHub">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110" aria-label="Dribbble">
                      <i className="fab fa-dribbble text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110" aria-label="Twitter">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Key facts cards */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center mr-3">
                    <i className="fas fa-user"></i>
                  </span>
                  Hello there!
                </h3>
                <p className="text-gray-700 mb-4">
                  I'm a passionate UI/UX designer and Programmer with over 3 years of experience creating digital designs that users love. I specialize in designing intuitive interfaces and  solve real problems.
                </p>
                <p className="text-gray-700 mb-4">
                  My journey began in visual design, but I quickly fell in love with the technical aspects of building digital products. This dual expertise allows me to bridge the gap between aesthetics and functionality, creating cohesive experiences from concept to code.
                </p>
                <p className="text-gray-700">
                  I believe great design is about solving problems, not just making things look pretty. Every pixel, interaction, and line of code should serve a purpose in creating meaningful user experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center mr-2">
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    Education
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-primary mr-2">›</span>
                      <div>
                        <p className="font-medium">B.O. Information Technology</p>
                        <p className="text-sm text-gray-600">Lincoln University, 2023-2027</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-primary mr-2">›</span>
                      <div>
                        <p className="font-medium">UX and Designing</p>
                        <p className="text-sm text-gray-600">Youtube</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center mr-2">
                      <i className="fas fa-briefcase"></i>
                    </span>
                    Experience
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-primary mr-2">›</span>
                      <div>
                        <p className="font-medium">Senior Designer</p>
                        <p className="text-sm text-gray-600">Damsole Tech., 2022-2023</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-primary mr-2">›</span>
                      <div>
                        <p className="font-medium">Senior Designer</p>
                        <p className="text-sm text-gray-600">Brandify Agency, 2023-2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <a href="#contact" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors">
                Let's work together
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
