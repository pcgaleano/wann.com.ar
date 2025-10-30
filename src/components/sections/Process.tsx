'use client'

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Consulta Inicial Gratuita',
      description: 'Evaluamos tu situación actual',
      details: 'Conversamos sobre tus necesidades, analizamos tu infraestructura actual y identificamos oportunidades de mejora. Todo sin costo y sin compromiso.',
      icon: '💬'
    },
    {
      number: '2',
      title: 'Diagnóstico y Propuesta',
      description: 'Plan detallado con tiempos y costos',
      details: 'Te entrego un diagnóstico completo con recomendaciones específicas, cronograma de implementación y presupuesto transparente.',
      icon: '📋'
    },
    {
      number: '3',
      title: 'Implementación',
      description: 'Trabajo conjunto con tu equipo',
      details: 'Ejecutamos el plan paso a paso, manteniendo a tu equipo informado y capacitándolos en las nuevas herramientas y procesos.',
      icon: '⚙️'
    },
    {
      number: '4',
      title: 'Soporte Continuo',
      description: 'Seguimiento y optimización',
      details: 'No te dejo solo después de la implementación. Brindo soporte, monitoreo y optimizaciones continuas para asegurar el éxito a largo plazo.',
      icon: '🤝'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="proceso" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              🚀 Cómo Trabajamos Juntos
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
              Un proceso probado que garantiza resultados. Desde la primera consulta hasta el soporte continuo, 
              te acompaño en cada paso de la transformación tecnológica.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="group">
                  {/* Step card */}
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 relative">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-heading font-bold text-xl text-secondary-900 mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {step.description}
                    </p>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Mobile connection arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 lg:hidden">
                      <div className="text-primary">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-secondary-50 to-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-4">
                ¿Listo para Comenzar?
              </h3>
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                El primer paso es siempre una conversación. Hablemos de tu proyecto y 
                veamos cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="btn-primary text-lg px-8 py-4"
                >
                  🚀 Empezar Ahora - Consulta Gratuita
                </button>
                <div className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Proceso garantizado • Sin sorpresas • Resultados medibles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}