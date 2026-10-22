import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const donationSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  amount: z.number().min(1000).max(50000000),
  message: z.string().max(500).optional(),
  anonymous: z.boolean().optional(),
})

// In-memory storage (untuk development; production gunakan database)
let donations: any[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = donationSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Data tidak valid", details: result.error.errors },
        { status: 400 }
      )
    }

    const donation = {
      id: `don_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      ...result.data,
      createdAt: new Date().toISOString(),
    }

    donations.unshift(donation)

    // Keep only last 100 donations
    if (donations.length > 100) {
      donations = donations.slice(0, 100)
    }

    return NextResponse.json({
      success: true,
      donation,
      message: "Terima kasih atas donasinya!",
    })
  } catch (err) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    donations: donations.slice(0, 20),
    total: donations.length,
  })
}
