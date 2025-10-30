'use client'

import ContactForm from '../forms/ContactForm'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
              📩 ¿Querés una Consulta Sin Costo?
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
              Hablemos de tu proyecto. La primera consulta es completamente gratuita y sin compromiso. 
              Te respondo en menos de 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6 text-center">
                  Formulario de Contacto
                </h3>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Info Card */}
                <div className="bg-gradient-to-br from-primary to-primary-700 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-heading font-bold mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">📍</div>
                      <div>
                        <div className="font-semibold">Ubicación</div>
                        <div className="text-white/90">Rafaela, Santa Fe, Argentina</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">✉️</div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <a 
                          href="mailto:contacto@wann.com.ar" 
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          contacto@wann.com.ar
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">📱</div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <a 
                          href="https://wa.me/5493492XXXXXX?text=Hola%20Paulo%2C%20quiero%20una%20consulta%20gratuita"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          +54 9 3492 XXX-XXX
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">💼</div>
                      <div>
                        <div className="font-semibold">LinkedIn</div>
                        <a 
                          href="https://www.linkedin.com/in/paulo-galeano"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white transition-colors"
                        >
                          /in/paulo-galeano
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">🌐</div>
                      <div>
                        <div className="font-semibold">Website</div>
                        <div className="text-white/90">www.wann.com.ar</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-6">
                    Contacto Directo
                  </h3>
                  
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/5493492XXXXXX?text=Hola%20Paulo%2C%20quiero%20una%20consulta%20gratuita"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-full bg-green-500 hover:bg-green-600"
                    >
                      📱 WhatsApp Directo
                    </a>
                    
                    <a
                      href="mailto:contacto@wann.com.ar?subject=Consulta%20Gratuita&body=Hola%20Paulo%2C%0A%0AQuiero%20solicitar%20una%20consulta%20gratuita.%0A%0ANombre%3A%0AEmpresa%3A%0AProyecto%3A%0A%0AGracias%21"
                      className="btn-secondary w-full"
                    >
                      ✉️ Enviar Email
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/paulo-galeano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>

                {/* Response Time Guarantee */}
                <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200 text-center">
                  <div className="text-3xl mb-3">⏱️</div>
                  <h4 className="font-bold text-accent-800 mb-2">Garantía de Respuesta</h4>
                  <p className="text-sm text-accent-700">
                    Te respondo en menos de 24 horas, generalmente dentro de las primeras 4 horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}