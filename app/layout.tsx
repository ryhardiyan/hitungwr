import './globals.css'

export const metadata = {
  title: 'HitungWR | Donasi & Dukungan',
  description: 'Dukung HitungWR dengan donasi. Platform donasi ala Saweria untuk kreator MLBB.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" class="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body class="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
