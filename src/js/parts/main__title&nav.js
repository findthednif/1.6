const listElem = document.querySelectorAll(".list__elem");
function listener(clickedElem) {
  listElem.forEach((elem) => {
    if (elem !== clickedElem) {
      elem.classList.remove("list__elem--chosen");
    }
  });
  clickedElem.classList.toggle("list__elem--chosen");
}
listElem.forEach((elem) => {
  elem.addEventListener("click", function () {
    listener(elem);
  });
});
