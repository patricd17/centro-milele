// WhatsApp del centro (WhatsApp Business). El número va con prefijo de país y sin signos.
const WHATSAPP_NUMBER = "34614438477"

// Mensaje que aparece ya escrito cuando la persona abre el chat.
const DEFAULT_MESSAGE = "Hola, os escribo desde la web de Centro Milele. Me gustaría pedir información."

export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
