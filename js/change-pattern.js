// ======================================
// PatternLock-v4
// change-pattern.js
// ======================================

const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", async () => {

    if (pattern.length < 4) {
        message.style.color = "#dc2626";
        message.textContent = "4点以上選択してください";
        return;
    }

    const patternString = pattern.join("-");

    const { error } = await window.db
        .from("users")
        .update({
            pattern_hash: patternString
        })
        .eq("username", "admin");

    if (error) {
        console.error(error);

        message.style.color = "#dc2626";
        message.textContent = "保存に失敗しました";
        return;
    }

    message.style.color = "#16a34a";
    message.textContent = "保存しました！";

    clearPattern();

});
