import Link from "next/link"
import { ArrowRight, Calculator, TrendingUp, Activity } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Copy */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00e27a]/10 border border-[#00e27a]/20 text-xs font-semibold text-[#00e27a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e27a] animate-pulse" />
                Gratis &bull; Tanpa Login &bull; 100% Privat
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] tracking-tight">
                Hitung Win Rate
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e27a] to-[#34d399]">
                  MLBB Presisi
                </span>
              </h1>

              <p className="text-[#a1a1aa] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Tahu berapa win yang harus kamu kejar untuk naik dari Epic ke Legend? 
                Masukkan data match kamu, dapatkan jawabannya detik ini juga.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/kalkulator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00e27a] text-surface-900 font-bold text-sm hover:bg-[#34d399] transition-colors shadow-lg shadow-[#00e27a]/20"
                >
                  <Calculator className="w-4 h-4" />
                  Hitung WR Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#tools"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Lihat Semua Alat
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-[#6b6b76]">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#00e27a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tanpa install apa pun
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#00e27a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Data tetap di perangkatmu
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#00e27a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Hasil instan
                </span>
              </div>
            </div>

            {/* Right: Calculator Preview */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00e27a]/20 to-[#34d399]/10 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl border border-white/10 bg-surface-700/80 backdrop-blur-xl p-5 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00e27a]/80" />
                    </div>
                    <span className="text-xs text-[#6b6b76] ml-2">Kalkulator WR</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-[#6b6b76] mb-1.5">Total Match</label>
                      <div className="h-10 rounded-lg bg-surface-900/60 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm font-mono">
                        259
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#6b6b76] mb-1.5">WR Saat Ini</label>
                        <div className="relative">
                          <div className="h-10 rounded-lg bg-surface-900/60 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm font-mono">
                            76.4
                          </div>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-xs">%</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#6b6b76] mb-1.5">Target WR</label>
                        <div className="relative">
                          <div className="h-10 rounded-lg bg-surface-900/60 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm font-mono">
                            80.0
                          </div>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-xs">%</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full h-10 rounded-lg bg-gradient-to-r from-[#00e27a] to-[#34d399] text-surface-900 font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      Hitung Sekarang
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Result preview */}
                  <div className="mt-4 p-3 rounded-lg bg-[#00e27a]/10 border border-[#00e27a]/20">
                    <p className="text-xs text-[#00e27a] font-medium">
                      Kamu butuh <span className="font-bold">23 win</span> tanpa lose untuk sampai 80% WR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3">
              Tiga Alat, Satu Tujuan
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-base">
              Semua kebutuhan soal win rate kamu bisa diselesaikan di sini. 
              Tanpa install, tanpa login, langsung pakai.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tool 1 */}
            <Link href="/kalkulator" className="group relative rounded-2xl border border-white/10 bg-surface-800/50 p-6 hover:border-[#00e27a]/30 hover:bg-surface-700/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#00e27a]/10 border border-[#00e27a]/20 flex items-center justify-center text-[#00e27a] mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e27a] transition-colors">Kalkulator WR</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Hitung berapa match tambahan yang kamu butuhkan — win atau lose — untuk mencapai target win rate.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#00e27a] opacity-0 group-hover:opacity-100 transition-opacity">
                Mulai <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Tool 2 */}
            <Link href="/winlose" className="group relative rounded-2xl border border-white/10 bg-surface-800/50 p-6 hover:border-[#00e27a]/30 hover:bg-surface-700/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#00e27a]/10 border border-[#00e27a]/20 flex items-center justify-center text-[#00e27a] mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e27a] transition-colors">Cek Win & Lose</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Punya angka WR tapi bingung total win dan lose kamu? Masukkan data, langsung dapat angkanya.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#00e27a] opacity-0 group-hover:opacity-100 transition-opacity">
                Mulai <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Tool 3 */}
            <Link href="/losestreak" className="group relative rounded-2xl border border-white/10 bg-surface-800/50 p-6 hover:border-[#00e27a]/30 hover:bg-surface-700/60 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-[#00e27a]/10 border border-[#00e27a]/20 flex items-center justify-center text-[#00e27a] mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e27a] transition-colors">Simulasi Lose Streak</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Lagi telat 5 game berturut-turut? Cek dulu dampaknya ke win rate sebelum panik.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#00e27a] opacity-0 group-hover:opacity-100 transition-opacity">
                Mulai <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox value="3" label="Kalkulator" sub="siap pakai" />
            <StatBox value="0" label="Data tersimpan" sub="di server" />
            <StatBox value="<1s" label="Waktu hitung" sub="instan" />
            <StatBox value="100%" label="Gratis" sub="selamanya" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e27a]/20 via-[#00e27a]/5 to-transparent" />
            <div className="relative px-6 py-12 sm:px-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                Mau tahu target WR kamu?
              </h2>
              <p className="text-[#a1a1aa] text-sm sm:text-base max-w-md mx-auto mb-6">
                Masukkan total match, win rate, dan target. Kami hitung berapa win yang perlu kamu kejar.
              </p>
              <Link
                href="/kalkulator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00e27a] text-surface-900 font-bold text-sm hover:bg-[#34d399] transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Buka Kalkulator WR
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function StatBox({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-surface-800/30 border border-white/5">
      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-1">{value}</div>
      <div className="text-xs text-[#a1a1aa]">{label}</div>
      <div className="text-xs text-[#6b6b76]">{sub}</div>
    </div>
  )
}
