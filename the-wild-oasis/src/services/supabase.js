import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zfidnjgoudkmfieenfkz.supabase.co";
// we do not need to secure this key as this key cannot be use in bash or browser due to rls(roe level security)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmaWRuamdvdWRrbWZpZWVuZmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NTU0NjQsImV4cCI6MjAxNzMzMTQ2NH0.D4mmW3f7b5oLhqxRrPHYTkNUTdWF6ngZ4G86PV0iAMU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
