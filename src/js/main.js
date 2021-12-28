$(function () {
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        slidesPerView: 1.2,
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.trusted__slider').slick({
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
         nextArrow:'<button type="button" class="slick-arrow slick-next"></button>',
         prevArrow:'<button type="button" class="slick-arrow slick-prev"></button>',
         slidesToShow: 3,
         slidesToScroll: 3,
        speed: 200,
        asNavFor:'.trusted__for',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $('.trusted__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.trusted__slider'
    });


});



var swiper = new Swiper(".MySwiper", {
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        775: {
            slidesPerView: 3,
            spaceBetween: 56,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 56,
        },
    }
});

$(document).ready(function () {
    $('#lightgallery').lightGallery();
});




let Burger = document.querySelector('.comingBurger');
let BurgerList = document.querySelector('.payment__right');
let arrow = document.querySelector('.fa-angle-down');
let phone = $('#tel');

phone.inputmask('+\\9\\96 (999)99-99-99')

Burger.addEventListener('click', function () {
    Burger.classList.toggle('active');
    BurgerList.classList.toggle('active');
    arrow.classList.toggle('active');
});



let join = $('.open-popup');
let overlay = $('.overlay');
let overlayframe = $('.overlayframe');
let close = $('.popup__close');
let start = $('.popup__loginform-signup');
let form = $('.popup__form');
let signup = $('.popup__signupform');
let login = $('.popup__loginform');
let thanks = $('.popup__thanks');
let submit = $('.submit');

join.on('click', function () {
    overlayframe.fadeIn(500);
    login.fadeIn();
    thanks.fadeOut(1);
    signup.fadeOut(1);

});

start.on('click', function () {
    login.fadeOut(1);
    thanks.fadeOut(1);
    signup.fadeIn();
});

close.on('click', function () {
    overlayframe.fadeOut();
});

overlay.on('click', function () {
    overlayframe.fadeOut();
});

submit.on('click', function () {
    overlayframe.fadeIn();
    login.fadeOut(1);
    signup.fadeOut(1);
    thanks.fadeIn();

});














//
// var map;
//
// DG.then(function () {
//     map = DG.map('map', {
//         center: [42.902885, 74.589135],
//         zoom: 13
//
//
//     });
//     DG.marker([42.902885, 74.589135]).addTo(map);
// });