import React, { useEffect } from 'react';

export function CraftModal({ craft, allCrafts, onSelectCraft, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (allCrafts && onSelectCraft) {
        const currentIndex = allCrafts.findIndex((c) => c.id === craft.id);
        if (e.key === 'ArrowRight' && currentIndex < allCrafts.length - 1) {
          onSelectCraft(allCrafts[currentIndex + 1]);
        }
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelectCraft(allCrafts[currentIndex - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [craft, allCrafts, onSelectCraft, onClose]);

  if (!craft) return null;

  const currentIndex = allCrafts ? allCrafts.findIndex((c) => c.id === craft.id) : -1;
  const prevCraft = currentIndex > 0 ? allCrafts[currentIndex - 1] : null;
  const nextCraft = currentIndex >= 0 && currentIndex < allCrafts.length - 1 ? allCrafts[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[94vh] bg-white dark:bg-slate-900 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-2xl overflow-hidden z-10 flex flex-col">
        
        {/* Modal Header */}
        <div className={`relative p-5 sm:p-7 bg-gradient-to-r ${craft.gradient || 'from-rose-800 to-slate-950'} text-white flex flex-col justify-between shrink-0`}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-rose-900 flex items-center justify-center shadow-md transition-all z-20"
            aria-label="Tutup Preview"
          >
            <i className="fas fa-times text-sm"></i>
          </button>

          <div className="relative z-10 flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-white/20 shadow-xs flex items-center gap-1.5">
              <i className={`fas ${craft.icon || 'fa-heart'} text-xs`}></i>
              <span>{craft.category}</span>
            </span>
            <span className="text-[11px] font-semibold text-white/90 bg-black/40 px-3 py-1 rounded-full border border-white/10">
              Tahun {craft.year}
            </span>
            <span className="text-[11px] font-semibold text-rose-200 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/30">
              <i className="fas fa-file-pdf mr-1"></i> {craft.fileSize}
            </span>
          </div>

          <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
            {craft.title}
          </h2>
          <p className="relative z-10 text-xs sm:text-sm text-white/80 mt-1 font-medium">
            {craft.highlights} • Karya Desain & Kerajinan Ade Sri Rahayu
          </p>
        </div>

        {/* Modal Body: Two Columns (PDF Viewer & Details) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50 dark:bg-slate-900/50">
          
          {/* Left Column: Interactive PDF Embed / Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner relative flex flex-col">
              
              {/* PDF Top Bar */}
              <div className="px-4 py-2 bg-slate-950 text-slate-300 text-xs flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2 truncate">
                  <i className="fas fa-file-pdf text-rose-500 text-sm"></i>
                  <span className="font-semibold truncate">{craft.fileName}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={craft.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold flex items-center gap-1 transition-all"
                    title="Buka PDF di Tab Baru"
                  >
                    <i className="fas fa-external-link-alt text-[10px]"></i>
                    <span>Tab Baru</span>
                  </a>
                  <a
                    href={craft.pdfUrl}
                    download={craft.fileName}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold flex items-center gap-1 transition-all border border-slate-700"
                    title="Unduh File PDF Asli"
                  >
                    <i className="fas fa-download text-[10px]"></i>
                    <span>Unduh</span>
                  </a>
                </div>
              </div>

              {/* PDF Native Embed with Fallback */}
              <div className="flex-1 w-full h-full relative bg-slate-900">
                <object
                  data={craft.pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-300 bg-slate-900 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-rose-950/80 border border-rose-700/60 flex items-center justify-center text-rose-400 text-2xl shadow-lg">
                      <i className="fas fa-file-pdf"></i>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{craft.title}</h4>
                      <p className="text-xs text-slate-400 max-w-sm">
                        File PDF resolusi tinggi ({craft.fileSize}) siap ditampilkan atau diunduh langsung.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={craft.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold flex items-center gap-2 shadow-md"
                      >
                        <i className="fas fa-eye"></i>
                        <span>Buka PDF di Tab Baru</span>
                      </a>
                      <a
                        href={craft.pdfUrl}
                        download={craft.fileName}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700"
                      >
                        <i className="fas fa-download"></i>
                        <span>Unduh PDF Asli</span>
                      </a>
                    </div>
                  </div>
                </object>
              </div>

            </div>
          </div>

          {/* Right Column: Full Information & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="space-y-5">
              
              {/* Description */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-rose-100 dark:border-slate-700 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-2">
                  <i className="fas fa-wand-magic-sparkles"></i>
                  <span>Deskripsi & Konsep Karya</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {craft.fullDesc}
                </p>
              </div>

              {/* Key Features List */}
              {craft.features && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-rose-100 dark:border-slate-700 shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-2">
                    <i className="fas fa-list-check"></i>
                    <span>Elemen & Keunggulan Desain</span>
                  </h4>
                  <ul className="space-y-2">
                    {craft.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <i className="fas fa-check-circle text-emerald-500 text-xs mt-0.5 shrink-0"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools & Elements */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <i className="fas fa-palette text-rose-600"></i>
                  <span>Perangkat & Media Pembuatan</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {craft.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium bg-rose-50 dark:bg-slate-800 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-lg border border-rose-100 dark:border-slate-700 flex items-center gap-1"
                    >
                      <i className="fas fa-tag text-[9px] opacity-70"></i>
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions & WhatsApp order */}
            <div className="pt-4 border-t border-rose-100 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={`https://wa.me/6285603475908?text=${encodeURIComponent(`Halo Ade Sri Rahayu, saya sangat tertarik dengan karya kerajinan "${craft.title}" di portofolio Anda. Apakah bisa konsultasi / memesan karya desain scraft foto serupa?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-base"></i>
                <span>Tanya / Pesan Kreasi Serupa via WhatsApp</span>
              </a>

              {/* Next/Prev Navigation Buttons */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={() => prevCraft && onSelectCraft(prevCraft)}
                  disabled={!prevCraft}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    prevCraft
                      ? 'bg-white dark:bg-slate-800 border-rose-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-rose-50 hover:text-rose-700'
                      : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
                  }`}
                >
                  <i className="fas fa-arrow-left text-[10px]"></i>
                  <span className="truncate">Karya Sebelumnya</span>
                </button>

                <button
                  onClick={() => nextCraft && onSelectCraft(nextCraft)}
                  disabled={!nextCraft}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                    nextCraft
                      ? 'bg-white dark:bg-slate-800 border-rose-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-rose-50 hover:text-rose-700'
                      : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
                  }`}
                >
                  <span className="truncate">Karya Berikutnya</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CraftModal;
