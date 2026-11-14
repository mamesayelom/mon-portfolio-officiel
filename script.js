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

// ===== Formulaire de contact =====
// Ouvre l'application mail du visiteur avec le message déjà écrit
const formulaire = document.getElementById("form-contact");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const sujet = "Message depuis ton portfolio - " + nom;
    const corps = message + "\n\n" + nom + "\n" + email;

    window.location.href =
        "mailto:mamesayelomo4@gmail.com" +
        "?subject=" + encodeURIComponent(sujet) +
        "&body=" + encodeURIComponent(corps);
});
