import { Plus, Calendar, AlertCircle } from 'lucide-react'
import { useState } from 'react'

interface InsuranceProps {
  isDark: boolean
}

export default function Insurance({ isDark }: InsuranceProps) {
  const [insurances] = useState([
    {
      id: 1,
      company: 'State Insurance',
      policyNumber: 'SI-2024-001',
      expiryDate: '2025-06-15',
      registrationExpiry: '2025-03-20',
      roadworthyExpiry: '2025-12-31',
    },
  ])

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Insurance Management</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage insurance policies and renewal dates
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Add Policy
          </button>
        </div>

        <div className="space-y-4">
          {insurances.map((insurance) => (
            <div key={insurance.id} className="card card-dark">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">{insurance.company}</p>
                  <p className="text-sm text-gray-400">{insurance.policyNumber}</p>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-700/50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Insurance Expiry</p>
                  <p className="font-semibold">{new Date(insurance.expiryDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Registration Expiry</p>
                  <p className="font-semibold">{new Date(insurance.registrationExpiry).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Roadworthy Expiry</p>
                  <p className="font-semibold">{new Date(insurance.roadworthyExpiry).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}