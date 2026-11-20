import { Link } from "react-router"
import Seo from "../components/Seo"

export default function NotFound() {
  return (
    <section className="bg-[#f4fbf3] py-24">
      <Seo title="Página no encontrada · Milele Centro Multidisciplinar" />
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 font-serif text-4xl font-semibold text-gray-900">Página no encontrada</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-700">
          La dirección que has abierto no existe o ha cambiado de sitio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border-[1.5px] border-gray-900 bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
