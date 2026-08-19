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
        const targetWidth = 480;
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
      className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-100 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-rose-400 dark:hover:border-rose-700 transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Visual Work Display Box - Directly Showing the Artwork */}
      <div className="relative w-full aspect-[3/4] bg-slate-950 overflow-hidden flex items-center justify-center border-b border-rose-100 dark:border-slate-800">
        
        {/* Live Canvas for rendered PDF */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.02] ${
            isRendered && !renderError ? 'opacity-100' : 'hidden'
          }`}
        />

        {/* Immediate Visual Artwork Card Cover (Shown while loading or if offline/file protocol) */}
        {(!isRendered || renderError) && (
          <div className={`w-full h-full p-6 bg-gradient-to-br ${craft.gradient || 'from-rose-800 to-slate-950'} text-white flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full border border-white/20">
                {craft.category}
              </span>
              <span className="text-[10px] font-bold text-white/90 bg-black/30 px-2.5 py-0.5 rounded-full">
                {craft.fileSize}
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-3">
                <i className={`fas ${craft.icon || 'fa-file-pdf'}`}></i>
              </div>
              <span className="text-xs font-bold text-white leading-tight drop-shadow-xs px-2">
                {craft.highlights}
              </span>
              <span className="text-[10px] text-white/80 mt-1 font-medium bg-black/25 px-2.5 py-0.5 rounded-md">
                {craft.tag}
              </span>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[10px] text-amber-200 font-semibold flex items-center justify-center gap-1">
                <i className="fas fa-hand-pointer text-[9px]"></i> Klik untuk melihat isi PDF
              </span>
            </div>
          </div>
        )}

        {/* Top Left Floating Category Badge (Only when canvas is live) */}
        {isRendered && !renderError && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-xs">
              {craft.category}
            </span>
          </div>
        )}

        {/* Top Right Zoom Icon */}
        <div className="absolute top-3 right-3 z-10">
          <span className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md text-white group-hover:text-amber-300 flex items-center justify-center text-xs shadow-md border border-white/10 group-hover:bg-rose-700 transition-colors">
            <i className="fas fa-expand"></i>
          </span>
        </div>

        {/* Bottom Floating Page Controls (if multi-page PDF rendered) */}
        {isRendered && !renderError && totalPages > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white text-xs shadow-md"
          >
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                currentPage <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 text-white'
              }`}
              title="Halaman Sebelumnya"
            >
              <i className="fas fa-chevron-left text-[10px]"></i>
            </button>

            <span className="text-[11px] font-semibold text-slate-200">
              Hal {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 text-white'
              }`}
              title="Halaman Berikutnya"
            >
              <i className="fas fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        )}
      </div>

      {/* Card Bottom: Title & Action */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white dark:bg-slate-900">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug line-clamp-2">
          {craft.title}
        </h3>
        
        <div className="mt-3 pt-3 border-t border-rose-50 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 font-semibold text-rose-700 dark:text-rose-400">
            <i className="fas fa-eye text-xs"></i>
            <span>Buka Viewer PDF</span>
          </span>
          <span className="font-medium text-slate-400 dark:text-slate-500">{craft.fileSize}</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
