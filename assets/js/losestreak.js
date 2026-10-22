// ==========================================
//  Lose Streak — Kalkulator
// ==========================================

const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");
const resultBox = document.querySelector("#resultBox");

// Functions
function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const lsReq = parseFloat(document.querySelector("#lsReq").value);

    const totalNum = total(tMatch, tWr, lsReq);
    const minLoseNum = minLose(tMatch, tWr);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr) || isNaN(lsReq)) {
        text = `Field harus diisi bro.`;
        display(text, true);
    } else if (lsReq % 1 != 0 || tMatch % 1 != 0) {
        text = `Field harus bilangan bulat`;
        display(text, true);
    } else if (tMatch < 0 || tWr < 0 || lsReq < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text, true);
    } else if (totalNum < 0) {
        text = `Minimal anda harus losestreak <b>${minLoseNum}</b> kali`;
        display(text, true);
    } else if (tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text, true);
    } else {
        text = `Jika anda losestreak sebanyak <b>${lsReq}</b> kali, maka winrate anda menjadi <b>${totalNum}%</b>`;
        display(text, false);
    }
}

function display(text, isError) {
    resultText.innerHTML = text;
    resultBox.classList.toggle("is-error", !!isError);
    resultBox.classList.add("is-visible");
}

function total(tMatch, tWr, lsReq) {
    let totalWin = (tMatch * tWr) / 100;
    let win = (totalWin / (tMatch + lsReq)) * 100;
    return win.toFixed(1);
}

function minLose(tMatch, tWr) {
    return Math.ceil((tMatch * tWr) / 100);
}

// Main
window.addEventListener("load", init);

function init() {
    eventListener();
}

function eventListener() {
    hasil.addEventListener("click", res);
}
