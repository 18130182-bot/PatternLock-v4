
async function authenticate(pattern) {

    console.log("authenticate が呼ばれました");
    console.log("入力:", patternString);
console.log("DB:", data.pattern_hash);
console.log(data);

    const patternString = pattern.join("-");

    // ...
}
// ======================================
// PatternLock-v4
// auth.js
// ======================================

async function authenticate(pattern) {

    const patternString = pattern.join("-");

    try {

        const { data, error } = await window.db
    .from("users")
    .select("pattern_hash")
    .eq("username", "admin")
    .single();
    
console.log(data);

        if (error) {
            console.error(error);

            message.style.color = "#dc2626";
            message.textContent = "サーバー接続エラー";
            return;
        }

        if (!data) {

            message.style.color = "#dc2626";
            message.textContent = "管理者が見つかりません";
            return;
        }

        console.log("入力:", patternString);
console.log("DB:", data.pattern_hash);
console.log("一致?", data.pattern_hash === patternString);
        
        if (data.pattern_hash === patternString) {

            message.style.color = "#16a34a";
            message.textContent = "ログイン成功！";

            // 後で管理画面へ移動
            // location.href = "admin.html";

        } else {

            message.style.color = "#dc2626";
            message.textContent = "パターンが違います";
        }

    } catch (err) {

        console.error("認証エラー:", error);

        message.style.color = "#dc2626";
        message.textContent = "予期しないエラー";
    }

}
