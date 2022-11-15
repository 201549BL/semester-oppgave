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

// remove animations when resizing screen
const htmlRoot = document.querySelector("html");

let timeoutId = null;

window.addEventListener("resize", () => {
  htmlRoot.classList.add("no-animations");

  if (timeoutId) clearInterval(timeoutId);

  timeoutId = setTimeout(() => {
    htmlRoot.classList.remove("no-animations");

    timeoutId = null;
  }, 50);
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
