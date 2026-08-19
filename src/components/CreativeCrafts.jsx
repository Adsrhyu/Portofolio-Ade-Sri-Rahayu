import React from 'react';

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
            <div
              key={craft.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-rose-300 dark:hover:border-rose-700 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
            >
              {/* Visual Cover Banner */}
              <div className={`p-5 bg-gradient-to-br ${craft.gradient || 'from-rose-700 to-slate-900'} text-white relative overflow-hidden min-h-[140px] sm:min-h-[150px] flex flex-col justify-between`}>
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '14px 14px' }}></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full border border-white/20">
                    {craft.category}
                  </span>
                  <span className="text-[10px] font-bold text-white/90 bg-black/30 px-2.5 py-0.5 rounded-full">
                    {craft.fileSize}
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-3 my-2">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className={`fas ${craft.icon || 'fa-file-pdf'}`}></i>
                  </div>
                  <span className="text-[11px] font-bold text-white leading-tight drop-shadow-xs">
                    {craft.highlights}
                  </span>
                </div>
              </div>

              {/* Card Body - Title & Direct Action */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors leading-snug mb-4">
                  {craft.title}
                </h3>

                <div className="flex items-center gap-2 pt-3 border-t border-rose-50 dark:border-slate-800">
                  <button
                    onClick={() => onSelectCraft(craft)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all transform group-hover:scale-[1.02]"
                    title="Lihat Karya PDF"
                  >
                    <i className="fas fa-eye text-xs"></i>
                    <span>Lihat Karya</span>
                  </button>
                  <a
                    href={craft.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-rose-700 dark:text-rose-300 font-bold text-xs flex items-center justify-center border border-rose-200/70 dark:border-slate-700 transition-all"
                    title="Buka File PDF Asli di Tab Baru"
                  >
                    <i className="fas fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CreativeCrafts;
