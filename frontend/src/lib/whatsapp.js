// WhatsApp del centro (WhatsApp Business). El número va con prefijo de país y sin signos.
const WHATSAPP_NUMBER = "34614438477"

// Mensaje que aparece ya escrito al abrir el chat.
const MESSAGE = "Hola, quería pedir información sobre Centro Milele."

export const whatsappLink = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`
