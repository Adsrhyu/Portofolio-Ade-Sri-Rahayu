import React from 'react';

export function Footer({ personal }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t-4 border-rose-700 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Ade<span className="text-rose-400">Sri.</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Portofolio resmi dan rekam jejak akademik S1 Pendidikan Ekonomi Universitas Siliwangi. Berdedikasi pada inovasi kewirausahaan mahasiswa dan tata kelola organisasi.
            </p>
            
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-rose-500"></i>
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3.5">
                Navigasi
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#beranda" className="hover:text-rose-400 transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-rose-400 transition-colors">Profil Saya</a></li>
                <li><a href="#pengalaman" className="hover:text-rose-400 transition-colors">Pengalaman</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3.5">
                Karya
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#portofolio" className="hover:text-rose-400 transition-colors">Portofolio Proyek</a></li>
                <li><a href="#sertifikat" className="hover:text-rose-400 transition-colors">Sertifikat Resmi</a></li>
                <li><a href="#kontak" className="hover:text-rose-400 transition-colors">Hubungi Saya</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3.5">
                Terhubung Langsung
              </h4>
              <div className="flex gap-2.5">
                <a
                  href={`https://wa.me/${personal.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 md:mt-0 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              title="Kembali ke Bagian Paling Atas"
            >
              <i className="fas fa-arrow-up text-xs"></i>
              <span>Kembali ke Atas</span>
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ade Sri Rahayu • Universitas Siliwangi. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5">
            <span>Didesain dengan Standar Portofolio Eksekutif</span>
            <i className="fas fa-certificate text-rose-500 text-[10px]"></i>
          </p>
        </div>

      </div>
    </footer>
  );
}
