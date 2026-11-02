// WhatsApp del centro (WhatsApp Business). El número va con prefijo de país y sin signos.
const WHATSAPP_NUMBER = "34614438477"

// Mensaje que aparece ya escrito al abrir el chat, según desde dónde se pulse el botón.
const MESSAGES = {
  desktop: "Hola, os escribo desde la web de Centro Milele. Me gustaría pedir información.",
  mobile: "Hola, os escribo desde la web de Centro Milele. Quería pedir información.",
}

// Móvil o tableta: pantalla táctil y sin ratón preciso (así se abre la app de WhatsApp).
export function isMobileDevice() {
  if (typeof window === "undefined") return false
  return window.matchMedia?.("(pointer: coarse)").matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isMobileDevice() ? MESSAGES.mobile : MESSAGES.desktop)}`
