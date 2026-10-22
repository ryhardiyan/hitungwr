"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Heart, Send, Clock, User, Tag } from "lucide-react"
import { z } from "zod"

const donationSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").optional(),
  email: z.string().email("Email tidak valid").optional(),
  amount: z.coerce.number().min(1000, "Minimal donasi Rp 1.000").max(50000000, "Maksimal Rp 50.000.000"),
  message: z.string().max(500, "Pesan maksimal 500 karakter").optional(),
  anonymous: z.boolean().optional(),
})

interface DonationCardProps {
  onSuccess?: (data: any) => void
}

export function DonationCard({ onSuccess }: DonationCardProps = {}) {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<{
    name?: string
    email?: string
    amount: number
    message?: string
    anonymous?: boolean
  } | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setErrors({})

      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name") || undefined,
        email: formData.get("email") || undefined,
        amount: parseInt(formData.get("amount") as string) || 0,
        message: formData.get("message") || undefined,
        anonymous: formData.get("anonymous") === "on",
      }

      const result = donationSchema.safeParse(data)
      if (!result.success) {
        const fieldErrors: Record<string, string> = {}
        result.error.errors.forEach((err) => {
          fieldErrors[err.path[0] as string] = err.message
        })
        setErrors(fieldErrors)
        setIsLoading(false)
        return
      }

      try {
        const res = await fetch("/api/donate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result.data),
        })

        if (!res.ok) throw new Error("Gagal mengirim donasi")

        const json = await res.json()
        setFormData(result.data)
        setSubmitted(true)
        onSuccess?.(json)
      } catch (err) {
        console.error(err)
        setErrors({ _form: "Gagal mengirim donasi. Coba lagi nanti." })
      } finally {
        setIsLoading(false)
      }
    },
    [onSuccess]
  )

  if (submitted && formData) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="py-10 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Terima Kasih!</h3>
          <p className="text-muted-foreground mb-6">
            Donasimu sebesar <span className="font-bold text-saweria-pink">Rp {formData.amount.toLocaleString("id-ID")}</span> telah diterima.
          </p>
          {formData.message && (
            <div className="bg-saweria-light/50 p-4 rounded-xl text-left mb-6">
              <p className="text-sm font-medium mb-1">Pesannya:</p>
              <p className="text-sm text-saweria-pinkDark italic">"{formData.message}"</p>
            </div>
          )}
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Donasi Lagi
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Form Donasi</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama (opsional)</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nama kamu"
                defaultValue={formData?.name ?? ""}
                className={cn("border-input", errors.name && "border-destructive")}
              />
              {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (opsional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@contoh.com"
                defaultValue={formData?.email ?? ""}
                className={cn("border-input", errors.email && "border-destructive")}
              />
              {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Jumlah Donasi</Label>
              <span className="text-xs text-muted-foreground">Minimal Rp 1.000</span>
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="amount"
                type="number"
                placeholder="10000"
                defaultValue={String(formData?.amount ?? "")}
                className={cn("pl-10 border-input", errors.amount && "border-destructive")}
              />
              {errors.amount && <span className="text-xs text-destructive">{errors.amount}</span>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pesan untuk kreator (opsional)</Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="Tulis pesan singkat..."
              defaultValue={formData?.message ?? ""}
              className={cn("border-input", errors.message && "border-destructive")}
              maxLength={500}
            />
            {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="anonymous"
              type="checkbox"
              defaultChecked={formData?.anonymous ?? false}
              className="rounded border-input bg-background text-saweria-pink focus:ring-saweria-pink"
            />
            <Label htmlFor="anonymous" className="text-sm cursor-pointer select-none">
              Donasikan secara anonim
            </Label>
          </div>

          {errors._form && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
              {errors._form}
            </div>
          )}

          <Button type="submit" className="w-full bg-saweria-pink text-white hover:bg-saweria-pinkDark" disabled={isLoading}>
            {isLoading ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Kirim Donasi
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
