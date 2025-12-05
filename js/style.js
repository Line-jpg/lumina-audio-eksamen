"use strict";

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - window.innerHeight / 1.5; 
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
});

const beigeKnap = document.querySelector('.farveBtn1');
const beigeImg = new Image();
beigeImg.src = 'img/produktImg.png';
  
if (beigeKnap) {
  beigeKnap.addEventListener('click', function () {
    const produktImg = document.getElementById('produktImg');
    if (produktImg) {
      produktImg.src = 'img/produktImg.png';
    }
  });
}

const navyKnap = document.querySelector('.farveBtn2');
const navyImage = new Image();
navyImage.src = 'img/navySpeaker.png';

if (navyKnap) {
  navyKnap.addEventListener('click', function () {
    const produktImg = document.getElementById('produktImg');
    if (produktImg) {
      produktImg.src = 'img/navySpeaker.png';
    }
  });
}

const hvidKnap = document.querySelector('.farveBtn3');
const hvidImage = new Image();
hvidImage.src = 'img/hvidSpeaker.png';

if (hvidKnap) {
  hvidKnap.addEventListener('click', function () {
    const produktImg = document.getElementById('produktImg');
    if (produktImg) {
      produktImg.src = 'img/hvidSpeaker.png';
    }
  });
}

const sortKnap = document.querySelector('.farveBtn4');
const sortImage = new Image();
sortImage.src = 'img/sortSpeaker.png';

if (sortKnap) {
  sortKnap.addEventListener('click', function () {
    const produktImg = document.getElementById('produktImg');
    if (produktImg) {
      produktImg.src = 'img/sortSpeaker.png';
    }
  });
}