// Utilidades de fechas con formato "AAAA-MM-DD" (sin horas, para evitar problemas de zona horaria).
export const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]
const WEEKDAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

export const pad = (n) => String(n).padStart(2, "0")
export const toISO = (y, m, d) => `${y}-${pad(m)}-${pad(d)}`

export function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number)
  return { y, m, d }
}

export function addDays(iso, n) {
  const { y, m, d } = parseISO(iso)
  const dt = new Date(Date.UTC(y, m - 1, d + n))
  return toISO(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate())
}

export function daysBetween(startISO, endISO) {
  const a = parseISO(startISO)
  const b = parseISO(endISO)
  return Math.round((Date.UTC(b.y, b.m - 1, b.d) - Date.UTC(a.y, a.m - 1, a.d)) / 86400000)
}

export const daysInMonth = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate()

// Índice del día de la semana empezando en lunes (0 = lunes ... 6 = domingo).
export const mondayIndex = (y, m, d) => (new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7

export function longDate(iso) {
  const { y, m, d } = parseISO(iso)
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]
  return `${weekday} ${d} de ${MONTHS[m - 1].toLowerCase()}`
}

// "el lunes 16 de noviembre" o "del lunes 16 al viernes 20 de noviembre"
export function rangeText(startISO, endISO) {
  if (startISO === endISO) return `el ${longDate(startISO)}`
  return `del ${longDate(startISO)} al ${longDate(endISO)}`
}
