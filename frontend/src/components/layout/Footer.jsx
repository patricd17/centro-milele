import { Link, useLocation } from "react-router"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { useCookieConsent } from "../../context/cookieConsentContext"
import MapConsent from "../MapConsent"

export default function Footer() {
  const { openSettings } = useCookieConsent()
  const { pathname } = useLocation()
  const showMap = pathname !== "/contact"

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className={`grid gap-8 ${showMap ? "lg:grid-cols-2" : ""}`}>
          {/* Left Column - Contact and Links */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-milele-cyan-dark flex-shrink-0 mt-0.5" />
                  <span>Calle Lope de Rueda, 78a</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-milele-cyan-dark" />
                  <a href="tel:+34614438477" className="hover:text-milele-pink-dark transition-colors">
                    +34 614 438 477
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-milele-cyan-dark" />
                  <a
                    href="mailto:centromilele@gmail.com?subject=Consulta%20desde%20la%20web"
                    className="hover:text-milele-pink-dark transition-colors"
                  >
                    centromilele@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Enlaces</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-milele-pink-dark transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-milele-pink-dark transition-colors">
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link to="/spaces" className="hover:text-milele-pink-dark transition-colors">
                    Nuestros Espacios
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-milele-pink-dark transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-900 font-serif">Síguenos</h4>
                <a
                  href="https://www.instagram.com/centromilele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-milele-pink-dark transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-cyan text-white mr-3">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span className="text-sm">@centromilele</span>
                </a>
              </div>
            </div>
          </div>          {/* Right Column - Map (en /contact el mapa está dentro de la sección de contacto) */}
          {showMap && (
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Ubicación</h3>
              <MapConsent />
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-milele-green/20 py-6 text-center text-sm text-gray-600">
          <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/aviso-legal" className="hover:text-milele-pink-dark transition-colors">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-milele-pink-dark transition-colors">Política de privacidad</Link>
            <Link to="/politica-de-cookies" className="hover:text-milele-pink-dark transition-colors">Política de cookies</Link>
            <button type="button" onClick={openSettings} className="hover:text-milele-pink-dark transition-colors cursor-pointer">
              Configurar cookies
            </button>
          </nav>
          <p>© {new Date().getFullYear()} Milele Málaga S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
