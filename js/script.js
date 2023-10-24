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

// Select all the menu links
const menuLinks = document.querySelectorAll(".list__item a");

// Add a click event listener to each menu link
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const targetId = this.getAttribute("href").substring(1); // Extract the target ID
    const targetElement = document.getElementById(targetId); // Get the target element

    if (targetElement) {
      // Calculate the target's position relative to the viewport
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target smoothly
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
