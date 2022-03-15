const navHamburger = document.getElementById("hamburger");
const navContainer = document.querySelector(".navbar-container");

navHamburger.addEventListener("click", (e) => {
  navContainer.classList.toggle("active");
});
