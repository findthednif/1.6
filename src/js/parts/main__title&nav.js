const listElem = document.querySelectorAll(".list__elem");
function listener(clickedElem) {
  listElem.forEach((elem) => {
    if (elem !== clickedElem) {
      elem.classList.remove("list__elem--chosen");
    }
  });
  clickedElem.classList.toggle("list__elem--chosen");
}
for (let i = 0; i < listElem.length; i++) {
  listElem[i].addEventListener("click", function () {
    listener(listElem[i]);
  });
}
