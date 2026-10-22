"use client"

import { Heart, Coffee, Share2, Github } from "lucide-react"
import Link from "next/link"

export function SupportButtons() {
  return (
    <div className="space-y-3">
      <Link
        href="https://saweria.co/ryhardev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-saweria-pink text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-saweria-pinkDark transition-colors shadow-lg shadow-saweria-pink/25"
      >
        <Heart className="w-4 h-4" />
        Donasi via Saweria
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/80 transition-colors"
      >
        <Coffee className="w-4 h-4" />
        Beli Kopi
      </Link>
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="https://github.com/ryhardev/hitungwr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-background border border-input px-4 py-3 rounded-xl text-sm text-foreground hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </Link>
        <button
          className="flex items-center justify-center gap-2 w-full bg-background border border-input px-4 py-3 rounded-xl text-sm text-foreground hover:bg-secondary transition-colors"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "HitungWR",
                text: "Kalkulator Win Rate MLBB",
                url: window.location.href,
              })
            }
          }}
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  )
}
