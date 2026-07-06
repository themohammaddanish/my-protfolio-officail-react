export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 py-20 sm:px-10 md:px-20 md:py-24 lg:px-28 xl:px-36 lg:py-28">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-8 lg:space-y-12">
          <div>
            <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-40 font-black">
              Md Danish Khan / Portfolio 2024 - 2025
            </span>
            <h1 className="text-[17vw] sm:text-[14vw] lg:text-[8vw] font-display font-black uppercase leading-[0.9] tracking-[-0.05em]">
              CREATIVE<br />
              <span className="text-accent-blue">TECH</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-neutral-500 max-w-lg leading-relaxed">
            UI/UX designer and programmer building clean interfaces, functional systems, and production-ready frontend
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl border-y border-black/5 py-6">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Name</span>
              <span className="mt-2 block text-sm font-black uppercase tracking-tight">Md Danish Khan</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Role</span>
              <span className="mt-2 block text-sm font-black uppercase tracking-tight">UI/UX Designer</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Focus</span>
              <span className="mt-2 block text-sm font-black uppercase tracking-tight">Programming</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-xs uppercase font-black tracking-widest opacity-60">Available for new projects</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden shadow-sm group">
            <img
              src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/75d55720-3398-4420-acd9-a3ffd9b63d57/assets/ea90e5dc-d4ca-41ec-8d6a-de78a8035a68.jpg"
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
