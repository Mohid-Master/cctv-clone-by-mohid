

// -> For Navbar drop <- \\
navbar = document.querySelector(".navbar");
menu_toggle_icon = document.querySelector(".menu-toggler");
menu_toggle_icon.addEventListener("click", () => navbar.classList.toggle("drop"));

// -> For slider <- \\
cards_container = document.querySelector(".review-slider .slider-screen .member-cards");
let poScreen = -70;
mLeft = () => {
    poScreen === 0 ? poScreen = -140 : poScreen += 70;
    cards_container.style.left = poScreen + "vw";
}
mRight = () => {
    poScreen === -140 ? poScreen = 0 : poScreen -= 70;
    cards_container.style.left = poScreen + "vw";
}
