import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-green/20 dark:bg-accent-green/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Manage Your Vehicle
              <br />
              <span className="gradient-text">Like a Professional</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Track servicing, repairs, fuel usage, insurance, expenses, and maintenance reminders in one intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-3xl font-bold gradient-text">50K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">150K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vehicles Tracked</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">4.9★</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Dashboard Cards */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Card */}
              <div className="card card-dark w-80 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Total Mileage</p>
                    <p className="text-3xl font-bold">45,230 km</p>
                  </div>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent-green to-primary-500 h-2 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 right-5 card card-dark w-64 shadow-lg transform hover:scale-105 transition-transform animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚙️</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Next Service</p>
                    <p className="font-semibold">In 2,500 km</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-5 card card-dark w-64 shadow-lg transform hover:scale-105 transition-transform animate-float animation-delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⛽</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Fuel Economy</p>
                    <p className="font-semibold">8.5 km/L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
