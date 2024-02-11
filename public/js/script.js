const btn = document.querySelector(".nav-mobile");
const nav = document.querySelector(".header-container");
const toggleNavbar = () => {
  nav.classList.toggle("active");
};
btn.addEventListener("click", () => toggleNavbar());