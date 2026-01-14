const openBtn = document.querySelector(".open-btn");
const icon = document.querySelector(".open-btn i");
const nav = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");

function closeMenu() {
    nav.classList.remove("visible");
    overlay.classList.remove("visible");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}

openBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("visible");
    overlay.classList.toggle("visible", isOpen);

    if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        closeMenu();
    }
});

overlay.addEventListener("click", closeMenu);
