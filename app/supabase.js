import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jbhyirodfowczmzumrop.supabase.co";
const supabaseKey = "sb_publishable_4wl4ghXwi-JvjVAjOZvgUw_wEBuhXR0";

export const supabase = createClient(supabaseUrl, supabaseKey);
