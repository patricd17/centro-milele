import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { professionals } from "../data/professionals"
import Seo from "../components/Seo"
import Reveal from "../components/Reveal"

const NUMEROS = ["", "Una", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho"]

const principios = [
  { titulo: "Escuchar", texto: "Empezamos entendiendo qué necesita cada persona." },
  { titulo: "Trabajar juntas", texto: "Las tres áreas, en continua comunicación." },
  { titulo: "Cuidar el ritmo", texto: "Cada niño y cada familia tienen el suyo." },
]

export default function About() {
  const areas = [...new Set(professionals.map((p) => p.area))]
  const [area, setArea] = useState("Todas")
  const visibles = area === "Todas" ? professionals : professionals.filter((p) => p.area === area)
  const titular = NUMEROS[professionals.length]
    ? `${NUMEROS[professionals.length]} profesionales, un mismo equipo.`
    : "Un mismo equipo."

  return (
    <>
      <Seo
        title="Quiénes somos · Milele Centro Multidisciplinar, Málaga"
        description={`Conoce al equipo de Milele: ${professionals.map((p) => `${p.firstName}, ${p.role.toLowerCase()}`).join("; ")}. Puerto de la Torre (Málaga).`}
      />

      <header className="bg-[#f4fbf3] py-14 md:py-20">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Quiénes somos</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-gray-900 md:text-5xl">{titular}</h1>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            Nos inspiramos en la pedagogía del amor: acompañamos a cada niño, niña y familia desde una mirada
            comprensiva, afectiva y personalizada.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          {professionals.length > 4 && (
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por área">
              {["Todas", ...areas].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(a)}
                  aria-pressed={area === a}
                  className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors ${
                    area === a ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 lg:[&>*:nth-child(3n+2)]:mt-14">
            {visibles.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)]">
                <Link to={`/about/${p.id}`} className="group block">
                  <img
                    src={p.photoCard}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-3xl object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-gray-900">{p.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {p.role}{p.license ? ` · Colegiada ${p.license}` : ""}
                  </p>
                  <p className="mt-3 font-serif text-[17px] italic leading-relaxed text-gray-700">«{p.quote}»</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 border-b-[1.5px] border-gray-900 pb-0.5 text-sm font-semibold text-gray-900">
                    Conocer a {p.firstName} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-14 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3 md:gap-12">
          {principios.map((pr, i) => (
            <Reveal key={pr.titulo} delay={i * 80}>
              <h2 className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">{pr.titulo}</h2>
              <p className="mt-2 leading-relaxed text-gray-600">{pr.texto}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
