const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    mobileNav.setAttribute("aria-hidden", mobileNav.classList.contains("show") ? "false" : "true");
  });

  // close menu after click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("show"));
  });
}
