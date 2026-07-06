export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-16 md:px-16 lg:px-20 lg:py-20 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 font-black block mb-4">About Me</span>
          <h2 className="text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter">The Bridge.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-16">
            <p className="text-2xl lg:text-3xl font-medium leading-relaxed">
              I specialize in bridging the gap between{" "}
              <span className="text-accent-blue">abstract design concepts</span> and high-performance production code. I
              architect digital systems that resonate through technical precision and visual intentionality.
            </p>
            <div className="grid grid-cols-3 gap-6 py-12 border-y border-black/5">
              <div>
                <span className="block text-3xl font-display font-black uppercase text-accent-blue">05+</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Years Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-black uppercase text-accent-blue">40+</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-black uppercase text-accent-blue">98%</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-black opacity-30">Expertise</h3>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                  {["UI/UX System Design", "Frontend Engineering", "Creative Coding", "Technical Strategy"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent-blue shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-black opacity-30">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "TS", "Three.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-neutral-50 text-[10px] uppercase font-black tracking-widest border border-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-black/5">
              <h3 className="text-xs uppercase tracking-[0.3em] font-black opacity-30 mb-8">Experience</h3>
              <div className="space-y-12 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px border-l-2 border-dotted border-black/10"></div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent-blue ring-4 ring-white shadow-sm"></div>
                  <span className="text-[10px] uppercase font-black text-accent-blue block mb-1">2022 - NOW</span>
                  <h4 className="text-lg font-black uppercase tracking-tight">Senior Creative Dev</h4>
                  <p className="text-sm opacity-50 uppercase tracking-widest">Freelance / Global</p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-neutral-200 ring-4 ring-white"></div>
                  <span className="text-[10px] uppercase font-black opacity-30 block mb-1">2020 - 2022</span>
                  <h4 className="text-lg font-black uppercase tracking-tight">Product Designer</h4>
                  <p className="text-sm opacity-50 uppercase tracking-widest">TechStudio Asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
