import { motion } from 'framer-motion'
import { Coffee, Heart, Zap, Award } from 'lucide-react'

const featureData = [
  {
    icon: Coffee,
    title: 'Персонализация',
    description: 'Уникальные рекомендации кофе на основе ваших предпочтений и вкусовых профилей.'
  },
  {
    icon: Heart,
    title: 'Loyalty Program',
    description: 'Накапливайте баллы, получайте скидки и эксклюзивные предложения в каждой чашке.'
  },
  {
    icon: Zap,
    title: 'Мгновенный Заказ',
    description: 'Быстрый и интуитивный заказ прямо в мессенджере без дополнительных приложений.'
  },
  {
    icon: Award,
    title: 'Качество',
    description: 'Отборные сорта от лучших обжарщиков с гарантией свежести и вкуса.'
  }
]

function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Почему выбирают нашу экосистему
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали不только приложение, но целую экосистему, которая делает каждую чашку кофе особенной.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 text-center shadow-subtle hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features