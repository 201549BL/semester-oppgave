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
// https://css-tricks.com/transitions-only-after-page-load/
const preloadedElements = document.querySelectorAll(".preload");

setTimeout(
  () => preloadedElements.forEach((el) => el.classList.remove("preload")),
  50
);

// Remove outline until needed by tabbing
const root = document.querySelector("html");
root.classList.add("hide-outline");

document.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;

  root.classList.remove("hide-outline");
});

// Set height of call-to-action dynamically
const cta = document.querySelector("#call-to-action");
const ctaRoot = document.querySelector(".call-to-action");
const ctaFillers = document.querySelectorAll("[data-cta-filler='true']");

const resizeCta = () => {
  if (!ctaRoot) return;

  ctaRoot.style.height = cta.clientHeight + "px";
  ctaFillers.forEach((cf) => (cf.style.height = cta.clientHeight + "px"));
};

window.addEventListener("resize", resizeCta);

resizeCta();
