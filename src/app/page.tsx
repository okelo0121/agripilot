import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-forest-50 via-white to-earth-50">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
