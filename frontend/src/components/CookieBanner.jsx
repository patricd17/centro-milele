import { useState } from "react"
import { Link } from "react-router"
import { Cookie } from "lucide-react"
import { useCookieConsent } from "../context/cookieConsentContext"

function SettingsPanel() {
  const { thirdPartyAllowed, save, closeSettings, hasDecided } = useCookieConsent()
  const [thirdParty, setThirdParty] = useState(thirdPartyAllowed)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold font-serif text-gray-900">Configuración de cookies</h2>

      <div className="rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-900">Necesarias</p>
            <p className="text-sm text-gray-600">
              Guardan tu elección sobre las cookies. No requieren consentimiento.
            </p>
          </div>
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Siempre activas</span>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-gray-900">Terceros (Google Maps)</p>
            <p className="text-sm text-gray-600">
              Permiten mostrar el mapa con la ubicación del centro. Las instala Google.
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={thirdParty}
              onChange={(e) => setThirdParty(e.target.checked)}
              aria-label="Cookies de terceros (Google Maps)"
            />
            <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-milele-cyan-dark peer-focus-visible:ring-2 peer-focus-visible:ring-milele-cyan-dark/40"></div>
            <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        {hasDecided && (
          <button
            type="button"
            onClick={closeSettings}
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        )}
        <button
          type="button"
          onClick={() => save(thirdParty)}
          className="rounded-xl bg-milele-gradient px-5 py-2.5 text-sm font-medium text-black shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          Guardar preferencias
        </button>
      </div>
    </div>
  )
}

export default function CookieBanner() {
  const { hasDecided, settingsOpen, acceptAll, rejectAll, openSettings } = useCookieConsent()

  if (hasDecided && !settingsOpen) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={
        settingsOpen
          ? "fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-4 sm:items-center"
          : "fixed inset-x-0 bottom-0 z-[100] p-4"
      }
    >
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-milele-green/30 bg-white p-6 shadow-2xl">
        {settingsOpen ? (
          <SettingsPanel />
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-start gap-3">
              <Cookie className="mt-0.5 h-6 w-6 flex-shrink-0 text-milele-cyan-dark" />
              <p className="text-sm text-gray-700">
                Usamos cookies de terceros (Google Maps) para mostrarte el mapa de nuestra ubicación. Puedes
                aceptarlas, rechazarlas o configurarlas. Más información en nuestra{" "}
                <Link to="/politica-de-cookies" className="font-medium text-milele-cyan-dark underline">
                  Política de cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-shrink-0">
              <button
                type="button"
                onClick={openSettings}
                className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Configurar
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-xl bg-milele-gradient px-4 py-2.5 text-sm font-medium text-black shadow hover:shadow-lg transition-shadow cursor-pointer"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
