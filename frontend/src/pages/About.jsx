import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users } from "lucide-react"
import { useState } from "react"
import { professionals } from "../data/professionals"

export default function About() {
  const areas = [...new Set(professionals.map((p) => p.area))]
  const [area, setArea] = useState("Todas")
  const visibles = area === "Todas" ? professionals : professionals.filter((p) => p.area === area)
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Quienes Somos</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              En Milele, somos un equipo de profesionales apasionadas por el bienestar y desarrollo de las personas. Nos une el compromiso de ofrecer una atención integral y de calidad, creando un espacio donde cada persona se sienta comprendida, apoyada y acompañada en su proceso de crecimiento y superación. Nos inspiramos en la pedagogía del amor, acompañando a cada niño, niña y familia desde una mirada comprensiva, afectiva y personalizada. Creemos que todos los seres humanos tienen un potencial único, y nuestro objetivo es ofrecer las herramientas necesarias para que puedan descubrirlo y desarrollarlo a su ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestro <span className="gradient-text">Equipo</span> Multidisciplinar
            </h2>
            <p className="text-lg text-gray-600">
              Cada una aporta su especialidad y su manera de trabajar. Elige a quien mejor encaje con lo que necesitas.
            </p>
          </div>

          {professionals.length > 4 && (
            <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar por área">
              {["Todas", ...areas].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(a)}
                  aria-pressed={area === a}
                  className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                    area === a ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((p) => (
              <Link
                key={p.id}
                to={`/about/${p.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
              >
                <img
                  src={p.photoCard}
                  alt={p.name}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {p.role} · Col. {p.license}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.specialties.slice(0, 3).map((s) => (
                      <li key={s} className="rounded-full bg-milele-cyan-light px-2.5 py-0.5 text-xs text-gray-800">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex-grow text-sm italic leading-relaxed text-gray-700">«{p.quote}»</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900">
                    Conocer más <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían nuestro trabajo diario y definen nuestra filosofía de atención.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-green-light to-white shadow-md milele-shadow border border-milele-green/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Empatía</h3>
              <p className="text-gray-600">
                Entendemos y compartimos las emociones de nuestros pacientes, creando un ambiente de confianza y
                comprensión.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white shadow-md milele-shadow border border-milele-cyan/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white mx-auto">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Profesionalidad</h3>
              <p className="text-gray-600">
                Mantenemos los más altos estándares de calidad en nuestros servicios, con formación continua y
                actualizada.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-pink-light to-white shadow-md milele-shadow border border-milele-pink/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Colaboración</h3>
              <p className="text-gray-600">
                Trabajamos en equipo, tanto internamente como con nuestros pacientes, para acompañar a cada familia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-milele-gradient py-16 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif text-black">
              ¿Te gustaría <span className="script-font text-4xl md:text-5xl text-black">conocernos</span> mejor?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una consulta inicial para conocer nuestro enfoque y cómo podemos ayudarte.
            </p>            <Link
              to="/contact#formulario"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
            >
              Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
