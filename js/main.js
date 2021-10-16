const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const CloseMenuButton = document.querySelector('.navbar');

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});
CloseMenuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});