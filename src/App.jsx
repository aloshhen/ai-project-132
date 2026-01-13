import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App