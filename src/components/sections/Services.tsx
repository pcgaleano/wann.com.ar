'use client'

export default function Services() {
  const services = [
    {
      icon: 'migration',
      title: 'Migración y Modernización de Sistemas',
      description: 'Transformación integral de infraestructura legacy hacia arquitecturas modernas y escalables',
      price: 'Desde $150.000',
      category: 'Infraestructura',
      features: [
        'Auditoría integral de arquitectura actual',
        'Planificación estratégica de migración',
        'Ejecución con tiempo de inactividad mínimo',
        'Capacitación técnica del equipo interno',
        'Soporte y optimización post-implementación'
      ]
    },
    {
      icon: 'consulting',
      title: 'Consultoría Estratégica en Tecnología',
      description: 'Asesoramiento ejecutivo para decisiones de inversión tecnológica y planificación digital',
      price: '$50-80/hora',
      category: 'Estrategia',
      features: [
        'Evaluación de madurez tecnológica organizacional',
        'Roadmap de transformación digital',
        'Análisis de ROI y TCO de inversiones',
        'Due diligence tecnológico',
        'Gobierno de TI y mejores prácticas'
      ]
    },
    {
      icon: 'automation',
      title: 'Automatización y Optimización de Procesos',
      description: 'Desarrollo de soluciones automáticas para incrementar eficiencia operacional',
      price: '$80.000-200.000',
      category: 'Operaciones',
      features: [
        'Análisis de procesos y identificación de oportunidades',
        'Desarrollo de scripts y workflows personalizados',
        'Integración entre sistemas heterogéneos',
        'Documentación técnica y operativa',
        'Transferencia de conocimiento y capacitación'
      ]
    },
    {
      icon: 'security',
      title: 'Seguridad Empresarial y Continuidad',
      description: 'Implementación de marcos de seguridad y planes de recuperación ante desastres',
      price: 'Desde $100.000',
      category: 'Seguridad',
      features: [
        'Assessment de vulnerabilidades y riesgos',
        'Diseño e implementación de políticas de seguridad',
        'Soluciones de backup y disaster recovery',
        'Monitoreo continuo y alertas proactivas',
        'Plan de respuesta a incidentes'
      ]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getServiceIcon = (iconType: string) => {
    const iconMap = {
      migration: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
        </svg>
      ),
      consulting: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      automation: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      security: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
    return iconMap[iconType as keyof typeof iconMap] || iconMap.consulting
  }

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Servicios Profesionales
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              Soluciones Tecnológicas Integrales
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
              Servicios especializados en transformación digital, optimización de infraestructura 
              y consultoría estratégica para empresas y organismos públicos.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/20 group">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                        {service.category}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-secondary-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center bg-accent-50 text-accent-800 px-4 py-2 rounded-lg text-sm font-semibold">
                    Inversión: {service.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-secondary-700">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-secondary-50 text-secondary-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 border border-secondary-200 hover:border-primary"
                >
                  Solicitar Información
                </button>
              </div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="bg-gradient-to-br from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Consultoría Estratégica Personalizada
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                ¿Necesita asesoramiento para definir la estrategia tecnológica de su organización? 
                Programemos una sesión de consultoría para evaluar sus necesidades específicas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-colors text-lg"
                >
                  Agendar Consulta Estratégica
                </button>
                <div className="flex items-center text-white/80 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Primera sesión sin compromiso
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}