import "../scss/style.scss";
import "../index.html";
import "./blocks/main__title&nav.js";
import "./blocks/main__brands.js";
import "./blocks/aside__burger.js";
import "./blocks/main__about.js";
import "./blocks/main_technique.js";
import "./blocks/main__prices.js";
import "./blocks/aside__feedback.js"
import "./blocks/aside__call.js"
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  spaceBetween: 16,
});