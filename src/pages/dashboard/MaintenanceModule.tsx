import { Plus, Edit, Trash2, Calendar } from 'lucide-react'
import { useState } from 'react'

interface MaintenanceModuleProps {
  isDark: boolean
}

export default function MaintenanceModule({ isDark }: MaintenanceModuleProps) {
  const [services] = useState([
    {
      id: 1,
      vehicleId: 1,
      serviceName: 'Oil Change',
      date: '2024-06-15',
      mileage: 40000,
      cost: 150,
      garage: 'Auto Care Center',
      notes: 'Regular oil change with filter replacement',
    },
    {
      id: 2,
      vehicleId: 1,
      serviceName: 'Tire Rotation',
      date: '2024-05-20',
      mileage: 38000,
      cost: 80,
      garage: 'Tire Plus',
      notes: 'Rotated all four tires',
    },
  ])

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Maintenance Schedule</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track and manage vehicle maintenance
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Add Service
          </button>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="card card-dark">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⚙️</span>
                    <h3 className="text-xl font-bold">{service.serviceName}</h3>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                    <div>
                      <p className="text-xs">Date</p>
                      <p className="font-medium">{new Date(service.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs">Mileage</p>
                      <p className="font-medium">{service.mileage.toLocaleString()} km</p>
                    </div>
                    <div>
                      <p className="text-xs">Garage</p>
                      <p className="font-medium">{service.garage}</p>
                    </div>
                    <div>
                      <p className="text-xs">Cost</p>
                      <p className="font-medium">${service.cost}</p>
                    </div>
                  </div>
                  {service.notes && (
                    <p className="text-sm text-gray-500 italic">{service.notes}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="btn-secondary p-2">
                    <Edit size={18} />
                  </button>
                  <button className="btn-secondary p-2 text-accent-red hover:bg-accent-red/10">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}