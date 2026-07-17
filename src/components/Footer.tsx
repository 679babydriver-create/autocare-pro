import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4 gradient-text">AutoCare Pro</h3>
            <p className="text-sm text-gray-400 mb-6">
              Smart vehicle maintenance management platform for modern car owners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-accent-green transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-accent-green transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-accent-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@autocarepro.com" className="hover:text-accent-green transition-colors">
                  support@autocarepro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-accent-green transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>123 Auto Street<br />Car City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <p>&copy; {currentYear} AutoCare Pro. All rights reserved.</p>
            </div>
            <div className="flex gap-6 md:justify-end">
              <Link to="#" className="hover:text-accent-green transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-accent-green transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-accent-green transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
