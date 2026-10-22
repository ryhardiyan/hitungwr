// ==========================================
//  Home — Kalkulator WR
// ==========================================

const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");
const resultBox = document.querySelector("#resultBox");

function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const wrReq = parseFloat(document.querySelector("#wrReq").value);

    const resultNum = rumus(tMatch, tWr, wrReq);
    const loseNum = rumusLose(tMatch, tWr, wrReq);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
        text = `Field harus diisi bro.`;
        display(text, true);
    } else if (tMatch < 0 || tWr < 0 || wrReq < 0) {
        text = `Field tidak boleh lebih kecil dari 0`;
        display(text, true);
    } else if (tMatch % 1 != 0) {
        text = `Field harus bilangan bulat`;
        display(text, true);
    } else if (tWr == 100 && wrReq == 100) {
        text = `Kamu perlu <b>0</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text, false);
    } else if (wrReq > 100 || tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
        display(text, true);
    } else if (tWr > wrReq) {
        text = `Kamu perlu <b>${loseNum}</b> lose tanpa win untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text, false);
    } else if (tMatch == 0 && tWr == 0 && wrReq == 100) {
        text = `Kamu perlu <b>1</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text, false);
    } else if (wrReq == 100) {
        text = `yo ndak bisa, yang bisa cuman Monton`;
        display(text, true);
    } else if (resultNum >= 100000) {
        text = `Kamu perlu lebih dari <b>100.000</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text, false);
    } else {
        text = `Kamu perlu <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
        display(text, false);
    }
}

function display(text, isError) {
    resultText.innerHTML = text;
    resultBox.classList.toggle("is-error", !!isError);
    resultBox.classList.add("is-visible");
}

function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function rumusLose(tMatch, tWr, wrReq) {
    let totalWin = (tMatch * tWr) / 100;
    let win = (totalWin / (wrReq / 100)) - tMatch;
    return Math.round(win);
}

// Main
window.addEventListener("load", init);

function init() {
    eventListener();
}

function eventListener() {
    hasil.addEventListener("click", res);
}
