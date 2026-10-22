import Link from "next/link"
import { ArrowLeft, Heart, Gift, Rocket, Sparkles } from "lucide-react"
import { DonationCard } from "@/components/donation/donation-card"

export default function DonatePage() {
  return (
    <main className="flex-1 py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-saweria-pink hover:bg-saweria-pink/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Beri Dukungan</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-input shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-saweria-pink" />
                <h3 className="font-semibold text-lg">Tentang Donasi</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-saweria-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Donasi yang diberikan</p>
                    <p className="text-xs text-slate-500">Digunakan untuk biaya server dan pengembangan fitur baru.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="w-4 h-4 text-saweria-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tanpa komisi platform</p>
                    <p className="text-xs text-slate-500">100% donasi langsung sampai ke kreator.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-saweria-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Pesan pribadi</p>
                    <p className="text-xs text-slate-500">Sampaikan dukungan dan semangat lewat pesan.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Statistik</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total terkumpul</span>
                  <span className="font-medium">Rp 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jumlah donatur</span>
                  <span className="font-medium">0 orang</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Donasi terbesar</span>
                  <span className="font-medium">-</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <DonationCard />
          </div>
        </div>
      </div>
    </main>
  )
}
