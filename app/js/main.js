$(document).ready(function(){
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.coments__container');
    const track = $('.coments__track');
    const item = $('.coments__slider-item');
    const btnPrev = $('.coments__prev');
    const btnNext = $('.coments__next');
    const itemsCount = item.length
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    console.log(itemWidth)

    item.each(function (index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    })

    btnNext.click(function() {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow *itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPostion()
    })

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;

        position +=  itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPostion()

    })

    const setPostion = () =>{
        track.css({
            transform: `translateX(${position}px)`
        });
    }


})

let burgerMenu = document.querySelector('.header__burger-menu')
let burgerBtn = document.querySelector('.header__burger-btn')
let headerMenuItem = document.querySelectorAll('.header__menu-item')
let body = document.querySelector('body')

burgerBtn.onclick = function() {
    burgerMenu.classList.toggle('header__burger-menu--active')
    burgerBtn.classList.toggle('header__burger-btn--active')
    body.classList.toggle('lock')
}

headerMenuItem.forEach(item => item.onclick = function () {
    burgerMenu.classList.remove('header__burger-menu--active')
    burgerBtn.classList.remove('header__burger-btn--active')
    body.classList.remove('lock')
})

