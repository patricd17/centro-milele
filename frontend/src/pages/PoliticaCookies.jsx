import { Link } from "react-router"
import LegalLayout from "../components/legal/LegalLayout"
import { COMPANY } from "../components/legal/companyData"
import { useCookieConsent } from "../context/cookieConsentContext"

export default function PoliticaCookies() {
  const { openSettings } = useCookieConsent()

  return (
    <LegalLayout title="Política de cookies">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en su dispositivo cuando lo visita. Permiten,
        por ejemplo, recordar sus preferencias o mostrar contenido de terceros. Esta política se ha elaborado de
        conformidad con el artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de
        Comercio Electrónico (LSSI), y con el Reglamento General de Protección de Datos.
      </p>

      <h2>2. Responsable</h2>
      <p>
        {COMPANY.name}, NIF {COMPANY.nif}, {COMPANY.address}. Correo electrónico:{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Web: {COMPANY.domain}.
      </p>

      <h2>3. Cookies que utiliza este sitio web</h2>
      <div className="mb-3 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-900">
              <th className="border border-gray-200 p-2">Cookie / almacenamiento</th>
              <th className="border border-gray-200 p-2">Titular</th>
              <th className="border border-gray-200 p-2">Finalidad</th>
              <th className="border border-gray-200 p-2">Duración</th>
              <th className="border border-gray-200 p-2">Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">Preferencia de cookies (almacenamiento local del navegador)</td>
              <td className="border border-gray-200 p-2">Propia</td>
              <td className="border border-gray-200 p-2">Recordar su elección sobre las cookies</td>
              <td className="border border-gray-200 p-2">12 meses</td>
              <td className="border border-gray-200 p-2">Técnica (exenta de consentimiento)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Cookies de Google Maps</td>
              <td className="border border-gray-200 p-2">Google LLC</td>
              <td className="border border-gray-200 p-2">Mostrar el mapa con la ubicación del centro</td>
              <td className="border border-gray-200 p-2">Según Google</td>
              <td className="border border-gray-200 p-2">De terceros (requieren su consentimiento)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Este sitio web no utiliza cookies de analítica, de publicidad ni de seguimiento. El mapa de Google Maps
        solo se carga si usted acepta las cookies de terceros; hasta entonces no se establece ninguna conexión con
        los servidores de Google.
      </p>

      <h2>4. Cómo gestionar su consentimiento</h2>
      <p>
        Puede aceptar, rechazar o configurar las cookies de terceros desde el aviso que aparece al entrar en la
        web y, en cualquier momento, desde el enlace «Configurar cookies» del pie de página o desde el botón
        siguiente:
      </p>
      <p>
        <button
          type="button"
          onClick={openSettings}
          className="rounded-xl bg-milele-gradient px-5 py-2.5 text-sm font-medium text-black shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          Configurar cookies
        </button>
      </p>
      <p>
        También puede bloquear o eliminar las cookies desde la configuración de su navegador (Chrome, Firefox,
        Safari, Edge u otros). Tenga en cuenta que, si las bloquea, el mapa de ubicación no se mostrará.
      </p>

      <h2>5. Más información</h2>
      <p>
        Consulte nuestra <Link to="/politica-de-privacidad">Política de privacidad</Link> para conocer cómo
        tratamos sus datos personales.
      </p>

      <h2>6. Actualizaciones</h2>
      <p>
        Podemos modificar esta política si cambian las cookies que utiliza la web. La versión vigente es la
        publicada en esta página.
      </p>
    </LegalLayout>
  )
}
