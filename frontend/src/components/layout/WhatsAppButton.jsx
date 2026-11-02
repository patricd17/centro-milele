import WhatsAppIcon from "../icons/WhatsAppIcon"
import { whatsappLink } from "../../lib/whatsapp"

// Botón flotante de WhatsApp para el móvil (en el ordenador va en la barra de arriba).
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] ring-4 ring-white/70 transition-transform active:scale-95 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:hidden"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  )
}
