import { useState } from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

interface VehicleManagementProps {
  isDark: boolean
}

export default function VehicleManagement({ isDark }: VehicleManagementProps) {
  const [vehicles] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      registrationNumber: 'ABC-1234',
      vin: 'VIN123456789',
      engine: '2.5L 4-Cyl',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      currentMileage: 45230,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'CR-V',
      year: 2021,
      registrationNumber: 'XYZ-5678',
      vin: 'VIN987654321',
      engine: '1.5L Turbo',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      currentMileage: 32150,
    },
  ])

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Vehicles</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and track all your vehicles
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Add Vehicle
          </button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="card card-dark hover:shadow-xl transition-all">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-sm text-gray-400">{vehicle.registrationNumber}</p>
                </div>
                <div className="text-4xl">🚗</div>
              </div>

              {/* Info Grid */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Engine</span>
                  <span className="font-medium">{vehicle.engine}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Transmission</span>
                  <span className="font-medium">{vehicle.transmission}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Fuel Type</span>
                  <span className="font-medium">{vehicle.fuelType}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Current Mileage</span>
                  <span className="font-medium">{vehicle.currentMileage.toLocaleString()} km</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-700 mb-4" />

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <Eye size={18} />
                  View
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <Edit size={18} />
                  Edit
                </button>
                <button className="btn-secondary px-4 flex items-center justify-center text-accent-red hover:bg-accent-red/10">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
