'use client'

export default function WhyChoose() {
  const benefits = [
    {
      icon: 'experience',
      title: 'Experiencia Ejecutiva Demostrada',
      description: '17+ años liderando transformaciones tecnológicas en el sector público',
      highlight: 'Track record comprobado gestionando infraestructura crítica'
    },
    {
      icon: 'approach',
      title: 'Metodología Estratégica',
      description: 'Enfoque sistemático con resultados medibles y sostenibles',
      highlight: 'Planificación rigurosa y ejecución controlada'
    },
    {
      icon: 'availability',
      title: 'Compromiso de Servicio',
      description: 'Respuesta ejecutiva en menos de 24 horas',
      highlight: 'Disponibilidad inmediata para situaciones críticas'
    },
    {
      icon: 'consultation',
      title: 'Evaluación Estratégica Sin Compromiso',
      description: 'Assessment inicial completo de su situación tecnológica',
      highlight: 'Análisis profesional antes de cualquier inversión'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getBenefitIcon = (iconType: string) => {
    const iconMap = {
      experience: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      approach: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
        </svg>
      ),
      availability: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      consultation: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    }
    return iconMap[iconType as keyof typeof iconMap] || iconMap.experience
  }

  return (
    <section id="por-que-elegir" className="section-padding bg-corporate-platinum">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Diferenciadores Clave
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              Ventajas Competitivas
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
              Combinamos experiencia ejecutiva, metodología probada y compromiso de servicio 
              para entregar soluciones tecnológicas de clase empresarial.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white border border-secondary-200 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h3 className="font-heading font-bold text-xl text-secondary-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm text-primary font-medium bg-primary/10 rounded-lg px-4 py-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Evaluación Estratégica Sin Compromiso
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Iniciemos con una sesión de diagnóstico para evaluar su situación tecnológica actual 
                y identificar oportunidades de optimización.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors text-lg"
                >
                  Agendar Evaluación Inicial
                </button>
                <div className="flex items-center text-white/80 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sesión inicial • Sin compromiso • Respuesta ejecutiva
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}