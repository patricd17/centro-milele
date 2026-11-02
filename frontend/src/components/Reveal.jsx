import { useEffect, useRef, useState } from "react"

// Hace aparecer su contenido una sola vez, subiendo suavemente, cuando llega a la pantalla.
// Con «reducir movimiento» activado, o si el navegador no puede observarlo, se ve ya en su sitio.
export default function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const Component = as
  const ref = useRef(null)
  const [shown, setShown] = useState(() => {
    if (typeof window === "undefined") return true
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      typeof window.IntersectionObserver === "undefined"
    )
  })

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shown])

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
