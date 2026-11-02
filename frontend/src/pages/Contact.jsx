import { useState } from "react"
import { Link } from "react-router"
import { Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { contactAPI } from "../lib/api"
import MapConsent from "../components/MapConsent"
import DondeEstamos from "../components/DondeEstamos"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await contactAPI.submitContact(formData)
      setSubmitStatus('success')
      setPrivacyAccepted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Contacto</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotras para programar una cita o resolver cualquier
              duda que tengas sobre nuestros servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Dónde estamos: dirección, horario, teléfono y correo en un único bloque */}
            <DondeEstamos variant="card" photo="frontal" className="order-2 lg:order-1" />

            {/* Contact Form */}
            <div className="order-1 lg:order-2 bg-white p-8 rounded-2xl shadow-xl milele-shadow border border-milele-pink/10">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white mr-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold font-serif text-gray-900">Envíanos un Mensaje</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-green-800">¡Mensaje enviado correctamente! El equipo de Milele contactará contigo lo antes posible.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <p className="text-red-800">Error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="+34 614 438 477"
                  />                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <div className="space-y-3 rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
                  <p>
                    <strong>Información básica sobre protección de datos.</strong> Responsable: Milele Málaga S.L.
                    Finalidad: atender tu consulta. Legitimación: tu consentimiento. Destinatarios: proveedores de
                    alojamiento y de envío de correo del centro. Derechos: acceso, rectificación, supresión,
                    oposición, limitación y portabilidad, escribiendo a centromilele@gmail.com.
                  </p>
                  <label className="flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 flex-shrink-0 accent-milele-cyan-dark"
                    />
                    <span>
                      He leído y acepto la{" "}
                      <Link to="/politica-de-privacidad" className="font-medium text-milele-cyan-dark underline">
                        Política de privacidad
                      </Link>{" "}
                      *
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-milele-gradient px-8 py-4 text-sm font-medium text-black shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Mapa (se carga solo al pulsar «Ver mapa aquí») */}
          <div className="mt-12 rounded-2xl border border-milele-cyan/10 bg-white p-6 shadow-lg milele-shadow md:p-8">
            <h2 className="mb-4 text-2xl font-semibold font-serif text-gray-900">Encuéntranos en el mapa</h2>
            <MapConsent className="h-80" />
          </div>
        </div>
      </section>
    </>
  )
}
