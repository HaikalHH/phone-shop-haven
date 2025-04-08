
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Use public environment variables or fallback to empty string
// For Lovable, these need to be set in your Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only log missing environment variables in development
if (import.meta.env.DEV && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('Missing Supabase environment variables');
}

// Create the Supabase client with explicit non-empty strings and proper typing
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      // Add fallbacks so the app can initialize even without proper config
      autoRefreshToken: true,
      detectSessionInUrl: true,
    }
  }
);
