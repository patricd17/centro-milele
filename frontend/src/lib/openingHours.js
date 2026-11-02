import { holidayName } from "./holidays.js"

const TIME_ZONE = "Europe/Madrid"
const OPENING_HOUR = 16
const CLOSING_HOUR = 20

const WEEKDAYS = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 }
const WEEKDAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  weekday: "short",
  hourCycle: "h23",
})

// Fecha y hora en Madrid, con independencia del país del visitante.
function madridParts(date) {
  const parts = Object.fromEntries(formatter.formatToParts(date).map((p) => [p.type, p.value]))
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    weekday: WEEKDAYS[parts.weekday],
  }
}

function isWeekend(weekday) {
  return weekday === 0 || weekday === 6
}

// Siguiente día en el que el centro abre por la tarde: { daysAhead, weekday }.
function nextOpeningDay({ year, month, day }) {
  for (let ahead = 1; ahead <= 14; ahead++) {
    const date = new Date(Date.UTC(year, month - 1, day + ahead))
    const weekday = date.getUTCDay()
    const holiday = holidayName(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate())
    if (!isWeekend(weekday) && !holiday) return { daysAhead: ahead, weekday }
  }
  return null
}

function reopeningText(parts) {
  const next = nextOpeningDay(parts)
  if (!next) return ""
  const when = next.daysAhead === 1 ? "mañana" : `el ${WEEKDAY_NAMES[next.weekday]}`
  return `Abrimos ${when} a las ${OPENING_HOUR}:00`
}

/**
 * Estado del centro en un instante dado.
 * state: "open" | "closed"
 * Horario: lunes a viernes, mañanas solo con cita previa y tardes de 16:00 a 20:00.
 * Sábados, domingos y festivos, cerrado. Por la mañana se muestra "cerrado" y se
 * indica que se atiende con cita (appointment: true) para que el teléfono invite a pedirla.
 */
export function getOpeningStatus(date = new Date()) {
  const parts = madridParts(date)
  const holiday = holidayName(parts.year, parts.month, parts.day)

  if (holiday) {
    return { state: "closed", label: `Cerrado · ${holiday}`, detail: reopeningText(parts) }
  }
  if (isWeekend(parts.weekday)) {
    return { state: "closed", label: "Cerrado · fin de semana", detail: reopeningText(parts) }
  }
  if (parts.hour >= OPENING_HOUR && parts.hour < CLOSING_HOUR) {
    return { state: "open", label: "Abierto ahora", detail: `Hasta las ${CLOSING_HOUR}:00` }
  }
  if (parts.hour < OPENING_HOUR) {
    return {
      state: "closed",
      label: "Cerrado ahora",
      detail: `Mañanas solo con cita · Abrimos a las ${OPENING_HOUR}:00`,
      appointment: true,
    }
  }
  return { state: "closed", label: "Cerrado", detail: reopeningText(parts) }
}
