import { Link, useParams, Navigate } from "react-router"
import { ArrowLeft, Award, Heart, BookOpen, Smile } from "lucide-react"
import patricia from "../assets/images/patricia2.webp"
import silvia from "../assets/images/silvia1.webp"
import lucia from "../assets/images/lucia1.webp"

// Profesionales de Milele Centro Multidisciplinar
const professionals = {
  patricia: {
    name: "Patricia García Díaz",
    role: "Logopeda",
    color: "purple",
    license: "L-28/46758",
    image: patricia,
    specialties: [
      "Trastornos del habla y lenguaje",
      "Intervención temprana",
      "Dificultades de deglución",
      "Terapia vocal",
      "Comunicación alternativa"
    ],
    approach:
      "Mi enfoque se centra en la intervención temprana y personalizada, utilizando técnicas innovadoras que respetan el ritmo de cada persona. Creo firmemente en el poder de la comunicación como herramienta de conexión y desarrollo personal.",
    why: "Decidí ser logopeda porque desde pequeña me fascinaba observar cómo las personas se comunican de maneras únicas y especiales. Quería formar parte de ese proceso tan importante y ayudar a quienes tienen dificultades para expresarse, porque creo que todos merecen ser escuchados y comprendidos.",
    passion:
      "Lo que más me emociona de mi trabajo es ver esa primera palabra clara, esa frase completa o simplemente la sonrisa de satisfacción cuando alguien logra comunicar lo que siente. Cada avance, por pequeño que parezca, es una gran victoria que celebramos juntos.",
    hobbies:
      "Fuera del trabajo disfruto muchísimo de la música - toco el piano y canto en un coro local. También me encanta la naturaleza: hago senderismo los fines de semana y tengo un pequeño huerto en casa donde cultivo mis propias hierbas aromáticas.",
  },
  silvia: {
    name: "Silvia Cabello",
    role: "Psicóloga",
    color: "blue",
    license: "P-28/32156",
    image: silvia,
    specialties: [
      "Terapia familiar y de pareja",
      "Ansiedad y depresión",
      "Trastornos del estado de ánimo",
      "Trauma y estrés postraumático",
      "Desarrollo personal"
    ],
    approach:
      "Mi práctica se basa en crear un espacio seguro y empático donde las personas puedan explorar sus emociones libremente. Combino diferentes enfoques terapéuticos adaptándome a las necesidades únicas de cada persona, siempre desde el respeto y la comprensión.",
    why: "Elegí la psicología porque siempre me ha conmovido profundamente la capacidad humana de sanar y transformarse. Desde adolescente sentía una llamada natural hacia ayudar a otros, y descubrí que la terapia es una de las formas más hermosas de acompañar a las personas en sus momentos más vulnerables.",
    passion:
      "Mi mayor satisfacción viene de presenciar esos momentos de 'iluminación' cuando mis pacientes descubren nuevas perspectivas sobre sí mismos. Me emociona profundamente ser testigo de cómo las personas recuperan su fortaleza interior y encuentran nuevas formas de relacionarse consigo mismas y con otros.",
    hobbies:
      "Soy una apasionada de la lectura, especialmente de novelas psicológicas y libros de crecimiento personal. También practico yoga y meditación diariamente, actividades que me ayudan a mantener mi equilibrio emocional. Los fines de semana disfruto cocinando platos nuevos y compartiendo comidas con amigos y familia.",
  },
  lucia: {
    name: "Lucía Miñagorri Bandera",
    role: "Pedagogía Terapéutica",
    color: "green",
    license: "PT-28/89234",
    image: lucia,
    specialties: [
      "Necesidades educativas especiales",
      "Trastornos del aprendizaje",
      "TDAH y funciones ejecutivas",
      "Estimulación cognitiva",
      "Adaptaciones curriculares"
    ],
    approach:
      "Mi metodología se basa en la pedagogía inclusiva y personalizada, diseñando estrategias únicas para cada estudiante. Trabajo desde las fortalezas de cada persona, creando puentes hacia el aprendizaje que respeten sus ritmos y estilos particulares.",
    why: "Mi vocación por la pedagogía terapéutica surgió durante mis prácticas universitarias, cuando trabajé con niños con necesidades especiales. Quedé impactada por su capacidad de superación y por cómo pequeños ajustes en el aprendizaje podían abrir mundos completamente nuevos para ellos.",
    passion:
      "Lo que más me llena de energía es ese momento mágico cuando un estudiante que parecía 'bloqueado' de repente encuentra su camino hacia el aprendizaje. Me fascina descubrir las múltiples formas de inteligencia que cada persona posee y ayudarles a desarrollar todo su potencial único.",
    hobbies:
      "Soy muy creativa en mi tiempo libre: pinto acuarelas, hago manualidades y diseño materiales educativos personalizados. También me encanta viajar y conocer diferentes culturas, lo que enriquece mi perspectiva pedagógica. Practico pilates y salgo a correr por las mañanas para mantenerme activa.",
  },
}

export default function Professional() {
  const { id } = useParams()
  const professional = professionals[id]

  if (!professional) {
    return <Navigate to="/about" replace />
  }

  // Color themes for each specialty
  const colorThemes = {
    purple: {
      specialtyBg: "from-purple-100 to-purple-50",
      specialtyBorder: "border-purple-200",
      specialtyTag: "bg-purple-100 text-purple-700 border-purple-200",
      approachBg: "from-purple-50 to-white",
      approachBorder: "border-purple-100",
      whyBg: "from-purple-100 to-white",
      whyBorder: "border-purple-200",
      whyIcon: "text-purple-600",
      passionBg: "from-purple-50 to-white",
      passionBorder: "border-purple-100",
      passionIcon: "text-purple-500",
      hobbiesBg: "from-purple-100 to-white",
      hobbiesBorder: "border-purple-200",
      hobbiesIcon: "text-purple-600"
    },
    blue: {
      specialtyBg: "from-blue-100 to-blue-50",
      specialtyBorder: "border-blue-200",
      specialtyTag: "bg-blue-100 text-blue-700 border-blue-200",
      approachBg: "from-blue-50 to-white",
      approachBorder: "border-blue-100",
      whyBg: "from-blue-100 to-white",
      whyBorder: "border-blue-200",
      whyIcon: "text-blue-600",
      passionBg: "from-blue-50 to-white",
      passionBorder: "border-blue-100",
      passionIcon: "text-blue-500",
      hobbiesBg: "from-blue-100 to-white",
      hobbiesBorder: "border-blue-200",
      hobbiesIcon: "text-blue-600"
    },
    green: {
      specialtyBg: "from-green-100 to-green-50",
      specialtyBorder: "border-green-200",
      specialtyTag: "bg-green-100 text-green-700 border-green-200",
      approachBg: "from-green-50 to-white",
      approachBorder: "border-green-100",
      whyBg: "from-green-100 to-white",
      whyBorder: "border-green-200",
      whyIcon: "text-green-600",
      passionBg: "from-green-50 to-white",
      passionBorder: "border-green-100",
      passionIcon: "text-green-500",
      hobbiesBg: "from-green-100 to-white",
      hobbiesBorder: "border-green-200",
      hobbiesIcon: "text-green-600"
    }
  }

  const theme = colorThemes[professional.color] || colorThemes.green

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-16 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">          <Link
          to="/about"
          className="mb-8 inline-flex items-center text-sm font-medium text-black hover:text-black/80 transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Volver a Quienes Somos
        </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">{professional.name}</span>
            </h1>
            <p className="text-lg font-medium text-black/90">{professional.role}</p>
          </div>
        </div>
      </section>

      {/* Professional Details */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">            <div className="relative h-96 lg:h-auto overflow-hidden rounded-2xl shadow-2xl milele-shadow">
            <img
              src={professional.image || "/placeholder.svg"}
              alt={professional.name}
              className="object-cover w-full h-full"
            />
          </div>            <div className="space-y-8">
              <div className={`bg-gradient-to-br ${theme.specialtyBg} p-6 rounded-2xl shadow-lg milele-shadow border ${theme.specialtyBorder}`}>
                <p className="text-gray-600 mb-4">
                  <strong>Número de colegiado:</strong> {professional.license}
                </p>

                <div className="mb-6">
                  <h2 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                    <Award className={`mr-2 h-5 w-5 ${theme.whyIcon}`} /> Especialidades
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${theme.specialtyTag} rounded-full text-sm border`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${theme.approachBg} p-6 rounded-2xl shadow-lg milele-shadow border ${theme.approachBorder}`}>
                <h2 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                  <BookOpen className={`mr-2 h-5 w-5 ${theme.passionIcon}`} /> Mi Enfoque
                </h2>
                <p className="text-gray-600 leading-relaxed">{professional.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16">        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className={`bg-gradient-to-br ${theme.whyBg} p-8 rounded-2xl shadow-lg milele-shadow border ${theme.whyBorder}`}>
            <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
              <Heart className={`mr-3 h-6 w-6 ${theme.whyIcon}`} /> Por qué decidí ser{" "}
              {professional.role.toLowerCase()}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{professional.why}</p>
          </div>

          <div className={`bg-gradient-to-br ${theme.passionBg} p-8 rounded-2xl shadow-lg milele-shadow border ${theme.passionBorder}`}>
            <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
              <Smile className={`mr-3 h-6 w-6 ${theme.passionIcon}`} /> Lo que me apasiona de mi trabajo
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{professional.passion}</p>
          </div>

          <div className={`bg-gradient-to-br ${theme.hobbiesBg} p-8 rounded-2xl shadow-lg milele-shadow border ${theme.hobbiesBorder}`}>
            <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
              <Smile className={`mr-3 h-6 w-6 ${theme.hobbiesIcon}`} /> Lo que me apasiona fuera del trabajo
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{professional.hobbies}</p>
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
              ¿Te gustaría <span className="script-font text-4xl md:text-5xl text-black">trabajar</span> conmigo?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una consulta para conocer mi enfoque y cómo puedo ayudarte en tu proceso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
            >
              Contactar ahora <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
