import React from 'react';

export function Experience({ experiences, committees }) {
  // 4 Documentation photos for HMJ DIKMI without text
  const hmjPhotos = [
    './assets/ade-hero.jpg',
    './assets/ade-about.jpg',
    './assets/ade-yellow.jpg',
    './assets/ade-white.jpg'
  ];

  return (
    <section id="pengalaman" className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (in English) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-4 py-1.5 rounded-full border border-rose-200 dark:border-slate-800 inline-block mb-3 shadow-xs">
            Leadership & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Organizational & <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 dark:from-rose-400 dark:via-pink-300 dark:to-rose-400 bg-clip-text text-transparent">Committee Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-700 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* 1. ORGANIZATIONAL EXPERIENCE (Pengalaman Organisasi) */}
        <div className="mb-14 sm:mb-16">
          
          {/* Subsection Title (in English) */}
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-rose-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400 flex items-center justify-center text-lg shadow-xs">
                <i className="fas fa-sitemap"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Organizational Experience
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  HMJ DIKMI UNSIL & KOPMA UNSIL
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-rose-200/60 dark:border-slate-700">
              2 Organizations
            </span>
          </div>

          <div className="space-y-8">
            
            {/* Featured: HMJ DIKMI with 4 Clean Documentation Photos */}
            <div className="p-7 sm:p-9 rounded-3xl bg-rose-50/30 dark:bg-slate-800/80 border-2 border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Organization Details & Concise Bullets */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 px-3 py-1 rounded-xl">
                        2024 — 2025 (2 Periods)
                      </span>
                    </div>

                    <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                      Divisi Kewirausahaan <span className="text-rose-700 dark:text-rose-400">(2 Periode)</span>
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-5">
                      Himpunan Mahasiswa Jurusan Pendidikan Ekonomi (HMJ DIKMI) • FKIP Universitas Siliwangi
                    </p>

                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <i className="fas fa-check-circle text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0 text-xs"></i>
                        <span><strong>DIKMI Mart Operations:</strong> Mengelola unit usaha ritel offline & online mahasiswa untuk kebutuhan kampus.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <i className="fas fa-check-circle text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0 text-xs"></i>
                        <span><strong>Financial & Inventory Control:</strong> Bertanggung jawab atas pengadaan stok produk, penetapan harga jual, dan arus kas harian.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <i className="fas fa-check-circle text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0 text-xs"></i>
                        <span><strong>Team Leadership:</strong> Memimpin koordinasi tim divisi selama 2 periode kepengurusan berturut-turut.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: 4 Clean Documentation Photo Frames without text (Identical Size) */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-hero.jpg"
                        alt="Dokumentasi HMJ DIKMI 1"
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-about.jpg"
                        alt="Dokumentasi HMJ DIKMI 2"
                        className="w-full h-full object-cover object-[center_70%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-yellow.jpg"
                        alt="Dokumentasi HMJ DIKMI 3"
                        className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-white.jpg"
                        alt="Dokumentasi HMJ DIKMI 4"
                        className="w-full h-full object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Secondary: KOPMA UNSIL with 2 Clean Documentation Photos (Identical Size) */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-800/80 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Details */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 px-3 py-1 rounded-xl inline-block">
                      2023 — Present
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    Anggota Aktif Koperasi Mahasiswa
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
                    Koperasi Mahasiswa (KOPMA) • Universitas Siliwangi
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    Aktif menjalin relasi dan mendukung pengembangan unit usaha koperasi mahasiswa, serta berkontribusi dalam kepanitiaan acara formal temu anggota.
                  </p>
                </div>

                {/* Right Column: 2 Clean Documentation Photo Frames without text (Identical Size) */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-yellow.jpg"
                        alt="Dokumentasi KOPMA UNSIL 1"
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-rose-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 h-32 sm:h-36">
                      <img
                        src="./assets/ade-white.jpg"
                        alt="Dokumentasi KOPMA UNSIL 2"
                        className="w-full h-full object-cover object-[center_70%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 2. COMMITTEE & EVENT EXPERIENCE (Pengalaman Kepanitiaan - Kebawahkan / Continuous) */}
        <div>
          
          {/* Subsection Title (in English) */}
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-rose-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center text-lg shadow-xs">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Committee Experience
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  7+ Event Committees across National, Regional, and Campus Scales
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-rose-200/60 dark:border-slate-700">
              7+ Events
            </span>
          </div>

          {/* Committee Grid: Clean, Crisp, Concise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((com) => (
              <div
                key={com.id}
                className="p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/80 border border-rose-100 dark:border-slate-700 shadow-xs hover:shadow-lg hover:border-rose-300 dark:hover:border-rose-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-white bg-rose-700 px-3 py-0.5 rounded-full shadow-xs">
                      {com.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/50">
                      {com.scope}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug">
                    {com.event}
                  </h4>

                  <div className="text-xs font-bold text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-1.5">
                    <i className="fas fa-user-tag text-[10px]"></i>
                    <span>{com.role}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {com.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-rose-50 dark:border-slate-700 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Kategori: {com.category}</span>
                  <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                    <i className="fas fa-check"></i> Selesai
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
