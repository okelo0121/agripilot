'use client'

import { Database, MessageSquare, Sprout } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'GraphRAG Intelligence',
      description: 'Powered by Neo4j and Gemini API to cross-reference soil, crop, and weather data for precision farming insights.',
      color: 'forest',
    },
    {
      icon: MessageSquare,
      title: 'Last-Mile SMS Delivery',
      description: 'Instant, budget-conscious advice delivered in Luganda and Swahili, reaching farmers where they are.',
      color: 'earth',
    },
    {
      icon: Sprout,
      title: 'SACCO Integration',
      description: 'Driving financial inclusion and cooperative savings for sustainable agricultural development.',
      color: 'forest',
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-forest-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology designed specifically for Uganda's agricultural landscape
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClass =
              feature.color === 'forest'
                ? 'bg-forest-50 border-forest-200 text-forest-700 hover:bg-forest-100'
                : 'bg-earth-50 border-earth-200 text-earth-700 hover:bg-earth-100'

            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${colorClass} transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-xl ${feature.color === 'forest' ? 'bg-forest-100' : 'bg-earth-100'} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Ready to transform agriculture in Uganda?
          </p>
          <button className="px-8 py-3 bg-forest-700 text-white font-semibold rounded-lg hover:bg-forest-800 transition-colors duration-300 shadow-lg">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
