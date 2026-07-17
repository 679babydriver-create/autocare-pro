import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 to-primary-900">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <p className="text-3xl font-semibold text-white mb-4">Page Not Found</p>
        <p className="text-gray-300 mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}