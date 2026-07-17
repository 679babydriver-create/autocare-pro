import { Download, BarChart3 } from 'lucide-react'

interface ReportsProps {
  isDark: boolean
}

export default function Reports({ isDark }: ReportsProps) {
  const reports = [
    { name: 'Monthly Expense Report', description: 'Detailed breakdown of all expenses', icon: '📊' },
    { name: 'Fuel Economy Report', description: 'Track fuel consumption trends', icon: '⛽' },
    { name: 'Maintenance History', description: 'Complete service and repair history', icon: '⚙️' },
    { name: 'Annual Summary', description: 'Year-over-year comparison', icon: '📈' },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Generate and download detailed reports
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="card card-dark hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{report.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{report.name}</h3>
              <p className="text-gray-400 mb-6">{report.description}</p>
              <button className="btn-primary flex items-center justify-center gap-2 w-full">
                <Download size={20} />
                Generate Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}