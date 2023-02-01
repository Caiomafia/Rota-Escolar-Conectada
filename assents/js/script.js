var menu = document.querySelector(".menu");
var toggle = document.querySelector(".toggle-menu");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});