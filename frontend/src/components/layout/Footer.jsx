import { Link, useLocation } from "react-router"
import { Navigation } from "lucide-react"
import { useCookieConsent } from "../../context/cookieConsentContext"
import fachada from "../../assets/images/fachada-milele.webp"
import instagramLogo from "../../assets/images/instagram.webp"

const MAPS_PLACE = "https://www.google.com/maps/search/?api=1&query=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"
const MAPS_ROUTE = "https://www.google.com/maps/dir/?api=1&destination=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Quiénes somos" },
  { to: "/spaces", label: "Nuestros espacios" },
  { to: "/contact", label: "Contacto" },
]

// Los datos de contacto y la ubicación solo salen en inicio («Dónde estamos») y en la página de
// contacto; en el resto de páginas el pie es una fila sencilla con enlaces e Instagram.
export default function Footer() {
  const { openSettings } = useCookieConsent()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
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
                    <img src={instagramLogo} alt="" width="18" height="18" className="h-[18px] w-[18px]" />
                    @centromilele
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <nav aria-label="Enlaces del pie" className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
              {LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-milele-pink-dark transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://www.instagram.com/centromilele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-milele-pink-dark transition-colors"
            >
              <img src={instagramLogo} alt="" width="32" height="32" className="h-8 w-8" />
              <span className="text-sm">@centromilele</span>
            </a>
          </div>
        )}

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
