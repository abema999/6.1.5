const blur = document.querySelector('.blur');

const menu = document.querySelector('.menu');
const menuOpenButton = document.querySelector('.header__btn--open');
const menuCloseButton = document.querySelector('.menu__btn--close');

menuOpenButton.addEventListener('click', function () {
  blur.classList.add('block');
  menu.classList.add('opened');
});

menuCloseButton.addEventListener('click', function () {
  blur.classList.remove('block');
  menu.classList.remove('opened');
});

document.addEventListener('mouseup', function (e) {
  if (menu.classList.contains('opened') && !menu.contains(e.target)) {
    blur.classList.remove('block');
    menu.classList.remove('opened');
  }
});

const modalCall = document.querySelector('.modal--call');
const modalMessage = document.querySelector('.modal--message');
const modalCallButtons = document.querySelectorAll('.btn--call');
const modalMessageButtons = document.querySelectorAll('.btn--message');
const modalCloseButtons = document.querySelectorAll('.modal__btn--close');

for (const modalCallButton of modalCallButtons) {
  modalCallButton.addEventListener('click', function () {
    blur.classList.add('block');
    menu.classList.remove('opened');
    modalCall.classList.add('opened');
  });
}

for (const modalMessageButton of modalMessageButtons) {
  modalMessageButton.addEventListener('click', function () {
    blur.classList.add('block');
    menu.classList.remove('opened');
    modalMessage.classList.add('opened');
  });
}

for (const modalCloseButton of modalCloseButtons) {
  modalCloseButton.addEventListener('click', function () {
    if (modalCall.classList.contains('opened')) {
      blur.classList.remove('block');
      modalCall.classList.remove('opened');
    }
    if (modalMessage.classList.contains('opened')) {
      blur.classList.remove('block');
      modalMessage.classList.remove('opened');
    }
  });
}

document.addEventListener('mouseup', function (e) {
  if (modalCall.classList.contains('opened') && !modalCall.contains(e.target)) {
    blur.classList.remove('block');
    modalCall.classList.remove('opened');
  }
  if (modalMessage.classList.contains('opened') && !modalMessage.contains(e.target)) {
    blur.classList.remove('block');
    modalMessage.classList.remove('opened');
  }
});
