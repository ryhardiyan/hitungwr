"use client"

import { useState } from "react"
import { calculateWR } from "@/lib/calc"
import { Calculator, ArrowRight } from "lucide-react"

export default function KalkulatorPage() {
  const [match, setMatch] = useState("")
  const [wr, setWr] = useState("")
  const [target, setTarget] = useState("")
  const [result, setResult] = useState<{ text: string; isError: boolean } | null>(null)

  const handleCalculate = () => {
    const m = parseFloat(match)
    const w = parseFloat(wr)
    const t = parseFloat(target)

    if (isNaN(m) || isNaN(w) || isNaN(t)) {
      setResult({ text: "Semua field harus diisi.", isError: true })
      return
    }
    if (m < 0 || w < 0 || t < 0) {
      setResult({ text: "Field tidak boleh negatif.", isError: true })
      return
    }
    if (m % 1 !== 0 || t % 1 !== 0) {
      setResult({ text: "Total match dan target harus bilangan bulat.", isError: true })
      return
    }
    if (w > 100 || t > 100) {
      setResult({ text: "WR tidak boleh lebih dari 100%.", isError: true })
      return
    }

    setResult(calculateWR(m, w, t))
  }

  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00e27a]/10 border border-[#00e27a]/20 text-xs font-semibold text-[#00e27a] mb-4">
            <Calculator className="w-3 h-3" />
            Kalkulator Win Rate
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3">
            Berapa Win yang Kamu Butuhkan?
          </h1>
          <p className="text-[#a1a1aa] text-sm sm:text-base max-w-lg mx-auto">
            Masukkan total match, win rate saat ini, dan target WR. 
            Kami akan hitung berapa match win yang kamu butuhkan.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,340px] gap-6">
          {/* Calculator Card */}
          <div className="rounded-2xl border border-white/10 bg-surface-800/50 backdrop-blur-sm p-5 sm:p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">
                  Total Match
                </label>
                <input
                  type="number"
                  placeholder="Contoh: 259"
                  inputMode="numeric"
                  value={match}
                  onChange={(e) => setMatch(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-surface-900/60 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-1 focus:ring-[#00e27a]/30 transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">
                    WR Saat Ini
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="76.4"
                      step="any"
                      inputMode="decimal"
                      value={wr}
                      onChange={(e) => setWr(e.target.value)}
                      className="w-full h-11 px-4 pr-10 rounded-xl bg-surface-900/60 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-1 focus:ring-[#00e27a]/30 transition-all text-sm"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-1.5">
                    Target WR
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="80"
                      step="any"
                      inputMode="decimal"
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      className="w-full h-11 px-4 pr-10 rounded-xl bg-surface-900/60 border border-white/10 text-white placeholder-[#6b6b76] focus:border-[#00e27a]/50 focus:outline-none focus:ring-1 focus:ring-[#00e27a]/30 transition-all text-sm"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b76] text-sm">%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full h-11 rounded-xl bg-[#00e27a] text-surface-900 font-bold text-sm hover:bg-[#34d399] transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Hitung Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className={`mt-4 p-4 rounded-xl border ${
                result.isError
                  ? "bg-red-500/10 border-red-500/20"
                  : "bg-[#00e27a]/10 border-[#00e27a]/20"
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    result.isError ? "bg-red-500/20 text-red-400" : "bg-[#00e27a]/20 text-[#00e27a]"
                  }`}>
                    {result.isError ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <p className="text-sm text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: result.text }} />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <InfoCard
              title="Rumus"
              content="WR = (Total Win / Total Match) × 100"
            />
            <InfoCard
              title="Tips"
              items={[
                "Ambil data dari menu Ranked di game",
                "Target: Epic 60%, Legend 70%, Mythic 75%",
                "Hasil dihitung di perangkatmu, tidak ada data terkirim",
              ]}
            />
            <div className="rounded-xl border border-white/10 bg-surface-800/30 p-4">
              <p className="text-xs text-[#6b6b76] leading-relaxed">
                <span className="text-[#00e27a] font-medium">💡 Tahukah kamu?</span> 
                Win rate dihitung dari total match yang kamu main. 
                Semakin banyak match, semakin stabil WR-nya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, content, items }: { title: string; content?: string; items?: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface-800/30 p-4">
      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
      {content && <p className="text-xs text-[#a1a1aa] font-mono bg-surface-900/50 rounded-lg p-2.5">{content}</p>}
      {items && (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
              <span className="text-[#00e27a] mt-0.5 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
