console.log("supabase.js が読み込まれました");

const SUPABASE_URL = "https://kcncleosyltuhuaamque.supabase.co";
const SUPABASE_ANON_KEY = "あなたの Publishable Key";

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

(async () => {
    const { data, error } = await window.db
        .from("users")
        .select("*");

    if (error) {
        console.error("Supabase接続エラー", error);
    } else {
        console.log("Supabase接続成功", data);
    }
})();
