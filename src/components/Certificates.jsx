import React from 'react';

export function Certificates({ certificates }) {
  return (
    <section id="sertifikat" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-4 py-1.5 rounded-full border border-rose-200 dark:border-slate-800 inline-block mb-3 shadow-xs">
            Apresiasi & Lisensi
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Sertifikat & <span className="italic text-rose-700 dark:text-rose-400">Penghargaan Resmi</span>
          </h2>
          <div className="w-16 h-1 bg-rose-700 dark:bg-rose-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Bukti formal kompetensi teknis perkantoran, pengakuan kepemimpinan organisasi universitas, dan dedikasi pada acara tingkat nasional.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-3xl bg-rose-50/40 dark:bg-slate-800/60 border border-rose-100 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-800 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-700 text-rose-700 dark:text-rose-400 flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">
                    <i className="fas fa-award"></i>
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/50 px-2.5 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-1.5">
                  {cert.category}
                </span>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-rose-100 dark:border-slate-700 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <i className="fas fa-shield-alt"></i>
                  <span>{cert.credential}</span>
                </span>
                <span className="font-semibold text-slate-500">Resmi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
