import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/utils/constants'

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about AutoCare Pro
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="card card-dark overflow-hidden animate-slideIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full flex items-center justify-between py-4 px-6 hover:bg-gray-700/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-lg font-semibold text-left">{item.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    expanded === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {expanded === index && (
                <div className="px-6 pb-4 border-t border-gray-700 animate-slideIn">
                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
