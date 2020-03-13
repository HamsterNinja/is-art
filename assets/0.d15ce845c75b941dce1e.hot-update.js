webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var csAnimate = {
    init: function init() {
        var csAnimateElement = document.querySelector('.cs-info_nonan');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                    if (csAnimateElement) {
                        csAnimateElement.classList.add("cs-info_animate");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });
        if (csAnimateElement) {
            observer.observe(csAnimateElement);
        }
    }
};

module.exports = csAnimate;

/***/ })
])