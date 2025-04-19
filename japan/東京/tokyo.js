const openBtn = document.querySelector(".open-btn");
const icon = document.querySelector(".open-btn i");
const nav = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");



openBtn.addEventListener('click', () => {
    nav.classList.toggle("visible");
    overlay.classList.toggle("visible");
    if (nav.classList.contains("visible")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
        
        panel.addEventListener("click", () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    } );

    function removeActiveClasses(){
        panels.forEach(panel =>{
            panel.classList.remove('active')
        })
    }
