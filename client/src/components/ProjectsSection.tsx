import { useState } from "react";

const projects = [
  {
    title: "School Management System",
    description: "A modern school management system with clean hierarchy and intuitive workflows.",
    image: "https://i.postimg.cc/rydBDKQK/Screenshot-2025-10-22-094300.png",
    url: "https://jamia-backend-zygp.onrender.com/login",
    tags: ["React", "Express.js", "MongoDB"],
  },
  {
    title: "THE GYM NEPAL",
    description:
      "Complete MERN ecosystem featuring a marketing website, equipment store, and powerful admin dashboard.",
    image: "/the%20gym.png",
    url: "#",
    tags: ["MERN STACK", "ECOMMERCE", "CMS"],
  },
  {
    title: "Productivity Platform",
    description: "Landing page concept for a productivity platform optimizing team efficiency.",
    image: "https://i.postimg.cc/NFfqs3sm/project-9.jpg",
    url: "https://www.figma.com/proto/Wi1sm3c6aGS2VBNsraQ3rr/project-9",
    tags: ["Figma", "UI Design"],
  },
  {
    title: "Logitech G502 X Plus",
    description: "Product landing page with modern aesthetic and effective product presentation.",
    image: "https://i.postimg.cc/13FR1DCP/project-three-logic-tech.png",
    url: "https://www.figma.com/proto/IvbPDo5hmvj7w4TLHXWxaN/project-three-logic-tech",
    tags: ["Figma", "UI Design"],
  },
  {
    title: "EV-R Electric Scooter",
    description: "Modern and visually engaging landing page for an electric scooter brand.",
    image: "https://i.postimg.cc/wxNwJvGM/project-6.png",
    url: "#",
    tags: ["Figma", "UI Design"],
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="px-4 py-14 sm:px-6 md:px-16 lg:px-20 lg:py-20 bg-neutral-50/20 border-t border-black/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 lg:mb-24 gap-6 sm:gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-9xl font-display font-black uppercase tracking-tighter">
              WORK<span className="text-accent-blue">.</span>
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.4em] opacity-30 font-black md:mb-4">Archive 24/25</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 lg:gap-y-24">
          {visibleProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target={project.url === "#" ? undefined : "_blank"}
              rel={project.url === "#" ? undefined : "noopener noreferrer"}
              className={`project-card group block ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 mb-6 sm:mb-8">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover card-image" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase opacity-40">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="link-underline text-accent-blue text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 pt-4">
                  View Case Study <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
                </span>
              </div>
            </a>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="px-6 py-3 text-xs font-black uppercase tracking-[0.35em] border border-black/10 hover:border-black/30 hover:bg-black/5 transition-colors"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
