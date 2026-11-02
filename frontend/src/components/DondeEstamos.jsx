import { Navigation } from "lucide-react"
import fachadaEsquina from "../assets/images/fachada-milele.webp"
import fachadaFrontal from "../assets/images/fachada-frontal.webp"
import instagramLogo from "../assets/images/instagram.webp"

const PHOTOS = {
  esquina: {
    src: fachadaEsquina,
    alt: "Fachada del centro Milele en Puerto de la Torre, Málaga",
  },
  frontal: {
    src: fachadaFrontal,
    alt: "Entrada del centro Milele con el escaparate de las siluetas de los niños, en Puerto de la Torre, Málaga",
  },
}

const MAPS_PLACE = "https://www.google.com/maps/search/?api=1&query=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"
const MAPS_ROUTE = "https://www.google.com/maps/dir/?api=1&destination=Calle+Lope+de+Rueda+78a%2C+29190+M%C3%A1laga"

/**
 * Dónde estamos: foto de la fachada, dirección, horario, teléfono, correo y los botones
 * «Cómo llegar» e Instagram. Es la única fuente de estos datos en la web (inicio y contacto).
 *
 * variant "plain": sin caja, foto y datos en dos columnas (pie de la página de inicio).
 * variant "card": en una tarjeta, con la foto encima de los datos (página de contacto).
 * photo: "esquina" (vista de la esquina, en inicio) o "frontal" (la entrada, en contacto).
 */
export default function DondeEstamos({ variant = "plain", photo = "esquina", className = "" }) {
  const card = variant === "card"
  const image = PHOTOS[photo]
  const Heading = card ? "h2" : "h3"

  return (
    <div
      className={`${
        card ? "rounded-2xl border border-milele-green/10 bg-white p-6 shadow-lg milele-shadow md:p-8" : ""
      } ${className}`}
    >
      <Heading className={`mb-4 font-semibold text-gray-900 font-serif ${card ? "text-2xl" : "text-lg"}`}>
        Dónde estamos
      </Heading>
      <div className={`grid gap-6 ${card ? "" : "md:grid-cols-2"}`}>
        <img
          src={image.src}
          alt={image.alt}
          width="640"
          height="480"
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
  )
}
