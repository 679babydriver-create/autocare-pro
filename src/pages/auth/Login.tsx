import { useState } from 'react'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store'
import toast from 'react-hot-toast'
import Navbar from '@/components/Navbar'

interface LoginProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function Login({ isDark, setIsDark }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      if (email && password) {
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: email,
          preferredUnits: 'km' as const,
          preferredCurrency: 'USD',
          createdAt: new Date().toISOString(),
        }
        setUser(mockUser)
        toast.success('Login successful!')
        navigate('/dashboard')
      } else {
        toast.error('Please fill in all fields')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} isPublic={false} />
      <div className="min-h-screen bg-gradient-to-br from-primary-700 via-primary-600 to-accent-green flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 animate-slideIn">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-700 to-accent-green rounded-lg flex items-center justify-center">
                <span className="text-3xl">🚗</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Login to your AutoCare Pro account
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 text-gray-400" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Logging in...' : (
                  <>
                    Sign In
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}