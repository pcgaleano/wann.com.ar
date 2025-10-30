'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    proyecto: '',
    mensaje: '',
    whatsappConsent: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would integrate with Formspree or Netlify Forms
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        proyecto: '',
        mensaje: '',
        whatsappConsent: false
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-accent-800 mb-2">
          ¡Mensaje Enviado Exitosamente!
        </h3>
        <p className="text-accent-700 mb-4">
          Gracias por tu consulta. Te responderé en menos de 24 horas.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-accent-600 hover:text-accent-800 underline"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Required fields row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="nombre" className="form-label">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Tu nombre y apellido"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="tu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="telefono" className="form-label">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="+54 9 11 1234-5678"
          />
        </div>
      </div>

      {/* Optional fields row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="empresa" className="form-label">
            Empresa/Organización
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Nombre de tu empresa"
          />
        </div>
        
        <div>
          <label htmlFor="proyecto" className="form-label">
            Tipo de Proyecto
          </label>
          <select
            id="proyecto"
            name="proyecto"
            value={formData.proyecto}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Selecciona una opción</option>
            <option value="migracion">Migración de sistemas</option>
            <option value="asesoria">Asesoría tecnológica</option>
            <option value="automatizacion">Automatización</option>
            <option value="seguridad">Seguridad y backups</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="mensaje" className="form-label">
          Mensaje/Comentario
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          rows={4}
          className="form-input resize-vertical"
          placeholder="Contame sobre tu proyecto, necesidades específicas, o cualquier pregunta que tengas..."
        />
      </div>

      {/* WhatsApp consent */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="whatsappConsent"
          name="whatsappConsent"
          checked={formData.whatsappConsent}
          onChange={handleInputChange}
          className="mt-1 mr-3 h-4 w-4 text-primary border-secondary-300 rounded focus:ring-primary"
        />
        <label htmlFor="whatsappConsent" className="text-sm text-secondary-700">
          Acepto ser contactado por WhatsApp para coordinar la consulta y recibir información sobre los servicios.
        </label>
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary text-lg px-8 py-4 w-full md:w-auto min-w-[280px] ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            '🚀 Solicitar Reunión Gratuita'
          )}
        </button>
      </div>

      {/* Error message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-700">
            Hubo un error al enviar el mensaje. Por favor, intentá nuevamente o contactame directamente por WhatsApp.
          </p>
        </div>
      )}

      {/* Form benefits */}
      <div className="bg-secondary-50 rounded-lg p-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Respuesta en 24hs
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin compromiso
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Consulta gratuita
          </div>
        </div>
      </div>
    </form>
  )
}