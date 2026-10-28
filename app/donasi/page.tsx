"use client"

import { useState } from "react"
import { Heart, Coffee, Share2, Github } from "lucide-react"

export default function DonasiPage() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")
  const [anonymous, setAnonymous] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const presets = [5000, 10000, 25000, 50000, 100000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Profile Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <div className="text-center space-y-4">
                {/* Avatar with online indicator */}
                <div className="relative inline-block">
                  <img
                    src="https://ui-avatars.com/api/?name=HitungWR&background=e91e63&color=fff&size=256&bold=true&font-size=0.4"
                    alt="HitungWR"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[rgba(233,30,99,0.2)] shadow-lg"
                  />
                  <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0f0f13] shadow-md">
                    <span className="text-[10px] text-white font-bold">●</span>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-2xl font-display font-extrabold text-white">HitungWR</h1>
                  <p className="text-[#a1a1aa] text-sm mt-1">
                    Kalkulator Win Rate MLBB · Indonesia 🇮🇩
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="https://github.com/ryhardev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#e91e63] hover:border-[#e91e63]/30 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/ryhardev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#e91e63] hover:border-[#e91e63]/30 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: "HitungWR", url: window.location.href })
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#e91e63] hover:border-[#e91e63]/30 transition-all"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl text-sm">
                  <span className="text-[#a1a1aa]">Total Terkumpul</span>
                  <span className="font-bold text-[#e91e63]">Rp 0</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl text-sm">
                  <span className="text-[#a1a1aa]">Jumlah Donatur</span>
                  <span className="font-bold text-white">0 orang</span>
                </div>
              </div>

              {/* Quick Support Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://saweria.co/ryhardev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#e91e63] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#c2185b] transition-colors shadow-pink"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  Donasi via Saweria
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <Coffee className="w-4 h-4" />
                  Beli Kopi
                </a>
              </div>
            </div>
          </div>

          {/* Donation Form Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.8)] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-display font-bold text-white">Beri Dukungan</h2>
                  <p className="text-[#a1a1aa] text-sm mt-1">
                    Donasimu membantu pengembangan HitungWR
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Aktif</span>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,226,122,0.2)] flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00e27a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Terima Kasih! 🙏</h3>
                    <p className="text-[#a1a1aa]">
                      Donasi kamu akan diteruskan ke kreator. Semangat ngodingnya!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    Kirim Donasi Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1aa] mb-3">Pilih Nominal</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {presets.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset.toString())}
                          className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            amount === preset.toString()
                              ? "bg-[#e91e63] text-white"
                              : "bg-white/5 border border-white/10 text-[#a1a1aa] hover:border-[#e91e63]/30 hover:text-white"
                          }`}
                        >
                          Rp {preset.toLocaleString("id-ID")}
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-sm font-medium">Rp</span>
                      <input
                        type="number"
                        placeholder="Atau masukkan nominal lain"
                        inputMode="numeric"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#e91e63]/50 focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Nama (opsional)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex-1 h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#e91e63]/50 focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20 transition-all text-sm"
                    />
                    <label className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-[#e91e63]/30 transition-colors text-sm text-[#a1a1aa]">
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                        className="sr-only"
                      />
                      <span className={anonymous ? "text-[#e91e63]" : ""}>Anonim</span>
                    </label>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">
                      Pesan Dukungan <span className="text-[#6b6b76]">(opsional)</span>
                    </label>
                    <textarea
                      placeholder="Semangat ngodingnya bro! 💪"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={500}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#e91e63]/50 focus:outline-none focus:ring-2 focus:ring-[#e91e63]/20 transition-all text-sm resize-none"
                    />
                    <p className="text-xs text-[#6b6b76] mt-1 text-right">{message.length}/500</p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!amount}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-[#e91e63] to-[#c2185b] text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    Donasi Sekarang
                  </button>

                  <p className="text-xs text-[#6b6b76] text-center">
                    Donasi akan diteruskan ke Saweria. Minimal donasi Rp 1.000.
                  </p>
                </form>
              )}
            </div>

            {/* Recent Donations Placeholder */}
            <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.6)] p-6">
              <h3 className="text-lg font-bold text-white mb-4">Donasi Terbaru</h3>
              <div className="text-center py-8 text-[#6b6b76] text-sm">
                <Heart className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p>Belum ada donasi. Jadilah yang pertama! 🎉</p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <InfoCard
                icon={<Coffee className="w-6 h-6 text-[#e91e63]" />}
                title="Beli Kopi"
                desc="Belikan kreator secangkir kopi untuk semangat ngoding."
              />
              <InfoCard
                icon={<Share2 className="w-6 h-6 text-[#e91e63]" />}
                title="Share ke Teman"
                desc="Bantu menyebarkan HitungWR ke komunitas MLBB."
              />
              <InfoCard
                icon={<Github className="w-6 h-6 text-[#e91e63]" />}
                title="Kontribusi Code"
                desc="Bisa contribute code di GitHub repository."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
      <div className="w-10 h-10 rounded-lg bg-[rgba(233,30,99,0.1)] border border-[rgba(233,30,99,0.2)] flex items-center justify-center mb-3">
        {icon}
      </div>
      <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
      <p className="text-xs text-[#a1a1aa] leading-relaxed">{desc}</p>
    </div>
  )
}
