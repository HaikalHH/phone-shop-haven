
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Use public environment variables or provide fallback placeholder values
// For Lovable, these need to be set in your Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Only log missing environment variables in development
if (import.meta.env.DEV && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  console.error('Missing Supabase environment variables');
  console.info('Please set your Supabase URL and Anonymous Key in the Supabase integration settings');
}

// Create the Supabase client with fallback values that will allow initialization
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    }
  }
);
