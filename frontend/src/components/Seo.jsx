import { useEffect } from "react"
import { useLocation } from "react-router"

const DOMINIO = "https://centromilele.es"

function ponerMeta(selector, crear, valor) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = crear()
    document.head.appendChild(el)
  }
  el.setAttribute(el.tagName === "LINK" ? "href" : "content", valor)
}

// Título, descripción y dirección canónica propios de cada página (para Google).
// La vista previa al compartir en WhatsApp o Instagram sale de index.html, porque esas apps no ejecutan JavaScript.
export default function Seo({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    if (description) {
      ponerMeta(
        'meta[name="description"]',
        () => Object.assign(document.createElement("meta"), { name: "description" }),
        description,
      )
    }
    ponerMeta(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      DOMINIO + (pathname === "/" ? "/" : pathname.replace(/\/$/, "")),
    )
  }, [title, description, pathname])

  return null
}
