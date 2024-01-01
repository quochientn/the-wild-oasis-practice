import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://urtjzpstrpbrslgjlrib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydGp6cHN0cnBicnNsZ2pscmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4Nzg0MTQsImV4cCI6MjAxODQ1NDQxNH0.KnQ1UPEAEZGiJ9zBYkU172P2id7LIzQaK3gNctByhWQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
