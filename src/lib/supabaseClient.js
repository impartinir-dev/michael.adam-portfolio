import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Create a Supabase client instance lazily to avoid importing heavy deps in all components
 */
let _supabase
export function getSupabase() {
  if (!_supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase env vars are missing')
    }
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabase
} 