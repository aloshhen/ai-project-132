import { Coffee, Menu } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Coffee className="w-8 h-8 text-brand-primary mr-2" />
            <span className="text-2xl font-bold text-coffee-dark">Coffee Ecosystem</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Возможности', 'О нас', 'Сервисы', 'Отзывы'].map((item, index) => (
              <a 
                key={index} 
                href={`#${['features', 'about', 'services', 'testimonials'][index]}`}
                onClick={(e) => smoothScroll(e, ['features', 'about', 'services', 'testimonials'][index])}
                className="text-gray-700 hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-brand-primary"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Возможности', 'О нас', 'Сервисы', 'Отзывы'].map((item, index) => (
                <a 
                  key={index} 
                  href={`#${['features', 'about', 'services', 'testimonials'][index]}`}
                  onClick={(e) => {
                    smoothScroll(e, ['features', 'about', 'services', 'testimonials'][index])
                    setMobileMenuOpen(false)
                  }}
                  className="block text-gray-700 hover:text-brand-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation