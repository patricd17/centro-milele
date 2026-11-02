// Festivos en los que el centro permanece cerrado (nacionales y de Andalucía).
// Si en algún año un festivo se traslada, o hay festivos locales de Málaga,
// se añaden aquí con el formato "AAAA-MM-DD".
const EXTRA_HOLIDAYS = {
  // "2026-08-19": "Festivo local de Málaga",
}

const FIXED_HOLIDAYS = {
  "01-01": "Año Nuevo",
  "01-06": "Reyes",
  "02-28": "Día de Andalucía",
  "05-01": "Día del Trabajo",
  "08-15": "Asunción de la Virgen",
  "10-12": "Fiesta Nacional",
  "11-01": "Todos los Santos",
  "12-06": "Día de la Constitución",
  "12-08": "Inmaculada Concepción",
  "12-25": "Navidad",
}

// Domingo de Pascua (algoritmo de Meeus/Jones/Butcher).
function easterSunday(year) {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Date.UTC(year, month - 1, day))
}

function key(date) {
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0")
  const dd = String(date.getUTCDate()).padStart(2, "0")
  return `${mm}-${dd}`
}

// Devuelve el nombre del festivo o null si es un día laborable normal.
export function holidayName(year, month, day) {
  const mm = String(month).padStart(2, "0")
  const dd = String(day).padStart(2, "0")
  const extra = EXTRA_HOLIDAYS[`${year}-${mm}-${dd}`]
  if (extra) return extra

  const easter = easterSunday(year)
  const holyThursday = new Date(easter.getTime() - 3 * 86400000)
  const goodFriday = new Date(easter.getTime() - 2 * 86400000)
  const current = `${mm}-${dd}`
  if (current === key(holyThursday)) return "Jueves Santo"
  if (current === key(goodFriday)) return "Viernes Santo"

  return FIXED_HOLIDAYS[current] ?? null
}
