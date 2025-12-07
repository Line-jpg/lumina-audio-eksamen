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

// Billederne bliver desværre kæmpe store. 

const produktImg = document.getElementById("produktImg");

document.querySelector(".farveBtn1")?.addEventListener("click", () => {
  produktImg.src = "img/produktImg.png";
});

document.querySelector(".farveBtn2")?.addEventListener("click", () => {
  produktImg.src = "img/navySpeaker.png";
});

document.querySelector(".farveBtn3")?.addEventListener("click", () => {
  produktImg.src = "img/hvidSpeaker.png";
});

document.querySelector(".farveBtn4")?.addEventListener("click", () => {
  produktImg.src = "img/sortSpeaker.png";
});
