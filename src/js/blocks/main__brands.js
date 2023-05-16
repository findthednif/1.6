const brands = document.querySelector(".brands");
const brandsList = brands.querySelector(".brands__list");
const readMore = brands.querySelector(".list__read-more");
const readMoreText = readMore.querySelector(".read-more__text");
const readMoreIcon = readMore.querySelector(".read-more__icon");
const brandsMain = document.querySelector(".brands__main");
const slider = brandsMain.querySelector(".swiper");
readMore.addEventListener("click", function () {
  brandsList.classList.toggle("brands__list--short");
  readMoreIcon.classList.toggle("read-more__icon--rotate");
  if (readMoreText.textContent == "Показать все") {
    readMoreText.textContent = "Скрыть";
  } else {
    readMoreText.textContent = "Показать все";
  }
});
function smallResolution() {
  brandsMain.appendChild(slider);
  brandsList.remove();
  readMore.remove();
}
function bigResolution() {
  slider.remove();
  brandsMain.appendChild(brandsList);
  brandsMain.appendChild(readMore);
}
let resolution = window.matchMedia("(max-width: 768px)");
if (resolution.matches) {
  smallResolution();
} else {
  bigResolution();
}
resolution.addEventListener("change", function (evt) {
  if (evt.matches) {
    smallResolution();
  } else {
    bigResolution();
  }
});
