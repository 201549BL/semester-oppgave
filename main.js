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

// Get url string
const url = window.location.href.split("/");
const trimmedUrl = url[url.length - 1].replace(".html", "");

const navLinks = Array.from(document.querySelectorAll(".article__nav a"));

navLinks.forEach((link) => {
  if (!link.href.includes(trimmedUrl)) return;

  link.closest("li").classList.add("navlink-active");

  if (link.closest("details")) {
    link.closest("details").setAttribute("open", "true");
  }
});

// Make index cards able to open and close
const cards = Array.from(document.querySelectorAll(".card"));
cards.forEach((card) => {
  card.querySelector("button")?.addEventListener("click", () => {
    card.classList.toggle("card--open");
  });
});
