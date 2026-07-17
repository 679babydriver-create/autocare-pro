import { useState } from 'react'
import { Menu, TrendingUp, AlertCircle, Zap } from 'lucide-react'
import Sidebar from '@/components/Sidebar'

interface DashboardHomeProps {
  isDark: boolean
}

export default function DashboardHome({ isDark }: DashboardHomeProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex w-full">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Here's your vehicle maintenance overview
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Vehicles */}
            <div className="card card-dark">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Total Vehicles</h3>
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🚗</span>
                </div>
              </div>
              <p className="text-3xl font-bold">2</p>
              <p className="text-xs text-gray-500 mt-2">Active vehicles</p>
            </div>

            {/* Current Mileage */}
            <div className="card card-dark">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Current Mileage</h3>
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
              </div>
              <p className="text-3xl font-bold">45,230</p>
              <p className="text-xs text-gray-500 mt-2">km total</p>
            </div>

            {/* Next Service */}
            <div className="card card-dark">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Next Service</h3>
                <div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚙️</span>
                </div>
              </div>
              <p className="text-3xl font-bold">2,500</p>
              <p className="text-xs text-gray-500 mt-2">km remaining</p>
            </div>

            {/* Monthly Expenses */}
            <div className="card card-dark">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Monthly Expenses</h3>
                <div className="w-10 h-10 bg-accent-red/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
              </div>
              <p className="text-3xl font-bold">$450</p>
              <p className="text-xs text-gray-500 mt-2">Current month</p>
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Active Alerts */}
            <div className="card card-dark">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-accent-orange" />
                <h3 className="text-lg font-semibold">Active Alerts</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-700/50 rounded-lg border-l-4 border-accent-orange">
                  <p className="font-medium text-sm">Oil Change Due</p>
                  <p className="text-xs text-gray-400 mt-1">In approximately 2,500 km</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg border-l-4 border-accent-green">
                  <p className="font-medium text-sm">Insurance Expiring</p>
                  <p className="text-xs text-gray-400 mt-1">In 15 days</p>
                </div>
              </div>
            </div>

            {/* Predictive Maintenance */}
            <div className="card card-dark">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-accent-green" />
                <h3 className="text-lg font-semibold">Predictive Maintenance</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">Brake Inspection</p>
                    <span className="badge badge-warning text-xs">In 4 weeks</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1">
                    <div className="bg-accent-orange h-1 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">Battery Check</p>
                    <span className="badge badge-info text-xs">In 8 weeks</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card card-dark">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="btn-secondary py-3 text-center hover:scale-105 transition-transform">
                ➕ Add Service
              </button>
              <button className="btn-secondary py-3 text-center hover:scale-105 transition-transform">
                ⛽ Log Fuel
              </button>
              <button className="btn-secondary py-3 text-center hover:scale-105 transition-transform">
                🔧 Record Repair
              </button>
              <button className="btn-secondary py-3 text-center hover:scale-105 transition-transform">
                📋 Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
