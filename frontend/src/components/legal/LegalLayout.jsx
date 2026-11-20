import Seo from "../Seo"
import PageHeader from "../PageHeader"

export default function LegalLayout({ title, children }) {
  return (
    <>
      <Seo title={`${title} · Milele Centro Multidisciplinar`} description="Información legal y de privacidad de Milele Málaga S.L." />
      <PageHeader title={title} />
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl text-gray-700 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:font-serif [&_h2]:text-gray-900 [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:font-medium [&_h3]:text-gray-900 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1 [&_a]:text-milele-cyan-dark [&_a]:underline">
            {children}
          </article>
        </div>
      </section>
    </>
  )
}
