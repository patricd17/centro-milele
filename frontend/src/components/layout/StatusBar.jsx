import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { getOpeningStatus } from "../../lib/openingHours"

const DOT_COLORS = {
  open: "bg-green-500",
  closed: "bg-red-500",
}

export default function StatusBar() {
  const [status, setStatus] = useState(() => getOpeningStatus())

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpeningStatus()), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="border-b border-gray-200 bg-white text-gray-900">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2">
        <p role="status" className="flex min-w-0 items-center gap-2.5 text-sm">
          <span
            aria-hidden="true"
            className={`h-3 w-3 flex-shrink-0 rounded-full ring-2 ring-white ${DOT_COLORS[status.state]}`}
          />
          <span className="min-w-0 leading-tight">
            <span className="font-semibold">{status.label}</span>
            {status.detail && (
              <span className="block text-xs text-gray-600 sm:inline sm:text-sm">
                <span className="hidden sm:inline"> · </span>
                {status.detail}
              </span>
            )}
          </span>
        </p>
        <a
          href="tel:+34614438477"
          className="flex flex-shrink-0 items-center gap-2 text-sm font-semibold hover:underline"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="leading-tight">
            {status.appointment && (
              <span className="block text-xs font-normal sm:inline sm:text-sm sm:font-semibold">
                Pedir cita<span className="hidden sm:inline">:</span>{" "}
              </span>
            )}
            614 438 477
          </span>
        </a>
      </div>
    </div>
  )
}
