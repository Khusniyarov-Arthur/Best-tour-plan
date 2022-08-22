const swiper = new Swiper('.swiper', {
  // Optional parameters
   loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
 });

 
 const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
   loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
 });

 
 var menuButton = document.querySelector(".menu-btn");
 menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
  .querySelector(".nav")
  .classList.toggle("nav_visible");
 })
