const technique = document.querySelector(".technique");
const techniqueList = technique.querySelector(".technique__list");
const readMore = technique.querySelector(".list__read-more");
const readMoreText = readMore.querySelector(".read-more__text");
const readMoreIcon = readMore.querySelector(".read-more__icon");
const techniqueMain = document.querySelector(".technique__main");
const slider = techniqueMain.querySelector(".swiper");
const resolution = window.matchMedia("(max-width: 768px)");
readMore.addEventListener("click", function () {
  techniqueList.classList.toggle("technique__list--short");
  readMoreIcon.classList.toggle("read-more__icon--rotate");
  if (readMoreText.textContent == "Показать все") {
    readMoreText.textContent = "Скрыть";
  } else {
    readMoreText.textContent = "Показать все";
  }
});
function smallResolution() {
  techniqueMain.appendChild(slider);
  techniqueList.remove();
  readMore.remove();
}
function bigResolution() {
  slider.remove();
  techniqueMain.appendChild(techniqueList);
  techniqueMain.appendChild(readMore);
}
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
