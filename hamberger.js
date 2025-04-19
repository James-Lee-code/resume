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

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' , checkBoxes)

checkBoxes()

function checkBoxes() {
    const tiggerBottom = window.innerHeight /5 * 4

    boxes.forEach (box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < tiggerBottom){
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
        
    });
}

const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    bg.classList.add('fade-out');
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 0, 15)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
