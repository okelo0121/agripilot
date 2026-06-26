import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgriPilot Uganda - AI-Powered Agriculture Advisory',
  description: 'Empowering smallholder farmers, youth, and women in Uganda with hyper-localized, climate-smart agronomic intelligence.',
  keywords: 'agriculture, AI, Uganda, farming, advisory, agritech',
  openGraph: {
    title: 'AgriPilot Uganda',
    description: 'AI-Powered Agriculture Advisory for Uganda',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
