const navbarNav = document.querySelector(".navbar-nav");
// ketikan hamberger menu diklik
document.querySelector("#menu-toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#menu-toggle ");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
