import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

function CTA() {
  const handleCTA = () => {
    window.open('https://t.me/yourbot', '_blank')
  }

  return (
    <section id="cta" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Начните свое кофейное путешествие сейчас
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашей экосистеме и откройте для себя мир персонализированного кофе.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleCTA}
              className="flex items-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              <Smartphone className="w-6 h-6" />
              Запустить в Telegram
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA