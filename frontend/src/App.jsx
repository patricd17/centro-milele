import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import BackToTop from './components/layout/BackToTop'
import WhatsAppButton from './components/layout/WhatsAppButton'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import ClosuresProvider from './context/ClosuresProvider'
import CookieBanner from './components/CookieBanner'
import CookieConsentProvider from './context/CookieConsentProvider'

// Cada página se descarga solo cuando se visita (el Inicio va incluido en la carga inicial). Así quien entra
// al Inicio no descarga el panel del equipo, el formulario ni las demás páginas.
const cargarAbout = () => import('./pages/About')
const cargarSpaces = () => import('./pages/Spaces')
const cargarContact = () => import('./pages/Contact')
const About = lazy(cargarAbout)
const Spaces = lazy(cargarSpaces)
const Contact = lazy(cargarContact)
const Professional = lazy(() => import('./pages/Professional'))
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'))
const PoliticaPrivacidad = lazy(() => import('./pages/PoliticaPrivacidad'))
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Admin = lazy(() => import('./pages/Admin'))

// Cuando el navegador está libre, se adelantan las tres páginas principales para que al pulsarlas abran al momento.
function usePrecargarPaginas() {
  useEffect(() => {
    const precargar = () => [cargarAbout, cargarSpaces, cargarContact].forEach((c) => c().catch(() => {}))
    const id = window.requestIdleCallback ? window.requestIdleCallback(precargar, { timeout: 4000 }) : setTimeout(precargar, 2500)
    return () => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id))
  }, [])
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!hash) return
    // Con #ancla (por ejemplo /contact#formulario) se baja hasta esa sección. Como las páginas se cargan bajo
    // demanda, se espera (unos 2 segundos como máximo) a que la sección exista.
    const id = decodeURIComponent(hash.slice(1))
    let intentos = 0
    let raf
    const buscar = () => {
      const el = document.getElementById(id)
      if (el) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
      } else if (++intentos < 120) {
        raf = requestAnimationFrame(buscar)
      }
    }
    buscar()
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])
  return null
}

// El panel del equipo (/admin) va sin cabecera, barra de horario, pie ni avisos de la web pública.
function Shell() {
  const { pathname } = useLocation()
  const isAdmin = pathname === '/admin'
  usePrecargarPaginas()

  return (
    <>
      <ScrollToTop />
      {!isAdmin && (
        <NavBar />
      )}
      <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Professional />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      {!isAdmin && (
        <>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <CookieBanner />
        </>
      )}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CookieConsentProvider>
        <ClosuresProvider>
          <Shell />
        </ClosuresProvider>
      </CookieConsentProvider>
    </BrowserRouter>
  )
}

export default App
