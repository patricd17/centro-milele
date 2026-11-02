import { Link } from "react-router"

export default function NotFound() {
  return (
    <section className="bg-milele-gradient-soft py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold font-serif text-gray-900">Página no encontrada</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
          La dirección que has abierto no existe o ha cambiado de sitio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-xl bg-milele-gradient px-8 py-3 text-sm font-medium text-black shadow-lg transition-shadow hover:shadow-xl"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
