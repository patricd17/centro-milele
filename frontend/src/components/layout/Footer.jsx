import { Link, useLocation } from "react-router"
import { useCookieConsent } from "../../context/cookieConsentContext"
import DondeEstamos from "../DondeEstamos"
import instagramLogo from "../../assets/images/instagram.webp"

// Los datos de contacto y la ubicación solo salen en inicio («Dónde estamos») y en la página de
// contacto; en el resto de páginas el pie solo lleva el Instagram. La navegación está en el menú.
export default function Footer() {
  const { openSettings } = useCookieConsent()
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const isContact = pathname === "/contact" // ahí «Dónde estamos» ya incluye el Instagram

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        {isHome ? (
          <DondeEstamos />
        ) : (
          !isContact && (
            <div className="flex justify-center">
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
          )
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
