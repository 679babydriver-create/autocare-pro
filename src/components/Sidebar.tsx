import { LayoutDashboard, Car, Wrench, Fuel, AlertCircle, DollarSign, Shield, Bell, FileText, User, Settings, LogOut, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/store'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation()
  const { logout } = useAuthStore()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Car, label: 'My Vehicles', path: '/dashboard/vehicles' },
    { icon: Wrench, label: 'Maintenance', path: '/dashboard/maintenance' },
    { icon: Fuel, label: 'Fuel Tracker', path: '/dashboard/fuel' },
    { icon: AlertCircle, label: 'Repairs', path: '/dashboard/repairs' },
    { icon: DollarSign, label: 'Expenses', path: '/dashboard/expenses' },
    { icon: Shield, label: 'Insurance', path: '/dashboard/insurance' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
    { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-16 left-0 w-64 bg-gray-800 dark:bg-gray-900 text-white overflow-y-auto transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-green rounded-lg flex items-center justify-center">
              <span className="text-lg">🚗</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">AutoCare</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-600 to-accent-green text-white'
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="h-px bg-gray-700" />

          {/* Logout */}
          <button
            onClick={() => {
              logout()
              setIsOpen(false)
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}
