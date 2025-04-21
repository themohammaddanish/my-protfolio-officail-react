import { useState, useEffect } from 'react';

type ProjectCategory = 'ui-ux' | 'java' | 'python' | 'c-cpp' | 'web' | 'all';

type ProjectTag = {
  name: string;
  color: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  featured: boolean;
  demoUrl: string;
  codeUrl: string;
  tags: ProjectTag[];
  category: ProjectCategory | ProjectCategory[];
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  const projects: Project[] = [
    {
      title: "Nike Air Max Landing Page Concept",
      description: "A conceptual landing page design for the Nike Air Max, emphasizing a clean, modern aesthetic and a strong visual hierarchy.",
      image: "https://i.postimg.cc/25Bkmh0r/project-5.png",
      featured: true,
      demoUrl: "https://www.figma.com/proto/JShx6o6SXtONgmj4jIWcvv/project-5?node-id=0-1&t=qIGpfOXHGX90NUJa-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "blue" },
        { name: "UI Design", color: "blue" },
        { name: "Research", color: "green" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Productivity Platform Landing Page Concept",
      description: "A landing page design concept for a productivity platform aimed at optimizing efficiency.",
      image: "https://i.postimg.cc/NFfqs3sm/project-9.jpg",
      featured: true,
      demoUrl: "https://www.figma.com/proto/Wi1sm3c6aGS2VBNsraQ3rr/project-9?node-id=0-1&t=gMRLf9Rgec3LSIil-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "blue" },
        { name: "UI Design", color: "blue" },
        { name: "Research", color: "green" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Logitech: Product Landing Page",
      description: "A landing page design for the Logitech G502 X Plus gaming mouse, focusing on a modern aesthetic and effective product presentation.",
      image: "https://i.postimg.cc/13FR1DCP/project-three-logic-tech.png",
      featured: true,
      demoUrl: "https://www.figma.com/proto/IvbPDo5hmvj7w4TLHXWxaN/project-three-logic-tech?node-id=0-1&t=gF6KgmSadLL9kFqo-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "EV-R Electric Scooter Landing Page",
      description: "A modern and visually engaging landing page designed for the EV-R electric scooter brand.",
      image: "https://i.postimg.cc/wxNwJvGM/project-6.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Nike Air Max 90 Product Landing Page",
      description: "A sleek and stylish landing page concept for the Nike Air Max 90 sneaker.",
      image: "https://i.postimg.cc/9XNc4LsC/Project-one.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "DualSense Wireless Controller Product Page UI",
      description: "A vibrant and modern product showcase page for the DualSense Wireless Controller.",
      image: "https://i.postimg.cc/Hk0GtzvJ/PROJECT-TWO.png",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Pizza Hut Website Redesign Concept",
      description: "A conceptual redesign of the Pizza Hut website focusing on a clean, modern aesthetic and improved user experience.",
      image: "https://i.postimg.cc/05mqQ9Gd/Mac-Book-Pro-16-1.png",
      featured: false,
      demoUrl: "https://www.figma.com/proto/UinAe4ydTBajSpPqP7Em47/project-7?node-id=0-1&t=uSPcAlCtBZeuJ8LX-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Donut Twirl Twist – UI Visual Concept",
      description: "This is a playful and engaging UI visual concept designed in Figma.",
      image: "https://i.postimg.cc/NjQxk4Tm/1.jpg",
      featured: false,
      demoUrl: "https://www.figma.com/proto/QMnXiRT0tWxa9v0ORHNWIW/Project-8?page-id=0%3A1&node-id=2-79&t=lFbSuTRq9DFH0UYE-1",
      codeUrl: "#",
      tags: [
        { name: "Figma", color: "green" },
        { name: "UI Design", color: "green" },
        { name: "Research", color: "blue" }
      ],
      category: 'ui-ux'
    },
    {
      title: "Banking Management System",
      description: "A comprehensive Java-based banking system with account management, transactions, and reporting features.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Java", color: "violet" },
        { name: "SQL", color: "green" },
        { name: "JDBC", color: "orange" }
      ],
      category: 'java'
    },
    {
      title: "Data Visualization Dashboard",
      description: "A Python-based data analysis tool with interactive visualizations using Pandas, NumPy, and Matplotlib.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "Python", color: "blue" },
        { name: "Pandas", color: "green" },
        { name: "Matplotlib", color: "violet" }
      ],
      category: 'python'
    },
    {
      title: "2D Game Engine",
      description: "A C++ based 2D game engine with physics simulation, sprite rendering, and collision detection.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "C++", color: "orange" },
        { name: "OpenGL", color: "blue" },
        { name: "SDL", color: "violet" }
      ],
      category: 'c-cpp'
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB with payment processing.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "green" },
        { name: "MongoDB", color: "violet" }
      ],
      category: 'web'
    }
  ];

  useEffect(() => {
    filterProjects(activeCategory);
  }, [activeCategory]);

  const filterProjects = (category: ProjectCategory) => {
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(category);
        }
        return project.category === category;
      });
      setFilteredProjects(filtered);
    }
  };

  useEffect(() => {
    setVisibleCount(filteredProjects.length);
  }, [filteredProjects]);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

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
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">My Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work across UI/UX design and development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            {/* Mobile Category Dropdown */}
            <div className="md:hidden flex justify-center mb-6">
              <div className="relative w-full max-w-xs">
                <select 
                  id="mobile-category-select" 
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-700"
                  onChange={(e) => handleCategoryChange(e.target.value as ProjectCategory)}
                  value={activeCategory}
                >
                  <option value="all">All Projects</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="c-cpp">C/C++</option>
                  <option value="web">Graphic Design</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>

            {/* Desktop Category Tabs */}
            <div className="hidden md:flex flex-wrap justify-center gap-2 mb-2">
              <button 
                onClick={() => handleCategoryChange('all')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                All Projects
              </button>
              <button 
                onClick={() => handleCategoryChange('ui-ux')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'ui-ux' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                UI/UX Design
              </button>
              <button 
                onClick={() => handleCategoryChange('java')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'java' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                Java
              </button>
              <button 
                onClick={() => handleCategoryChange('python')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'python' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                Python
              </button>
              <button 
                onClick={() => handleCategoryChange('c-cpp')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'c-cpp' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                C/C++
              </button>
              <button 
                onClick={() => handleCategoryChange('web')} 
                className={`px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${activeCategory === 'web' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
              >
                Graphic Design
              </button>
            </div>

            {/* Filter Indicator */}
            <div className="text-center text-sm text-gray-500 mt-3">
              <span>
                {activeCategory === 'all' 
                  ? `Showing all ${visibleCount} projects` 
                  : `Showing ${visibleCount} ${activeCategory} projects`}
              </span>
            </div>
          </div>

          {/* Featured projects (larger cards) */}
          {featuredProjects.length > 0 && (
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
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <i className="fas fa-external-link-alt ml-2"></i>
                      </a>
                      <a 
                        href={project.codeUrl} 
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.category === 'ui-ux' ? 'Edit Design' : 'View Code'}
                        <i className={`ml-2 ${project.category === 'ui-ux' ? 'fab fa-figma' : 'fab fa-github'}`}></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section title for other projects */}
          {regularProjects.length > 0 && (
            <>
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
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-link"></i>
                          </a>
                          <a 
                            href={project.codeUrl} 
                            className="rounded-full w-12 h-12 bg-white text-gray-700 flex items-center justify-center hover:bg-blue-50 transition-colors"
                            title={project.category === 'ui-ux' ? 'Edit Design' : 'View Code'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={project.category === 'ui-ux' ? 'fab fa-figma' : 'fab fa-github'}></i>
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
            </>
          )}
          
          {/* Empty state when no projects are available for a category */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">No projects found</h3>
              <p className="text-gray-500 mt-2">No projects available in this category yet.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="mt-4 px-5 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                View all projects
              </button>
            </div>
          )}
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <a 
              href="https://github.com/themohammaddanish" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              See more Projects
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
