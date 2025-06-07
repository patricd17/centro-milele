import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users, Star, Sparkles, ClipboardList, UserCheck, Target, CheckCircle, MessageSquare, BookOpen, Shield, TrendingUp, HandHeart, GraduationCap } from "lucide-react"
import tulipanes from "../assets/images/tulipanes.webp"

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid max-w-6xl mx-auto gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl font-serif">
                <span className="moontime-light text-5xl md:text-8xl block mb-2">Milele</span>
                Para siempre
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg mx-auto lg:mx-0">
                En Milele, cada persona es única, y por eso nos esforzamos en ofrecer soluciones terapéuticas que se ajusten a sus necesidades.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                <img
                  src={tulipanes}
                  alt="Milele Centro Multidisciplinar"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología de trabajo */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestra <span className="gradient-text">Metodología</span> de Trabajo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              En Centro Milele, ofrecemos un enfoque integral y personalizado para el tratamiento de nuestros pacientes, basado en la colaboración entre profesionales de diversas disciplinas: logopedia, pedagogía y psicología. Nuestro objetivo es abordar de manera conjunta las necesidades de cada individuo, promoviendo su desarrollo y bienestar desde una perspectiva global.
            </p>
          </div>          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Línea vertical central - oculta en móvil */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-milele-green via-milele-cyan to-milele-pink opacity-30 hidden lg:block"></div>

              {/* Paso 1 */}
              <div className="relative flex flex-col lg:flex-row items-center mb-16">
                <div className="w-full lg:w-1/2 lg:pr-8 lg:text-right mb-8 lg:mb-0">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg milele-shadow border border-milele-green/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-serif">Evaluación Integral y Personalizada</h3>
                    <p className="text-gray-600 mb-6">
                      El primer paso en nuestra metodología es realizar una evaluación completa que permita conocer en profundidad las necesidades del paciente. Este proceso involucra:
                    </p>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-green-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Entrevistas iniciales con los familiares o cuidadores, para obtener información sobre el historial del paciente, sus preocupaciones y objetivos.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-green-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Valoración específica de cada área, utilizando herramientas y pruebas especializadas que permiten identificar cualquier dificultad o área que necesite atención.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-green to-milele-cyan rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10 mb-8 lg:mb-0">
                  <ClipboardList className="h-8 w-8" />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="bg-gradient-to-br from-milele-green/10 to-milele-cyan/10 rounded-2xl p-6 lg:p-8 border border-milele-green/20">
                    <div className="text-4xl lg:text-6xl font-bold text-milele-green-dark opacity-20 mb-4 font-serif">01</div>
                    <h4 className="text-lg lg:text-xl font-semibold text-milele-green-dark mb-2">Primer Paso</h4>
                    <p className="text-gray-600">Conocimiento profundo del paciente y sus necesidades específicas</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative flex flex-col lg:flex-row items-center mb-16">
                <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-milele-cyan/10 to-milele-pink/10 rounded-2xl p-6 lg:p-8 border border-milele-cyan/20">
                    <div className="text-4xl lg:text-6xl font-bold text-milele-cyan-dark opacity-20 mb-4 font-serif">02</div>
                    <h4 className="text-lg lg:text-xl font-semibold text-milele-cyan-dark mb-2">Colaboración</h4>
                    <p className="text-gray-600">Trabajo coordinado entre profesionales especializados</p>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-cyan to-milele-pink rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10 mb-8 lg:mb-0 order-1 lg:order-2">
                  <UserCheck className="h-8 w-8" />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-8 lg:text-left mb-8 lg:mb-0 order-3">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg milele-shadow border border-milele-cyan/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-serif">Trabajo Multidisciplinar</h3>
                    <p className="text-gray-600">
                      Contamos con un equipo profesional altamente cualificado que trabajan de forma coordinada para ofrecer un tratamiento personalizado y efectivo. Nos reunimos periódicamente para compartir avances y ajustar las intervenciones, garantizando que cada paciente reciba el mejor tratamiento en todas las áreas involucradas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 lg:text-right mb-8 lg:mb-0">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg milele-shadow border border-milele-pink/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-serif">Plan de Intervención Personalizado</h3>
                    <p className="text-gray-600 mb-6">
                      Una vez realizada la evaluación, diseñamos un plan de intervención individualizado que incluye:
                    </p>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Objetivos específicos para cada disciplina.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Técnicas y herramientas adaptadas a cada área, utilizando métodos basados en la evidencia científica y ajustados a la edad y situación del paciente.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Planificación de sesiones de intervención, donde cada profesional lleva a cabo su trabajo de forma complementaria maximizando resultados.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-pink to-milele-green rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10 mb-8 lg:mb-0">
                  <Target className="h-8 w-8" />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="bg-gradient-to-br from-milele-pink/10 to-milele-green/10 rounded-2xl p-6 lg:p-8 border border-milele-pink/20">
                    <div className="text-4xl lg:text-6xl font-bold text-milele-pink-dark opacity-20 mb-4 font-serif">03</div>
                    <h4 className="text-lg lg:text-xl font-semibold text-milele-pink-dark mb-2">Implementación</h4>
                    <p className="text-gray-600">Plan personalizado con objetivos específicos y seguimiento continuo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Qué ofrecemos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl font-serif">
            Qué <span className="gradient-text">Ofrecemos</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-gradient-to-br from-milele-green-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-green/20">
              <div className="mb-4 flex items-center">
                <MessageSquare className="h-6 w-6 text-milele-green-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia de Logopedia</h3>
              </div>
              <p className="text-gray-600">
                Se enfoca en el desarrollo del lenguaje y la comunicación, abordando problemas como trastornos del habla, deglución, audición, y otros aspectos relacionados con la comunicación verbal y no verbal.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-cyan/20">
              <div className="mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-milele-cyan-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia Pedagógica</h3>
              </div>
              <p className="text-gray-600">
                Nos centramos en el apoyo escolar para las dificultades de aprendizaje (lectura, escritura, cálculo), bajo rendimiento, falta de motivación y autonomía, problemas en la organización, dificultades socioemocionales, en el desarrollo de habilidades cognitivas.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-pink-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-pink/20">
              <div className="mb-4 flex items-center">
                <Brain className="h-6 w-6 text-milele-pink-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia Psicológica</h3>
              </div>
              <p className="text-gray-600">
                Trabajamos con técnicas de intervención que promueven el bienestar psicológico, emocional, y social de la persona y su entorno atendiendo a sus necesidades específicas y mejorando su calidad de vida.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-green-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-green/20">
              <div className="mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-milele-green-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Seguimiento y Evaluación Continua</h3>
              </div>
              <p className="text-gray-600">
                El proceso terapéutico en Milele no termina con las sesiones individuales. Llevamos a cabo un seguimiento constante para evaluar la evolución del paciente y realizar ajustes en el plan de intervención según sea necesario.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-cyan/20">
              <div className="mb-4 flex items-center">
                <HandHeart className="h-6 w-6 text-milele-cyan-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Colaboración con Familia y Profesionales</h3>
              </div>
              <p className="text-gray-600">
                En nuestro enfoque, es crucial para el éxito de la terapia. Ofrecemos orientación y apoyo a los familiares, con el objetivo de fomentar la continuidad de la intervención fuera del centro.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-pink-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-pink/20">
              <div className="mb-4 flex items-center">
                <Shield className="h-6 w-6 text-milele-pink-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Enfoque de Prevención y Educación</h3>
              </div>
              <p className="text-gray-600">
                Nos importa no solo tratar las dificultades actuales, sino también prevenir futuras complicaciones. Organizamos talleres, charlas y actividades que fomentan el desarrollo continuo en áreas clave de la salud emocional, cognitiva y comunicativa.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Por qué elegirnos */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl font-serif">
            ¿Por qué <span className="moontime-font text-5xl gradient-text">Milele</span>?
          </h2>          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex items-start p-5 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white flex-shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold font-serif">Equipo Multidisciplinar</h3>
                <p className="text-gray-600 text-sm">
                  Equipo multidisciplinar altamente cualificado y en constante formación con un enfoque personalizado para cada paciente y un tratamiento único y adaptado.
                </p>
              </div>
            </div>

            <div className="flex items-start p-5 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white flex-shrink-0">
                <HandHeart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold font-serif">Compromiso Integral</h3>
                <p className="text-gray-600 text-sm">
                  Compromiso con el bienestar integral de cada individuo, atendiendo todas sus necesidades.
                </p>
              </div>
            </div>

            <div className="flex items-start p-5 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white flex-shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold font-serif">Seguimiento Constante</h3>
                <p className="text-gray-600 text-sm">
                  Seguimiento constante para asegurar el éxito y la evolución positiva del tratamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contáctenos */}
      <section className="bg-milele-gradient py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">
              ¿Listo para dar el <span className="script-font text-4xl md:text-5xl">primer paso</span>?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Contáctanos hoy mismo para programar tu primera consulta o resolver cualquier duda que tengas.
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
