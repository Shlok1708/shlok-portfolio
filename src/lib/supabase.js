import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iyhqydrqvrlztytkvhti.supabase.co";

const supabaseKey = "sb_publishable_AOFkFs7mBOlbHN9W00QuuA_jxF3_Rh_";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);