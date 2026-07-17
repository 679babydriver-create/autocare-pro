import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store'
import Navbar from '@/components/Navbar'
import DashboardHome from './dashboard/DashboardHome'
import VehicleManagement from './dashboard/VehicleManagement'
import MaintenanceModule from './dashboard/MaintenanceModule'
import FuelTracker from './dashboard/FuelTracker'
import Repairs from './dashboard/Repairs'
import ExpenseManager from './dashboard/ExpenseManager'
import Insurance from './dashboard/Insurance'
import NotificationsCenter from './dashboard/NotificationsCenter'
import Reports from './dashboard/Reports'
import Profile from './dashboard/Profile'
import AdminDashboard from './dashboard/AdminDashboard'

interface DashboardProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function Dashboard({ isDark, setIsDark }: DashboardProps) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} isPublic={false} />
      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar will be added in DashboardHome */}
        <Routes>
          <Route path="/" element={<DashboardHome isDark={isDark} />} />
          <Route path="/vehicles" element={<VehicleManagement isDark={isDark} />} />
          <Route path="/maintenance" element={<MaintenanceModule isDark={isDark} />} />
          <Route path="/fuel" element={<FuelTracker isDark={isDark} />} />
          <Route path="/repairs" element={<Repairs isDark={isDark} />} />
          <Route path="/expenses" element={<ExpenseManager isDark={isDark} />} />
          <Route path="/insurance" element={<Insurance isDark={isDark} />} />
          <Route path="/notifications" element={<NotificationsCenter isDark={isDark} />} />
          <Route path="/reports" element={<Reports isDark={isDark} />} />
          <Route path="/profile" element={<Profile isDark={isDark} />} />
          <Route path="/admin" element={<AdminDashboard isDark={isDark} />} />
        </Routes>
      </div>
    </>
  )
}
