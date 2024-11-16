const brandsList = document.querySelector('.brands__list');
const brandsExpandButton = document.querySelector('.brands__expand');
const electronicsList = document.querySelector('.electronics__list');
const electronicsExpandButton = document.querySelector('.electronics__expand');

brandsExpandButton.addEventListener('click', function () {
  brandsList.classList.toggle('brands__list--expanded');
  if (brandsList.classList.contains('brands__list--expanded')) {
    brandsExpandButton.textContent = 'Скрыть';
    brandsExpandButton.classList.toggle('rotate');
  } else {
    brandsExpandButton.textContent = 'Показать все';
    brandsExpandButton.classList.toggle('rotate');
  }
});

electronicsExpandButton.addEventListener('click', function () {
  electronicsList.classList.toggle('electronics__list--expanded');
  if (electronicsList.classList.contains('electronics__list--expanded')) {
    electronicsExpandButton.textContent = 'Скрыть';
    electronicsExpandButton.classList.toggle('rotate');
  } else {
    electronicsExpandButton.textContent = 'Показать все';
    electronicsExpandButton.classList.toggle('rotate');
  }
});
