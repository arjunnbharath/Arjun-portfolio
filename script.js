const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigation = document.querySelector(".nav");
const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeButton.setAttribute(
    "aria-label",
    `Switch to ${isLight ? "dark" : "light"} mode`
  );
  themeLabel.textContent = isLight ? "Dark" : "Light";
}

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(
  savedTheme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
);

themeButton.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-mode")
    ? "dark"
    : "light";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

document.body.classList.add("animations-ready");

const revealElements = document.querySelectorAll(
  ".section h2, .about-grid > *, .about-copy > *, " +
  ".services-grid > img, .service-list article, .project-card, " +
  ".cert-list li, .education, .contact-grid > *"
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px" }
);

revealElements.forEach((element) => revealObserver.observe(element));

function updateNavigation() {
  navigation.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(form).get("name").trim();
  formStatus.textContent = `Thanks, ${name}. I’ll be in touch soon.`;
  form.reset();
});
