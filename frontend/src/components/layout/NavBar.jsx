import { useState } from "react"
import { Link, useLocation } from "react-router"
import { Menu, X } from "lucide-react"
import logoMilele from "../../assets/images/logo-milele.webp"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  // Get navigation link classes with active state
  const getNavLinkClasses = (path) => {
    const baseClasses = "text-sm font-medium transition-all duration-300 font-serif relative"
    if (isActiveRoute(path)) {
      return `${baseClasses} text-transparent bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark bg-clip-text font-semibold`
    }
    return `${baseClasses} text-gray-700 hover:text-milele-cyan-dark`
  }

  return (<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-milele-green/20">
    <div className="container mx-auto flex h-28 items-center justify-between px-4">        <Link to="/" className="flex items-center space-x-3 group">
      <img
        src={logoMilele}
        alt="Milele Centro Multidisciplinar"
        className="w-20 md:w-24 transition-all duration-300 group-hover:scale-105"
      />
    </Link>{/* Desktop Navigation */}        <nav className="hidden md:flex md:items-center md:space-x-8">
        <Link
          to="/"
          className={getNavLinkClasses('/')}
        >
          Inicio
          {isActiveRoute('/') && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark rounded-full"></div>
          )}
        </Link>
        <Link
          to="/about"
          className={getNavLinkClasses('/about')}
        >
          Quienes Somos
          {isActiveRoute('/about') && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark rounded-full"></div>
          )}
        </Link>
        <Link
          to="/spaces"
          className={getNavLinkClasses('/spaces')}
        >
          Nuestros Espacios
          {isActiveRoute('/spaces') && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark rounded-full"></div>
          )}
        </Link>
        <Link
          to="/contact"
          className={getNavLinkClasses('/contact')}
        >
          Contacto
          {isActiveRoute('/contact') && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-milele-green-dark via-milele-cyan-dark to-milele-pink-dark rounded-full"></div>
          )}
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
        {isMenuOpen ? (
          <X className="h-6 w-6 text-milele-cyan-dark" />
        ) : (
          <Menu className="h-6 w-6 text-milele-cyan-dark" />
        )}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="container mx-auto px-4 md:hidden bg-white/95 backdrop-blur-sm border-t border-milele-green/20">          <nav className="flex flex-col space-y-4 pb-6 pt-4">
        <Link
          to="/"
          className={`${getNavLinkClasses('/')} py-2`}
          onClick={toggleMenu}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className={`${getNavLinkClasses('/about')} py-2`}
          onClick={toggleMenu}
        >
          Quienes Somos
        </Link>
        <Link
          to="/spaces"
          className={`${getNavLinkClasses('/spaces')} py-2`}
          onClick={toggleMenu}
        >
          Nuestros Espacios
        </Link>
        <Link
          to="/contact"
          className={`${getNavLinkClasses('/contact')} py-2`}
          onClick={toggleMenu}
        >
          Contacto
        </Link>
      </nav>
      </div>
    )}
  </header>
  )
}
