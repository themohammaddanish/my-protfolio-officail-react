export default function ProjectsSection() {
  const projects = [
    {
      title: "Nike Shoe Showcase",
      description: "A comprehensive UI/UX design for a modern Nike shoe Showcase with a focus on elegent design.",
      image: "https://i.postimg.cc/25Bkmh0r/project-5.png",
      featured: true,
      demoUrl: "https://www.figma.com/proto/JShx6o6SXtONgmj4jIWcvv/project-5?node-id=0-1&t=qIGpfOXHGX90NUJa-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "blue" },
        { name: "UI Design", color: "blue" },
        { name: "Research", color: "green" }
      ]
    },
     {
      title: "Website Analytic Web Design",
      description: "A comprehensive UI/UX design for a modern web page with a focus on elegent design.",
      image: "https://i.postimg.cc/NFfqs3sm/project-9.jpg",
      featured: true,
      demoUrl: "https://www.figma.com/proto/Wi1sm3c6aGS2VBNsraQ3rr/project-9?node-id=0-1&t=gMRLf9Rgec3LSIil-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "blue" },
        { name: "UI Design", color: "blue" },
        { name: "Research", color: "green" }
      ]
    },
    {
      title: "Logic Tech Mouse Showcase",
      description: "A comprehensive UI/UX design for a modern LogicTech Dashboard.",
      image: "https://i.postimg.cc/13FR1DCP/project-three-logic-tech.png",
      featured: true,
      demoUrl: "https://www.figma.com/proto/IvbPDo5hmvj7w4TLHXWxaN/project-three-logic-tech?node-id=0-1&t=gF6KgmSadLL9kFqo-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ]
    },
    {
      title: "EV-R Electric Scooter Landing Page",
      description: "A modern and visually engaging landing page designed for the EV-R electric scooter brand. This responsive UI concept features a sleek and minimalist layout that highlights the scooter’s futuristic design and key specifications.",
      image: "https://i.postimg.cc/wxNwJvGM/project-6.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Vue.js", color: "violet" },
        { name: "Firebase", color: "violet" },
        { name: "Google Maps API", color: "violet" }
      ]
    },
    {
      title: "Healthcare Portal",
      description: "A secure patient management system with appointment scheduling and medical record keeping.",
      image: "https://i.postimg.cc/9XNc4LsC/Project-one.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "UX Design", color: "blue" },
        { name: "React", color: "green" },
        { name: "Express", color: "green" }
      ]
    },
    {
      title: "Restaurant Delivery App",
      description: "A mobile app for food ordering and delivery with real-time order tracking and payment integration.",
      image: "https://i.postimg.cc/Hk0GtzvJ/PROJECT-TWO.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "UI/UX", color: "blue" },
        { name: "Flutter", color: "orange" },
        { name: "Firebase", color: "green" }
      ]
    },
    {
      title: "Social Media Platform",
      description: "A community platform for creative professionals with portfolio sharing and networking features.",
      image: "https://i.postimg.cc/05mqQ9Gd/Mac-Book-Pro-16-1.png",
      featured: false,
      demoUrl: "https://www.figma.com/proto/UinAe4ydTBajSpPqP7Em47/project-7?node-id=0-1&t=uSPcAlCtBZeuJ8LX-1",
      codeUrl: "#",
      tags: [
        { name: "React", color: "green" },
        { name: "GraphQL", color: "green" },
        { name: "MongoDB", color: "green" }
      ]
    },

    {
      title: "Social Media Platform",
      description: "A community platform for creative professionals with portfolio sharing and networking features.",
      image: "https://i.postimg.cc/05mqQ9Gd/Mac-Book-Pro-16-1.png",
      featured: false,
      demoUrl: "https://www.figma.com/proto/UinAe4ydTBajSpPqP7Em47/project-7?node-id=0-1&t=uSPcAlCtBZeuJ8LX-1",
      codeUrl: "#",
      tags: [
        { name: "React", color: "green" },
        { name: "GraphQL", color: "green" },
        { name: "MongoDB", color: "green" }
      ]
    },
    {
      title: "Social Media Platform",
      description: "A community platform for creative professionals with portfolio sharing and networking features.",
      image: "https://i.postimg.cc/05mqQ9Gd/Mac-Book-Pro-16-1.png",
      featured: false,
      demoUrl: "https://www.figma.com/proto/UinAe4ydTBajSpPqP7Em47/project-7?node-id=0-1&t=uSPcAlCtBZeuJ8LX-1",
      codeUrl: "#",
      tags: [
        { name: "React", color: "green" },
        { name: "GraphQL", color: "green" },
        { name: "MongoDB", color: "green" }
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  const getTagColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-700';
      case 'green':
        return 'bg-green-100 text-green-700';
      case 'violet':
        return 'bg-violet-100 text-violet-700';
      case 'orange':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">My Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work across UI/UX design and development.
            </p>
          </div>

          {/* Featured projects (larger cards) */}
          <div className="mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all mb-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 self-start">Featured Project</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getTagColorClass(tag.color)}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl} 
                      className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                      target="_blank"
                    >
                      Live Demo
                      <i className="fas fa-external-link-alt ml-2"></i>
                    </a>
                    <a 
                      href={project.codeUrl} 
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      target="_blank"
                    >
                      Edit Design
                      <i className="fab fa-figma ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section title for other projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Projects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more of my work showcasing different skills and technologies.
            </p>
          </div>

          {/* Regular project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 group"
              >
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-purple-500/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.demoUrl} 
                        className="rounded-full w-12 h-12 bg-white text-primary flex items-center justify-center hover:bg-blue-50 transition-colors"
                        title="View Live Demo"
                      >
                        <i className="fas fa-link"></i>
                      </a>
                      <a 
                        href={project.codeUrl} 
                        className="rounded-full w-12 h-12 bg-white text-gray-700 flex items-center justify-center hover:bg-blue-50 transition-colors"
                        title="View Code"
                      >
                        <i className="fab fa-figma"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getTagColorClass(tag.color)}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <a 
              href="https://github.com/themohammaddanish" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              See more Project
              {/* <i className="fab fa-github ml-2"></i> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
