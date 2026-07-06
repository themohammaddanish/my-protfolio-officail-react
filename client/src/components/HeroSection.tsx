export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-0 pb-10 sm:px-6 sm:py-10 md:px-12 lg:px-20 lg:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          <div>
            <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-40 font-black">
              Portfolio
            </span>
            <h1 className="text-[clamp(3.25rem,15vw,8rem)] lg:text-[8vw] font-display font-black uppercase leading-[0.95] tracking-[-0.05em] max-w-[10ch]">
              CREATIVE<br />
              <span className="text-accent-blue">TECH</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-neutral-500 max-w-lg leading-relaxed">
            Architecting high-performance digital systems at the intersection of aesthetic design and complex frontend
            engineering.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-xs uppercase font-black tracking-widest opacity-60">Available for new projects</span>
          </div>
        </div>
        <div className="relative w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[34rem] mx-auto lg:mx-0 lg:justify-self-end">
          <div className="aspect-[4/5] w-full max-h-[70vh] bg-neutral-100 overflow-hidden shadow-sm group">
            <img
              src="/dan.png"
              alt="Danish Khan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-14 h-14 md:-bottom-6 md:-right-6 md:w-20 md:h-20 bg-accent-blue flex items-center justify-center text-white shadow-xl">
            <iconify-icon icon="lucide:arrow-down-right" class="text-2xl md:text-4xl"></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  );
}
