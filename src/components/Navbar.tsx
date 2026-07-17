import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
  isPublic?: boolean
}

export default function Navbar({ isDark, setIsDark, isPublic = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-soft backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-700 to-accent-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚗</span>
            </div>
            <span className="font-bold text-xl gradient-text hidden sm:inline">AutoCare Pro</span>
          </Link>

          {/* Desktop Menu */}
          {isPublic && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-green transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-green transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-green transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-green transition-colors">
                Contact
              </a>
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            {isPublic && (
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-green font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isPublic && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isPublic && isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slideIn">
            <a href="#features" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Pricing
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              Contact
            </a>
            <div className="flex space-x-3 px-4">
              <Link to="/login" className="flex-1 py-2 text-center btn-secondary text-sm">
                Login
              </Link>
              <Link to="/register" className="flex-1 py-2 text-center btn-primary text-sm">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
