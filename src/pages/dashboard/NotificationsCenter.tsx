import { Bell, Check, X } from 'lucide-react'
import { useState } from 'react'

interface NotificationsCenterProps {
  isDark: boolean
}

export default function NotificationsCenter({ isDark }: NotificationsCenterProps) {
  const [notifications] = useState([
    {
      id: 1,
      type: 'oil_change',
      message: 'Oil change due in 2,500 km',
      dueDate: '2024-08-15',
      completed: false,
    },
    {
      id: 2,
      type: 'insurance_expiry',
      message: 'Insurance policy expiring in 15 days',
      dueDate: '2024-08-01',
      completed: false,
    },
    {
      id: 3,
      type: 'registration',
      message: 'Vehicle registration renews in 30 days',
      dueDate: '2024-08-20',
      completed: false,
    },
  ])

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with important vehicle maintenance alerts
          </p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="card card-dark flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-green flex items-center justify-center flex-shrink-0 mt-1">
                  <Bell size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{notification.message}</p>
                  <p className="text-sm text-gray-400">Due: {new Date(notification.dueDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary p-2 text-accent-green">
                  <Check size={20} />
                </button>
                <button className="btn-secondary p-2 text-accent-red hover:bg-accent-red/10">
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}