import React from 'react';

export function Hero({ personal }) {
  const photoSrc = personal?.photoHeroUrl || personal?.photoUrl || './assets/ade-hero.jpg';

  return (
    <section id="beranda" className="relative pt-28 pb-6 sm:pb-8 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Glows & Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#f43f5e15_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-rose-200/40 dark:bg-rose-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-100/40 dark:bg-amber-900/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact, cohesive container with balanced spacing */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-4">
          
          {/* Left Column: Typography & Animated Identity */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            
            {/* Top Minimal Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-slate-800/90 border border-rose-200 dark:border-slate-700 shadow-xs mb-4 animate-float-text">
              <span className="text-rose-600 dark:text-rose-400 text-xs animate-twinkle">✦</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-rose-800 dark:text-rose-300">
                Official Portfolio
              </span>
              <i className="fas fa-heart text-rose-500 text-xs"></i>
            </div>

            {/* PORTOFOLIO Title - Bold, Animated Motion Gradient & Subtle Float */}
            <h1 className="font-poster text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wider bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 dark:from-rose-500 dark:via-pink-300 dark:to-rose-500 bg-clip-text text-transparent leading-[0.9] mb-3 animate-gradient-text animate-float-text select-none drop-shadow-xs">
              PORTOFOLIO
            </h1>

            {/* Name - Elegant Animated Gradient Text */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-rose-900 to-slate-900 dark:from-white dark:via-rose-300 dark:to-white bg-clip-text text-transparent leading-tight mb-4 inline-block animate-gradient-text transition-transform duration-300 hover:scale-105">
              {personal.name}
            </h2>

            {/* Accent Line with Diamond Star */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-rose-700 to-amber-500 rounded-full"></div>
              <span className="text-rose-600 text-xs animate-twinkle">✦</span>
              <div className="w-8 h-1 bg-rose-200 dark:bg-slate-700 rounded-full"></div>
            </div>

            {/* Academic Info Card */}
            <div className="inline-flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-4 p-3.5 sm:px-5 sm:py-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-rose-100 dark:border-slate-700/80 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center text-sm shadow-xs flex-shrink-0">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Pendidikan Ekonomi
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-rose-700 dark:text-rose-400">
                    Universitas Siliwangi
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Enlarged Animated Circular Avatar (Yellow Almamater Studio Photo) with Orbiting Love & Stars */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-rose-300/40 via-pink-200/30 to-amber-200/30 blur-2xl animate-pulse-glow pointer-events-none"></div>

              {/* Dashed Orbit Ring with Exactly 3 Icons (1 Love, 2 Stars) Revolving on the Dashed Track */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300/70 dark:border-rose-800/50 pointer-events-none animate-orbit z-20">
                
                {/* 1. Top (0 deg): Simple Heart */}
                <div className="absolute inset-0 transform rotate-0 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-rose-200 dark:border-slate-700 flex items-center justify-center text-rose-600 dark:text-rose-400 text-sm animate-counter-rotate">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>

                {/* 2. Bottom-Right (120 deg): Golden Star */}
                <div className="absolute inset-0 transform rotate-[120deg] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 shadow-md border border-amber-200 dark:border-slate-700 flex items-center justify-center text-amber-500 text-xs animate-counter-rotate">
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>

                {/* 3. Bottom-Left (240 deg): Diamond Sparkle Star */}
                <div className="absolute inset-0 transform rotate-[240deg] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 shadow-md border border-rose-200 dark:border-slate-700 flex items-center justify-center text-rose-500 text-xs font-bold animate-counter-rotate">
                      ✦
                    </div>
                  </div>
                </div>

              </div>

              {/* Animated Floating Circle Frame - Enlarged with Rich Presence */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-[370px] md:h-[370px] rounded-full bg-gradient-to-tr from-rose-200 via-pink-100 to-amber-100 dark:from-slate-800 dark:to-slate-900 p-3.5 sm:p-4 shadow-2xl border-4 border-white dark:border-slate-700 animate-float-circle z-10">
                
                {/* Inner Concentric Circle */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-b from-rose-50 via-pink-50/70 to-rose-100 dark:from-slate-800 dark:to-slate-900 p-2 overflow-hidden flex items-center justify-center shadow-inner border border-rose-200 dark:border-slate-700">
                  
                  {/* Subject Portrait Image - NEW STUDIO YELLOW ALMAMATER PHOTO IN CENTERED ZOOMED HALF-BODY */}
                  <img
                    src={photoSrc}
                    alt={personal.name}
                    className="w-full h-full rounded-full object-cover object-[center_18%] scale-[1.25] transition-transform duration-500 hover:scale-[1.32]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = './assets/ade-hero.jpg';
                    }}
                  />

                  {/* Sparkling Stars Accents inside the Circle */}
                  <div className="absolute top-4 left-5 text-rose-600 dark:text-rose-400 text-lg font-bold animate-twinkle pointer-events-none select-none">
                    ✦
                  </div>
                  <div className="absolute top-5 right-5 text-amber-500 dark:text-amber-400 text-xl font-bold animate-twinkle-delay pointer-events-none select-none">
                    ★
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
