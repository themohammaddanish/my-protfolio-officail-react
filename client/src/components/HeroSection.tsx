export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center p-8 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-8 lg:space-y-12">
          <div>
            <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-40 font-black">
              Portfolio 2024 - 2025
            </span>
            <h1 className="text-[15vw] lg:text-[8vw] font-display font-black uppercase leading-[0.95] tracking-[-0.05em]">
              CREATIVE<br />
              <span className="text-accent-blue">TECH</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-neutral-500 max-w-lg leading-relaxed">
            Architecting high-performance digital systems at the intersection of aesthetic design and complex frontend
            engineering.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-xs uppercase font-black tracking-widest opacity-60">Available for new projects</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden shadow-sm group">
            <img
              src="/dan.png"
              alt="Danish Khan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-blue hidden md:flex items-center justify-center text-white shadow-xl">
            <iconify-icon icon="lucide:arrow-down-right" class="text-4xl"></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  );
}
