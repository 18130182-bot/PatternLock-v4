// ======================================
// PatternLock-v4
// auth.js
// ======================================

async function authenticate(pattern) {
    try {
        const patternString = pattern.join("-");

        const { data, error } = await window.db
            .from("users")
            .select("pattern_hash")
            .eq("username", "admin")
            .single();

        if (error) {
            console.error(error);
            message.style.color = "#dc2626";
            message.textContent = "サーバー接続エラー";
            return;
        }

        if (!data) {
            message.style.color = "#dc2626";
            message.textContent = "ユーザーがありません";
            return;
        }

        if (data.pattern_hash === patternString) {
            message.style.color = "#16a34a";
            message.textContent = "ログイン成功！";

            // 後で管理画面へ移動
            // location.href = "home.html";

        } else {
            message.style.color = "#dc2626";
            message.textContent = "パターンが違います";
        }

    } catch (e) {
        console.error(e);
        message.style.color = "#dc2626";
        message.textContent = "予期しないエラー";
    }
}
