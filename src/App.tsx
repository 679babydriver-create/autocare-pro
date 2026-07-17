import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import PublicWebsite from '@/pages/PublicWebsite'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Dashboard from '@/pages/dashboard/Dashboard'
import NotFound from '@/pages/NotFound'
import { useAuthStore } from '@/store'

function App() {
  const [isDark, setIsDark] = useState(true)
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <BrowserRouter>
      <div className={isDark ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicWebsite isDark={isDark} setIsDark={setIsDark} />} />
            <Route path="/login" element={<Login isDark={isDark} setIsDark={setIsDark} />} />
            <Route path="/register" element={<Register isDark={isDark} setIsDark={setIsDark} />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard/*" element={<Dashboard isDark={isDark} setIsDark={setIsDark} />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Toaster position="top-right" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
