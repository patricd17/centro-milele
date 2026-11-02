import { describe, expect, it } from "vitest"
import { getClosureNotice, getOpeningStatus, todayISO } from "../openingHours"

const at = (iso) => new Date(iso)
const vacaciones = [{ id: "1", start_date: "2026-11-16", end_date: "2026-11-20", reason: "Vacaciones", notice_days: 7 }]

describe("estado del centro", () => {
  it("abierto de lunes a viernes de 16:00 a 20:00 (hora de Madrid)", () => {
    expect(getOpeningStatus(at("2026-11-03T16:00:00+01:00")).state).toBe("open")
    expect(getOpeningStatus(at("2026-11-03T19:59:00+01:00")).state).toBe("open")
    expect(getOpeningStatus(at("2026-11-03T20:00:00+01:00")).state).toBe("closed")
    expect(getOpeningStatus(at("2026-11-03T15:59:00+01:00")).state).toBe("closed")
  })

  it("por la mañana: cerrado ahora, solo con cita", () => {
    const s = getOpeningStatus(at("2026-11-03T10:00:00+01:00"))
    expect(s.state).toBe("closed")
    expect(s.appointment).toBe(true)
    expect(s.detail).toContain("Mañanas solo con cita")
  })

  it("respeta el horario de verano y la zona horaria de Madrid", () => {
    expect(getOpeningStatus(at("2026-07-15T17:00:00+02:00")).state).toBe("open")
    // 15:30 UTC en verano son las 17:30 en Madrid
    expect(getOpeningStatus(at("2026-07-15T15:30:00Z")).state).toBe("open")
    // 15:30 UTC en invierno son las 16:30 en Madrid
    expect(getOpeningStatus(at("2026-11-03T15:30:00Z")).state).toBe("open")
  })

  it("cerrado en fin de semana y festivos, y dice cuándo abre", () => {
    const sab = getOpeningStatus(at("2026-11-07T12:00:00+01:00"))
    expect(sab.state).toBe("closed")
    expect(sab.label).toContain("fin de semana")
    expect(sab.detail).toContain("lunes")
    const fest = getOpeningStatus(at("2026-12-08T17:00:00+01:00"))
    expect(fest.label).toContain("Inmaculada")
    expect(fest.detail).toContain("mañana")
  })

  it("salta festivos al decir cuándo se reabre", () => {
    // lunes 7 de diciembre (trasladado) y martes 8 (Inmaculada): abre el miércoles
    const s = getOpeningStatus(at("2026-12-04T21:00:00+01:00")) // viernes noche
    expect(s.detail).toBe("Abrimos el miércoles a las 16:00")
  })
})

describe("cierres marcados por el equipo", () => {
  it("los días de cierre salen como cerrado con el motivo", () => {
    const s = getOpeningStatus(at("2026-11-17T17:00:00+01:00"), vacaciones)
    expect(s.state).toBe("closed")
    expect(s.label).toBe("Cerrado · Vacaciones")
    expect(s.detail).toBe("Abrimos el lunes a las 16:00") // menos de 7 días: solo el día de la semana
    // desde más lejos se indica la fecha completa
    expect(getOpeningStatus(at("2026-11-16T17:00:00+01:00"), vacaciones).detail).toBe("Abrimos el lunes 23 de noviembre a las 16:00")
  })

  it("sin motivo, usa un texto genérico", () => {
    const s = getOpeningStatus(at("2026-11-17T17:00:00+01:00"), [{ ...vacaciones[0], reason: null }])
    expect(s.label).toBe("Cerrado · cierre del centro")
  })

  it("el día después del cierre abre con normalidad", () => {
    expect(getOpeningStatus(at("2026-11-23T17:00:00+01:00"), vacaciones).state).toBe("open")
  })

  it("avisa desde N días antes hasta que termina el cierre", () => {
    expect(getClosureNotice(vacaciones, at("2026-11-08T12:00:00+01:00"))).toBeNull() // 8 días antes
    expect(getClosureNotice(vacaciones, at("2026-11-09T12:00:00+01:00"))).not.toBeNull() // 7 días antes
    expect(getClosureNotice(vacaciones, at("2026-11-18T12:00:00+01:00"))).not.toBeNull() // en pleno cierre
    expect(getClosureNotice(vacaciones, at("2026-11-21T12:00:00+01:00"))).toBeNull() // ya terminó
  })

  it("con 'no avisar' no hay aviso previo", () => {
    expect(getClosureNotice([{ ...vacaciones[0], notice_days: 0 }], at("2026-11-12T12:00:00+01:00"))).toBeNull()
  })

  it("todayISO devuelve la fecha de Madrid", () => {
    expect(todayISO(at("2026-11-02T23:30:00Z"))).toBe("2026-11-03") // ya es el día siguiente en Madrid
  })
})
