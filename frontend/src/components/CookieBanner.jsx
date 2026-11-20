import { useState } from "react"
import { Link } from "react-router"
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
            className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:flex-none"
          >
            Cancelar
          </button>
        )}
        <button
          type="button"
          onClick={() => save(thirdParty)}
          className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-milele-lilac-dark active:scale-[0.98] sm:min-w-[8.5rem] sm:flex-none"
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
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl md:p-6">
        {settingsOpen ? (
          <SettingsPanel />
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <p className="flex-1 text-sm leading-relaxed text-gray-700">
              Usamos cookies de terceros (Google Maps) solo para mostrarte el mapa de nuestra ubicación. Puedes aceptarlas o
              rechazarlas con la misma facilidad. Más información en la{" "}
              <Link to="/politica-de-cookies" className="font-semibold text-gray-900 underline underline-offset-4">
                Política de cookies
              </Link>
              .
            </p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:flex-shrink-0">
              <div className="flex gap-3 sm:order-2">
                <button type="button" onClick={rejectAll} className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-milele-lilac-dark active:scale-[0.98] sm:min-w-[8.5rem] sm:flex-none">
                  Rechazar
                </button>
                <button type="button" onClick={acceptAll} className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-milele-lilac-line bg-milele-lilac px-6 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-milele-lilac-dark active:scale-[0.98] sm:min-w-[8.5rem] sm:flex-none">
                  Aceptar
                </button>
              </div>
              <button
                type="button"
                onClick={openSettings}
                className="min-h-11 cursor-pointer px-2 text-sm font-medium text-gray-900 underline underline-offset-4 sm:order-1"
              >
                Configurar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
