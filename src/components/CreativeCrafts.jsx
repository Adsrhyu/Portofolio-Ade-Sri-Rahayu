import React, { useState, useEffect, useRef } from 'react';

function CraftCard({ craft, onSelectCraft }) {
  const canvasRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isRendered, setIsRendered] = useState(false);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let renderTask = null;

    const renderPdfPage = async () => {
      const pdfjs = window.pdfjsLib;
      if (!pdfjs) {
        setRenderError(true);
        return;
      }

      try {
        if (!pdfjs.GlobalWorkerOptions.workerSrc) {
          pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }

        const loadingTask = pdfjs.getDocument({
          url: craft.pdfUrl,
          cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
          cMapPacked: true,
        });
        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        setTotalPages(pdf.numPages || 1);
        const page = await pdf.getPage(currentPage);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        
        const initialViewport = page.getViewport({ scale: 1 });
        const targetWidth = 600;
        const scale = (targetWidth / initialViewport.width) * dpr;
        const viewport = page.getViewport({ scale: scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = '100%';
        canvas.style.height = 'auto';

        renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
        if (!isCancelled) {
          setIsRendered(true);
          setRenderError(false);
        }
      } catch (err) {
        console.warn('PDF rendering info for ' + craft.title + ':', err);
        if (!isCancelled) {
          setRenderError(true);
        }
      }
    };

    renderPdfPage();

    return () => {
      isCancelled = true;
      if (renderTask && renderTask.cancel) {
        renderTask.cancel();
      }
    };
  }, [craft.pdfUrl, currentPage]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div
      onClick={() => onSelectCraft(craft)}
      className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-100 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-rose-400 dark:hover:border-rose-600 transition-all duration-300 flex flex-col justify-between group cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Visual Photo Work - Zero Letterboxing, Exact Natural Aspect Ratio */}
      <div className="relative w-full overflow-hidden bg-rose-50/30 dark:bg-slate-800/30">
        
        {/* Live Canvas for rendered PDF photo - Edge to Edge without black bars */}
        <canvas
          ref={canvasRef}
          className={`w-full h-auto block transition-all duration-300 group-hover:scale-[1.02] ${
            isRendered && !renderError ? 'opacity-100' : 'hidden'
          }`}
        />

        {/* Fallback Artwork Cover (Only shown while loading or if offline) */}
        {(!isRendered || renderError) && (
          <div className={`w-full min-h-[200px] p-6 bg-gradient-to-br ${craft.gradient || 'from-rose-700 to-slate-900'} text-white flex flex-col justify-between items-center text-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
            
            <div className="w-full flex items-center justify-between relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                {craft.category}
              </span>
              <span className="text-[10px] font-bold bg-black/30 px-2 py-0.5 rounded-full">
                {craft.year}
              </span>
            </div>

            <div className="my-auto py-4 relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl mb-2 shadow-md">
                <i className={`fas ${craft.icon || 'fa-file-pdf'}`}></i>
              </div>
              <span className="text-xs font-bold px-2 line-clamp-1">{craft.highlights}</span>
            </div>

            <span className="text-[10px] text-amber-200 font-semibold relative z-10">
              Klik untuk melihat karya
            </span>
          </div>
        )}

        {/* Page Switcher for Multi-page Scraft Foto */}
        {isRendered && !renderError && totalPages > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2.5 inset-x-2.5 z-10 flex items-center justify-between px-3 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs shadow-md border border-white/10"
          >
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                currentPage <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 text-white'
              }`}
              title="Foto Sebelumnya"
            >
              <i className="fas fa-chevron-left text-[10px]"></i>
            </button>

            <span className="text-[11px] font-semibold text-slate-100">
              Hal {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 text-white'
              }`}
              title="Foto Berikutnya"
            >
              <i className="fas fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        )}
      </div>

      {/* Card Bottom: Aesthetic Metadata & Charming Highlights */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white dark:bg-slate-900 border-t border-rose-50 dark:border-slate-800">
        
        {/* Category Pill & Year */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 text-[10px] sm:text-[11px] font-semibold border border-rose-200/60 dark:border-rose-900/50">
            <span className="text-amber-500 text-xs">✦</span>
            <span>{craft.category}</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
            {craft.year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
          {craft.title}
        </h3>

        {/* Highlights & Interactive Action Icon */}
        <div className="mt-3 pt-3 border-t border-rose-50/80 dark:border-slate-800/80 flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[180px] sm:max-w-[200px]">
            {craft.highlights}
          </span>
          
          <span className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 group-hover:bg-rose-700 group-hover:text-white flex items-center justify-center text-xs transition-all shadow-2xs group-hover:scale-110 shrink-0">
            <i className="fas fa-arrow-right text-[10px] transform -rotate-45 group-hover:rotate-0 transition-transform"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export function CreativeCrafts({ crafts, onSelectCraft }) {
  return (
    <section id="karya-kreatif" className="py-14 sm:py-16 bg-gradient-to-b from-[#FFF5F7] via-rose-50/40 to-[#FCF9F7] dark:from-[#0B0D14] dark:via-slate-950 dark:to-[#090A0F] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Concise "Karya (Project)" */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Karya <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 dark:from-rose-400 dark:via-pink-300 dark:to-rose-400 bg-clip-text text-transparent">(Project)</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-700 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Crafts Grid - Directly displaying works and titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
          {(crafts || []).map((craft) => (
            <CraftCard
              key={craft.id}
              craft={craft}
              onSelectCraft={onSelectCraft}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CreativeCrafts;
