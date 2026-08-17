import React, { useState, useEffect } from 'react';

export function InteractiveDecorations() {
  const [enabled, setEnabled] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!enabled) {
      setParticles([]);
      return;
    }
    const count = window.innerWidth > 768 ? 8 : 4;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 60) + 30,
      y: Math.random() * (window.innerHeight - 60) + 30,
      size: Math.random() * 6 + 4,
      opacity: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 2
    }));
    setParticles(items);
  }, [enabled]);

  return (
    <>
      {enabled && (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden no-print" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 filter blur-xs animate-pulse"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle Toggle in corner */}
      <div className="fixed bottom-4 left-4 z-40 no-print">
        <button
          onClick={() => setEnabled(!enabled)}
          className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/85 dark:bg-slate-800/85 backdrop-blur-md border border-rose-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 shadow-xs flex items-center gap-1.5 transition-all"
          title="Nyalakan / Matikan Efek Partikel Halus"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
          <span>{enabled ? 'Efek: On' : 'Efek: Off'}</span>
        </button>
      </div>
    </>
  );
}
