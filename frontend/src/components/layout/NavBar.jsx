import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Link, useLocation } from "react-router"
import { Menu, Phone, X } from "lucide-react"
import logoMilele from "../../assets/images/logo-milele.webp"
import WhatsAppIcon from "../icons/WhatsAppIcon"
import { whatsappLink } from "../../lib/whatsapp"
import { getOpeningStatus } from "../../lib/openingHours"
import { useClosures } from "../../context/closuresContext"

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Quiénes somos" },
  { to: "/spaces", label: "Nuestros espacios" },
  { to: "/contact", label: "Contacto" },
]

const UNDERLINE = "bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark"

function MobileMenu({ open, onClose, isActive }) {
  const closeRef = useRef(null)
  const { closures } = useClosures()
  const status = getOpeningStatus(new Date(), closures)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    // El menú empieza oculto y se hace visible al transitar: se enfoca justo después.
    const focusTimer = setTimeout(() => closeRef.current?.focus(), 60)
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => {
      clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  // El menú va fuera de la cabecera para que ocupe toda la pantalla.
  return createPortal(
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
      inert={!open}
      className={`fixed inset-0 z-[70] flex flex-col bg-gradient-to-br from-[#f3fbdf] via-[#e0f9fd] to-[#fdeef6] transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <div className="flex h-28 flex-shrink-0 items-center justify-between px-4">
        <Link to="/" onClick={onClose} aria-label="Milele, ir al inicio">
          <img src={logoMilele} alt="" className="w-20" />
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-milele-cyan-dark cursor-pointer"
        >
          <X className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Principal" className="flex flex-1 items-center justify-center overflow-y-auto px-6">
        <ul className="text-center">
          {LINKS.map((link, i) => {
            const active = isActive(link.to)
            return (
              <li
                key={link.to}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  to={link.to}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`font-display relative inline-block py-3.5 text-[32px] leading-tight text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-milele-cyan-dark ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {link.label}
                  {active && <span className={`absolute inset-x-0 bottom-2 h-[3px] rounded-full ${UNDERLINE}`} />}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="flex-shrink-0 space-y-3 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div role="status" className="text-center text-sm leading-snug text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${status.state === "open" ? "bg-green-500" : "bg-red-500"}`} />
            <span className="font-semibold">{status.label}</span>
          </p>
          {status.detail && <p className="text-gray-500">{status.detail}</p>}
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Escribir por WhatsApp
        </a>
        <a
          href="tel:+34614438477"
          className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 px-6 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-white/60 active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Llamar · 614 438 477
        </a>
      </div>
    </div>,
    document.body
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const menuButton = useRef(null)
  const wasOpen = useRef(false)

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path))
  const close = () => setOpen(false)

  // Al cambiar de página se cierra el menú.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Si se agranda la ventana (pasa a ordenador), se cierra.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  // Al cerrar, el foco vuelve al botón que abrió el menú.
  useEffect(() => {
    if (wasOpen.current && !open) menuButton.current?.focus()
    wasOpen.current = open
  }, [open])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-milele-green/20 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <Link to="/" className="group flex items-center">
          <img
            src={logoMilele}
            alt="Milele Centro Multidisciplinar"
            className="w-20 transition-transform duration-300 group-hover:scale-105 md:w-24"
          />
        </Link>

        {/* Ordenador */}
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex lg:gap-10">
          {LINKS.map((link) => {
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`group font-display relative py-2 text-lg tracking-[0.005em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-milele-cyan-dark ${
                  active ? "font-semibold text-gray-900" : "font-medium text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-300 ease-out ${UNDERLINE} ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Móvil */}
        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-milele-cyan-dark cursor-pointer md:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={open} onClose={close} isActive={isActive} />
    </header>
  )
}
