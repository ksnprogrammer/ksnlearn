import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey } from './supabaseConfig';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

export async function signOut() {
  await supabase.auth.signOut();
}
