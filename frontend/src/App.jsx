import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Spaces from './pages/Spaces'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Professional from './pages/Professional'
import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'
import CookieBanner from './components/CookieBanner'
import CookieConsentProvider from './context/CookieConsentProvider'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {

  return (
    <BrowserRouter>
      <CookieConsentProvider>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Professional />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
      </Routes>
      <Footer />
      <CookieBanner />
      </CookieConsentProvider>
    </BrowserRouter>
  )
}

export default App
