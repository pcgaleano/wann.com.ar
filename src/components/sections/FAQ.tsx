'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Trabajás de forma remota?',
      answer: 'Sí, trabajo completamente de forma remota para proyectos en toda Argentina. Utilizo herramientas de comunicación y gestión de proyectos que me permiten estar en contacto constante contigo y tu equipo. Para reuniones importantes, también puedo coordinar videollamadas o desplazarme si es necesario.'
    },
    {
      question: '¿Cuánto tiempo lleva una migración de sistemas?',
      answer: 'El tiempo depende de la complejidad del proyecto. Una migración simple puede tomar entre 2-4 semanas, mientras que proyectos más complejos pueden requerir 2-3 meses. Durante la consulta inicial, te doy un cronograma específico basado en tu situación particular.'
    },
    {
      question: '¿Ofrecés soporte post-implementación?',
      answer: 'Absolutamente. Incluyo soporte post-implementación en todos mis proyectos. Esto incluye monitoreo, resolución de incidencias, optimizaciones y capacitación adicional. También ofrezco planes de soporte continuo para mantener todo funcionando perfectamente.'
    },
    {
      question: '¿Trabajás con empresas de otras provincias?',
      answer: 'Sí, trabajo con empresas y municipios de toda Argentina. Mi experiencia incluye proyectos en Buenos Aires, Córdoba, Mendoza y otras provincias. La comunicación remota me permite brindar el mismo nivel de servicio sin importar la ubicación.'
    },
    {
      question: '¿Qué pasa si algo falla durante la migración?',
      answer: 'Tengo protocolos de rollback y planes de contingencia para cada migración. Siempre mantengo backups completos y realizo migraciones en etapas para minimizar riesgos. Si surge algún problema, puedo restaurar rápidamente al estado anterior mientras resolvemos el inconveniente.'
    },
    {
      question: '¿Cómo garantizás la seguridad de nuestros datos?',
      answer: 'Implemento múltiples capas de seguridad: cifrado de datos, accesos controlados, backups automáticos y monitoreo continuo. Sigo las mejores prácticas internacionales y me aseguro de que tu información esté protegida en todo momento. También firmo acuerdos de confidencialidad cuando es necesario.'
    },
    {
      question: '¿Qué incluye la consulta gratuita?',
      answer: 'En la consulta gratuita analizamos tu situación actual, identificamos oportunidades de mejora, discutimos tus objetivos y te doy recomendaciones iniciales. También te explico cómo podría ayudarte y qué pasos seguir. No hay compromiso y recibes valor real en esa primera conversación.'
    },
    {
      question: '¿Trabajás con presupuestos limitados?',
      answer: 'Entiendo que cada empresa tiene diferentes capacidades de inversión. Por eso ofrezco soluciones escalables y priorizamos las mejoras según el impacto y tu presupuesto. Podemos implementar cambios en etapas para distribuir la inversión en el tiempo.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="faq" className="section-padding bg-secondary-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              ❓ Preguntas Frecuentes
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
              Resuelvo las dudas más comunes sobre mis servicios. Si tenés alguna pregunta específica, 
              no dudes en contactarme directamente.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-secondary-100">
                      <p className="text-secondary-700 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-4">
              ¿Tenés Otra Pregunta?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Si no encontraste la respuesta que buscabas, contactame directamente. 
              Respondo todas las consultas en menos de 24 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                💬 Hacer mi Pregunta
              </button>
              <a
                href="https://wa.me/5493492XXXXXX?text=Hola%20Paulo%2C%20tengo%20una%20consulta%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-lg px-8 py-4 bg-green-500 hover:bg-green-600"
              >
                📱 WhatsApp Directo
              </a>
            </div>
            
            <div className="mt-6 flex items-center justify-center text-secondary-600">
              <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Respuesta garantizada en menos de 24 horas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}