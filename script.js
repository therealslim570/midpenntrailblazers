const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const racesToggle = document.querySelector(".races-toggle");
const raceDropdown = document.querySelector(".nav-dropdown");

racesToggle?.addEventListener("click", () => {
  const isOpen = racesToggle.getAttribute("aria-expanded") === "true";
  racesToggle.setAttribute("aria-expanded", String(!isOpen));
  raceDropdown?.classList.toggle("is-open", !isOpen);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
  navigation?.classList.toggle("is-open", !isOpen);
  if (isOpen) {
    racesToggle?.setAttribute("aria-expanded", "false");
    raceDropdown?.classList.remove("is-open");
  }
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    racesToggle?.setAttribute("aria-expanded", "false");
    raceDropdown?.classList.remove("is-open");
    navigation.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    racesToggle?.setAttribute("aria-expanded", "false");
    raceDropdown?.classList.remove("is-open");
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
