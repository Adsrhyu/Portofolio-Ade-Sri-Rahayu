import React, { useState } from 'react';

export function Projects({ projects, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Kewirausahaan', 'Keuangan', 'Desain & Branding', 'Edukasi'];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'Semua' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portofolio" className="py-24 bg-rose-50/40 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-rose-200 dark:border-slate-800 inline-block mb-3 shadow-xs">
            Karya & Inisiatif
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Portofolio Proyek & <span className="italic text-rose-700 dark:text-rose-400">Studi Kasus</span>
          </h2>
          <div className="w-16 h-1 bg-rose-700 dark:bg-rose-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Inisiatif nyata di bidang manajemen operasional unit usaha mahasiswa (DIKMI Mart), tata kelola anggaran keuangan nasional, perancangan modul ajar HOTS, dan branding visual.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek (contoh: DIKMI Mart, Excel, PKM-K, Keuangan, Canva, Modul)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200/80 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all placeholder:text-slate-400"
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-rose-700 text-white shadow-md shadow-rose-700/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-rose-200/80 dark:border-slate-700 hover:border-rose-400 hover:text-rose-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-rose-300 dark:hover:border-rose-800 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Banner Header */}
                  <div className="p-6 bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 text-white relative overflow-hidden flex flex-col justify-between min-h-[150px]">
                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-white/15">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-300">
                        {project.period}
                      </span>
                    </div>

                    <div className="relative z-10 mt-4">
                      <span className="text-[11px] font-bold text-white bg-rose-700/80 backdrop-blur-md px-3 py-1 rounded-lg inline-block shadow-xs">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Key Metrics Quick Preview */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-5 p-3 rounded-2xl bg-rose-50/60 dark:bg-slate-800/60 border border-rose-100 dark:border-slate-700">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="font-display font-bold text-sm text-rose-700 dark:text-rose-400">{m.value}</div>
                            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-rose-50 dark:bg-slate-800 text-rose-700 dark:text-rose-300 px-2.5 py-0.5 rounded-md border border-rose-100 dark:border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-md">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-rose-50 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <i className="fas fa-check-circle text-xs"></i>
                    <span>Tervalidasi</span>
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Detail Studi Kasus</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 p-8">
            <i className="fas fa-search text-3xl text-slate-300 mb-3"></i>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Tidak ditemukan proyek dengan kata kunci "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Coba gunakan kata kunci lain seperti Excel, DIKMI Mart, Keuangan, atau pilih kategori Semua.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Semua');
              }}
              className="px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
