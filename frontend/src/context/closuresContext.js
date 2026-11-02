import { createContext, useContext } from "react"

export const ClosuresContext = createContext({ closures: [], reload: async () => {} })

export function useClosures() {
  return useContext(ClosuresContext)
}
