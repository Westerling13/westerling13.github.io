var headerButton = document.querySelector('.header__button');
var footer = document.querySelector('.footer');

headerButton.addEventListener('click', function(evt) {
  footer.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});
