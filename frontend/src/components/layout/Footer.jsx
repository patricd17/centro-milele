import { Link } from "react-router"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [mapError, setMapError] = useState(false);

  return (
    <footer className="bg-milele-gradient-soft pt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-milele-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid gap-8 lg:grid-cols-2">
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
                  <span>+34 614 438 477</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-milele-cyan-dark" />
                  <span>centromilele@gmail.com</span>
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
          </div>          {/* Right Column - Map */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-serif">Ubicación</h3>
            <div className="h-64 w-full overflow-hidden rounded-lg bg-gradient-to-br from-milele-green-light to-milele-cyan-light border border-milele-green/20">
              {!mapError ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.3569234003569!2d-4.479799630349089!3d36.73630387302376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f72b44da7cc3%3A0x1247ea5988f3f400!2sC.%20Lope%20de%20Rueda%2C%2078%2C%20Puerto%20de%20la%20Torre%2C%2029190%20M%C3%A1laga%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sco!4v1748354275548!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Ubicación de Milele Centro Multidisciplinar"
                  onError={() => setMapError(true)}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center rounded-lg bg-gradient-to-br from-milele-green-light to-milele-cyan-light">
                  <div className="text-center p-6">
                    <MapPin className="h-8 w-8 text-milele-cyan-dark mx-auto mb-3" />
                    <p className="text-gray-700 font-medium">Calle Lope de Rueda, 78a</p>
                    <p className="text-gray-600 text-sm">Puerto de la Torre, Málaga</p>
                    <a
                      href="https://maps.google.com/?q=Calle+Lope+de+Rueda+78a+Puerto+de+la+Torre+Málaga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-milele-cyan-dark hover:text-milele-pink-dark transition-colors text-sm font-medium"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-milele-green/20 py-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Milele Centro Multidisciplinar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
