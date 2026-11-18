// ===== Menu mobile =====
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function () {
    const ouvert = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", ouvert);
});

// On referme le menu quand on clique sur un lien
menu.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
    });
});
