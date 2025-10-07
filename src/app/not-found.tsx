import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found | eVaLaunche',
  description: 'The page you are looking for could not be found. Explore our software development services, AI/ML solutions, and digital marketing expertise.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or doesn&apos;t exist.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <div className="text-center">
            <Link
              href="/#services"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <Search className="h-5 w-5" />
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Need help? Contact us at <a href="mailto:support@evalaunche.com" className="text-primary-600 hover:underline">support@evalaunche.com</a></p>
        </div>
      </div>
    </div>
  )
}
