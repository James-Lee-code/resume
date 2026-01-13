const openBtn = document.querySelector(".open-btn");
const icon = document.querySelector(".open-btn i");
const nav = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");

 const track = document.getElementById('partnersTrack');
  const gap = 48;
  let x = 0;
  const speed = 0.2;

  function loop() {
    x -= speed;
    const firstImg = track.children[0];
    const imgWidth = firstImg.offsetWidth + gap;

    if (Math.abs(x) >= imgWidth) {
      x += imgWidth;
      track.appendChild(firstImg);
    }

    track.style.transform = `translate3d(${x}px, 0, 0)`;
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);



  openBtn.addEventListener('click', () => {
    nav.classList.toggle('visible');
    overlay.classList.toggle('visible');

    if (nav.classList.contains('visible')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');

      document
        .querySelectorAll('.ham-has-dropdown')
        .forEach(item => item.classList.remove('active'));
    }
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('visible');
    overlay.classList.remove('visible');

    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');

    document
      .querySelectorAll('.ham-has-dropdown')
      .forEach(item => item.classList.remove('active'));
  });

  document
    .querySelectorAll('.ham-dropdown-toggle')
    .forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const item = btn.closest('.ham-has-dropdown');
        if (!item) return;

        item.classList.toggle('active');
      });
    });


/* =====================
   Scroll reveal handler
===================== */

const boxes = document.querySelectorAll('.box');
const reveals = document.querySelectorAll('.reveal-up');

window.addEventListener('scroll', checkElements);
checkElements();

function checkElements() {
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
  });

  reveals.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}


const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 15);

function blurring() {
  load += 2;

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

document.querySelector('.arrow-up a').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
