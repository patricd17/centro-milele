import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Si falta la configuración, la web sigue funcionando (sin cierres ni formulario) en lugar de quedarse en blanco.
const configured = Boolean(supabaseUrl && supabaseKey)
if (!configured) {
  console.error('Faltan las variables de Supabase (VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY).');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl || 'https://sin-configurar.invalid', supabaseKey || 'sin-configurar');

// Database table names
export const TABLES = {
  CONTACTS: 'contacts'
};