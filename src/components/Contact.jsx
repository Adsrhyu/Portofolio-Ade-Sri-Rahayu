import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export function Contact({ personal, onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) {
      onShowToast(`${label} berhasil disalin ke clipboard!`);
    }
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSelectTemplate = (tpl) => {
    setFormData((prev) => ({
      ...prev,
      subject: tpl.subject,
      message: tpl.message
    }));
    if (onShowToast) {
      onShowToast(`Template "${tpl.label}" dimuat ke formulir!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Pesan Anda berhasil dikirim!');
    }
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleSendWhatsApp = () => {
    if (!formData.name || !formData.message) {
      alert('Silakan lengkapi Nama dan Pesan Anda terlebih dahulu.');
      return;
    }
    const text = encodeURIComponent(
      `Halo Ade Sri Rahayu,\n\nNama: ${formData.name}\nEmail: ${formData.email || '-'}\nTopik: ${formData.subject || 'Kolaborasi'}\n\nPesan:\n${formData.message}`
    );
    window.open(`https://wa.me/${personal.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-24 bg-rose-50/50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full border border-rose-200 dark:border-slate-800 inline-block mb-3 shadow-xs">
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Mari <span className="italic text-rose-700 dark:text-rose-400">Bekerja Sama & Berkolaborasi</span>
          </h2>
          <div className="w-16 h-1 bg-rose-700 dark:bg-rose-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Terbuka untuk peluang magang, kolaborasi bisnis ritel/UMKM, riset pendidikan ekonomi, atau undangan kepanitiaan dan workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FBBF24 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
                Informasi Kontak Resmi
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Siap Berdiskusi & Berkolaborasi
              </h3>
              <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed mb-8">
                Silakan hubungi saya melalui jalur komunikasi berikut atau pilih template pesan cepat via WhatsApp.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Phone Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-rose-300">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <div className="text-[10px] text-rose-200 uppercase font-semibold">Telepon / WhatsApp</div>
                      <div className="font-bold">{personal.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone', 'Nomor Telepon')}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white text-white hover:text-rose-900 text-xs transition-colors"
                    title="Salin Nomor"
                  >
                    {copiedKey === 'phone' ? <i className="fas fa-check text-emerald-400"></i> : <i className="fas fa-copy"></i>}
                  </button>
                </div>

                {/* Email Card */}
                <a
                  href={`mailto:${personal.email}?subject=Peluang%20Kolaborasi%20/%20Karier%20-%20Ade%20Sri%20Rahayu`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all group"
                  title="Kirim Pesan Email Langsung"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-rose-300 group-hover:scale-110 transition-transform">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <div className="text-[10px] text-rose-200 uppercase font-semibold">Email Resmi (Klik untuk Kirim)</div>
                      <div className="font-bold">{personal.email}</div>
                    </div>
                  </div>
                  <div
                    className="p-2 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-rose-900 text-xs transition-colors"
                    title="Kirim Pesan Email"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </a>

                {/* Address Card */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-rose-300 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-rose-200 uppercase font-semibold">Lokasi Domisili</div>
                    <div className="font-bold leading-tight">{personal.address}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Socials Link Icons */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/15">
              <span className="text-[11px] font-bold uppercase tracking-widest text-rose-200 block mb-3">
                Jejaring Profesional
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${personal.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white hover:text-emerald-600 text-white flex items-center justify-center text-base transition-all shadow-sm"
                  title="WhatsApp Langsung"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white hover:text-pink-600 text-white flex items-center justify-center text-base transition-all shadow-sm"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white hover:text-blue-600 text-white flex items-center justify-center text-base transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Smart Contact Form & WhatsApp Templates */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-rose-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            
            {/* Quick Templates Selector */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                ⚡ Pilih Topik Pesan Cepat (Klik untuk Mengisi Otomatis):
              </span>
              <div className="flex flex-wrap gap-2">
                {portfolioData.contactTemplates.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => handleSelectTemplate(tpl)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50/80 dark:bg-slate-800 text-rose-700 dark:text-rose-300 border border-rose-200/80 dark:border-slate-700 hover:bg-rose-700 hover:text-white dark:hover:bg-rose-700 dark:hover:text-white transition-all shadow-2xs"
                  >
                    {tpl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Nama Lengkap <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-slate-700 bg-rose-50/30 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Alamat Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-slate-700 bg-rose-50/30 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Subjek / Topik Kolaborasi
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Contoh: Tawaran Magang / Riset / Proyek Kewirausahaan"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-slate-700 bg-rose-50/30 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Pesan Anda <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan pesan, rincian tawaran, atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-slate-700 bg-rose-50/30 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all resize-none placeholder:text-slate-400"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-rose-700/25 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i>
                  <span>Kirim Pesan Formulir</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-sm"></i>
                  <span>Chat Cepat via WhatsApp</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <i className="fas fa-check-circle text-base text-emerald-600"></i>
                  <span>Terima kasih! Pesan Anda telah tersimpan dan siap diproses.</span>
                </div>
              )}
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
