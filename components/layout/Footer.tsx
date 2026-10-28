import Link from "next/link"
import { Heart, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e27a] to-[#34d399] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#04150d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 17v-4M12 17V7M19 17v-6" />
                </svg>
              </div>
              <span className="font-display">Hitung<span className="text-[#00e27a]">WR</span></span>
            </Link>
            <p className="mt-3 text-sm text-[#6b6b76] leading-relaxed">
              Kalkulator win rate buat player Mobile Legends. Gratis, cepat, dan semua data diurus di perangkat kamu sendiri.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#6b6b76] mb-4">Alat</h4>
            <ul className="space-y-2">
              <li><NavLink href="/kalkulator">Kalkulator WR</NavLink></li>
              <li><NavLink href="/winlose">Cek Win & Lose</NavLink></li>
              <li><NavLink href="/losestreak">Simulasi Lose Streak</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#6b6b76] mb-4">Dukungan</h4>
            <ul className="space-y-2">
              <li><NavLink href="/donasi">Donasi via Saweria</NavLink></li>
              <li><a href="https://github.com/ryhardev/hitungwr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#00e27a] transition-colors"><Github className="w-4 h-4" />GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b6b76]">
          <p>© {new Date().getFullYear()} HitungWR. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dibuat dengan ❤️ untuk komunitas MLBB Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-[#a1a1aa] hover:text-[#00e27a] transition-colors">
      {children}
    </Link>
  )
}
