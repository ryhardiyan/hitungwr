"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Clock, Heart, ChevronRight } from "lucide-react"
import { formatDistanceToNowStrict } from "date-fns"
import { id } from "date-fns/locale"

interface Donation {
  id: string
  name: string
  amount: number
  message?: string
  anonymous: boolean
  createdAt: string
}

export function RecentDonations() {
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/donations")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data.donations || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg">Donasi Terbaru</CardTitle>
        </CardHeader>
        <CardContent className="py-8 text-center text-muted-foreground">
          Memuat donasi terbaru...
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg">Donasi Terbaru</CardTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {donations.length} donasi
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {donations.length > 0 ? (
            donations.map((d) => (
              <div key={d.id} className="p-5 flex items-center justify-between hover:bg-secondary/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {d.anonymous ? (
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                        <User className="w-5 h-5" />
                      </div>
                    ) : (
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(d.name)}&background=e91e63&color=fff&size=100`}
                        alt={d.name}
                        className="w-10 h-10 rounded-full object-cover border border-border"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {d.anonymous ? "Anonim" : d.name}
                    </p>
                    {d.message && (
                      <p className="text-xs text-muted-foreground truncate max-w-xs">
                        "{d.message}"
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-saweria-pink">
                    Rp {d.amount.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNowStrict(new Date(d.createdAt), { addSuffix: true, locale: id })}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Heart className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Belum ada donasi. Jadilah yang pertama!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
