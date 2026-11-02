import { Info, Phone } from "lucide-react"
import { rangeText } from "../../lib/dates"

const DOT_COLORS = {
  open: "bg-green-500",
  closed: "bg-red-500",
}

// Parte visual de la barra de horario. La usan la web pública y la vista previa del panel.
export default function StatusBarView({ status, notice }) {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto flex min-h-11 items-center justify-between gap-4 px-4 py-1.5">
        <p role="status" className="flex min-w-0 items-center gap-2.5 text-[13px] sm:text-sm">
          <span aria-hidden="true" className="relative flex h-2.5 w-2.5 flex-shrink-0">
            {status.state === "open" && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50 motion-safe:animate-ping" />
            )}
            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${DOT_COLORS[status.state]}`} />
          </span>
          <span className="min-w-0 leading-snug">
            <span className="font-semibold [overflow-wrap:anywhere]">{status.label}</span>
            {status.detail && (
              <span className="block text-xs text-gray-500 sm:inline sm:text-sm">
                <span className="hidden sm:inline"> · </span>
                {status.detail}
              </span>
            )}
          </span>
        </p>
        <a
          href="tel:+34614438477"
          className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold tabular-nums leading-tight ring-1 ring-gray-200 transition-colors hover:ring-milele-cyan-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-milele-cyan-dark sm:text-sm"
        >
          <Phone className="h-4 w-4 text-milele-cyan-dark" aria-hidden="true" />
          <span>
            {status.appointment && (
              <span className="block text-[11px] font-normal text-gray-500 sm:inline sm:text-sm sm:font-semibold sm:text-gray-900">
                Pedir cita<span className="hidden sm:inline">:</span>{" "}
              </span>
            )}
            614 438 477
          </span>
        </a>
      </div>
      {notice && (
        <div className="border-t border-amber-200 bg-amber-50 text-amber-900">
          <p className="container mx-auto flex items-start gap-2 px-4 py-2 text-[13px] leading-snug sm:text-sm">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="[overflow-wrap:anywhere]">
              El centro permanece cerrado {rangeText(notice.start_date, notice.end_date)}
              {notice.reason ? ` (${notice.reason})` : ""}.
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
