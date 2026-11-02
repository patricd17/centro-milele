import { useEffect, useRef, useState } from "react"
import mp4 from "../assets/video/hero-milele.mp4"
import webm from "../assets/video/hero-milele.webm"
import poster from "../assets/video/hero-poster.webp"
import finalFrame from "../assets/video/hero-final.webp"

const ALT = "Dos niños en silueta junto a tulipanes y mariposas, Milele Centro Multidisciplinar"

// Vídeo de la portada: se reproduce una vez cada vez que se entra o se recarga y se queda en la
// última imagen. Si el dispositivo pide menos movimiento, o el navegador no deja reproducirlo
// solo, se muestra directamente la imagen final.
export default function HeroVideo({ className }) {
  const ref = useRef(null)
  const [still, setStill] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  )

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.play?.().catch(() => setStill(true))
  }, [])

  if (still) {
    return <img src={finalFrame} alt={ALT} width="720" height="720" className={className} />
  }

  return (
    <video
      ref={ref}
      className={className}
      width="720"
      height="720"
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={poster}
      role="img"
      aria-label={ALT}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  )
}
