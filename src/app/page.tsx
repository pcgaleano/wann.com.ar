import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyChoose from '@/components/sections/WhyChoose'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}