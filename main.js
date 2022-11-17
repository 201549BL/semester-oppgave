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

// Set active css styling on current page in sidebar navigation
const urlObject = new URL(window.location.href);

const currentUrl = urlObject.pathname;

const navLinks = Array.from(document.querySelectorAll(".article__nav a"));

navLinks.forEach((link) => {
  if (!link.href.includes(currentUrl)) return;

  link.closest("li").classList.add("navlink-active");
  if (link.closest("details")) {
    link.closest("details").setAttribute("open", "true");
  }
});

// button to turn off css
const cssToggle = document.querySelector("#css-toggle");
const styleSheet = document.querySelector("link[rel=stylesheet]");
const styleHref = styleSheet.getAttribute("href");

console.log("🚀 ~ file: main.js ~ line 74 ~ styleHref", styleHref);

if (cssToggle) {
  cssToggle.addEventListener("click", () => {
    if (styleSheet.getAttribute("href")) {
      cssToggle.innerHTML = "Skru på CSS";
      return styleSheet.setAttribute("href", "");
    }

    cssToggle.innerHTML = "Skru av CSS";
    styleSheet.setAttribute("href", styleHref);
  });
}
