import { useState } from "react"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import ImageModal from "../components/ImageModal"
import recepcion from "../assets/images/recepcion.webp"
import recepcionMini from "../assets/images/recepcion-mini.webp"
import Salaarcoiris from "../assets/images/Salaarcoiris.webp"
import SalaarcoirisMini from "../assets/images/Salaarcoiris-mini.webp"
import Salamariposa from "../assets/images/Salamariposa.webp"
import SalamariposaMini from "../assets/images/Salamariposa-mini.webp"
import Salatulipan from "../assets/images/Salatulipan.webp"
import SalatulipanMini from "../assets/images/Salatulipan-mini.webp"
import Salauniverso from "../assets/images/Salauniverso.webp"
import SalauniversoMini from "../assets/images/Salauniverso-mini.webp"
import baño from "../assets/images/baño.webp"
import bañoMini from "../assets/images/baño-mini.webp"

// Galería de imágenes de nuestras instalaciones
const galleryImages = [
  {
    src: Salatulipan,
    thumb: SalatulipanMini,
    title: "Sala Tulipán: Logopedia",
    description: "Así como cada tulipán necesita un espacio para crecer, cada persona necesita un lugar para comunicarse, expresarse y desarrollarse.",
  },
  {
    src: Salaarcoiris,
    thumb: SalaarcoirisMini,
    title: "Sala Arco Iris: Pedagogía Terapéutica",
    description: "Como un arcoiris cada niño brilla con sus propios colores y la pedagogía terapéuta le ayuda a brillar en todo su esplendor.",
  },
  {
    src: Salamariposa,
    thumb: SalamariposaMini,
    title: "Sala Mariposa: Psicología",
    description: "En sala mariposa creemos que cada proceso es como una metamorfosis: íntimo y lleno de posibilidades. Ofrecemos un lugar seguro en el que poder desplegar sus alas.",
  },
  {
    src: Salauniverso,
    thumb: SalauniversoMini,
    title: "Sala Universo",
    description: "Donde la imaginación se expande, el juego se convierte en descubrimiento y cada momento es una nueva constelación en su propio cielo. Un lugar pensado para el juego, el movimiento, la comunicación, el aprendizaje, las emociones y la regulación sensorial.",
  },
  {
    src: recepcion,
    thumb: recepcionMini,
    title: "Recepción",
    description: "Os damos la bienvenida en una recepción pensada para que el primer paso hacia el bienestar sea agradable y sereno. Con luz suave, colores armónicos y un ambiente relajante, diseñada para que puedas desconectar y prepararte para la sesión.",
  },
  {
    src: baño,
    thumb: bañoMini,
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
      <Seo
        title="Nuestros espacios · Milele Centro Multidisciplinar, Málaga"
        description="Conoce las salas Tulipán, Arco Iris, Mariposa y Universo, la recepción y el baño adaptado de Milele, en Puerto de la Torre (Málaga)."
      />
      <PageHeader title="Nuestros espacios">
        Un centro pensado para que niños y familias se sientan cómodos desde el primer día.
      </PageHeader>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.title}
                type="button"
                onClick={() => openModal(index)}
                aria-label={`Ver ${image.title} en grande`}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-milele-cyan-dark ${
                  index === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-square md:aspect-[4/3]"
                }`}
              >
                <img
                  src={image.thumb}
                  alt={image.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white md:text-sm">
                  {image.title.split(":")[0]}
                </span>
              </button>
            ))}
          </div>
          <p className="mx-auto mt-3 max-w-6xl text-sm text-gray-500">Pulsa una foto para verla en grande.</p>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10">
            <div className="border-t-2 border-gray-900 pt-4">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Salas individuales</h2>
              <p className="mt-2 leading-relaxed text-gray-700">Una sala por área, con el material adaptado a cada edad.</p>
            </div>
            <div className="border-t-2 border-gray-900 pt-4">
              <h2 className="font-serif text-xl font-semibold text-gray-900">Accesible</h2>
              <p className="mt-2 leading-relaxed text-gray-700">Baño adaptado para personas con movilidad reducida.</p>
            </div>
          </div>
        </div>
      </section>

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
