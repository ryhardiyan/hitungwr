import Link from "next/link"
import { Github, Heart, Coffee } from "lucide-react"

export default function DonasiPage() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-6">
          <img
            src="https://ui-avatars.com/api/?name=HitungWR&background=00e27a&color=04150d&size=128&bold=true&font-size=0.35"
            alt="HitungWR"
            className="w-24 h-24 rounded-full border-4 border-[#00e27a]/20 shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-surface-900">
            <span className="text-[8px] text-white font-bold">●</span>
          </div>
        </div>

        {/* Profile */}
        <h1 className="text-2xl font-display font-extrabold text-white mb-1">HitungWR</h1>
        <p className="text-sm text-[#a1a1aa] mb-6">Kalkulator Win Rate MLBB · Indonesia 🇮🇩</p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-8">
          <a
            href="https://github.com/ryhardiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-800 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#00e27a] hover:border-[#00e27a]/30 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/ryhardiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-800 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#00e27a] hover:border-[#00e27a]/30 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* Empty state */}
        <div className="rounded-2xl border border-white/10 bg-surface-800/30 p-8">
          <div className="w-12 h-12 rounded-full bg-surface-700 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-[#6b6b76]" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Halaman Donasi</h2>
          <p className="text-sm text-[#6b6b76] leading-relaxed">
            Halaman donasi sedang dalam pengembangan. 
            Nantikan fitur ini untuk mendukung pengembangan HitungWR.
          </p>
        </div>

        {/* Alternative support */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <SupportItem
            icon={<Coffee className="w-5 h-5" />}
            label="Beli Kopi"
            href="#"
          />
          <SupportItem
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            href="https://github.com/ryhardiyan/hitungwr"
          />
          <SupportItem
            icon={<Heart className="w-5 h-5" />}
            label="Saweria"
            href="https://saweria.co/ryhardiyan"
          />
        </div>
      </div>
    </section>
  )
}

function SupportItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface-800/30 border border-white/5 hover:border-[#00e27a]/20 transition-colors"
    >
      <div className="text-[#6b6b76]">{icon}</div>
      <span className="text-xs text-[#a1a1aa]">{label}</span>
    </a>
  )
}
