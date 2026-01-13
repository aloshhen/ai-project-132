import { motion } from 'framer-motion'
import { ShoppingCart, Truck, Coffee, Gift } from 'lucide-react'

const serviceData = [
  {
    icon: ShoppingCart,
    title: 'Онлайн Магазин',
    description: 'Широкий выбор кофейных зерен, оборудования и аксессуаров.'
  },
  {
    icon: Truck,
    title: 'Быстрая Доставка',
    description: 'Доставка свежеобжаренного кофе в день заказа.'
  },
  {
    icon: Coffee,
    title: 'Кофейные Подписки',
    description: 'Регулярные поставки уникальных сортов со всего мира.'
  },
  {
    icon: Gift,
    title: 'Подарочные Наборы',
    description: 'Идеальные подарки для настоящих кофейных энтузиастов.'
  }
]

function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Наши Сервисы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для истинных ценителей кофе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 text-center shadow-subtle hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services