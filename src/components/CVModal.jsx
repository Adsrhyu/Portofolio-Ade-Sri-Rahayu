import React, { useEffect } from 'react';

export function CVModal({ personal, education, experiences, committees, hardSkills, softSkills, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl max-h-[95vh] bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col">
        
        {/* Modal Toolbar (Hidden on Print) */}
        <div className="no-print p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Curriculum Vitae Preview • Ade Sri Rahayu
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button for Original PDF */}
            <a
              href="./CV/CV%20Ade%20Sri%20Rahayu.pdf"
              download="CV Ade Sri Rahayu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
              title="Unduh Berkas PDF Asli"
            >
              <i className="fas fa-file-download"></i>
              <span>Unduh File PDF Asli</span>
            </a>

            {/* Print / Save View */}
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
              title="Cetak atau Simpan Sebagai PDF"
            >
              <i className="fas fa-print"></i>
              <span>Cetak / Cetak PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-colors"
              title="Tutup Pratinjau"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="cv-print-area p-8 sm:p-12 overflow-y-auto bg-white font-sans text-slate-900 selection:bg-rose-100">
          
          {/* Header Section */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={personal.photoUrl || "./assets/ade-profile.png"}
                  alt={personal.name}
                  className="w-16 h-20 sm:w-20 sm:h-24 rounded-lg object-cover border border-slate-300 shadow-xs flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './assets/ade-profile.png';
                  }}
                />
                <div>
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {personal.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-bold text-rose-800 uppercase tracking-widest mt-0.5">
                    Mahasiswa Aktif
                  </p>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    S1 Pendidikan Ekonomi • Universitas Siliwangi (IPK 3.82 / 4.00)
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div><strong className="text-slate-900">No. Hp:</strong> {personal.phone}</div>
                <div><strong className="text-slate-900">Email:</strong> {personal.email}</div>
                <div><strong className="text-slate-900">Domisili:</strong> {personal.address}</div>
              </div>
            </div>
          </div>

          {/* 1. Profil Singkat */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PROFIL SINGKAT
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {personal.bio}
            </p>
          </div>

          {/* 2. Pengalaman Organisasi */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PENGALAMAN ORGANISASI
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-3.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">{exp.organization}</h3>
                  <span className="text-[11px] font-semibold text-slate-600">{exp.period}</span>
                </div>
                <div className="text-[11px] font-semibold text-rose-800 mb-1">{exp.role}</div>
                <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-1 ml-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. Pendidikan */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PENDIDIKAN
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">{edu.degree} - {edu.institution}</h3>
                  <span className="text-[11px] font-semibold text-slate-600">{edu.period}</span>
                </div>
                <div className="text-[11px] font-bold text-rose-800">
                  {edu.gpa}
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* 4. Pengalaman Kepanitiaan */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PENGALAMAN KEPANITIAAN
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {committees.map((com) => (
                <div key={com.id} className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{com.event}</span>
                    <span className="text-[10px] font-semibold text-slate-500">{com.year}</span>
                  </div>
                  <div className="font-semibold text-rose-800 text-[11px]">{com.role}</div>
                  <div className="text-slate-600 text-[10px] mt-0.5 leading-snug">{com.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Kemampuan (Skill) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Hard Skills
              </h2>
              <div className="space-y-1.5 text-[11px]">
                {hardSkills.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center py-0.5 border-b border-slate-100">
                    <span className="text-slate-700">• {s.name}</span>
                    <span className="font-bold text-rose-800">{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Soft Skills
              </h2>
              <div className="space-y-1.5 text-[11px]">
                {softSkills.map((s, idx) => (
                  <div key={idx} className="p-1.5 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-900">• {s.name}</span>
                    <p className="text-[10px] text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer of CV */}
          <div className="mt-8 pt-4 border-t border-slate-300 text-center text-[10px] text-slate-500">
            Curriculum Vitae resmi Ade Sri Rahayu — S1 Pendidikan Ekonomi, Universitas Siliwangi. Dokumen diperbarui secara berkala.
          </div>

        </div>

      </div>
    </div>
  );
}
