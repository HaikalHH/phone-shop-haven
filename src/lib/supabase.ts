
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Use the actual Supabase URL and anon key from your project
const supabaseUrl = 'https://tsuesntuixojkhqvpans.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdWVzbnR1aXhvamtocXZwYW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTUwMjQsImV4cCI6MjA1OTY3MTAyNH0.ha4pQnAzdNXqngce3Vmx34ZWYIe6q6KmjpmOZwk4dGA';

// Create the Supabase client with the actual values
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
