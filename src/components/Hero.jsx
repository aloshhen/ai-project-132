import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

function Hero() {
  const handleCTA = () => {
    window.open('https://t.me/yourbot', '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ваша Персональная Кофейная Экосистема
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Инновационное приложение, которое трансформирует ваш опыт потребления кофе через технологии и персонализацию.
          </p>
          
          <div className="flex space-x-4">
            <button 
              onClick={handleCTA}
              className="flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Smartphone className="w-5 h-5" />
              Открыть в Telegram
            </button>
            <a 
              href="#features"
              className="flex items-center gap-2 text-white border border-white/50 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Узнать больше
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
            alt="Coffee App Interface"
            className="rounded-2xl shadow-elegant max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero