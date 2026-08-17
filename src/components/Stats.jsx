import React from 'react';

export function Stats({ stats }) {
  return (
    <section className="pt-0 pb-10 -mt-4 sm:-mt-6 lg:-mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-rose-300 dark:hover:border-rose-800 transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
                <span className="font-display text-3xl sm:text-4xl font-bold text-rose-700 dark:text-rose-400 group-hover:scale-105 transition-transform">
                  {item.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {item.unit}
                </span>
              </div>
              
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                {item.label}
              </h4>
              
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
