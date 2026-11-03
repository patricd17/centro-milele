import { Link, useParams, Navigate } from "react-router"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"
import { getProfessional } from "../data/professionals"
import Reveal from "../components/Reveal"

const botonLila =
  "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]"

// Primera frase del bloque, como gancho cuando está cerrado
const avance = (texto) => {
  const frase = texto.match(/^.*?[.!?…](\s|$)/)?.[0].trim() ?? texto
  if (frase.length <= 120) return frase
  const corte = frase.slice(0, 117)
  return corte.slice(0, corte.lastIndexOf(" ")).replace(/[,;:\s]+$/, "") + "…"
}

export default function Professional() {
  const { id } = useParams()
  const p = getProfessional(id)

  if (!p) return <Navigate to="/about" replace />

  return (
    <>
      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/about"
            className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Quiénes somos
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <img
              src={p.photoProfile}
              alt={p.name}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top lg:sticky lg:top-28"
            />

            <div>
              <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">{p.name}</h1>
              <p className="mt-2 text-lg text-gray-600">
                {p.role} · Colegiada nº {p.license}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">{p.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Especialidades">
                {p.specialties.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-milele-cyan/40 bg-milele-cyan-light px-3 py-1 text-sm text-gray-800"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <Link to="/contact#formulario" className={`${botonLila} mt-8`}>
                Pedir cita con {p.firstName} <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-10 border-t border-gray-200">
                {p.sections.map((sec) => (
                  <details key={sec.title} name="perfil" open={sec.open} className="group border-b border-gray-200">
                    <summary className="flex min-h-12 cursor-pointer list-none items-start justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block font-serif text-xl text-gray-900">{sec.title}</span>
                        <span className="mt-1 block text-sm italic text-gray-500 group-open:hidden">
                          «{avance(sec.text[0])}»
                        </span>
                      </span>
                      <ChevronDown className="mt-1.5 h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="space-y-4 pb-6 leading-relaxed text-gray-700">
                      {sec.text.map((par, i) => (
                        <p key={i}>{par}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className="bg-milele-lilac/40 py-14">
        <div className="container mx-auto flex flex-col items-center gap-5 px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900">¿Hablamos?</h2>
          <p className="max-w-xl text-gray-700">
            Cuéntanos qué necesitas y {p.firstName} se pondrá en contacto contigo.
          </p>
          <Link to="/contact#formulario" className={botonLila}>
            Pedir cita con {p.firstName} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </>
  )
}
