"use client"

import { useState } from "react"
import { calculateWR } from "@/lib/calc"

export default function KalkulatorPage() {
  const [match, setMatch] = useState("")
  const [wr, setWr] = useState("")
  const [target, setTarget] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState(false)

  const handleCalculate = () => {
    const m = parseFloat(match)
    const w = parseFloat(wr)
    const t = parseFloat(target)

    if (isNaN(m) || isNaN(w) || isNaN(t)) {
      setResult("Semua field harus diisi.")
      setError(true)
      return
    }
    if (m < 0 || w < 0 || t < 0) {
      setResult("Field tidak boleh negatif.")
      setError(true)
      return
    }
    if (m % 1 !== 0 || t % 1 !== 0) {
      setResult("Total match dan target WR harus bilangan bulat.")
      setError(true)
      return
    }
    if (w > 100 || t > 100) {
      setResult("WR tidak boleh lebih dari 100%.")
      setError(true)
      return
    }

    const res = calculateWR(m, w, t)
    setResult(res.text)
    setError(res.isError)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00e27a] mb-3 block">Alat 01</span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-3">Kalkulator Win Rate</h1>
          <p className="text-[#a1a1aa] max-w-lg mx-auto">
            Masukkan total match, win rate saat ini, dan target WR. Kami akan hitung berapa match win yang kamu butuhkan.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-6">
          {/* Calculator */}
          <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.8)] p-6 backdrop-blur-xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">Total Match Kamu</label>
                <input
                  type="number"
                  placeholder="Contoh: 259"
                  inputMode="numeric"
                  value={match}
                  onChange={(e) => setMatch(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-2 focus:ring-[#00e27a]/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">Win Rate Sekarang</label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="76.4"
                      step="any"
                      inputMode="decimal"
                      value={wr}
                      onChange={(e) => setWr(e.target.value)}
                      className="w-full h-11 px-4 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-2 focus:ring-[#00e27a]/20 transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-sm font-medium">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">Target WR</label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="80"
                      step="any"
                      inputMode="decimal"
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      className="w-full h-11 px-4 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-2 focus:ring-[#00e27a]/20 transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-sm font-medium">%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#00e27a] to-[#34d399] text-[#04150d] font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                </svg>
                Hitung Sekarang
              </button>
            </div>

            {result && (
              <div className={`mt-4 p-4 rounded-xl border ${error ? "bg-[rgba(251,113,133,0.1)] border-[rgba(251,113,133,0.3)]" : "bg-[rgba(0,226,122,0.1)] border-[rgba(0,226,122,0.3)]"}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${error ? "bg-[rgba(251,113,133,0.2)] text-[#fb7185]" : "bg-[rgba(0,226,122,0.2)] text-[#00e27a]"}`}>
                    {error ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5h.01"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M20 6 9 17l-5-5"/></svg>
                    )}
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${error ? "text-[#fb7185]" : "text-[#00e27a]"}`}>Hasil</span>
                    <p className="mt-1 text-sm text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: result }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.6)] p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00e27a] mb-3 block">Penjelasan</span>
              <h3 className="text-lg font-bold text-white mb-3">Cara Kerjanya</h3>
              <div className="space-y-3 text-sm text-[#a1a1aa] leading-relaxed">
                <p>
                  Win rate dihitung dari persentase win terhadap total match. Rumusnya sederhana:
                </p>
                <code className="block p-3 rounded-lg bg-black/30 border border-white/10 font-mono text-[#00e27a] text-xs">
                  WR = (Total Win / Total Match) × 100
                </code>
                <p>
                  Jika kamu punya <code className="text-[#00e27a]">60 win</code> dari <code className="text-[#00e27a]">100 match</code>, WR kamu adalah <code className="text-[#00e27a]">60%</code>.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.6)] p-6">
              <h3 className="text-sm font-bold text-white mb-3">Tips Menggunakan</h3>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00e27a]">•</span>
                  Ambil data dari menu Ranked di dalam game.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00e27a]">•</span>
                  Hitung total match per season saat ini.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00e27a]">•</span>
                  Target WR: Epic = 60%, Legend = 70%, Mythic = 75%.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.6)] p-6">
              <h3 className="text-sm font-bold text-white mb-3">Alat Terkait</h3>
              <div className="space-y-2">
                <NavLink href="/winlose">Cek Total Win & Lose</NavLink>
                <NavLink href="/losestreak">Simulasi Lose Streak</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#00e27a] transition-colors py-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      {children}
    </a>
  )
}
