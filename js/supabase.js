// ======================================
// PatternLock-v4
// Supabase接続
// ======================================

const SUPABASE_URL = "https://kcncleosyltuhuaamque.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_hRCu-BxhlUPQcwr0KB3q_Q_00dIKXd1";

window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// 接続テスト
(async () => {

    console.log("Supabase 接続テスト開始");

    const { data, error } = await window.db
        .from("users")
        .select("username");

    if (error) {
        console.error("Supabase接続エラー", error);
    } else {
        console.log("Supabase接続成功", data);
    }

})();
