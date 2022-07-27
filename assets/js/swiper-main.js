// SWIPER CONFIG (divce slider)
var reviewsSwiper = new Swiper(".swiper", {
  slidesPerView: window.innerWidth < 850 ? 1 : 2.45,
  // slide size fit to the screen
  slideSize: window.innerWidth < 700 ? window.innerWidth*0.5 : window.innerWidth,
  spaceBetween: 300,
  grabCursor: true,
  loop: false,
  speed: 1000,
  centeredSlides: true,
  clickable: true,

  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  
});
// start from second slide
reviewsSwiper.slideTo(1, false,false);

  // on window resize if width is less than 1000px, sliderperview is set to 1
  window.addEventListener("resize", function() {
    if (window.innerWidth < 850) {
      reviewsSwiper.params.slidesPerView = 1;
    } else {
      reviewsSwiper.params.slidesPerView = 2.45;
    }
  }
);

