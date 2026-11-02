import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import Contact from './pages/Contact'
import About from './pages/About'
import StatusBar from './components/layout/StatusBar'
import BackToTop from './components/layout/BackToTop'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Professional from './pages/Professional'
import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import ClosuresProvider from './context/ClosuresProvider'
import CookieBanner from './components/CookieBanner'
import CookieConsentProvider from './context/CookieConsentProvider'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// El panel del equipo (/admin) va sin cabecera, barra de horario, pie ni avisos de la web pública.
function Shell() {
  const { pathname } = useLocation()
  const isAdmin = pathname === '/admin'

  return (
    <>
      <ScrollToTop />
      {!isAdmin && (
        <>
          <StatusBar />
          <NavBar />
        </>
      )}
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
      {!isAdmin && (
        <>
          <Footer />
          <BackToTop />
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
