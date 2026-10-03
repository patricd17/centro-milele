import { createContext, useContext } from "react"

export const CookieConsentContext = createContext(null)

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error("useCookieConsent debe usarse dentro de CookieConsentProvider")
  }
  return context
}
