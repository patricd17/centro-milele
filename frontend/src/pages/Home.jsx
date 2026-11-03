import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import HeroVideo from "../components/HeroVideo"
import Reveal from "../components/Reveal"
import card_tulipan from "../assets/images/card-tulipan.webp"
import card_arcoiris from "../assets/images/card-arcoiris.webp"
import card_mariposa from "../assets/images/card-mariposa.webp"

const pasos = [
  { titulo: "Primera cita", texto: "Conocemos a cada persona y a su familia, y vemos qué necesita." },
  { titulo: "Un plan a medida", texto: "Objetivos claros y sesiones adaptadas. Si hace falta, trabajamos las tres áreas a la vez." },
  { titulo: "Seguimiento", texto: "Revisamos juntos cómo va y ajustamos el plan con la familia." },
]

const areas = [
  {
    titulo: "Logopedia",
    sala: "Sala Tulipán",
    foto: card_tulipan,
    alt: "Sala Tulipán, donde trabaja la logopedia",
    fondo: "bg-milele-green-light/60",
    texto: "Lenguaje, habla, voz y deglución.",
    etiquetas: ["Habla", "Deglución", "Audición"],
    profesional: "Patricia",
    enlace: "/about/patricia",
  },
  {
    titulo: "Pedagogía",
    sala: "Sala Arco Iris",
    foto: card_arcoiris,
    alt: "Sala Arco Iris, donde trabaja la pedagogía",
    fondo: "bg-milele-cyan-light/60",
    texto: "Apoyo escolar y dificultades de aprendizaje.",
    etiquetas: ["Lectoescritura", "Atención", "Motivación"],
    profesional: "Lucía",
    enlace: "/about/lucia",
  },
  {
    titulo: "Psicología",
    sala: "Sala Mariposa",
    foto: card_mariposa,
    alt: "Sala Mariposa, donde trabaja la psicología",
    fondo: "bg-milele-pink-light/60",
    texto: "Bienestar emocional y social, también con la familia.",
    etiquetas: ["Atención temprana", "TEA", "Emociones"],
    profesional: "Silvia",
    enlace: "/about/silvia",
  },
]

const distintivos = [
  { titulo: "Un equipo, un plan", texto: "Las tres áreas hablan entre sí. Nadie trabaja aislado." },
  { titulo: "La familia, dentro", texto: "Orientación a madres y padres para seguir el trabajo en casa." },
  { titulo: "Seguimiento continuo", texto: "Evaluamos de forma continua y ajustamos lo que haga falta." },
]

export default function Home() {
  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden bg-[#f4fbf3] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
                <span className="moontime-light mb-2 block text-6xl font-normal md:text-8xl">Milele</span>
                Para siempre
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-gray-800 lg:mx-0">
                En Milele, cada persona es única, y por eso nos esforzamos en ofrecer soluciones terapéuticas que se ajusten a sus necesidades.
              </p>
              <p className="mx-auto mt-3 max-w-lg text-base text-gray-600 lg:mx-0">
                Logopedia, pedagogía terapéutica y psicología en Puerto de la Torre, Málaga.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/contact#formulario"
                  className="inline-flex items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]"
                >
                  Pedir cita
                </Link>
                <Link
                  to="/spaces"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-7 py-3 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
                >
                  Ver los espacios
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <HeroVideo className="h-auto w-full rounded-2xl object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal as="h2" className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">
            Cómo trabajamos
          </Reveal>
          <Reveal as="p" className="mt-2 text-lg text-gray-600">
            Tres pasos, siempre contigo y con tu familia.
          </Reveal>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden="true"
              className="absolute left-20 right-[33%] top-10 hidden border-t-2 border-dashed border-milele-lilac-line md:block"
            />
            {pasos.map((paso, i) => (
              <Reveal as="li" key={paso.titulo} delay={i * 80} className="relative">
                <span
                  aria-hidden="true"
                  className="script-font relative flex h-20 w-20 items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac text-5xl font-semibold leading-none text-gray-900"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-gray-900">{paso.titulo}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-gray-700">{paso.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="bg-[#f4fbf3] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal as="h2" className="mb-10 font-serif text-3xl font-semibold text-gray-900 md:mb-14 md:text-4xl">
            Qué ofrecemos
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.titulo} delay={i * 80} className={`flex flex-col overflow-hidden rounded-2xl ${area.fondo}`}>
                <img src={area.foto} alt={area.alt} width="640" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{area.titulo}</h3>
                  <p className="mt-1 text-sm text-gray-600">{area.sala}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-800">{area.texto}</p>
                  <ul className="mt-3 flex flex-1 flex-wrap content-start gap-1.5">
                    {area.etiquetas.map((e) => (
                      <li key={e} className="h-fit rounded-full bg-white/70 px-2.5 py-0.5 text-xs text-gray-800">
                        {e}
                      </li>
                    ))}
                  </ul>
                  <Link to={area.enlace} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-milele-cyan-dark">
                    Conocer a {area.profesional} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frase */}
      <section className="bg-[#10231a] py-16 text-center text-white md:py-20">
        <Reveal className="container mx-auto max-w-3xl px-4">
          <p className="font-serif text-3xl leading-snug md:text-4xl">Nos inspiramos en la pedagogía del amor</p>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Acompañamos a cada niño, niña y familia desde una mirada comprensiva, afectiva y personalizada.
          </p>
        </Reveal>
      </section>

      {/* Lo que nos distingue */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal as="h2" className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">
            Lo que nos distingue
          </Reveal>
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
            {distintivos.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 80} className="border-t-2 border-gray-900 pt-4">
                <h3 className="font-serif text-2xl font-medium text-gray-900">{d.titulo}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{d.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contáctenos */}
      <section className="bg-[#10231a] py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">¿Listo para dar el primer paso?</h2>
            <p className="mt-4 text-lg text-white/90">
              Contáctanos hoy mismo para programar tu primera consulta o resolver cualquier duda que tengas.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Link
                to="/contact#formulario"
                className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]"
              >
                Contactar ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+34614438477"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.98]"
              >
                Llamar · 614 438 477
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
