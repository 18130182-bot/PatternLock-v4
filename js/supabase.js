const SUPABASE_URL = "あなたのProject URL";
const SUPABASE_ANON_KEY = "あなたのAnon Public Key";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
