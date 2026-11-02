export default function LegalLayout({ title, children }) {
  return (
    <>
      <section className="bg-milele-gradient py-14 text-black">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold font-serif md:text-4xl">{title}</h1>
        </div>
      </section>
      <section className="bg-milele-gradient-soft py-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-gray-700 shadow-lg milele-shadow md:p-10 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:font-serif [&_h2]:text-gray-900 [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:font-medium [&_h3]:text-gray-900 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_a]:text-milele-cyan-dark [&_a]:underline">
            {children}
          </article>
        </div>
      </section>
    </>
  )
}
