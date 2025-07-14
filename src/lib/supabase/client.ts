import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  
  // Return a mock client if credentials are missing
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project')) {
    console.warn('Supabase credentials not configured. Using mock client.')
    return null
  }
  
  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}