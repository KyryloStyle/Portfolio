console.log("script.js загружен!");


function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showNotification);
    } else {
        // Фоллбэк
        let textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showNotification();
    }
}

function showNotification() {
    let note = document.getElementById("notification");
    note.classList.add("show");

    setTimeout(() => {
        note.classList.remove("show");
    }, 2000); // держим 2 секунды
}

