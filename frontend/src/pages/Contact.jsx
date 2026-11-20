import { useState } from "react"
import { Link } from "react-router"
import { Send, MessageCircle, PenLine, CheckCircle, AlertCircle } from "lucide-react"
import { contactAPI } from "../lib/api"
import MapConsent from "../components/MapConsent"
import DondeEstamos from "../components/DondeEstamos"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import Faq from "../components/Faq"
import WhatsAppIcon from "../components/icons/WhatsAppIcon"
import { whatsappLink } from "../lib/whatsapp"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // campo trampa (honeypot): las personas no lo ven; los bots suelen rellenarlo
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
        website: "",
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
      <Seo
        title="Contacto y cómo llegar · Milele Centro Multidisciplinar, Málaga"
        description="Pide cita en Milele: calle Lope de Rueda 78 A, Puerto de la Torre (Málaga). Tardes de 16:00 a 20:00 y mañanas con cita previa. Tel. 614 438 477."
      />
      <PageHeader title="Contacto">Elige cómo prefieres hablar con nosotras. Las mañanas son solo con cita previa.</PageHeader>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-3 sm:flex-row md:mb-14">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98] md:hidden"
            >
              <WhatsAppIcon className="h-5 w-5" /> Escribir por WhatsApp
            </a>
            <a
              href="#formulario"
              className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full border-[1.5px] border-gray-900 bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800 active:scale-[0.98]"
            >
              <PenLine className="h-5 w-5" aria-hidden="true" /> Escribir un mensaje
            </a>
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Dónde estamos: dirección, horario, teléfono y correo en un único bloque */}
            <DondeEstamos variant="card" photo="frontal" className="order-2 lg:order-1" />

            {/* Contact Form */}
            <div id="formulario" className="order-1 lg:order-2 scroll-mt-36 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac text-gray-900">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold font-serif text-gray-900">Cuéntanos qué necesitas</h2>
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
                    maxLength={100}
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
                    maxLength={254}
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
                    maxLength={30}
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
                    maxLength={3000}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <p className="-mt-3 text-xs text-gray-500">
                  Por favor, no incluyas datos de salud ni informes en este mensaje: te los pediremos de forma segura
                  al concertar la cita. Si escribes en nombre de un menor, hazlo como madre, padre o tutor.
                </p>

                {/* Campo trampa: oculto para las personas */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">No rellenar este campo</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
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
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-gray-900 bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      <Faq />

      <section className="bg-white pb-14 md:pb-20">
        <div className="container mx-auto px-4">
          {/* Mapa (se carga solo al pulsar «Ver mapa aquí») */}
          <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold font-serif text-gray-900">Encuéntranos en el mapa</h2>
            <MapConsent className="h-80" />
          </div>
        </div>
      </section>
    </>
  )
}
