/* ----------------------------- Loading page aimation ------------------------------*/
$(window).on("load", function () {
  $("#loading").fadeOut(500);
});

/* ----------------------------- nav-bar shadow ------------------------------*/
// if navbar is at top, remove box shadow
navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    navbar.style.boxShadow = "0px 0px 53px -30px rgba(0,0,0,0.67)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* ----------------------------- swiper -----------------------------*/

// SWIPER CONFIG (divce slider)
var reviewsSwiper = new Swiper(".swiper", {
  slidesPerView: window.innerWidth < 900 ? 1 : 2.45,
  // slide size fit to the screen
  // slideSize: window.innerWidth < 700 ? window.innerWidth*0.5 : window.innerWidth,
  spaceBetween: 300,
  grabCursor: true,
  loop: false,
  speed: 1000,
  centeredSlides: true,
  clickable: true,

  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// start from second slide
reviewsSwiper.slideTo(1, false, false);

// on window resize if width is less than 1000px, sliderperview is set to 1
window.addEventListener("resize", function () {
  if (window.innerWidth < 900) {
    reviewsSwiper.params.slidesPerView = 1;
  } else {
    reviewsSwiper.params.slidesPerView = 2.45;
  }
});

/* -----------------------------aos animatio ---------------------------------*/
AOS.init();

/* ----------------------------- aniamtin on scroll to -----------------------*/

// aniamtin on scroll to
function reveal() {
  var reveals = document.querySelectorAll(".animate-on-scroll");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* ----------------------------- back to top button -----------------------------*/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* -----------------random image on each page refresh -----------------------*/

function Randomize() {
  var images = new Array("front-device-cutted", "inside-device-cutted");
  var imageNum = Math.floor(Math.random() * images.length);

  document.getElementById("random").src =
    "assets/images/" + images[imageNum] + ".png";
}

window.onload = Randomize;

