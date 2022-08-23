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

const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('.nav');
const body = document.querySelector("body");

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('nav_visible');
  body.classList.toggle("lock");
});
