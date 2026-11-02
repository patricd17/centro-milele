import { Link, useLocation } from "react-router"
import { MapPin, Phone, Mail, Instagram, Navigation } from "lucide-react"
import { useCookieConsent } from "../../context/cookieConsentContext"
import MapConsent from "../MapConsent"
import fachada from "../../assets/images/fachada-milele.webp"

const MAPS_PLACE = "https://www.google.com/maps/search/?api=1&query=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"
const MAPS_ROUTE = "https://www.google.com/maps/dir/?api=1&destination=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"

export default function Footer() {
  const { openSettings } = useCookieConsent()
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const showMap = pathname !== "/contact"

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className={`grid gap-8 ${!isHome && showMap ? "lg:grid-cols-2" : ""}`}>
          {/* Columna izquierda (no en inicio): contacto, enlaces y redes */}
          {!isHome && (
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
                    <Link to="/" className="hover:text-milele-pink-dark transition-colors">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-milele-pink-dark transition-colors">Quienes Somos</Link>
                  </li>
                  <li>
                    <Link to="/spaces" className="hover:text-milele-pink-dark transition-colors">Nuestros Espacios</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-milele-pink-dark transition-colors">Contacto</Link>
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
            </div>
          )}

          {/* Right Column: en inicio, "Dónde estamos"; en el resto, el mapa (en /contact va dentro de la sección de contacto) */}
          {isHome ? (
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Dónde estamos</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <img
                  src={fachada}
                  alt="Fachada del centro Milele en Puerto de la Torre, Málaga"
                  width="680"
                  height="510"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <div className="flex flex-col text-sm">
                  <p className="mb-4 text-gray-700">Nos encuentras en Puerto de la Torre, Málaga.</p>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold text-gray-900">Dirección</dt>
                      <dd>
                        <a href={MAPS_PLACE} target="_blank" rel="noopener noreferrer" className="hover:text-milele-pink-dark transition-colors">
                          Calle Lope de Rueda, 78a, 29190 Málaga
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Horario</dt>
                      <dd>
                        Lunes a viernes: mañanas con cita previa y tardes de 16:00 a 20:00.
                        <br />
                        Sábados, domingos y festivos, cerrado.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Teléfono</dt>
                      <dd>
                        <a href="tel:+34614438477" className="hover:text-milele-pink-dark transition-colors">
                          614 438 477
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Correo</dt>
                      <dd>
                        <a
                          href="mailto:centromilele@gmail.com?subject=Consulta%20desde%20la%20web"
                          className="hover:text-milele-pink-dark transition-colors"
                        >
                          centromilele@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={MAPS_ROUTE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-milele-gradient px-5 py-2.5 text-sm font-medium text-black shadow transition-shadow hover:shadow-md"
                    >
                      <Navigation className="h-4 w-4" aria-hidden="true" />
                      Cómo llegar
                    </a>
                    <a
                      href="https://www.instagram.com/centromilele"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-white/60"
                    >
                      <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                      @centromilele
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            showMap && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Ubicación</h3>
                <MapConsent />
              </div>
            )
          )}
        </div>

        <div className="mt-8 border-t border-milele-green/20 pb-44 pt-6 text-center text-sm text-gray-600 md:pb-6">
          <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/aviso-legal" className="hover:text-milele-pink-dark transition-colors">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="hover:text-milele-pink-dark transition-colors">Política de privacidad</Link>
            <Link to="/politica-de-cookies" className="hover:text-milele-pink-dark transition-colors">Política de cookies</Link>
            <button type="button" onClick={openSettings} className="hover:text-milele-pink-dark transition-colors cursor-pointer">
              Configurar cookies
            </button>
            <Link to="/admin" className="hover:text-milele-pink-dark transition-colors">Acceso del equipo</Link>
          </nav>
          <p>© {new Date().getFullYear()} Milele Málaga S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
