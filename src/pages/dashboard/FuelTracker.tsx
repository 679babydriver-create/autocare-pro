import { Plus, TrendingDown } from 'lucide-react'
import { useState } from 'react'

interface FuelTrackerProps {
  isDark: boolean
}

export default function FuelTracker({ isDark }: FuelTrackerProps) {
  const [fuelRecords] = useState([
    {
      id: 1,
      date: '2024-07-15',
      station: 'Shell Station',
      odometer: 45230,
      litres: 50,
      pricePerLitre: 1.85,
      totalCost: 92.5,
    },
    {
      id: 2,
      date: '2024-07-10',
      station: 'BP Station',
      odometer: 44800,
      litres: 48,
      pricePerLitre: 1.83,
      totalCost: 87.84,
    },
  ])

  const avgFuelEconomy = 8.5

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Fuel Tracker</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor fuel consumption and economy
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Log Fuel
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card card-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">Average Fuel Economy</h3>
              <span className="text-2xl">⛽</span>
            </div>
            <p className="text-3xl font-bold">{avgFuelEconomy} km/L</p>
          </div>
          <div className="card card-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">Total Fuel Cost</h3>
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-3xl font-bold">$180.34</p>
          </div>
          <div className="card card-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">Total Fuel Used</h3>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold">98L</p>
          </div>
        </div>

        {/* Records */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Recent Fuel Records</h2>
          {fuelRecords.map((record) => (
            <div key={record.id} className="card card-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{record.station}</p>
                  <p className="text-sm text-gray-400">{new Date(record.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{record.litres}L</p>
                  <p className="text-sm text-gray-400">${record.totalCost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}