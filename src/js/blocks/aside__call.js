const call = document.querySelector('.call');
const callClose = call.querySelector('.call__close');
const burger = document.querySelector('.burger');
const burgerOpenButton = burger.querySelector('.actions__elem:nth-child(2)');
const overlay = document.querySelector('.overlay');
const resolution = window.matchMedia("(max-width: 1365px)");
callClose.addEventListener('click', function(){
    call.classList.add('call--hidden');
    overlay.classList.add('overlay--hidden');
});
burgerOpenButton.addEventListener('click', function(){
    call.classList.remove('call--hidden');
    overlay.classList.remove('overlay--hidden');
});
overlay.addEventListener('click', function(){
    call.classList.add('call--hidden');
    overlay.classList.add('overlay--hidden');
});
if (resolution.matches){
    const headerOpenButton = document.querySelectorAll('.action__button')[1];
    headerOpenButton.addEventListener('click', function(){
        call.classList.remove('call--hidden');
        overlay.classList.remove('overlay--hidden');
    });
}