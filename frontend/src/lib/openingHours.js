import { holidayName } from "./holidays.js"
import { addDays, longDate } from "./dates.js"

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
    iso: `${parts.year}-${parts.month}-${parts.day}`,
  }
}

// Fecha de hoy en Madrid ("AAAA-MM-DD").
export function todayISO(date = new Date()) {
  return madridParts(date).iso
}

// Cierre marcado por el equipo que incluye esa fecha, si lo hay.
function closureOn(iso, closures) {
  return closures.find((c) => c.start_date <= iso && iso <= c.end_date) ?? null
}

/**
 * Cierre próximo o en curso que hay que avisar en la web: desde "notice_days" días antes
 * hasta que termina. Devuelve null si no hay ninguno.
 */
export function getClosureNotice(closures = [], date = new Date()) {
  const today = madridParts(date).iso
  const active = closures
    .filter((c) => c.notice_days > 0 && today <= c.end_date && today >= addDays(c.start_date, -c.notice_days))
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  return active[0] ?? null
}

function isWeekend(weekday) {
  return weekday === 0 || weekday === 6
}

// Siguiente día en el que el centro abre por la tarde: { daysAhead, weekday }.
function nextOpeningDay({ year, month, day }, closures) {
  for (let ahead = 1; ahead <= 120; ahead++) {
    const date = new Date(Date.UTC(year, month - 1, day + ahead))
    const weekday = date.getUTCDay()
    const iso = date.toISOString().slice(0, 10)
    const holiday = holidayName(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate())
    if (!isWeekend(weekday) && !holiday && !closureOn(iso, closures)) return { daysAhead: ahead, weekday, iso }
  }
  return null
}

function reopeningText(parts, closures) {
  const next = nextOpeningDay(parts, closures)
  if (!next) return ""
  const when =
    next.daysAhead === 1 ? "mañana" : next.daysAhead < 7 ? `el ${WEEKDAY_NAMES[next.weekday]}` : `el ${longDate(next.iso)}`
  return `Abrimos ${when} a las ${OPENING_HOUR}:00`
}

/**
 * Estado del centro en un instante dado.
 * state: "open" | "closed"
 * Horario: lunes a viernes, mañanas solo con cita previa y tardes de 16:00 a 20:00.
 * Sábados, domingos y festivos, cerrado. Por la mañana se muestra "cerrado" y se
 * indica que se atiende con cita (appointment: true) para que el teléfono invite a pedirla.
 */
export function getOpeningStatus(date = new Date(), closures = []) {
  const parts = madridParts(date)
  const closure = closureOn(parts.iso, closures)
  const holiday = holidayName(parts.year, parts.month, parts.day)

  if (closure) {
    return {
      state: "closed",
      label: `Cerrado · ${closure.reason || "cierre del centro"}`,
      detail: reopeningText(parts, closures),
    }
  }
  if (holiday) {
    return { state: "closed", label: `Cerrado · ${holiday}`, detail: reopeningText(parts, closures) }
  }
  if (isWeekend(parts.weekday)) {
    return { state: "closed", label: "Cerrado · fin de semana", detail: reopeningText(parts, closures) }
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
  return { state: "closed", label: "Cerrado", detail: reopeningText(parts, closures) }
}
