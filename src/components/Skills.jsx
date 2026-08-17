import React, { useState } from 'react';

export function Skills({ hardSkills, softSkills }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Keuangan & Administrasi', 'Produktivitas & Dokumen', 'Desain Grafis & Branding', 'Pedagogi & Edukasi', 'Bisnis Digital'];

  const filteredHardSkills = selectedCategory === 'Semua'
    ? hardSkills
    : hardSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="kemampuan" className="py-24 bg-rose-50/40 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-rose-200 dark:border-slate-800 inline-block mb-3 shadow-xs">
            Matriks Kompetensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Keahlian Teknis & <span className="italic text-rose-700 dark:text-rose-400">Kapasitas Interpersonal</span>
          </h2>
          <div className="w-16 h-1 bg-rose-700 dark:bg-rose-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Perpaduan penguasaan perangkat lunak administrasi & finansial dengan kecakapan komunikasi, kepemimpinan acara, dan manajemen waktu yang teruji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hard Skills with Live Filter */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-rose-100 dark:border-slate-800">
                <div className="w-11 h-11 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400 flex items-center justify-center text-lg shadow-xs">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hard Skills</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Keterampilan Teknis & Perangkat Kerja</p>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-rose-700 text-white shadow-xs'
                        : 'bg-rose-50/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="space-y-6">
                {filteredHardSkills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-1.5">
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-rose-200/60 dark:border-slate-700">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-rose-100/60 dark:bg-slate-800 rounded-full h-2 overflow-hidden mb-1.5">
                      <div
                        className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Standard: Professional / Academic</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <i className="fas fa-check-circle"></i> Teruji di Lapangan
              </span>
            </div>
          </div>

          {/* Right Column: Soft Skills Grid */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-rose-100 dark:border-slate-800">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center text-lg shadow-xs">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Soft Skills</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Interpersonal, Kepemimpinan & Etos Kerja</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-800/60 border border-rose-100 dark:border-slate-700/80 hover:border-rose-300 dark:hover:border-rose-700 transition-all group hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-700 text-rose-700 dark:text-rose-400 flex items-center justify-center text-sm shadow-xs group-hover:scale-110 transition-transform">
                        <i className={`fas ${skill.icon}`}></i>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-950 px-2 py-0.5 rounded-full">
                        {skill.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                      {skill.name}
                    </h4>
                    
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-rose-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs flex-shrink-0">
                <i className="fas fa-check-double"></i>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Siap berkontribusi maksimal dengan etos kerja tinggi, komunikasi proaktif, dan komitmen target.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
