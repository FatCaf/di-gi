const navigationSquare = document.querySelector(".navigation__square");
const navigationMenu = document.querySelector(".navigation__menu");
const navigationBarTop = document.querySelector(".navigation__bar.top");
const navigationBarMid = document.querySelector(".navigation__bar.mid");
const navigationBarBottom = document.querySelector(".navigation__bar.bottom");

navigationSquare.addEventListener("click", () => {
  navigationMenu.classList.toggle("opened");
  navigationBarTop.classList.toggle("top__anim");
  navigationBarMid.classList.toggle("mid__anim");
  navigationBarBottom.classList.toggle("bottom__anim");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true, // Enable pagination dots
    nav: true,
  });
});
