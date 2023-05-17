import "../scss/style.scss";
import "../index.html";
import "./parts/main__title&nav.js";
import "./parts/main__brands.js";
import "./parts/aside__burger.js";
import "./parts/main__about.js";
import "./parts/main_technique.js";
import "./parts/main__prices.js";
import "./parts/aside__feedback.js"
import "./parts/aside__call.js"
const resolution = window.matchMedia("(max-width: 768px)");
if (resolution.matches){
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
  });
}