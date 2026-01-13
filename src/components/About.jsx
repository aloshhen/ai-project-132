import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Как это работает?
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Наша экосистема объединяет технологии, удобство и качество кофе в одном решении.
          </p>
          
          <div className="space-y-4">
            {[
              'Регистрация через Telegram',
              'Создание персонального профиля вкуса',
              'Моментные заказы с доставкой',
              'Накопление и использование бонусов'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-brand-primary" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1511920170033-f8a7dc4d5498?w=800&q=80"
            alt="Coffee Ecosystem Process"
            className="rounded-2xl shadow-elegant max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About