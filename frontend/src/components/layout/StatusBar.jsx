import { useEffect, useState } from "react"
import { getClosureNotice, getOpeningStatus } from "../../lib/openingHours"
import { useClosures } from "../../context/closuresContext"
import StatusBarView from "./StatusBarView"

export default function StatusBar() {
  const { closures } = useClosures()
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  return <StatusBarView status={getOpeningStatus(now, closures)} notice={getClosureNotice(closures, now)} />
}
