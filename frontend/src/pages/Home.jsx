import { Link } from "react-router"
import { ArrowRight, ClipboardList, UserCheck, Target, CheckCircle } from "lucide-react"
import HeroVideo from "../components/HeroVideo"
import Reveal from "../components/Reveal"
import card_tulipan from "../assets/images/card-tulipan.webp"
import card_arcoiris from "../assets/images/card-arcoiris.webp"
import card_mariposa from "../assets/images/card-mariposa.webp"

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
                  className="inline-flex items-center justify-center rounded-full bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]"
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
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal as="h2" className="mb-10 font-serif text-3xl font-semibold text-gray-900 md:mb-14 md:text-4xl">
            Qué ofrecemos
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal delay={0} className="flex flex-col overflow-hidden rounded-2xl bg-milele-green-light/60">
              <img
                src={card_tulipan}
                alt="Sala Tulipán, donde trabaja la logopedia"
                width="640"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Logopedia</h3>
                <p className="mt-1 text-sm text-gray-600">Sala Tulipán</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-800">
                  Se enfoca en el desarrollo del lenguaje y la comunicación, abordando problemas como trastornos del habla, deglución, audición, y otros aspectos relacionados con la comunicación verbal y no verbal.
                </p>
                <Link to="/about/patricia" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-milele-cyan-dark">
                  Conocer a Patricia <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={80} className="flex flex-col overflow-hidden rounded-2xl bg-milele-cyan-light/60">
              <img
                src={card_arcoiris}
                alt="Sala Arco Iris, donde trabaja la pedagogía terapéutica"
                width="640"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Pedagogía</h3>
                <p className="mt-1 text-sm text-gray-600">Sala Arco Iris</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-800">
                  Nos centramos en el apoyo escolar para las dificultades de aprendizaje (lectura, escritura, cálculo), bajo rendimiento, falta de motivación y autonomía, problemas en la organización, dificultades socioemocionales, en el desarrollo de habilidades cognitivas.
                </p>
                <Link to="/about/lucia" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-milele-cyan-dark">
                  Conocer a Lucía <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={160} className="flex flex-col overflow-hidden rounded-2xl bg-milele-pink-light">
              <img
                src={card_mariposa}
                alt="Sala Mariposa, donde trabaja la psicología"
                width="640"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">Psicología</h3>
                <p className="mt-1 text-sm text-gray-600">Sala Mariposa</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-800">
                  Trabajamos con técnicas de intervención que promueven el bienestar psicológico, emocional, y social de la persona y su entorno atendiendo a sus necesidades específicas y mejorando su calidad de vida.
                </p>
                <Link to="/about/silvia" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-milele-cyan-dark">
                  Conocer a Silvia <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <Reveal delay={0}>
              <h3 className="font-serif text-xl font-semibold text-gray-900">Seguimiento y Evaluación Continua</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-700">El proceso terapéutico en Milele no termina con las sesiones individuales. Llevamos a cabo un seguimiento constante para evaluar la evolución del paciente y realizar ajustes en el plan de intervención según sea necesario.</p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-serif text-xl font-semibold text-gray-900">Colaboración con Familia y Profesionales</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-700">En nuestro enfoque, es crucial para el éxito de la terapia. Ofrecemos orientación y apoyo a los familiares, con el objetivo de fomentar la continuidad de la intervención fuera del centro.</p>
            </Reveal>
            <Reveal delay={160}>
              <h3 className="font-serif text-xl font-semibold text-gray-900">Enfoque de Prevención y Educación</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-700">Nos importa no solo tratar las dificultades actuales, sino también prevenir futuras complicaciones. Organizamos talleres, charlas y actividades que fomentan el desarrollo continuo en áreas clave de la salud emocional, cognitiva y comunicativa.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-[#f4fbf3] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal as="h2" className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">
            ¿Por qué Milele?
          </Reveal>
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
            <Reveal delay={0}>
              <h3 className="font-serif text-2xl font-medium leading-tight text-gray-900 md:text-[28px]">Equipo Multidisciplinar</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">Equipo multidisciplinar altamente cualificado y en constante formación con un enfoque personalizado para cada paciente y un tratamiento único y adaptado.</p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-serif text-2xl font-medium leading-tight text-gray-900 md:text-[28px]">Compromiso Integral</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">Compromiso con el bienestar integral de cada individuo, atendiendo todas sus necesidades.</p>
            </Reveal>
            <Reveal delay={160}>
              <h3 className="font-serif text-2xl font-medium leading-tight text-gray-900 md:text-[28px]">Seguimiento Constante</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">Seguimiento constante para asegurar el éxito y la evolución positiva del tratamiento.</p>
            </Reveal>
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-milele-lilac px-7 py-3.5 text-base font-semibold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-milele-lilac-dark active:scale-[0.98]"
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
