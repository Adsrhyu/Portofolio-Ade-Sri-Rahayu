import React, { useState } from 'react';

export function About({ personal, onOpenCV, onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const photoSrc = personal?.photoAboutUrl || personal?.photoUrl || './assets/ade-about.jpg';

  const copyToClipboard = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) {
      onShowToast(`${label} berhasil disalin ke clipboard!`);
    }
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const igUrl = personal?.socials?.instagram || "https://www.instagram.com/adsrhyu_20?igsh=a3E1anU3ejJtaTlw&igsi=a3E1anU3ejJtaTlw";
  const linkedInUrl = personal?.socials?.linkedin || "https://www.linkedin.com/in/ade-sri-rahayu-8b783935a?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const waUrl = personal?.socials?.whatsapp || `https://wa.me/${personal.whatsapp}?text=Halo%20Ade%20Sri%20Rahayu,%20kami%20tertarik%20dengan%20kualifikasi%20Anda.`;

  return (
    <section id="tentang" className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-white/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Prominent Large "About Me" Title with compact bottom gap */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            About <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 dark:from-rose-400 dark:via-pink-300 dark:to-rose-400 bg-clip-text text-transparent animate-gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-700 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait Photo with Glowing Light & Moving Border (Framed slightly smaller & shifted upward) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Outer Wrapper with Ambient Bright Glow & Animated Moving Line (Slightly smaller & raised up) */}
            <div className="relative w-56 sm:w-64 md:w-72 -mt-2 sm:-mt-5 flex flex-col items-center">
              
              {/* Ambient Bright Glow Effect */}
              <div className="absolute -inset-2.5 rounded-[28px] bg-gradient-to-tr from-rose-400/40 via-pink-300/30 to-amber-300/30 blur-xl animate-pulse-glow pointer-events-none"></div>

              {/* Moving Dashed Orbit Border Line */}
              <div className="absolute -inset-1.5 rounded-[26px] border-2 border-dashed border-rose-300/80 dark:border-rose-700/60 pointer-events-none animate-spin-slow"></div>

              {/* Main Photo Card - Balanced Dimension */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 bg-white/95 dark:bg-slate-800/95 border-2 border-white dark:border-slate-700 shadow-xl backdrop-blur-md animate-float-circle z-10">
                
                <div className="relative w-full h-72 sm:h-80 md:h-[340px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src={photoSrc}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = './assets/ade-about.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Sparkle Twinkles in Photo Corners */}
                  <div className="absolute top-3 left-3 text-rose-500 dark:text-rose-400 text-sm font-bold animate-twinkle pointer-events-none select-none">✦</div>
                  <div className="absolute top-3.5 right-3.5 text-amber-400 text-base font-bold animate-twinkle-delay pointer-events-none select-none">★</div>

                  <div className="absolute bottom-3 inset-x-3 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-wider">{personal.name}</p>
                    <p className="text-[10px] text-amber-300 font-medium">Universitas Siliwangi</p>
                  </div>
                </div>

                {/* Restored IPK Status Badge Below Photo */}
                <div className="mt-3 py-1.5 sm:py-2 px-3.5 rounded-xl bg-rose-50/90 dark:bg-slate-900/90 border border-rose-200/80 dark:border-slate-700 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>IPK {personal.gpa} • Siap Berkontribusi</span>
                </div>

              </div>

            </div>

            {/* Direct Social Media Links (WA, IG, LinkedIn) */}
            <div className="w-full max-w-[260px] sm:max-w-xs mt-4 sm:mt-5 flex items-center justify-center gap-2.5 z-10">
              {/* WhatsApp Link */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                title="Hubungi via WhatsApp"
              >
                <i className="fab fa-whatsapp text-sm"></i>
                <span>WhatsApp</span>
              </a>

              {/* Instagram Link */}
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:opacity-90 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                title="Buka Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
                <span>Instagram</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                title="Buka LinkedIn Profile"
              >
                <i className="fab fa-linkedin text-sm"></i>
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Narrative "Hi, I'm Ade Sri Rahayu" (Shifted upward with tighter gap to title) */}
          <div className="lg:col-span-7 -mt-2 sm:-mt-5">
            
            {/* Header Greeting - Larger "Hi," shifted close to title */}
            <div className="mb-3 sm:mb-4">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-rose-700 dark:text-rose-400 leading-none">
                Hi,
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">
                I'm <span className="text-rose-700 dark:text-rose-400">{personal.name}</span>
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                Pendidikan Ekonomi • Universitas Siliwangi
              </p>
            </div>

            {/* Concise Recruiter Pitch without repetitive IPK */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-rose-100 dark:border-slate-700 shadow-xs mb-5">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify mb-3 sm:mb-4">
                {personal.bio}
              </p>
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-2.5 text-xs font-semibold text-rose-700 dark:text-rose-300">
                <i className="fas fa-check-circle text-emerald-500 text-sm"></i>
                <span>{personal.hrPromise || "Siap memberikan kinerja prima, ketelitian administratif, dan kepemimpinan adaptif."}</span>
              </div>
            </div>

            {/* Quick Contact & CV Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCV}
                className="px-6 py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <i className="fas fa-file-invoice"></i>
                <span>Buka / Unduh CV</span>
              </button>

              <a
                href={`mailto:${personal.email}?subject=Peluang%20Kolaborasi%20/%20Karier%20-%20Ade%20Sri%20Rahayu`}
                className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-rose-700 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-800 text-xs font-bold flex items-center gap-2 shadow-2xs transition-all transform hover:-translate-y-0.5"
                title="Kirim Pesan Email Langsung"
              >
                <i className="fas fa-paper-plane text-rose-600 dark:text-rose-400"></i>
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
