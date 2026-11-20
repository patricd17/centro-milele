import { Link } from "react-router"
import { ChevronDown } from "lucide-react"

// Respuestas basadas en lo que ya dice la web. Para añadir una pregunta, copiar un elemento de la lista.
const PREGUNTAS = [
  {
    p: "¿Cómo es la primera cita?",
    r: "Empezamos escuchándote. Conocemos qué te preocupa y valoramos qué necesita cada persona. Con eso te explicamos cómo podemos acompañarte y por dónde empezar.",
  },
  {
    p: "¿Cómo se pide cita?",
    r: "Puedes llamar al 614 438 477, escribirnos por WhatsApp o rellenar el formulario de esta página. Atendemos de lunes a viernes por la tarde, de 16:00 a 20:00. Las mañanas son solo con cita previa.",
  },
  {
    p: "¿Necesito algún informe?",
    r: "No hace falta que lo traigas todo para pedir cita. Si tienes informes (médicos, del colegio…), te diremos cómo enviarlos de forma segura al concertar la cita. Por favor, no los mandes por el formulario.",
  },
  {
    p: "¿Cuándo atendéis y dónde estáis?",
    r: "Estamos en la calle Lope de Rueda, 78 A, en Puerto de la Torre (Málaga). Atendemos de lunes a viernes: tardes de 16:00 a 20:00 y mañanas con cita previa. Sábados, domingos y festivos, cerrado.",
  },
  {
    p: "¿Trabajáis en equipo?",
    r: "Sí. Logopedia, pedagogía y psicología trabajan en continua comunicación, y el plan se ajusta según cómo evoluciona cada persona.",
  },
  {
    p: "¿Las profesionales están colegiadas?",
    r: "Sí. El número de colegiada de cada profesional aparece en su perfil, dentro de Quiénes somos.",
  },
]

export default function Faq() {
  return (
    <section className="border-t border-gray-200 bg-white py-14 md:py-20" aria-labelledby="faq-titulo">
      <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Antes de venir</p>
          <h2 id="faq-titulo" className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Lo que más nos preguntan
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            ¿No encuentras tu duda? Llámanos o escríbenos y te respondemos encantadas.
          </p>
        </div>

        <div className="border-t border-gray-300">
          {PREGUNTAS.map((q) => (
            <details key={q.p} name="faq" className="group border-b border-gray-300">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-xl font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                {q.p}
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-6 leading-relaxed text-gray-700">{q.r}</p>
            </details>
          ))}
          <p className="pt-6 text-sm text-gray-500">
            Más información sobre cómo tratamos tus datos en la{" "}
            <Link to="/politica-de-privacidad" className="underline underline-offset-4">
              política de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
