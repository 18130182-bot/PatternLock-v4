// ======================================
// PatternLock-v4
// auth.js
// Supabase版
// ======================================

async function authenticate(pattern) {

    try {

        // 入力したパターンを "1-2-5-8" の形式に変換
        const patternString = pattern.join("-");

        console.log("入力:", patternString);
alert("入力されたパターン: " + patternString);
        console.log("入力:", patternString);

        // adminユーザーを取得
        const { data, error } = await window.db
            .from("users")
            .select("username, pattern_hash")
            .eq("username", "admin")
            .single();

        if (error) {
            console.error("Supabaseエラー:", error);

            message.style.color = "#dc2626";
            message.textContent = "サーバー接続エラー";
            return;
        }

        if (!data) {
            message.style.color = "#dc2626";
            message.textContent = "管理者が見つかりません";
            return;
        }

        console.log("DB:", data.pattern_hash);
        console.log("一致:", data.pattern_hash === patternString);

        if (data.pattern_hash === patternString) {

            message.style.color = "#16a34a";
            message.textContent = "ログイン成功！";

            setTimeout(() => {
                location.href = "home.html";
            }, 800);

        } else {

            message.style.color = "#dc2626";
            message.textContent = "パターンが違います";
        }

    } catch (e) {

        console.error("予期しないエラー:", e);

        message.style.color = "#dc2626";
        message.textContent = "予期しないエラー";
    }

}
