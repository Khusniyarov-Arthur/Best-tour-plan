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

const modalButton = document.querySelector('.booking__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  modal.classList.add('modal_visible');
  body.classList.add("lock");
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_visible');
  body.classList.remove("lock");
});


document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    modal.classList.remove('modal_visible');
    body.classList.remove("lock");
  }
});

// Валидация modal
// inputmask
const form = document.querySelector('.js-validate');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
const validation = new JustValidate('.js-validate');

validation
  .addField('.js-validate-name', [

    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter your name!'
    }
  ])
  .addField('.js-validate-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Please enter a valid Email',
    },
  ])
  .addField('.js-validate-number', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Phone required',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Please enter a valid phone number',
    },
]);

// Валидация Newsletter
// const formw = document.querySelector('.js-valnewsletter');
const validationNewsletter = new JustValidate('.js-valnewsletter');

validationNewsletter
  .addField('.js-valnewsletter-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Please enter a valid Email',
    },
  ]);
 
// Валидация в footer
// inputmask
const formFooter = document.querySelector('.js-valfooter');
const telSelectorFooter = formFooter.querySelector('input[type="tel"]');
const inputMaskFooter = new Inputmask('+7 (999) 999-99-99');
inputMaskFooter.mask(telSelectorFooter);
const validationFooter = new JustValidate('.js-valfooter');

validationFooter
  .addField('.js-valfooter-name', [

    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter your name!'
    },
  ])
  .addField('.js-valfooter-number', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Phone required',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelectorFooter.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Please enter a valid phone number',
    },
  ]);