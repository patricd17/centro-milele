// Cabecera compacta y plana de las páginas interiores.
export default function PageHeader({ title, children }) {
  return (
    <header className="border-b border-gray-200 bg-[#f4fbf3] py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl font-semibold text-gray-900 md:text-5xl">{title}</h1>
        {children && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-700">{children}</p>}
      </div>
    </header>
  )
}
