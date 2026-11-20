import { useEffect, useRef, useState } from "react"

const MS_TITULO = 55 // milisegundos por letra del titular
const MS_TEXTO = 26 // milisegundos por letra de la segunda línea

// Al llegar a ella al bajar, la frase se escribe sola, una única vez: primero el titular y después el texto.
// El texto completo está siempre en la página para lectores de pantalla y buscadores (solo se anima lo visual),
// el hueco se reserva desde el principio para que nada salte, y con «reducir movimiento» sale entera al momento.
export default function FraseEscrita({ titulo, texto, className = "" }) {
  const ref = useRef(null)
  const [visto, setVisto] = useState(false)
  const [reducido] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false)
  const [n, setN] = useState(0) // letras escritas en total (titular + texto)
  const total = titulo.length + texto.length

  useEffect(() => {
    const el = ref.current
    if (!el || reducido || !("IntersectionObserver" in window)) {
      setVisto(true)
      setN(total)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisto(true)
          io.disconnect()
        }
      },
      { threshold: 0.7 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reducido, total])

  useEffect(() => {
    if (!visto || reducido || n >= total) return
    const enTitulo = n < titulo.length
    const id = setTimeout(() => setN((v) => v + 1), n === 0 ? 350 : enTitulo ? MS_TITULO : n === titulo.length ? 450 : MS_TEXTO)
    return () => clearTimeout(id)
  }, [visto, reducido, n, total, titulo.length])

  const t = Math.min(n, titulo.length)
  const x = Math.max(0, n - titulo.length)
  const escribiendoTitulo = visto && n < titulo.length
  const escribiendoTexto = n >= titulo.length && n < total

  const Cursor = () => (
    <span aria-hidden="true" className="ml-0.5 inline-block h-[0.9em] w-0.5 translate-y-[0.1em] bg-gray-900 motion-safe:animate-pulse" />
  )

  return (
    <div ref={ref} className={className}>
      <p className="sr-only">
        {titulo} {texto}
      </p>
      <div aria-hidden="true">
        <p className="text-balance font-serif text-3xl leading-snug text-gray-900 md:text-4xl">
          {titulo.slice(0, t)}
          {escribiendoTitulo && <Cursor />}
          <span className="opacity-0">{titulo.slice(t)}</span>
        </p>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          {texto.slice(0, x)}
          {escribiendoTexto && <Cursor />}
          <span className="opacity-0">{texto.slice(x)}</span>
        </p>
      </div>
    </div>
  )
}
