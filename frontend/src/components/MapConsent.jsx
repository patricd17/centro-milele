import { MapPin } from "lucide-react"
import { useCookieConsent } from "../context/cookieConsentContext"

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.3569234003569!2d-4.479799630349089!3d36.73630387302376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f72b44da7cc3%3A0x1247ea5988f3f400!2sC.%20Lope%20de%20Rueda%2C%2078%2C%20Puerto%20de%20la%20Torre%2C%2029190%20M%C3%A1laga%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sco!4v1748354275548!5m2!1ses-419!2sco"

// Mapa de Google que solo se carga cuando la persona lo decide: al pulsar «Ver mapa aquí»
// o si ya aceptó las cookies de terceros. Mientras tanto no se conecta con Google.
export default function MapConsent({ className = "h-64" }) {
  const { thirdPartyAllowed, acceptAll } = useCookieConsent()

  return (
    <div
      className={`w-full overflow-hidden rounded-lg bg-gradient-to-br from-milele-green-light to-milele-cyan-light border border-milele-green/20 ${className}`}
    >
      {thirdPartyAllowed ? (
        <iframe
          src={EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title="Ubicación de Milele Centro Multidisciplinar"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center p-6">
            <MapPin className="h-8 w-8 text-gray-900 mx-auto mb-3" />
            <p className="text-gray-900 font-semibold">Calle Lope de Rueda, 78a, 29190 Málaga</p>
            <p className="text-gray-700 text-xs mt-2 max-w-xs mx-auto">
              El mapa es de Google: al cargarlo, Google recibe tu dirección IP y puede guardar cookies.
            </p>
            <button
              type="button"
              onClick={acceptAll}
              className="mt-4 rounded-full bg-milele-gradient px-5 py-2 text-sm font-medium text-black shadow hover:shadow-md transition-shadow cursor-pointer"
            >
              Ver mapa aquí
            </button>
            <p className="mt-3 text-xs text-gray-700">Si prefieres no cargarlo, usa «Cómo llegar».</p>
          </div>
        </div>
      )}
    </div>
  )
}
