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
    license: "29/2333",
    image: patricia,
    specialties: [
      "Trastornos del habla y lenguaje",
      "Atención temprana",
      "Dificultades de deglución",
      "Terapia vocal",
      "Transtorno por Déficit de Atención e Hiperactividad (TDAH)",
    ],
    approach:
      "Mi enfoque se basa en la atención personalizada y el trabajo multidisciplinar, colaborando estrechamente con otros profesionales para ofrecer un tratamiento que se adapte a las necesidades específicas de cada paciente. Mi objetivo es ayudar a que cada persona supere sus dificultades, desarrollando sus habilidades de comunicación y favoreciendo su bienestar.",
    why: "Cada caso es único, y me apasiona poder acompañar a los pacientes y sus familias en su camino hacia el bienestar,con el compromiso y la empatía que considero esenciales en el proceso terapéutico. El poder ayudar a alguien a superar una barrera comunicativa es una de las experiencias mas gratificantes que puedo vivir.",
    passion:
      "Lo que más me emociona de mi trabajo es ver esa primera palabra clara, esa frase completa o simplemente la sonrisa de satisfacción cuando alguien logra comunicar lo que siente. Cada avance, por pequeño que parezca, es una gran victoria que celebramos juntos.Además, me encanta poder trabajar en equipo con otros profesionales del centro. Creo firmemente que el trabajo multidisciplinar es esencial para abordar cualquier dificultad de manera integral y eficaz.",
    hobbies:
      "En mi tiempo libre, disfruto de estar con mi familia, ir a la playa a conectar con la naturaleza, andar sintiendo la brisa del mar, la fotografía, pintar, los animales.. Siempre intento introducir en mi día a día algo de lo que me hace desconectar de la rutina y conectar conmigo misma. Esto me ayuda a mantener un equilibrio, ya que considero que tanto la mente como el cuerpo necesitan cuidado. Y, por supuesto, me encanta seguir formándome, ya que la logopedia es un campo que siempre está en constante evolución.",
  },
  silvia: {
    name: "Silvia Cabello Domínguez",
    role: "Psicóloga Sanitaria",
    color: "blue",
    license: "AO11742",
    image: silvia,
    specialties: [
      "Atención temprana (AT)",
      "Transtorno del Espectro Autista (TEA)",
      "Parálisis cerebral en AT",
      "Programa avanzado en Apego",
      "Psicología Perinatal",
      "Musicoterapia",
    ],
    approach:
      "Siempre he sido una niña a la que le ha gustado ayudar y acompañar a los demás, tanto en sus desafíos como en sus fortalezas. Recuerdo con especial cariño a una niña con necesidades que estaba en mi clase de primaria. Durante los años que compartimos, aprendimos mucho la una de la otra. Sin darnos cuenta, ella me enseñó cariño, paciencia, comprensión, empatía y un sinfín de cosas más. Con el paso de los cursos, las materias se complicaban y tuve que dedicar mucho esfuerzo para superarlas con éxito. De hecho, no sabía ni qué estudiar, pero sí tenía claro que no haría selectividad, ya que jamás me veía estudiando una carrera. Gracias a una persona muy especial que me llevó “a rastras” a hacer la selectividad y a elegir varias opciones (economía, psicología, trabajo social… sí, economía no tiene sentido ahí, lo sé, jajaja), terminé entrando en psicología. Casi al final de la carrera, me enamoré de la Atención Temprana gracias a la mujer que la impartía. Me hizo reencontrarme con esos sentimientos de cariño, paciencia y empatía que tuve en primaria. Tras varios años trabajando, pude hacer el Máster en Atención Temprana, donde aprendí una barbaridad en las prácticas gracias a tutoras maravillosas. Fue ahí donde me enamoré del TEA, lo que me llevó a especializarme aún más en ello.",

    why: "Desde pequeña sentía una llamada natural hacia ayudar a otros, y descubrí que la terapia es una de las formas más hermosas de acompañar a las personas en sus momentos más vulnerables.",
    passion:
      "Acompañar a las familias en cada uno de los progresos de los peques, disfrutar las sesiones, sacar la niña que llevo dentro, compartir esa inocencia y esa alegría. Por supuesto, no todos son buenos momentos, hay muchos muy duros pero son esos los que me hacen sacar fuerzas para continuar luchando por todos ellos.",
    hobbies:
      "Lo que más disfruto es pasar tiempo con mis animales, son una parte esencial en mi día a día, me recargan de energía en cuanto los veo corriendo hacia mí al llegar a casa. También me apasiona comer, y ¡qué mejor compañía que la de mi pareja, familia y amigos para hacerlo! Disfrutar de ello y la naturaleza, ya sea playa o montaña, me encanta. Aquí donde me veis, fui una niña tímida, introvertida y con poca confianza en mí misma (algo que sigo trabajando día a día). Hoy soy quien soy gracias a toda mi trayectoria y a unas personitas muy especiales, a quienes siempre estaré eternamente agradecida. ¿Te unes a esta gran aventura llamada Milele?",
  },
  lucia: {
    name: "Lucía Miñagorri Bandera",
    role: "Pedagoga Terapéutica",
    color: "green",
    license: "4079",
    image: lucia,
    specialties: [
      "Necesidades educativas especiales",
      "Dificultades específicas de Aprendizaje",
      "TDAH",
      "Problemas graves de conducta",
      
    ],
    approach:
      "Se centra en la atención individualizada de mi alumnado, creando una red de apoyo entre los diferentes profesionales y las familias, con el objetivo de abordar de manera integral las necesidades específicas de cada niño y niña, y lograr así un desarrollo óptimo en distintas áreas. Durante las intervenciones, dedicamos el tiempo a construir el aprendizaje sobre tres pilares que, para mí, son fundamentales: la conexión con el alumnado, permitirnos ser con todas nuestras emociones y aprender a través del movimiento. Todo ello se lleva a cabo mediante metodologías adaptadas a cada niño y niña, fomentando así su autonomía, confianza en sí mismos y motivación por el aprendizaje. Como maestra, defiendo la pedagogía del amor, para que todo mi alumnado se sienta comprendido, valorado y, sobre todo, capaz de lograr todos sus objetivos.¿Y por qué maestra? Ser maestra no estaba en mis planes. De hecho, siempre fui considerada una estudiante de 'fracaso escolar'. Pero creo que ahí está la clave de todo. Por eso me he convertido en la maestra que necesité cuando era pequeña: alguien que sabe mirar más allá de una dificultad de aprendizaje, que prioriza las emociones y se preocupa por acompañar y hacer el camino más sencillo.", 
    why: "Decidí estudiar el Grado Superior de Integración Social, realizando mis prácticas en el Aula Hospitalaria del Materno Infantil de Málaga, atendiendo a cuatro familias. No sé si ellos aún me recuerdan, pero para mí fueron los verdaderos protagonistas de mi historia: Jose, Alejandra, Jesús y Kevin. Todos padecían enfermedades raras y severas. Pero uno de ellos, Jose, me permitió lo más importante: acompañarle durante sus últimos años. Él me enseñó el valor del tiempo, el arte de acompañar, a vivir el presente, a respetar los ritmos de cada alumno, el poder de ser diferentes y luchar por los sueños... Me llenó la vida de colores. Él fue el motivo por el que quise ser maestra de Pedagogía Terapéutica.",
    passion:
      "Cada familia y cada historia me han llevado hasta Milele. Considero que parte de mi personalidad alegre y paciente se la debo a ellos, pues me han enseñado a valorar la importancia de cada logro y cada pequeño avance que conseguimos juntos. Esto es lo que más valoro de mi trabajo: la importancia de ser un equipo con mis compañeras y las familias, además de continuar creciendo y formándome para ofrecer un servicio lo más integral posible y mejorar la calidad de vida de mis niños y niñas.",
    hobbies:
      "Disfruto del equilibrio que me brinda pasar tiempo conmigo misma, reconectar y recargar energías. Valoro profundamente cada momento con mis seres queridos, ya que mi familia y amigos son una fuente constante de inspiración y alegría. Me apasionan la música, el mar, el deporte, la montaña y, por supuesto, la compañía de mis gatos.",
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
