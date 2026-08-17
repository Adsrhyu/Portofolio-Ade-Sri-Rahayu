import React, { useEffect } from 'react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-2xl overflow-y-auto z-10 flex flex-col">
        
        {/* Modal Banner Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 text-white flex flex-col justify-between min-h-[170px]">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-rose-900 flex items-center justify-center shadow-md transition-all z-20"
            aria-label="Tutup Modal"
          >
            <i className="fas fa-times text-sm"></i>
          </button>

          <div className="relative z-10 flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-rose-700 text-white px-3 py-1 rounded-full shadow-xs">
              {project.category}
            </span>
            <span className="text-[11px] font-semibold text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-white/10">
              {project.period}
            </span>
          </div>

          <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
            {project.title}
          </h2>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-2">
              <i className="fas fa-file-alt"></i>
              <span>Ringkasan & Deskripsi Proyek</span>
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {project.fullDesc}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.problem && (
                <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-slate-800/60 border border-rose-100 dark:border-slate-700">
                  <div className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>Tantangan & Kebutuhan</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <i className="fas fa-lightbulb"></i>
                    <span>Solusi & Langkah Eksekusi</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tools & Methodology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-2">
              <i className="fas fa-tools"></i>
              <span>Perangkat & Metodologi Kerja</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 dark:bg-slate-800 text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-slate-700 flex items-center gap-1.5"
                >
                  <i className="fas fa-check text-[10px]"></i>
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Measurable Results & Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-2">
                <i className="fas fa-chart-line"></i>
                <span>Hasil Terukur & Dampak Inisiatif</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-rose-100 dark:border-slate-700 text-center shadow-xs"
                  >
                    <div className="font-display font-bold text-xl text-rose-700 dark:text-rose-400 mb-0.5">
                      {metric.value}
                    </div>
                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-rose-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Inisiatif karya mahasiswa Universitas Siliwangi
            </div>
            
            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/6285603475908?text=${encodeURIComponent(`Halo Ade Sri, saya tertarik mendiskusikan studi kasus proyek "${project.title}" yang saya lihat di portofolio Anda.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Diskusikan Proyek</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Tutup
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
