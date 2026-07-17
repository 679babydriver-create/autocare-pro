import { Plus, FileText } from 'lucide-react'
import { useState } from 'react'

interface RepairsProps {
  isDark: boolean
}

export default function Repairs({ isDark }: RepairsProps) {
  const [repairs] = useState([
    {
      id: 1,
      repairName: 'Brake Pad Replacement',
      date: '2024-06-10',
      garage: 'AutoCare Center',
      labourCost: 120,
      partsCost: 280,
      status: 'completed',
    },
  ])

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Repairs</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track all vehicle repairs and maintenance
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Record Repair
          </button>
        </div>

        <div className="space-y-4">
          {repairs.map((repair) => (
            <div key={repair.id} className="card card-dark">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🔧</span>
                    <h3 className="text-xl font-bold">{repair.repairName}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
                    <div>
                      <p className="text-xs">Date</p>
                      <p className="font-medium">{new Date(repair.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs">Garage</p>
                      <p className="font-medium">{repair.garage}</p>
                    </div>
                    <div>
                      <p className="text-xs">Total Cost</p>
                      <p className="font-medium text-accent-orange">${repair.labourCost + repair.partsCost}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="text-gray-500">Labour: ${repair.labourCost}</span>
                    <span className="text-gray-500">Parts: ${repair.partsCost}</span>
                  </div>
                </div>
                <button className="btn-secondary p-2">
                  <FileText size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}