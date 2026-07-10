// ======================================
// PatternLock-v4
// auth.js
// ======================================

async function authenticate(pattern) {

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

    if (patternString === data.pattern_hash) {

        message.style.color = "#16a34a";
        message.textContent = "ログイン成功！";

        // 後で管理画面へ移動
        // location.href = "admin.html";

    } else {

        message.style.color = "#dc2626";
        message.textContent = "パターンが違います";

    }

}
