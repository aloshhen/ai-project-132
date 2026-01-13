import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonialData = [
  {
    quote: 'Никогда не думал, что кофе может быть таким персонализированным! Теперь каждое утро – настоящее удовольствие.',
    name: 'Иван Петров',
    role: 'Программист'
  },
  {
    quote: 'Удобство и качество – вот что отличает этот сервис. Моментальные заказы прямо в Telegram – это будущее!',
    name: 'Елена Смирнова',
    role: 'Дизайнер'
  },
  {
    quote: 'Кофейные подписки — мой любимый способ открывать новые вкусы со всего мира.',
    name: 'Максим Иванов',
    role: 'Путешественник'
  }
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Что говорят пользователи
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные истории от людей, которые уже наслаждаются нашей экосистемой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-subtle relative"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-brand-primary/20" />
              <p className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-coffee-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials