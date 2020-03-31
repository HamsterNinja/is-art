webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var csAnimate = {
    init: function init() {
        var csAnimateElement = document.querySelectorAll('.cs-info_nonan');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                    if (entry.target) {
                        entry.target.classList.add("cs-info_animate");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });
        csAnimateElement.forEach(function (element) {
            observer.observe(element);
        });
    }
};

csAnimate.init();

var swiper = new Swiper('.swiper-container.development-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.development-swiper .swiper-button-next',
        prevEl: '.development-swiper .swiper-button-prev'
    }
});

var swiperworks = new Swiper('.swiper-container.our-works-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

function animate(_ref) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;


    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        var timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        var progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
var textWrapper = document.querySelector('.fake_yasearch');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true }).add({
    targets: '.fake_yasearch .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function delay(el, i) {
        return 70 * i;
    }
}).add({
    targets: '.fake_yasearch',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

$('.choose-button').click(function (event) {
    event.preventDefault();
    $('.choose-button').removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr('data-id');
    if (id) {

        $('.order-site-content-inner:visible').removeClass('visible');
        $('.order-site-content').find('#' + id).addClass('visible');
    }
});

/***/ })
])