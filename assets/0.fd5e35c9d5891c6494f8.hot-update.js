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

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

var swiperworks = new Swiper('.swiper-container', {
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
function animateText(textArea) {
    var text = document.querySelector('.fake_yasearch').innerHTML;
    var to = text.length,
        from = 0;

    animate({
        duration: 5000,
        timing: bounce,
        draw: function draw(progress) {
            var result = (to - from) * progress + from;
            document.querySelector('.fake_yasearch').innerHTML = text.substr(0, Math.ceil(result));
        }
    });
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}
animateText();

/***/ })
])