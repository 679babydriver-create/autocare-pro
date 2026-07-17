import { ArrowRight } from 'lucide-react'
import { HOW_IT_WORKS } from '@/utils/constants'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={index} className="animate-slideIn" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-6 md:gap-12 items-start">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-primary-700 to-accent-green">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:flex flex-col items-center justify-between h-32">
                    <ArrowRight size={24} className="text-gray-300 dark:text-gray-600 transform rotate-90" />
                  </div>
                )}
              </div>

              {/* Divider */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="md:hidden ml-8 h-8 border-l-2 border-gray-300 dark:border-gray-600 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
