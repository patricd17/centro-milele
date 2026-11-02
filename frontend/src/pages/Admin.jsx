import { useEffect, useState } from "react"
import { Link } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { supabase } from "../lib/supabase"
import { createClosure, deleteClosure } from "../lib/closures"
import { holidayName } from "../lib/holidays"
import { getClosureNotice, getOpeningStatus, todayISO } from "../lib/openingHours"
import StatusBarView from "../components/layout/StatusBarView"
import { useClosures } from "../context/closuresContext"
import { MONTHS, addDays, daysBetween, daysInMonth, longDate, mondayIndex, parseISO, rangeText, toISO } from "../lib/dates"
import logoMilele from "../assets/images/logo-milele.webp"

const NOTICE_OPTIONS = [
  { value: 3, label: "3 días antes" },
  { value: 7, label: "1 semana antes" },
  { value: 15, label: "15 días antes" },
  { value: 30, label: "1 mes antes" },
  { value: 0, label: "No avisar" },
]

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setError("")
    const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    if (authError) setError("El correo o la contraseña no son correctos.")
    setBusy(false)
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h1 className="mb-1 text-2xl font-semibold font-serif text-gray-900">Acceso del equipo</h1>
      <p className="mb-6 text-sm text-gray-600">Entra para marcar los días de cierre del centro.</p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="admin-email" className="mb-1 block text-sm font-medium text-gray-700">Correo</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20"
          />
        </div>
        <div>
          <label htmlFor="admin-password" className="mb-1 block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20"
          />
        </div>
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-full bg-milele-gradient px-6 py-3 text-sm font-medium text-black shadow transition-shadow hover:shadow-md disabled:opacity-60 cursor-pointer"
        >
          {busy ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  )
}


// Maqueta del navegador con la barra de la web tal y como la verá una persona en el ordenador.
function WebPreview({ title, status, notice }) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">{title}</p>
      <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-xs text-gray-500">centromilele.es</span>
        </div>
        <StatusBarView status={status} notice={notice} />
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-3">
          <img src={logoMilele} alt="" className="h-12 w-12 rounded-full" />
          <div className="flex gap-6 text-sm text-gray-700 font-serif">
            <span>Inicio</span>
            <span>Quienes Somos</span>
            <span>Nuestros Espacios</span>
            <span>Contacto</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClosuresPanel() {
  const { closures, reload } = useClosures()
  const today = todayISO()
  const { y: todayY, m: todayM } = parseISO(today)
  const [cursor, setCursor] = useState({ y: todayY, m: todayM })
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [reason, setReason] = useState("")
  const [notice, setNotice] = useState(7)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(null) // { type: "ok" | "error", text }

  const pickDay = (iso) => {
    setMessage(null)
    if (!start || start !== end) {
      setStart(iso)
      setEnd(iso)
    } else if (iso < start) {
      setEnd(start)
      setStart(iso)
    } else {
      setEnd(iso)
    }
  }

  const moveMonth = (delta) => {
    const index = cursor.y * 12 + (cursor.m - 1) + delta
    setCursor({ y: Math.floor(index / 12), m: (index % 12) + 1 })
  }

  const save = async () => {
    setBusy(true)
    setMessage(null)
    try {
      await createClosure({ start_date: start, end_date: end, reason, notice_days: notice })
      await reload()
      setStart(null)
      setEnd(null)
      setReason("")
      setMessage({ type: "ok", text: "Cierre guardado. Ya se ve en la web." })
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err?.code === "42501"
            ? "Esta cuenta no tiene permiso para marcar cierres. Pide que añadan tu correo."
            : "No se ha podido guardar. Inténtalo de nuevo.",
      })
    }
    setBusy(false)
  }

  const remove = async (closure) => {
    if (!window.confirm("¿Quitar este cierre?")) return
    try {
      await deleteClosure(closure.id)
      await reload()
    } catch {
      setMessage({ type: "error", text: "No se ha podido quitar el cierre." })
    }
  }

  const blanks = mondayIndex(cursor.y, cursor.m, 1)
  const cells = Array.from({ length: daysInMonth(cursor.y, cursor.m) }, (_, i) => i + 1)
  const count = start ? daysBetween(start, end) + 1 : 0

  // Vista previa: cómo se vería la web con el cierre que se está preparando.
  const draft = start ? { id: "draft", start_date: start, end_date: end, reason: reason.trim() || null, notice_days: notice } : null
  const simulated = draft ? [...closures, draft] : closures
  const at = (iso, hour) => new Date(`${iso}T${hour}:00:00Z`)
  const noticeDay = draft && notice > 0 ? (addDays(start, -notice) < today ? today : addDays(start, -notice)) : null
  const previews = draft
    ? [
        ...(noticeDay
          ? [{
              title: `Desde el ${longDate(noticeDay)} (aviso antes del cierre)`,
              status: getOpeningStatus(at(noticeDay, 16), simulated),
              notice: getClosureNotice(simulated, at(noticeDay, 16)),
            }]
          : []),
        {
          title: `El ${longDate(start)} (día del cierre)`,
          status: getOpeningStatus(at(start, 12), simulated),
          notice: getClosureNotice(simulated, at(start, 12)),
        },
      ]
    : []

  const upcomingHolidays = []
  for (let i = 0; i < 365 && upcomingHolidays.length < 5; i++) {
    const iso = addDays(today, i)
    const { y, m, d } = parseISO(iso)
    const name = holidayName(y, m, d)
    if (name) upcomingHolidays.push({ iso, name })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-1 text-2xl font-semibold font-serif text-gray-900">Días de cierre</h1>
        <p className="mb-6 text-sm text-gray-600">
          Marca los días que el centro no abre. La web avisa unos días antes y ese día pone «Cerrado».
        </p>

        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{MONTHS[cursor.m - 1]} de {cursor.y}</h2>
          <div className="flex gap-1">
            <button type="button" onClick={() => moveMonth(-1)} aria-label="Mes anterior" className="rounded-lg p-2 hover:bg-gray-100 cursor-pointer">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => moveMonth(1)} aria-label="Mes siguiente" className="rounded-lg p-2 hover:bg-gray-100 cursor-pointer">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
            <div key={d} className="py-1 text-xs font-medium text-gray-500">{d}</div>
          ))}
          {Array.from({ length: blanks }, (_, i) => <div key={`b${i}`} />)}
          {cells.map((d) => {
            const iso = toISO(cursor.y, cursor.m, d)
            const past = iso < today
            const closed = closures.some((c) => c.start_date <= iso && iso <= c.end_date)
            const holiday = holidayName(cursor.y, cursor.m, d)
            const weekend = mondayIndex(cursor.y, cursor.m, d) >= 5
            const selected = start && iso >= start && iso <= end
            const classes = selected
              ? "bg-gray-900 text-white"
              : closed
                ? "bg-cyan-100 font-semibold text-gray-900"
                : holiday
                  ? "bg-pink-100 text-gray-900"
                  : weekend || past
                    ? "text-gray-400"
                    : "text-gray-900 hover:bg-gray-100"
            return (
              <button
                key={d}
                type="button"
                disabled={past}
                onClick={() => pickDay(iso)}
                title={holiday ?? undefined}
                className={`h-12 rounded-lg text-sm transition-colors ${classes} ${iso === today ? "ring-2 ring-gray-900" : ""} ${past ? "cursor-default" : "cursor-pointer"}`}
              >
                {d}
                {holiday && !selected && <span className="block text-[10px] leading-none">Festivo</span>}
              </button>
            )
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
          <span><i className="mr-1 inline-block h-3 w-3 rounded bg-cyan-100 align-[-1px]" />Cierre del centro</span>
          <span><i className="mr-1 inline-block h-3 w-3 rounded bg-pink-100 align-[-1px]" />Festivo oficial</span>
          <span><i className="mr-1 inline-block h-3 w-3 rounded ring-2 ring-gray-900 align-[-1px]" />Hoy</span>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="mb-1 text-lg font-semibold text-gray-900">Así se verá en la web (ordenador)</h2>
          {previews.length === 0 ? (
            <p className="text-sm text-gray-600">Elige un día del calendario y aquí verás cómo queda la web con el aviso.</p>
          ) : (
            <div className="mt-3 space-y-5">
              {previews.map((pv) => (
                <WebPreview key={pv.title} title={pv.title} status={pv.status} notice={pv.notice} />
              ))}
            </div>
          )}
        </div>
      </section>

      <aside className="space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {!start ? (
            <>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Elige un día</h2>
              <p className="text-sm text-gray-600">
                Pulsa un día del calendario para marcarlo como cerrado. Si son varios seguidos, pulsa el primero y después el último.
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-1 text-lg font-semibold text-gray-900">
                {start === end ? "Un día" : `${count} días`}
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                {rangeText(start, end)}
                {start !== end && (
                  <button type="button" onClick={() => setEnd(start)} className="ml-2 font-medium text-milele-cyan-dark underline cursor-pointer">
                    Solo un día
                  </button>
                )}
              </p>

              <label htmlFor="motivo" className="mb-1 block text-sm font-medium text-gray-700">Motivo</label>
              <input
                id="motivo"
                type="text"
                maxLength={80}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Vacaciones, formación, imprevisto…"
                className="mb-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20"
              />
              <p className="mb-4 text-xs text-gray-500">Opcional. Se muestra en la web a todo el mundo: no pongas datos personales.</p>

              <p className="mb-2 text-sm font-medium text-gray-700">Avisar en la web</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {NOTICE_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => setNotice(o.value)}
                    aria-pressed={notice === o.value}
                    className={`rounded-full border px-3 py-1.5 text-sm cursor-pointer ${
                      notice === o.value ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={save}
                disabled={busy}
                className="w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-60 cursor-pointer"
              >
                {busy ? "Guardando…" : start === end ? "Cerrar este día" : "Cerrar estos días"}
              </button>
            </>
          )}
          {message && (
            <p role="status" className={`mt-4 text-sm ${message.type === "ok" ? "text-green-800" : "text-red-700"}`}>
              {message.text}
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Cierres marcados</h2>
          {closures.length === 0 ? (
            <p className="text-sm text-gray-600">Aún no hay cierres próximos.</p>
          ) : (
            <ul className="space-y-3">
              {closures.map((c) => (
                <li key={c.id} className="flex items-start justify-between gap-3 text-sm">
                  <span>
                    <span className="font-medium text-gray-900">{rangeText(c.start_date, c.end_date)}</span>
                    {c.reason && <span className="text-gray-600"> · {c.reason}</span>}
                  </span>
                  <button type="button" onClick={() => remove(c)} className="flex-shrink-0 text-red-700 underline cursor-pointer">
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Próximos festivos oficiales</h2>
          <p className="mb-2 text-xs text-gray-500">Ya cuentan como cerrados en la web.</p>
          <ul className="space-y-1 text-sm text-gray-700">
            {upcomingHolidays.map((h) => (
              <li key={h.iso}>{rangeText(h.iso, h.iso).replace(/^el /, "")} · {h.name}</li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  )
}

export default function Admin() {
  const [session, setSession] = useState(undefined) // undefined: comprobando la sesión

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Panel del centro · Milele"
    const meta = document.createElement("meta")
    meta.name = "robots"
    meta.content = "noindex"
    document.head.appendChild(meta)

    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next))
    return () => {
      data.subscription.unsubscribe()
      meta.remove()
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="min-h-[70vh] bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center gap-3 px-4 py-3">
          <img src={logoMilele} alt="" className="h-10 w-10 rounded-full" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Milele</p>
            <p className="text-sm text-gray-600">Panel del centro</p>
          </div>
          <div className="ml-auto flex items-center gap-4 text-sm">
            <Link to="/" className="text-milele-cyan-dark hover:underline">Ver la web</Link>
            {session && (
              <button type="button" onClick={() => supabase.auth.signOut()} className="text-gray-700 hover:underline cursor-pointer">
                Salir
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10">
        {session === undefined ? <p className="text-center text-gray-600">Cargando…</p> : session ? <ClosuresPanel /> : <LoginForm />}
      </main>
    </div>
  )
}
