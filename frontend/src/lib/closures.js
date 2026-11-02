import { supabase } from "./supabase.js"

// Cierres del centro marcados por el equipo (hoy o futuros).
export async function fetchClosures(todayISO) {
  const { data, error } = await supabase
    .from("closures")
    .select("id, start_date, end_date, reason, notice_days")
    .gte("end_date", todayISO)
    .order("start_date", { ascending: true })
  if (error) throw error
  return data ?? []
}

export async function createClosure({ start_date, end_date, reason, notice_days }) {
  const { error } = await supabase
    .from("closures")
    .insert([{ start_date, end_date, reason: reason?.trim() || null, notice_days }])
  if (error) throw error
}

export async function deleteClosure(id) {
  const { error } = await supabase.from("closures").delete().eq("id", id)
  if (error) throw error
}
