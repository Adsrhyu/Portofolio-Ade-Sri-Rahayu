import React, { useState } from 'react';

export function CreativeCrafts({ crafts, onSelectCraft }) {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { label: 'Semua Karya', value: 'Semua', count: crafts?.length || 4 },
    { label: 'Organisasi & Apresiasi', value: 'Organisasi', count: crafts?.filter((c) => c.filterCategory === 'Organisasi').length || 2 },
    { label: 'Ulang Tahun & Selebrasi', value: 'Ulang Tahun', count: crafts?.filter((c) => c.filterCategory === 'Ulang Tahun').length || 1 },
    { label: 'Sahabat & Personal', value: 'Sahabat', count: crafts?.filter((c) => c.filterCategory === 'Sahabat').length || 1 },
  ];

  const filteredCrafts = (crafts || []).filter((craft) => {
    const matchesCategory = activeFilter === 'Semua' || craft.filterCategory === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      craft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="karya-kreatif" className="py-20 sm:py-24 bg-gradient-to-b from-[#FFF5F7] via-rose-50/50 to-[#FCF9F7] dark:from-[#0B0D14] dark:via-slate-950 dark:to-[#090A0F] relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-rose-300/20 dark:bg-rose-900/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-pink-300/20 dark:bg-pink-900/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800/80 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="animate-spin-slow">✦</span>
            <span>Karya Kreatif & Kerajinan Foto</span>
            <span className="animate-spin-slow">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Galeri Kreasi <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 dark:from-rose-400 dark:via-pink-300 dark:to-rose-400 bg-clip-text text-transparent italic">Scraft Foto</span> & Scrapbook
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-rose-700 to-amber-500 mx-auto rounded-full mb-4"></div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Menampilkan karya desain kerajinan tangan dan kompilasi foto estetik karya <strong className="text-rose-700 dark:text-rose-400 font-semibold">Ade Sri Rahayu</strong> yang didedikasikan untuk kenang-kenangan organisasi, perayaan ulang tahun, dan ungkapan apresiasi sahabat.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          {/* Quick Search */}
          <div className="relative max-w-xl mx-auto">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-rose-400 text-sm"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari karya (contoh: Bestfriend, Birthday, Organisasi, HMJ DIKMI)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                title="Hapus Pencarian"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  activeFilter === opt.value
                    ? 'bg-rose-700 text-white shadow-md shadow-rose-700/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-rose-200/80 dark:border-slate-700 hover:border-rose-400 hover:text-rose-700'
                }`}
              >
                <span>{opt.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === opt.value
                    ? 'bg-white/25 text-white'
                    : 'bg-rose-100 dark:bg-slate-700 text-rose-700 dark:text-rose-300'
                }`}>
                  {opt.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Crafts Grid */}
        {filteredCrafts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredCrafts.map((craft, idx) => (
              <div
                key={craft.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-100 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-rose-400 dark:hover:border-rose-700 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-2 relative"
              >
                
                <div>
                  {/* Decorative Banner Header */}
                  <div className={`p-6 bg-gradient-to-br ${craft.gradient || 'from-rose-700 to-slate-900'} text-white relative overflow-hidden min-h-[160px] flex flex-col justify-between`}>
                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
                    
                    {/* Top Row: Category & Year */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-3 py-0.5 rounded-full border border-white/20">
                        {craft.category}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-200 bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10">
                        {craft.year}
                      </span>
                    </div>

                    {/* Center Icon & Badge */}
                    <div className="relative z-10 flex items-center gap-3 my-2">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <i className={`fas ${craft.icon || 'fa-heart'}`}></i>
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-bold text-white leading-tight block drop-shadow-xs">
                          {craft.highlights}
                        </span>
                        <span className="text-[10px] text-white/80 flex items-center gap-1 mt-0.5">
                          <i className="fas fa-file-pdf text-rose-300"></i> {craft.fileSize}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Tag */}
                    <div className="relative z-10">
                      <span className="text-[10px] font-medium text-rose-100 bg-black/25 px-2.5 py-0.5 rounded-md inline-block">
                        {craft.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors line-clamp-2 leading-snug">
                      {craft.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {craft.shortDesc}
                    </p>

                    {/* Features Preview */}
                    {craft.features && (
                      <div className="mb-4 space-y-1.5 p-3 rounded-2xl bg-rose-50/60 dark:bg-slate-800/60 border border-rose-100/80 dark:border-slate-700/80">
                        {craft.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <i className="fas fa-check text-rose-600 dark:text-rose-400 text-[10px] shrink-0"></i>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-1">
                      {craft.tools.slice(0, 3).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-rose-100 dark:border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                      {craft.tools.length > 3 && (
                        <span className="text-[10px] text-slate-400 font-medium px-1.5 py-0.5">
                          +{craft.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="p-4 sm:p-5 pt-0 border-t border-rose-50 dark:border-slate-800/80 flex flex-col gap-2 mt-2">
                  <button
                    onClick={() => onSelectCraft(craft)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all transform group-hover:scale-[1.02]"
                    title="Buka Viewer & Detail Lengkap"
                  >
                    <i className="fas fa-eye text-xs"></i>
                    <span>Lihat & Baca PDF</span>
                  </button>

                  <a
                    href={craft.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-rose-700 dark:text-rose-300 font-bold text-[11px] flex items-center justify-center gap-1.5 border border-rose-200/70 dark:border-slate-700 transition-all"
                    title="Buka File PDF di Tab Baru"
                  >
                    <span>Buka File Asli</span>
                    <i className="fas fa-arrow-up-right-from-square text-[9px]"></i>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-14 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 p-8">
            <i className="fas fa-search text-3xl text-rose-300 mb-3"></i>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Tidak ditemukan karya dengan kata kunci "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Coba cari dengan kata kunci lain atau klik tombol reset di bawah.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('Semua');
              }}
              className="px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold"
            >
              Tampilkan Semua Karya
            </button>
          </div>
        )}

        {/* Bottom Callout Banner: Custom Order Inquiry */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-900 via-rose-950 to-slate-950 text-white relative overflow-hidden border border-rose-800/60 shadow-xl">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-700/80 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                <i className="fas fa-gift"></i>
                <span>Layanan Kado & Desain Scrapbook Kustom</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Tertarik Membuat Kado Scraft Foto Kenang-kenangan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Menerima pesanan pembuatan kerajinan scrapbook foto kustom, bingkai apresiasi wisuda/kelulusan, farewell kepengurusan organisasi, dan hadiah momen spesial lainnya.
              </p>
            </div>

            <a
              href="https://wa.me/6285603475908?text=Halo%20Ade%20Sri%20Rahayu,%20saya%20tertarik%20dengan%20karya%20Scraft%20Foto%20di%20portofolio%20Anda%20dan%20ingin%20berkonsultasi%20mengenai%20pembuatan%20desain%20kado%20serupa."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-1 shrink-0"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span>Konsultasi & Pesan via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CreativeCrafts;
