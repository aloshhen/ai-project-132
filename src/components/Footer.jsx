import { Coffee } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <Coffee className="w-8 h-8 text-brand-primary mr-2" />
            <span className="text-2xl font-bold">Coffee Ecosystem</span>
          </div>
          <p className="text-gray-400">
            Инновационная платформа для настоящих кофейных энтузиастов.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Сервисы</h4>
          <ul className="space-y-2">
            {['Онлайн Магазин', 'Доставка', 'Подписки', 'Подарки'].map((service, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">О Компании</h4>
          <ul className="space-y-2">
            {['О нас', 'Блог', 'Вакансии', 'Контакты'].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Социальные Сети</h4>
          <div className="flex space-x-4">
            {['Telegram', 'Instagram', 'Facebook'].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-400 hover:text-white transition"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-gray-500">
          © 2024 Coffee Ecosystem. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer