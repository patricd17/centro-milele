import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

export default function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onNavigate('prev')
          break
        case 'ArrowRight':
          onNavigate('next')
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Prevenir scroll del body cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNavigate])

  if (!isOpen || currentIndex === null) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-full w-full">
        {/* Imagen principal */}
        <div className="relative">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navegación */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Contador de imágenes */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Información de la imagen */}
        <div
          className="mt-4 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-bold text-xl text-gray-900 font-serif mb-2">
            {currentImage.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {currentImage.description}
          </p>
        </div>

        {/* Navegación por puntos */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all ${currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
                  }`}
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate('goto', index)
                }}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
