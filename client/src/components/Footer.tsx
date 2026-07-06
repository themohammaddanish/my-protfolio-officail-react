export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="z-20 px-6 py-12 md:px-16 lg:px-20 lg:py-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-sm font-medium text-black/80">Available for new projects</span>
          </div>
          <h2 className="text-2xl font-display font-black uppercase tracking-tight">Danish Khan</h2>
        </div>

        <nav className="flex flex-wrap gap-8 md:gap-12 text-sm font-black uppercase tracking-widest">
          <button onClick={() => scrollTo("#work")} className="transition-colors duration-300 hover:text-accent-blue">
            Work
          </button>
          <button onClick={() => scrollTo("#about")} className="transition-colors duration-300 hover:text-accent-blue">
            About
          </button>
          <button onClick={() => scrollTo("#contact")} className="transition-colors duration-300 hover:text-accent-blue">
            Contact
          </button>
        </nav>

        <div className="flex gap-6">
          <a
            href="https://github.com/themohammaddanish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent-blue transition-colors"
          >
            <iconify-icon icon="lucide:github"></iconify-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/md-danish-khan-76ab381b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent-blue transition-colors"
          >
            <iconify-icon icon="lucide:linkedin"></iconify-icon>
          </a>
          <a
            href="https://www.instagram.com/themohammaddanish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent-blue transition-colors"
          >
            <iconify-icon icon="lucide:twitter"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
