import { useState } from "react"
import { MapPin, ChevronLeft, ChevronRight, Home, Sparkles, ArrowRight, Clock, Users, Shield, Heart } from "lucide-react"
import ImageCarousel from "../components/ImageCarousel"
import ImageModal from "../components/ImageModal"
import recepcion from "../assets/images/recepcion.webp"
import Salaarcoiris from "../assets/images/Salaarcoiris.webp"
import Salamariposa from "../assets/images/Salamariposa.webp"
import Salatulipan from "../assets/images/Salatulipan.webp"
import Salauniverso from "../assets/images/Salauniverso.webp"
import baño from "../assets/images/baño.webp"

// Galería de imágenes de nuestras instalaciones
const galleryImages = [
  {
    src: recepcion,
    title: "Recepción",
    description: "Os damos la bienvenida en una recepción pensada para que el primer paso hacia el bienestar sea agradable y sereno. Con luz suave, colores armónicos y un ambiente relajante, diseñada para que puedas desconectar y prepararte para la sesión.",
  },
  {
    src: Salaarcoiris,
    title: "Sala Arco Iris: Pedagogía Terapéutica",
    description: "Como un arcoiris cada niño brilla con sus propios colores y la pedagogía terapéuta le ayuda a brillar en todo su esplendor.",
  },
  {
    src: Salamariposa,
    title: "Sala Mariposa: Psicología",
    description: "En sala mariposa creemos que cada proceso es como una metamorfosis: íntimo y lleno de posibilidades. Ofrecemos un lugar seguro en el que poder desplegar sus alas.",
  },
  {
    src: Salatulipán,
    title: "Sala Tulipán: Logopedia",
    description: "Así como cada tulipán necesita un espacio para crecer, cada persona necesita un lugar para comunicarse, expresarse y desarrollarse.",
  },
  {
    src: Salauniverso,
    title: "Sala Universo",
    description: "Donde la imaginación se expande, el juego se convierte en descubrimiento y cada momento es una nueva constelación en su propio cielo. Un lugar pensado para el juego, el movimiento, la comunicación, el aprendizaje, las emociones y la regulación sensorial.",
  },
  {
    src: baño,
    title: "Baño",   
    description: "Contamos con un baño unisex adaptado para personas con movilidad reducida, diseñado para ofrecer comodidad, seguridad y accesibilidad a todos nuestros visitantes.",
  }
]

export default function Spaces() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (index) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateModal = (direction, targetIndex = null) => {
    if (targetIndex !== null) {
      setSelectedImage(targetIndex)
      return
    }

    if (direction === 'next') {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length)
    } else if (direction === 'prev') {
      setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Nuestras Instalaciones</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              Descubre nuestro centro multidisciplinar, diseñado para crear un ambiente acogedor y profesional donde
              puedas sentirte cómodo durante tus sesiones terapéuticas.
            </p>
          </div>
        </div>
      </section>      {/* Main Gallery Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Image Carousel */}
            <div className="mb-12">
              <ImageCarousel
                images={galleryImages}
                onImageClick={openModal}
                autoPlayDelay={6000}
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 font-serif">
                Galería <span className="gradient-text">Completa</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-gray-800 p-2 rounded-lg text-sm font-medium">
                        Ver imagen
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>            {/* Centro Milele Information */}
            <div className="bg-white rounded-2xl shadow-xl milele-shadow border border-milele-green/10 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mr-6 shadow-lg">
                    <Home className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 font-serif">Centro Milele</h2>
                    <p className="text-lg text-gray-600 mt-1">Espacio Multidisciplinar de Bienestar</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Nuestro centro multidisciplinar ha sido diseñado meticulosamente para crear un ambiente terapéutico
                  óptimo y acogedor. Cada espacio refleja nuestro compromiso con el bienestar y la comodidad de
                  nuestros pacientes, proporcionando un entorno donde la sanación y el crecimiento personal pueden
                  florecer naturalmente.
                </p>

                {/* Características principales en grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-milele-cyan-light to-white p-6 rounded-xl border border-milele-cyan/20">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-milele-cyan-dark rounded-full flex items-center justify-center mr-3">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold font-serif text-gray-900">Instalaciones</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Salas de terapia individual",
                        "Espacios adaptados para niños",
                        "Área de juegos terapéuticos",
                        "Iluminación natural optimizada",
                        "Mobiliario especializado",
                        "Accesibilidad completa"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-milele-cyan-dark rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-milele-pink-light to-white p-6 rounded-xl border border-milele-pink/20">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-milele-pink-dark rounded-full flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold font-serif text-gray-900">Ubicación</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-900">Calle Lope de Rueda, 78a</p>
                        <p className="text-gray-700">Puerto de la Torre, 29190 Málaga</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Transporte:</h4>
                        <p className="text-gray-600 text-sm">
                          Excelente conexión con transporte público y fácil acceso desde el centro de Málaga.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Valores y compromisos */}
                <div className="bg-gradient-to-br from-milele-green-light to-white p-6 rounded-xl border border-milele-green/20">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-milele-green-dark rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-gray-900">Nuestro Compromiso</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                        <Clock className="h-6 w-6 text-milele-green-dark" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Horarios Flexibles</h4>
                      <p className="text-sm text-gray-600">Adaptados a tus necesidades</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                        <Users className="h-6 w-6 text-milele-green-dark" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Atención Personalizada</h4>
                      <p className="text-sm text-gray-600">Cada persona es única</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                        <Shield className="h-6 w-6 text-milele-green-dark" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Confidencialidad</h4>
                      <p className="text-sm text-gray-600">Privacidad garantizada</p>
                    </div>
                  </div>
                </div>
              </div>
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
              ¿Te gustaría{" "}
              <span className="script-font text-4xl md:text-5xl text-black">visitarnos</span>?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una cita para conocer nuestras instalaciones personalmente y descubrir cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
              >
                Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        images={galleryImages}
        currentIndex={selectedImage}
        onNavigate={navigateModal}
      />
    </>
  )
}
