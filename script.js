const blockVision = document.querySelector(
  '.services__list--visibilite--hidden'
)
const buttonMore = document.querySelector('.services__button-more')

buttonMore.addEventListener('click', function () {
  blockVision.classList.toggle('services__list--visibilite--hidden')
  buttonMore.textContent = 'Скрыть'
  buttonMore.classList.add('services__button-more--transform--rotate')

  if (blockVision.classList.contains('services__list--visibilite--hidden')) {
    buttonMore.textContent = 'Показать все'
    buttonMore.classList.remove('services__button-more--transform--rotate')
  }
})

new Swiper('.swiper-container', {
  cssMode: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      width: 326,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    },
  },
})