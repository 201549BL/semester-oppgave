// Navigation buttons
const nav = document.querySelector(".nav");
const onNavButtonClick = () => {
  nav.classList.toggle("nav--visible");
};
const navButtons = document.querySelectorAll(".nav__button");
navButtons.forEach((btn) =>
  btn.addEventListener("click", () => onNavButtonClick())
);

// preload script
const preloadedElements = document.querySelectorAll(".preload");
const onLoaded = (e) => {
  preloadedElements.forEach((el) => el.classList.remove("preload"));
};
document.addEventListener("DOMContentLoaded", () => onLoaded());
