import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users } from "lucide-react"
import patricia from "../assets/images/patricia1.webp"
import silvia from "../assets/images/silvia2.webp"
import lucia from "../assets/images/lucia2.webp"

// Profesionales de Milele Centro Multidisciplinar
const professionals = [
  {
    id: "patricia",
    name: "Patricia García Díaz",
    role: "Logopeda",
    color: "purple",
    description:
      "Especialista en trastornos del habla y lenguaje con enfoque en intervención temprana. Apasionada por ayudar a las personas a desarrollar su máximo potencial comunicativo.",
    image: patricia,
  },
  {
    id: "silvia",
    name: "Silvia Cabello Dominguez",
    role: "Psicóloga",
    color: "blue",
    description: "Psicóloga especializada en terapia familiar y de pareja. Comprometida con crear espacios seguros donde las personas puedan sanar y crecer emocionalmente.",
    image: silvia,
  },
  {
    id: "lucia",
    name: "Lucía Miñagorri Bandera",
    role: "Pedagogía Terapéutica",
    color: "green",
    description:
      "Especialista en pedagogía terapéutica con experiencia en necesidades educativas especiales. Dedicada a crear estrategias de aprendizaje inclusivas y personalizadas.",
    image: lucia,
  },
]

export default function About() {
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
              En Milele, somos un equipo de tres profesionales apasionadas por el bienestar y desarrollo de las personas. Nos une el compromiso de ofrecer una atención integral y de calidad, creando un espacio donde cada persona se sienta comprendida, apoyada y acompañada en su proceso de crecimiento y superación. Nos inspiramos en la pedagogía del amor, acompañando a cada niño, niña y familia desde una mirada comprensiva, afectiva y personalizada. Creemos que todos los seres humanos tienen un potencial único, y nuestro objetivo es ofrecer las herramientas necesarias para que puedan descubrirlo y desarrollarlo a su ritmo.
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
              Cada miembro de nuestro equipo aporta su experiencia única para brindarte la mejor atención integral.
            </p>
          </div>          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {professionals.map((professional) => {
              const colorClasses = {
                purple: {
                  border: "border-purple-200",
                  roleText: "text-purple-600",
                  linkText: "text-purple-600 hover:text-purple-700",
                  gradient: "from-purple-50 to-white"
                },
                blue: {
                  border: "border-blue-200",
                  roleText: "text-blue-600",
                  linkText: "text-blue-600 hover:text-blue-700",
                  gradient: "from-blue-50 to-white"
                },
                green: {
                  border: "border-green-200",
                  roleText: "text-green-600",
                  linkText: "text-green-600 hover:text-green-700",
                  gradient: "from-green-50 to-white"
                }
              }

              const colors = colorClasses[professional.color] || colorClasses.green

              return (
                <div
                  key={professional.id}
                  className={`group overflow-hidden rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg milele-shadow hover:shadow-xl transition-all duration-300 border ${colors.border} flex flex-col`}
                >
                  <div className="relative w-full overflow-hidden flex-shrink-0">
                    <img
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="mb-2 text-xl font-semibold font-serif text-gray-900">{professional.name}</h3>
                    <p className={`mb-3 text-sm font-medium ${colors.roleText}`}>{professional.role}</p>
                    <p className="mb-4 text-gray-600 text-sm leading-relaxed flex-grow">{professional.description}</p>
                    <Link
                      to={`/about/${professional.id}`}
                      className={`inline-flex items-center text-sm font-medium ${colors.linkText} transition-colors mt-auto`}
                    >
                      Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
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
                Trabajamos en equipo, tanto internamente como con nuestros pacientes, para lograr los mejores
                resultados.
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
              to="/contact"
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
