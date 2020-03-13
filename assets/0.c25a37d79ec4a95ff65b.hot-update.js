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
                    console.log(entry);
                    // if (csAnimateElement) {
                    //     csAnimateElement.classList.add("cs-info_animate");
                    // }

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

/***/ })
])