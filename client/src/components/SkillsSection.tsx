export default function SkillsSection() {
  const designSkills = [
    { name: "User Interface Design", percentage: 95 },
    { name: "User Experience", percentage: 90 },
    { name: "Wireframing & Prototyping", percentage: 85 },
    { name: "Responsive Design", percentage: 95 }
  ];

  const devSkills = [
    { name: "HTML/CSS/JavaScript", percentage: 95 },
    { name: "Python", percentage: 90 },
    { name: "Java and C++", percentage: 85 },
    { name: "DSA", percentage: 80 }
  ];

  const tools = [
    { name: "Figma", icon: "fab fa-figma" },
    { name: "React", icon: "fab fa-react" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "C++", icon: "fas fa-code" },
    { name: "Adobe XD", icon: "fas fa-bezier-curve", color: "#FF26BE" },
    { name: "Git/GitHub", icon: "fab fa-github" },
    { name: "Tailwind CSS", icon: "fas fa-layer-group", color: "#38BDF8" },
    { name: "Adobe Illustrator", icon: "fas fa-pen-nib", color: "#FF9A00" },
    {name: "Adobe Photoshop", icon: "fas fa-pen-nib", color: "#FF9A00" }
  ];
  
  const specialties = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces",
      icon: "fas fa-paint-brush",
      color: "bg-blue-500"
    },
    {
      title: "Front-end Development",
      description: "Building responsive and interactive web applications",
      icon: "fas fa-code",
      color: "bg-green-500"
    },
    {
      title: "Developer",
      description: "Software design, problem-solving, and working on complete applications or systems.",
      icon: "fas fa-server",
      color: "bg-purple-500"
    },
    {
      title: "Logo Designing",
      description: "Creating impactful and versatile logo designs.",
      icon: "fas fa-mobile-alt",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              I've developed expertise in various areas of design and development, continuously learning and improving my skills.
            </p>
          </div>
          
          {/* Specialties section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                <div className={`w-12 h-12 ${specialty.color} text-white rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${specialty.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-paint-brush"></i>
                </span>
                UI/UX Design
              </h3>
              <div className="space-y-5">
                {designSkills.map((skill, index) => (
                  <div key={index} className="transform transition-transform hover:scale-[1.01]">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="relative h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-primary rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="w-full h-full opacity-30 overflow-hidden">
                          <div className="w-[500px] h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-code"></i>
                </span>
                Programming
              </h3>
              <div className="space-y-5">
                {devSkills.map((skill, index) => (
                  <div key={index} className="transform transition-transform hover:scale-[1.01]">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="relative h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="w-full h-full opacity-30 overflow-hidden">
                          <div className="w-[500px] h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-toolbox"></i>
              </span>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all hover:bg-blue-50 transform hover:-translate-y-1"
                >
                  <div className="h-12 flex items-center justify-center mb-2">
                    <i className={`${tool.icon} text-2xl`} style={{ color: tool.color || '#2563eb' }}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
