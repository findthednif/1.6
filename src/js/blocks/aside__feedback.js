const feedBack = document.querySelector('.feedback');
const feedBackClose = feedBack.querySelector('.feedback__close');
const burger = document.querySelector('.burger');
const burgerOpenButton = burger.querySelector('.actions__elem:first-child');
const overlay = document.querySelector('.overlay');
const resolution = window.matchMedia("(max-width: 1365px)");
feedBackClose.addEventListener('click', function(){
    feedBack.classList.add('feedback--hidden');
    overlay.classList.add('overlay--hidden');
});
burgerOpenButton.addEventListener('click', function(){
    feedBack.classList.remove('feedback--hidden');
    overlay.classList.remove('overlay--hidden');
});
overlay.addEventListener('click', function(){
    feedBack.classList.add('feedback--hidden');
    overlay.classList.add('overlay--hidden');
});
if (resolution.matches){
    const headerOpenButton = document.querySelector('.action__button:first-child');
    headerOpenButton.addEventListener('click', function(){
        feedBack.classList.remove('feedback--hidden');
        overlay.classList.remove('overlay--hidden');
    });
}