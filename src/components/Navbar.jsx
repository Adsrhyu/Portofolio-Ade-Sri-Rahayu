import React, { useState, useEffect } from 'react';

export function Navbar({ onOpenCV, darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur on scroll
      setIsScrolled(window.scrollY > 20);

      // Reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section spy
      const sections = ['beranda', 'tentang', 'pengalaman', 'portofolio', 'sertifikat', 'kontak'];
      const pos = window.scrollY + 220;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Profil' },
    { href: '#pengalaman', label: 'Pengalaman' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#sertifikat', label: 'Sertifikat' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar no-print"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
          isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand / Logo */}
            <a href="#beranda" className="flex items-center gap-2 group" title="Kembali ke Beranda">
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white leading-none">
                  Ade<span className="text-rose-600 dark:text-rose-400">Sri.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  Pendidikan Ekonomi UNSIL
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-100 dark:border-slate-800 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-rose-700 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/80 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* CV Button */}
              <button
                onClick={onOpenCV}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/60 hover:bg-rose-700 hover:text-white dark:hover:bg-rose-700 dark:hover:text-white transition-all shadow-xs"
                title="Buka Curriculum Vitae Resmi"
              >
                <i className="fas fa-file-invoice text-xs"></i>
                <span>Lihat CV</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800 border border-rose-100 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-700 transition-colors shadow-xs"
                aria-label="Ubah Tema Warna"
                title={darkMode ? "Beralih ke Tema Terang (Light Mode)" : "Beralih ke Tema Gelap (Dark Mode)"}
              >
                {darkMode ? (
                  <i className="fas fa-sun text-amber-400 text-sm"></i>
                ) : (
                  <i className="fas fa-moon text-rose-700 text-sm"></i>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800 border border-rose-100 dark:border-slate-700 hover:bg-rose-50 transition-colors shadow-xs"
                aria-label="Buka Menu Navigasi"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 pt-3 pb-6 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-rose-100 dark:border-slate-800 shadow-2xl transition-all">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-rose-700 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-rose-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <i className="fas fa-check text-xs"></i>}
                  </a>
                );
              })}
              
              <div className="pt-3 mt-2 border-t border-rose-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-rose-700 text-white shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-invoice"></i>
                  <span>Buka & Unduh Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
