/* ==========================================
   HitungWR — global behaviour
   ========================================== */

/* ---------- Mobile navigation ---------- */
(function () {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("primaryNav");

    if (!toggle || !nav) return;

    const setState = function (open) {
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    };

    toggle.addEventListener("click", function () {
        setState(!nav.classList.contains("is-open"));
    });

    // Tutup menu begitu sebuah link diklik
    nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) setState(false);
    });

    // Kembalikan ke layout desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) setState(false);
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setState(false);
    });
})();

/* ---------- Sticky header state ---------- */
(function () {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    const onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- Submit kalkulator ---------- */
(function () {
    const form = document.querySelector("#calcForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        res();
    });

    form.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            res();
        }
    });
})();

/* ---------- Dipakai oleh semua halaman kalkulator ---------- */
function res() {
    validation();
}
