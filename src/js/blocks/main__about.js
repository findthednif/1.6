const infoText = document.querySelector(".info__text");
const infoButton = document.querySelector(".info__readMore");
const infoButtonText = infoButton.querySelector(".readMore__text");
const infoButtonIcon = infoButton.querySelector(".readMore__icon");
infoButton.addEventListener("click", function () {
  infoText.classList.toggle("info__text--short");
  infoButtonIcon.classList.toggle("readMore__icon--rotate");
  if (infoButtonText.textContent == "Читать далее") {
    infoButtonText.textContent = "Скрыть";
  } else {
    infoButtonText.textContent = "Читать далее";
  }
});
