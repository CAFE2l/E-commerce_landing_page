import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CAFÉ STORE — Sua Identidade Digital",
  description:
    "Overlays, assets, produtos digitais e uma experiência visual criada para creators modernos.",
  openGraph: {
    title: "CAFÉ STORE",
    description: "Tudo para sua identidade digital.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
