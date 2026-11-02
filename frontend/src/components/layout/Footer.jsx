import { Link, useLocation } from "react-router"
import { useCookieConsent } from "../../context/cookieConsentContext"
import DondeEstamos from "../DondeEstamos"

// Los datos de contacto, la ubicación y el Instagram solo salen en inicio y en contacto, dentro de
// «Dónde estamos». En el resto de páginas el pie solo lleva los textos legales; la navegación está en el menú.
export default function Footer() {
  const { openSettings } = useCookieConsent()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        {isHome && <DondeEstamos />}

        <div className={`border-t border-milele-green/20 pb-44 pt-6 text-center text-sm text-gray-600 md:pb-6 ${isHome ? "mt-8" : ""}`}>
          <nav className="mb-2 flex flex-wrap justify-center gap-x-4">
            <Link to="/aviso-legal" className="inline-block py-2 hover:text-milele-pink-dark transition-colors">Aviso legal</Link>
            <Link to="/politica-de-privacidad" className="inline-block py-2 hover:text-milele-pink-dark transition-colors">Política de privacidad</Link>
            <Link to="/politica-de-cookies" className="inline-block py-2 hover:text-milele-pink-dark transition-colors">Política de cookies</Link>
            <button type="button" onClick={openSettings} className="inline-block py-2 hover:text-milele-pink-dark transition-colors cursor-pointer">
              Configurar cookies
            </button>
            <Link to="/admin" className="inline-block py-2 hover:text-milele-pink-dark transition-colors">Acceso del equipo</Link>
          </nav>
          <p>© {new Date().getFullYear()} Milele Málaga S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
