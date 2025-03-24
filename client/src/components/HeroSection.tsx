import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const animationTimer = setInterval(() => {
      setAnimationStep(prev => (prev < 3 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(animationTimer);
  }, []);

  const techItems = [
    { name: "React", color: "blue", icon: "fab fa-react" },
    { name: "Node.js", color: "green", icon: "fab fa-node-js" },
    { name: "JavaScript", color: "yellow", icon: "fab fa-js" },
    { name: "CSS", color: "purple", icon: "fab fa-css3-alt" }
  ];

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        
        {/* Code block patterns */}
        <div className="absolute -right-20 top-20 opacity-5 rotate-12">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-4 flex space-x-1">
            <div className="w-20 h-2 bg-primary rounded-full"></div>
            <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-8 flex space-x-1">
            <div className="w-24 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-4 flex space-x-1">
            <div className="w-6 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-14 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="mt-2 flex space-x-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-28 h-2 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute -left-20 bottom-20 opacity-5 -rotate-12">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-4 flex space-x-1">
            <div className="w-16 h-2 bg-primary rounded-full"></div>
            <div className="w-10 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-8 flex space-x-1">
            <div className="w-20 h-2 bg-gray-800 rounded-full"></div>
          </div>
          <div className="mt-2 ml-4 flex space-x-1">
            <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="mt-2 flex space-x-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-24 h-2 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className={`md:w-1/2 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
                Available for freelance work
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                UI/UX  & <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">Logo Designer</span> with Programmer MindSet
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                I design beautiful digital experiences that solve real-world problems and delight users.
              </p>
              
              {/* Tech stack animated section */}
              {/* <div className="flex flex-wrap gap-2 mb-8">
                {techItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 
                               transition-all duration-300 ${index === animationStep ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-primary/30 scale-110' : 'bg-white'}`}
                  >
                    <i className={`${item.icon} ${index === animationStep ? 'text-primary' : 'text-gray-500'} mr-2`}></i>
                    <span className={`text-sm font-medium ${index === animationStep ? 'text-primary' : 'text-gray-700'}`}>{item.name}</span>
                  </div>
                ))}
              </div> */}
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
                >
                  View My Work
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
              </div>
              
              {/* Social proof */}
              <div className="mt-10 flex items-center space-x-4">
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs text-blue-700 font-bold border-2 border-white">G</div>
                  <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-xs text-green-700 font-bold border-2 border-white">M</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center text-xs text-yellow-700 font-bold border-2 border-white">A</div>
                  <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-xs text-red-700 font-bold border-2 border-white">S</div>
                </div>
                <div className="text-gray-600 text-sm">
                  Trusted by <span className="font-medium text-gray-800">50+ clients</span> worldwide
                </div>
              </div>
            </div>
            
            {/* Image Column with animations */}
            <div className={`md:w-1/2 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                {/* Animated shapes */}
                <div className="absolute -top-6 -right-6 h-28 w-28 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 h-36 w-36 bg-primary rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Animated glowing dot patterns */}
                <div className="absolute top-0 right-0 h-full w-full">
                  <div className="absolute top-[30%] right-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70" style={{animationDuration: '3s'}}></div>
                  <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-70" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-[20%] right-[40%] w-2 h-2 bg-primary rounded-full animate-ping opacity-70" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
                </div>
                
                {/* Main image with border and effects */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-blue-200">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {/* Animated tech lines overlay */}
                  <div className="absolute inset-0 z-20 overflow-hidden opacity-80">
                    <div className="absolute top-[25%] left-0 w-[30%] h-[2px] bg-blue-400 animate-[glowHorizontal_4s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[45%] right-0 w-[20%] h-[2px] bg-blue-400 animate-[glowHorizontal_3s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute bottom-[30%] left-0 w-[40%] h-[2px] bg-blue-400 animate-[glowHorizontal_5s_ease-in-out_infinite_0.5s]"></div>
                  </div>
                  
                  <img 
                    src="https://i.postimg.cc/7ZHjJYXh/AMI-20240904-072813735-SGC8-5-Profile-Bright-PORTRAIT-2.jpg" 
                    alt="Professional portrait" 
                    className="rounded-xl w-full h-auto object-cover z-0"
                  />
                </div>
                
                {/* Tech badges */}
                <div className="absolute -right-5 top-10 bg-white rounded-lg shadow-md p-2.5 animate-float">
                  <i className="fab fa-figma text-pink-500 text-2xl"></i>
                </div>
                <div className="absolute -left-5 top-1/4 bg-white rounded-lg shadow-md p-2.5 animate-float" style={{animationDelay: '0.5s'}}>
                  <i className="fab fa-python text-blue-600 text-2xl"></i>
                </div>
                <div className="absolute right-10 -bottom-5 bg-white rounded-lg shadow-md p-2.5 animate-float" style={{animationDelay: '1s'}}>
                  <i className="fab fa-github text-gray-800 text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scrolling indicator */}
          <div className="mt-16 hidden md:flex justify-center animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fas fa-chevron-down text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
