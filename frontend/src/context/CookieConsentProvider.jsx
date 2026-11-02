import { useCallback, useMemo, useState } from "react"
import { CookieConsentContext } from "./cookieConsentContext"

const STORAGE_KEY = "milele-cookie-consent"
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000 // 12 meses

// Devuelve { thirdParty: boolean, date: number } o null si no hay una elección vigente.
function readStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed.thirdParty !== "boolean" || typeof parsed.date !== "number") return null
    if (Date.now() - parsed.date > MAX_AGE_MS) return null
    return parsed
  } catch {
    return null
  }
}

export default function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(readStoredConsent)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const save = useCallback((thirdParty) => {
    const value = { thirdParty, date: Date.now() }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {
      // Sin almacenamiento disponible: la elección solo vale para esta visita.
    }
    setConsent(value)
    setSettingsOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      consent,
      thirdPartyAllowed: consent?.thirdParty === true,
      hasDecided: consent !== null,
      settingsOpen,
      acceptAll: () => save(true),
      rejectAll: () => save(false),
      save,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [consent, settingsOpen, save]
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}
