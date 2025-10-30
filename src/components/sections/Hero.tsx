'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="pt-20 md:pt-32 pb-20 md:pb-32 bg-gradient-to-br from-corporate-navy via-primary-900 to-secondary-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-white order-2 lg:order-1">
              {/* Professional badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-sm font-medium">Ingeniero en Informática Certificado</span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Consultoría Tecnológica
                <span className="text-white/90 block">
                  Estratégica para
                </span>
                <span className="text-accent block">
                  Empresas & Gobierno
                </span>
              </h1>

              {/* Professional description */}
              <p className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed font-light">
                Transformación digital integral con más de 17 años de experiencia 
                en infraestructura crítica, migración de sistemas y seguridad empresarial.
              </p>

              {/* Professional stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">17+</div>
                  <div className="text-sm text-white/70">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">100K+</div>
                  <div className="text-sm text-white/70">Usuarios Gestionados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-white/70">Disponibilidad</div>
                </div>
              </div>

              {/* Professional CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all duration-200 text-lg"
                >
                  Solicitar Consulta Estratégica
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 text-lg"
                >
                  Ver Servicios
                </button>
              </div>
            </div>

            {/* Professional visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center text-white">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-700 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Paulo Galeano</h3>
                  <p className="text-white/80 mb-4">Subdirector de Sistemas</p>
                  <div className="flex items-center justify-center text-sm text-white/70">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Rafaela, Santa Fe
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-lg px-3 py-2 text-sm font-semibold shadow-lg">
                  Certificado
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-white">
                  Disponible Remotamente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}