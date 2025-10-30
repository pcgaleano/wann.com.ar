'use client'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Services */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 text-white">
                Servicios
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Migración de Sistemas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Asesoría Tecnológica
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Automatización
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Seguridad y Backups
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 text-white">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contacto@wann.com.ar"
                    className="text-secondary-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">✉️</span>
                    contacto@wann.com.ar
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5493492XXXXXX?text=Hola%20Paulo%2C%20quiero%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">📱</span>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/paulo-galeano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">💼</span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <div className="text-secondary-300 flex items-center">
                    <span className="mr-2">📍</span>
                    Rafaela, Santa Fe
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Brand */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6 text-white">
                WANN
              </h3>
              <div className="space-y-4">
                <p className="text-secondary-300 text-sm leading-relaxed">
                  Asesor tecnológico especializado en migración de sistemas, automatización y seguridad. 
                  Más de 17 años de experiencia en el sector público.
                </p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-secondary-300 hover:text-white transition-colors text-sm block text-left"
                  >
                    Política de Privacidad
                  </button>
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-secondary-300 hover:text-white transition-colors text-sm block text-left"
                  >
                    Términos de Servicio
                  </button>
                </div>

                {/* CTA in footer */}
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors text-sm"
                  >
                    📞 Consulta Gratuita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 WANN - Paulo Galeano. Todos los derechos reservados.
            </div>

            {/* Back to top + Social links */}
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <a
                href="https://www.linkedin.com/in/paulo-galeano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="bg-primary text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                aria-label="Volver arriba"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}