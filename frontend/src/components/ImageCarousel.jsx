import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function ImageCarousel({
  images,
  autoPlayDelay = 5000,
  onImageClick,
  className = ""
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToImage = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(nextImage, autoPlayDelay)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused, nextImage, autoPlayDelay])

  // Pausar auto-play al hacer hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex)
    }
  }

  if (!images || images.length === 0) return null

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen principal */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl milele-shadow group">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={handleImageClick}
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

        {/* Información de la imagen */}
        <div className="absolute bottom-6 left-6 text-white pointer-events-none">
          <h3 className="text-2xl font-bold font-serif mb-2 drop-shadow-lg">
            {images[currentIndex]?.title}
          </h3>
          <p className="text-white/90 drop-shadow-lg">
            {images[currentIndex]?.description}
          </p>
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg hover:bg-white transition-all hover:scale-110 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg hover:bg-white transition-all hover:scale-110 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Contador y controles de reproducción */}
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={toggleAutoPlay}
            className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all cursor-pointer"
            aria-label={isAutoPlaying ? "Pausar reproducción automática" : "Activar reproducción automática"}
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>

        {/* Indicador de clic para ampliar */}
        <div className="absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Click para ampliar
        </div>
      </div>

      {/* Navegación por puntos con contenedor con altura suficiente */}
      <div className="flex justify-center mt-8 pb-2">
        <div className="flex space-x-3 p-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index
                ? "bg-milele-cyan-dark scale-150 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
              onClick={() => goToImage(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>      {/* Barra de progreso del auto-play */}
      {isAutoPlaying && !isPaused && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 rounded-b-2xl overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-b-2xl"
            style={{
              animation: `progressBar ${autoPlayDelay}ms linear infinite`,
              animationFillMode: 'forwards',
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes progressBar {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  )
}
