"use strict";

const sections = document.querySelectorAll("section");

// Tager fat om browservinduet, og gør noget noget ved
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - window.innerHeight / 1.5; // justér 1.5 for timing
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
});
