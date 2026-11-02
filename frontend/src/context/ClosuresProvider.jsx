import { useCallback, useEffect, useMemo, useState } from "react"
import { ClosuresContext } from "./closuresContext"
import { fetchClosures } from "../lib/closures"
import { todayISO } from "../lib/openingHours"

const REFRESH_MS = 10 * 60 * 1000

// Carga los cierres marcados por el equipo. Si no hay conexión con la base de datos,
// la web sigue funcionando con el horario habitual y los festivos.
export default function ClosuresProvider({ children }) {
  const [closures, setClosures] = useState([])

  const reload = useCallback(async () => {
    try {
      setClosures(await fetchClosures(todayISO()))
    } catch {
      // Sin conexión: se conservan los últimos cierres conocidos.
    }
  }, [])

  useEffect(() => {
    reload()
    const id = setInterval(reload, REFRESH_MS)
    return () => clearInterval(id)
  }, [reload])

  const value = useMemo(() => ({ closures, reload }), [closures, reload])
  return <ClosuresContext.Provider value={value}>{children}</ClosuresContext.Provider>
}
