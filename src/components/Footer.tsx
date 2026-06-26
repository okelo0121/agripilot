import { Leaf } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-earth-300" />
              <span className="text-2xl font-bold text-white">AgriPilot</span>
            </div>
            <p className="text-forest-200 text-sm">
              AI-powered agriculture advisory for Uganda
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-forest-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-forest-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-forest-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-forest-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-forest-200 text-sm">
          <p>
            Built by <span className="font-semibold text-earth-300">Team Amana</span> for the Mercy Corps AgriFin Challenge
          </p>
          <p className="mt-4 sm:mt-0">
            © {currentYear} AgriPilot Uganda. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center sm:justify-end mt-6">
          <a href="#" className="text-forest-300 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-forest-300 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-forest-300 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
