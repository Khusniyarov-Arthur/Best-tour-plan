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

const modelButton = document.querySelector('.booking__button');
const model = document.querySelector('.model');
const modelClose = document.querySelector('.model__close');

modelButton.addEventListener('click', () => {
  model.classList.toggle('model_visible');
  body.classList.toggle("lock");
});

modelClose.addEventListener('click', () => {
  model.classList.toggle('model_visible');
  body.classList.toggle("lock");
});


document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    model.classList.remove('model_visible');
    body.classList.remove("lock");
  }
});