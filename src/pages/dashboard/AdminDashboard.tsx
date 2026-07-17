import { BarChart3, Users, Car, AlertCircle } from 'lucide-react'

interface AdminDashboardProps {
  isDark: boolean
}

export default function AdminDashboard({ isDark }: AdminDashboardProps) {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500/20' },
    { label: 'Vehicles Tracked', value: '2,847', icon: Car, color: 'bg-green-500/20' },
    { label: 'Active Alerts', value: '156', icon: AlertCircle, color: 'bg-orange-500/20' },
    { label: 'System Health', value: '99.8%', icon: BarChart3, color: 'bg-purple-500/20' },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            System overview and statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="card card-dark">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">{stat.label}</h3>
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="card card-dark">
          <h2 className="text-2xl font-bold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <span>Database Connection</span>
              <span className="badge badge-success">Healthy</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <span>API Server</span>
              <span className="badge badge-success">Online</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <span>Storage</span>
              <span className="badge badge-success">Normal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}