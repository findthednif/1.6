const call = document.querySelector('.call');
const callClose = call.querySelector('.call__close');
const burger = document.querySelector('.burger');
const burgerOpenButton = burger.querySelector('.actions__modalCall');
const overlay = document.querySelector('.overlay');
const tabElem = call.querySelector('.form__field');
const resolution = window.matchMedia("(max-width: 1365px)");
tabElem.tabIndex = 0;
function modalShow(){
    call.classList.remove('call--hidden');
    overlay.classList.remove('overlay--hidden');
    tabElem.focus();
}
function modalClose(){
    call.classList.add('call--hidden');
    overlay.classList.add('overlay--hidden');
}
callClose.addEventListener('click', modalClose);
burgerOpenButton.addEventListener('click', modalShow);
overlay.addEventListener('click', modalClose);
if (resolution.matches){
    const headerOpenButton = document.querySelector('.action__modalCall');
    headerOpenButton.addEventListener('click', modalShow);
}