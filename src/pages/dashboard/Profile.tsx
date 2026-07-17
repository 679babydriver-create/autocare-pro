import { Save, Edit } from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '@/store'

interface ProfileProps {
  isDark: boolean
}

export default function Profile({ isDark }: ProfileProps) {
  const { user } = useAuthStore()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  })

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 md:p-8 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your account information
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-primary flex items-center gap-2"
          >
            <Edit size={20} />
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {/* Profile Card */}
        <div className="card card-dark mb-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-600 to-accent-green flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
            <div>
              <p className="text-2xl font-bold">{user?.name}</p>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg disabled:opacity-50"
                />
              </div>
            </div>

            {isEditing && (
              <button type="submit" className="btn-primary flex items-center gap-2">
                <Save size={20} />
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}