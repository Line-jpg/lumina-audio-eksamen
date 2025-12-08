"use strict";

// Min scroll animation der tilføjer klassen "show-animate" til sektioner. 
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - window.innerHeight / 1.5; 
    const height = sec.offsetHeight;


// If/Else statement der tilføjer/fjerner klassen "show-animate" baseret på scroll position.
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
});

// Skifter billedet af produktImg ved klik på farveBtns. 
const produktImg = document.getElementById("produktImg");

const btn1 = document.querySelector(".farveBtn1");
btn1.addEventListener("click", () => {
  produktImg.src = "img/produktImg.png";
});

const btn2 = document.querySelector(".farveBtn2");
btn2.addEventListener("click", () => {
  produktImg.src = "img/navySpeaker.png";
});

const btn3 = document.querySelector(".farveBtn3");
btn3.addEventListener("click", () => {
  produktImg.src = "img/hvidSpeaker.png";
});

const btn4 = document.querySelector(".farveBtn4");
btn4.addEventListener("click", () => {
  produktImg.src = "img/sortSpeaker.png";
});
