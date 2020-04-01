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
        nextEl: '.block_development-inner .swiper-button-next',
        prevEl: '.block_development-inner .swiper-button-prev'
    }
});

var swiperworks = new Swiper('.swiper-container.our-works-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.our-works-swiper .swiper-button-next',
        prevEl: '.our-works-swiper .swiper-button-prev'
    }
});
var swiperteam = new Swiper('.swiper-container.our-team-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    navigation: {
        nextEl: '.our-team-swiper .swiper-button-next',
        prevEl: '.our-team-swiper .swiper-button-prev'
    },
    breakpoints: {
        680: {
            slidesPerView: 3,
            spaceBetween: 35
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 35
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 35
        }
    }
});
var swiperserts = new Swiper('.swiper-container.sertificates-swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 35,
    navigation: {
        nextEl: '.sertificates-swiper .swiper-button-next',
        prevEl: '.sertificates-swiper .swiper-button-prev'
    },
    breakpoints: {
        680: {
            slidesPerView: 2,
            spaceBetween: 35
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 35
        }
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

$(document).ready(function () {
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

    $(window).resize(function (BorderResize) {
        var borderWidht = $(window).width();
        $('.triangle-decore-l').css({ 'border-left-width': borderWidht });
        $('.triangle-decore-r').css({ 'border-left-width': borderWidht });
    });

    $(window).resize();

    (function () {

        var youtube = document.querySelectorAll(".youtube");

        for (var i = 0; i < youtube.length; i++) {

            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));

            youtube[i].addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.appendChild(iframe);
            });
        };
    })();
});

/***/ })
])