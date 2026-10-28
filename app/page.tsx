import Link from "next/link"
import { calculateWR } from "@/lib/calc"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#00e27a]">
              <span className="w-2 h-2 rounded-full bg-[#00e27a] animate-pulse" />
              Gratis &bull; Tanpa Login &bull; 100% Privat
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] tracking-tight">
              Hitung Win Rate MLBB<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e27a] to-[#34d399]">
                Dengan Presisi
              </span>
            </h1>
            
            <p className="text-[#a1a1aa] text-lg max-w-lg leading-relaxed">
              Win rate kamu mentok di 60% padahal sudah ratusan match? 
              Masukkan data match kamu, dan langsung tahu berapa win lagi 
              yang harus kamu kejar untuk sampai ke target rank.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00e27a] to-[#34d399] text-[#04150d] font-bold text-sm hover:opacity-90 transition-opacity shadow-green">
                Hitung WR Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tools" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                Lihat Semua Alat
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <TrustItem icon="✓" text="100% Gratis" />
              <TrustItem icon="✓" text="Tanpa Install" />
              <TrustItem icon="✓" text="Data Privat" />
            </div>
          </div>

          <div className="relative">
            <CalculatorCard />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00e27a] mb-3 block">Semua Alat</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">Tiga Kalkulator, Satu Tujuan</h2>
            <p className="text-[#a1a1aa]">Semua kebutuhan soal win rate bisa kamu selesaikan di sini, tanpa install apa pun.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ToolCard
              num="01"
              title="Kalkulator WR"
              desc="Hitung berapa match tambahan yang kamu butuhkan — win atau lose — untuk mencapai target win rate."
              href="/kalkulator"
              icon="chart"
            />
            <ToolCard
              num="02"
              title="Cek Win & Lose"
              desc="Punya angka WR tapi bingung total win dan total lose kamu? Masukkan data dan langsung dapat angkanya."
              href="/winlose"
              icon="chart"
            />
            <ToolCard
              num="03"
              title="Simulasi Lose Streak"
              desc="Lagi telat 5 game berturut-turut? Cek dulu dampaknya ke win rate kamu sebelum panik."
              href="/losestreak"
              icon="chart"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox value="3" label="Kalkulator Siap Pakai" />
            <StatBox value="0" label="Data Tersimpan di Server" />
            <StatBox value="100%" label="Gratis Selamanya" />
            <StatBox value="<1s" label="Waktu Hitung" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e27a]/20 via-[#00e27a]/5 to-transparent" />
            <div className="relative p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                Mau tahu target WR kamu?
              </h2>
              <p className="text-[#a1a1aa] max-w-lg mx-auto mb-6">
                Kalkulator utama bisa kasih tahu berapa win lagi yang harus kamu kejar supaya WR kamu sampai di target.
              </p>
              <a href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00e27a] text-[#04150d] font-bold text-sm hover:opacity-90 transition-opacity">
                Buka Kalkulator WR
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CalculatorCard() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.95)] p-6 shadow-2xl backdrop-blur-xl">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00e27a]/30 via-transparent to-[#34d399]/20 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#00e27a]" />
          <span className="text-xs font-semibold text-[#00e27a] uppercase tracking-wider">Live Preview</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Kalkulator WR</h3>
        <p className="text-sm text-[#a1a1aa] mb-4">Isi 3 data di bawah, lalu tekan hitung.</p>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#a1a1aa]">Total Match</label>
            <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm">259</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#a1a1aa]">WR Saat Ini</label>
              <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm">76.4%</div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#a1a1aa]">Target WR</label>
              <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-[#6b6b76] text-sm">80%</div>
            </div>
          </div>
          <button className="w-full h-10 rounded-lg bg-gradient-to-r from-[#00e27a] to-[#34d399] text-[#04150d] font-bold text-sm flex items-center justify-center gap-2">
            Hitung Sekarang
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
      <span className="w-5 h-5 rounded-full bg-[#00e27a]/10 flex items-center justify-center text-[#00e27a] text-xs">{icon}</span>
      {text}
    </div>
  )
}

function ToolCard({ num, title, desc, href, icon }: { num: string; title: string; desc: string; href: string; icon: string }) {
  return (
    <Link href={href} className="group relative rounded-2xl border border-white/10 bg-[rgba(20,20,24,0.6)] p-6 hover:border-[#00e27a]/30 hover:bg-[rgba(20,20,24,0.9)] transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-bold text-[#6b6b76] uppercase tracking-widest">{num}</span>
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00e27a] group-hover:border-[#00e27a]/30 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M3 3v18h18" /><path d="m7 14 3-4 3 3 5-7" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e27a] transition-colors">{title}</h3>
      <p className="text-sm text-[#a1a1aa] leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#00e27a] opacity-0 group-hover:opacity-100 transition-opacity">
        Mulai <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-2xl font-display font-extrabold text-white mb-1">{value}</div>
      <div className="text-xs text-[#6b6b76]">{label}</div>
    </div>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
