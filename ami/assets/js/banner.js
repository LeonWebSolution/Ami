var swiper = new Swiper(".section__banner-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  effect: 'fade',  
  autoplay: {
  delay: 3000, // Задержка между слайдами в миллисекундах
  disableOnInteraction: true, // Автопроигрывание не останавливается при взаимодействии пользователя
 },
  speed: 2000, // Укажите желаемую скорость в миллисекундах
  mousewheel: false,
	grabCursor: false, // менять иконку курсора
  });