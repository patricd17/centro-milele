import { Link } from "react-router"
import { ArrowRight, Navigation } from "lucide-react"
import { getOpeningStatus } from "../lib/openingHours"
import { useClosures } from "../context/closuresContext"
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
 * Dónde estamos. Cada página tiene su función, para no repetir datos:
 *  - compact (inicio): foto de la esquina, dirección, resumen del horario, «Cómo llegar» e Instagram,
 *    y un enlace a Contacto para el teléfono, el correo y el formulario.
 *  - completo (contacto): foto de la entrada y todos los datos (dirección, horario, teléfono, correo).
 * El Instagram solo está en inicio.
 */
export default function DondeEstamos({ compact = false, variant = "plain", photo = "esquina", className = "" }) {
  const image = PHOTOS[photo]
  const { closures } = useClosures()
  const status = getOpeningStatus(new Date(), closures)

  if (compact) {
    return (
      <section className={`grid overflow-hidden lg:grid-cols-[1.2fr_1fr] ${className}`} aria-labelledby="donde-titulo">
        <img
          src={image.src}
          alt={image.alt}
          width="640"
          height="480"
          loading="lazy"
          className="h-72 w-full object-cover object-[30%_35%] lg:h-full lg:min-h-[26rem]"
        />
        <div className="flex flex-col justify-center bg-[#f4fbf3] px-6 py-10 md:px-12 md:py-14">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d9e8d6] bg-white px-3.5 py-1.5 text-[13px] font-medium text-gray-800">
            <span className={`h-2 w-2 rounded-full ${status.state === "open" ? "bg-green-500" : "bg-red-500"}`} aria-hidden="true" />
            {status.label}
            {status.detail && <span className="text-gray-500"> · {status.detail}</span>}
          </p>
          <h2 id="donde-titulo" className="mt-5 font-serif text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Estamos en Puerto de la Torre
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            <a href={MAPS_PLACE} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 underline-offset-4 hover:underline">
              Calle Lope de Rueda, 78 A
            </a>{" "}
            · 29190 Málaga
            <br />
            Tardes de 16:00 a 20:00 · mañanas con cita previa
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={MAPS_ROUTE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Cómo llegar
            </a>
            <a
              href="https://www.instagram.com/centromilele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-white/70"
            >
              <img src={instagramLogo} alt="" width="18" height="18" className="h-[18px] w-[18px]" />
              @centromilele
            </a>
          </div>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-milele-cyan-dark">
            Teléfono, correo y formulario en Contacto <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    )
  }

  const card = variant === "card"
  const Heading = card ? "h2" : "h3"
  return (
    <div className={`${card ? "rounded-2xl border border-gray-200 bg-white p-6 md:p-8" : ""} ${className}`}>
      <Heading className={`mb-4 font-semibold text-gray-900 font-serif ${card ? "text-2xl" : "text-lg"}`}>
        Dónde estamos
      </Heading>
      <div className="grid gap-6">
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
                <a href={MAPS_PLACE} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
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
                <a href="tel:+34614438477" className="underline-offset-4 hover:underline">
                  614 438 477
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Correo</dt>
              <dd>
                <a
                  href="mailto:centromilele@gmail.com?subject=Consulta%20desde%20la%20web"
                  className="underline-offset-4 hover:underline"
                >
                  centromilele@gmail.com
                </a>
              </dd>
            </div>
          </dl>
          <a href={MAPS_ROUTE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98] mt-5 self-start">
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  )
}
