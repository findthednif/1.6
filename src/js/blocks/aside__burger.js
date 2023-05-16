const asideBurger = document.querySelector(".burger");
const burgerButton = document.querySelector(".header__burger");
const xButton = asideBurger.querySelector(".burger__x");
const resolution = window.matchMedia("(min-width: 1365px)");
const main = document.querySelector(".main");
const overlay = document.querySelector(".overlay");
function smallResolution() {
  asideBurger.classList.add("burger--hidden");
  main.classList.remove("main--positioned");
  burgerButton.addEventListener("click", function () {
    overlay.classList.remove("overlay--hidden");
    asideBurger.classList.remove("burger--hidden");
  });
  xButton.addEventListener("click", function () {
    overlay.classList.add("overlay--hidden");
    asideBurger.classList.add("burger--hidden");
  });
  overlay.addEventListener("click", function () {
    overlay.classList.add("overlay--hidden");
    asideBurger.classList.add("burger--hidden");
  });
}
if (!resolution.matches) {
  smallResolution();
} else {
  asideBurger.classList.remove("burger--hidden");
  main.classList.add("main--positioned");
}
resolution.addEventListener("change", function (evt) {
  if (!evt.matches) {
    smallResolution();
  } else {
    asideBurger.classList.remove("burger--hidden");
    main.classList.add("main--positioned");
  }
});
