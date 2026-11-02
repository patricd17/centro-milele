import { describe, expect, it } from "vitest"
import { addDays, daysBetween, daysInMonth, longDate, mondayIndex, rangeText } from "../dates"

describe("fechas", () => {
  it("suma días cruzando mes y año", () => {
    expect(addDays("2026-11-30", 1)).toBe("2026-12-01")
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01")
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28")
    expect(addDays("2028-03-01", -1)).toBe("2028-02-29") // bisiesto
  })

  it("cuenta días entre fechas", () => {
    expect(daysBetween("2026-11-16", "2026-11-20")).toBe(4)
    expect(daysBetween("2026-11-16", "2026-11-16")).toBe(0)
  })

  it("días del mes y lunes como primer día", () => {
    expect(daysInMonth(2026, 2)).toBe(28)
    expect(daysInMonth(2028, 2)).toBe(29)
    expect(mondayIndex(2026, 11, 2)).toBe(0) // lunes
    expect(mondayIndex(2026, 11, 1)).toBe(6) // domingo
  })

  it("escribe las fechas en español", () => {
    expect(longDate("2026-11-16")).toBe("lunes 16 de noviembre")
    expect(rangeText("2026-11-16", "2026-11-16")).toBe("el lunes 16 de noviembre")
    expect(rangeText("2026-11-16", "2026-11-20")).toBe("del lunes 16 de noviembre al viernes 20 de noviembre")
  })
})
