"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calculator, TrendingUp, Activity } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/kalkulator", label: "Kalkulator WR" },
    { href: "/winlose", label: "Win & Lose" },
    { href: "/losestreak", label: "Lose Streak" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-900/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e27a] to-[#34d399] flex items-center justify-center shadow-lg shadow-[#00e27a]/20 group-hover:shadow-[#00e27a]/40 transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#04150d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 17v-4M12 17V7M19 17v-6" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Hitung<span className="text-[#00e27a]">WR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/kalkulator"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00e27a]/10 border border-[#00e27a]/20 text-[#00e27a] text-sm font-semibold hover:bg-[#00e27a]/20 transition-all"
          >
            <Calculator className="w-4 h-4" />
            Hitung WR
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface-900/95 backdrop-blur-xl">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-all"
              >
                {item.href === "/kalkulator" && <Calculator className="w-4 h-4" />}
                {item.href === "/winlose" && <TrendingUp className="w-4 h-4" />}
                {item.href === "/losestreak" && <Activity className="w-4 h-4" />}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <Link
              href="/kalkulator"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#00e27a]/10 border border-[#00e27a]/20 text-[#00e27a] font-semibold"
            >
              <Calculator className="w-4 h-4" />
              Hitung WR Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
