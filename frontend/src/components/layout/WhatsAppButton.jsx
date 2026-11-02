import { MessageCircle } from "lucide-react"
import { whatsappLink } from "../../lib/whatsapp"

// Botón flotante de WhatsApp para el móvil (en el ordenador va en la barra de arriba).
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:hidden"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
