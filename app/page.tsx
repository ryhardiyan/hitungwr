import Link from 'next/link'
import { ArrowRight, MessageCircle, CreditCard, Heart, Users, Coffee } from 'lucide-react'
import { DonationCard } from '@/components/donation/donation-card'
import { RecentDonations } from '@/components/donation/recent-donations'
import { SupportButtons } from '@/components/donation/support-buttons'

export default function HomePage() {
  return (
    <main className="flex-1">
      <nav className="fixed w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-saweria-pink">
            <CreditCard className="h-6 w-6" />
            <span className="font-bold">HitungWR</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-foreground hover:text-saweria-pink transition-colors">
              Beranda
            </Link>
            <Link href="#donasi" className="text-foreground hover:text-saweria-pink transition-colors">
              Donasi
            </Link>
            <Link href="#dukungan" className="text-foreground hover:text-saweria-pink transition-colors">
              Dukungan
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Creator Profile Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <img
                      src="https://ui-avatars.com/api/?name=HitungWR&background=e91e63&color=fff&size=256"
                      alt="HitungWR"
                      className="w-32 h-32 rounded-full object-cover border-4 border-saweria-pink/20 shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                      <span className="text-[10px] text-white font-bold">●</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight">HitungWR</h1>
                  <p className="text-muted-foreground text-sm">
                    Kalkulator Win Rate MLBB · Dukungan komunitas
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="https://github.com/ryhardev"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-saweria-pink hover:bg-saweria-pink hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <a
                      href="#donasi"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-saweria-pink hover:bg-saweria-pink hover:text-white transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-xl text-sm">
                    <span className="font-medium">Total Terkumpul</span>
                    <span className="font-bold text-saweria-pink">Rp 0</span>
                  </div>
                  <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-xl text-sm">
                    <span className="font-medium">Jumlah Donatur</span>
                    <span className="font-bold">0 orang</span>
                  </div>
                </div>

                <SupportButtons />
              </div>
            </div>

            {/* Donation Form Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="card max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold">Beri Dukungan</h2>
                    <p className="text-muted-foreground text-sm">
                      Donasimu membantu pengembangan HitungWR
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">Aktif</span>
                  </div>
                </div>

                <DonationCard />
              </div>

              <RecentDonations />
            </div>

          </div>
        </div>
      </section>

      <section id="dukungan" className="py-16 border-t bg-secondary/30 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-8">Cara Lain Mendukung</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-input">
              <Coffee className="w-12 h-12 text-saweria-pink mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Beli Kopi</h3>
              <p className="text-sm text-muted-foreground">
                Belikan kreator secangkir kopi untuk semangat ngoding.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-input">
              <Users className="w-12 h-12 text-saweria-pink mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Share ke Teman</h3>
              <p className="text-sm text-muted-foreground">
                Bantu menyebarkan HitungWR ke komunitas MLBB.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-input">
              <MessageCircle className="w-12 h-12 text-saweria-pink mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Berikan Masukan</h3>
              <p className="text-sm text-muted-foreground">
                Sampaikan saran atau laporan bug untuk perbaikan fitur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
