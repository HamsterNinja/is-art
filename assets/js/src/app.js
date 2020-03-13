const csAnimate = {
    init: () => {
        const csAnimateElement = document.querySelectorAll('.cs-info_nonan');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    if (entry.target) {
                        entry.target.classList.add("cs-info_animate");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });
        csAnimateElement.forEach(element => {
            observer.observe(element);
        })
    }
}

csAnimate.init();


var swiper = new Swiper('.swiper-container', {
	  slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });

var swiperworks = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });