const feedBack = document.querySelector('.feedback');
const feedBackClose = feedBack.querySelector('.feedback__close');
const burger = document.querySelector('.burger');
const burgerOpenButton = burger.querySelector('.actions__modalFeedback');
const overlay = document.querySelector('.overlay');
const tabElem = feedBack.querySelector('.form__field');
const resolution = window.matchMedia("(max-width: 1365px)");
tabElem.tabIndex = 0;
function modalShow(){
    feedBack.classList.remove('feedback--hidden');
    overlay.classList.remove('overlay--hidden');
    tabElem.focus();
}
function modalClose(){
    feedBack.classList.add('feedback--hidden');
    overlay.classList.add('overlay--hidden');
}
feedBackClose.addEventListener('click', modalClose);
burgerOpenButton.addEventListener('click', modalShow);
overlay.addEventListener('click', modalClose);
if (resolution.matches){
    const headerOpenButton = document.querySelector('.action__modalFeedback');
    headerOpenButton.addEventListener('click', modalShow);
}