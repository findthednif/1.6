const prices = document.querySelector(".prices");
const pricesList = prices.querySelector(".prices__list");
const pricesInfo = prices.querySelector(".prices__info");
const slider = prices.querySelector(".swiper");
const resolution = window.matchMedia("(max-width: 768px)");
function smallResolution() {
  prices.insertBefore(slider, pricesInfo);
  pricesList.remove();
}
function bigResolution() {
  slider.remove();
  prices.insertBefore(pricesList, pricesInfo);
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
