'use client'

import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-earth-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 bg-forest-100 rounded-full border border-forest-200 mb-6">
          <span className="text-sm font-medium text-forest-800">🚀 Coming Soon</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-forest-700 via-forest-600 to-forest-800 bg-clip-text text-transparent">
            AgriPilot Uganda:
          </span>
          <br />
          <span className="bg-gradient-to-r from-forest-600 to-earth-600 bg-clip-text text-transparent">
            AI-Powered Agriculture Advisory
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Empowering smallholder farmers, youth, and women in Uganda with hyper-localized, climate-smart agronomic intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#pitch-deck"
            className="group relative px-8 py-4 bg-forest-700 text-white font-semibold rounded-lg hover:bg-forest-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View Pitch Deck
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demo-video"
            className="px-8 py-4 border-2 border-forest-600 text-forest-700 font-semibold rounded-lg hover:bg-forest-50 transition-all duration-300 flex items-center gap-2"
          >
            Watch Demo Video
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Placeholder Info */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>📌 Pitch Deck and Demo links will be activated soon</p>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero
