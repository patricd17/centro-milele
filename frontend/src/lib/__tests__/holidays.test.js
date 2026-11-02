import { describe, expect, it } from "vitest"
import { holidayName } from "../holidays"

describe("festivos", () => {
  it("detecta los festivos fijos nacionales y de Andalucía", () => {
    expect(holidayName(2026, 1, 1)).toBe("Año Nuevo")
    expect(holidayName(2026, 1, 6)).toBe("Reyes")
    expect(holidayName(2026, 2, 28)).toBe("Día de Andalucía")
    expect(holidayName(2026, 5, 1)).toBe("Día del Trabajo")
    expect(holidayName(2026, 8, 15)).toBe("Asunción de la Virgen")
    expect(holidayName(2026, 10, 12)).toBe("Fiesta Nacional")
    expect(holidayName(2026, 12, 8)).toBe("Inmaculada Concepción")
    expect(holidayName(2026, 12, 25)).toBe("Navidad")
  })

  it("calcula Jueves y Viernes Santo cada año", () => {
    expect(holidayName(2026, 4, 2)).toBe("Jueves Santo")
    expect(holidayName(2026, 4, 3)).toBe("Viernes Santo")
    expect(holidayName(2027, 3, 25)).toBe("Jueves Santo")
    expect(holidayName(2027, 3, 26)).toBe("Viernes Santo")
    expect(holidayName(2028, 4, 13)).toBe("Jueves Santo")
  })

  it("traslada al lunes los festivos fijos que caen en domingo", () => {
    expect(holidayName(2026, 11, 1)).toBe("Todos los Santos") // domingo
    expect(holidayName(2026, 11, 2)).toBe("Todos los Santos (trasladado)")
    expect(holidayName(2026, 12, 7)).toBe("Día de la Constitución (trasladado)")
    expect(holidayName(2027, 3, 1)).toBe("Día de Andalucía (trasladado)")
    expect(holidayName(2027, 8, 16)).toBe("Asunción de la Virgen (trasladado)")
  })

  it("no traslada los festivos que caen en sábado", () => {
    expect(holidayName(2026, 2, 28)).toBe("Día de Andalucía") // sábado
    expect(holidayName(2026, 3, 2)).toBeNull()
    expect(holidayName(2026, 8, 17)).toBeNull()
  })

  it("incluye los festivos locales de Málaga", () => {
    expect(holidayName(2026, 8, 19)).toBe("Feria de Málaga (festivo local)")
    expect(holidayName(2026, 9, 8)).toBe("Virgen de la Victoria (festivo local)")
  })

  it("un día normal no es festivo", () => {
    expect(holidayName(2026, 11, 3)).toBeNull()
    expect(holidayName(2026, 12, 24)).toBeNull()
    expect(holidayName(2026, 12, 31)).toBeNull()
  })
})
