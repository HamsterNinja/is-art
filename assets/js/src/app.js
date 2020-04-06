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

var swiper = new Swiper('.swiper-container.development-swiper', {
	  slidesPerView: 'auto',
    loop: true,
      spaceBetween: 20,
      navigation: {
      nextEl: '.block_development-inner .swiper-button-next',
      prevEl: '.block_development-inner .swiper-button-prev',
    },
    });

var swiperworks = new Swiper('.swiper-container.our-works-swiper', {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 20,
      navigation: {
      nextEl: '.our-works-inner .swiper-button-next',
      prevEl: '.our-works-inner .swiper-button-prev',
    },
    });
var swiperteam = new Swiper('.swiper-container.our-team-swiper', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 50,
      navigation: {
      nextEl: '.our-team-swiper .swiper-button-next',
      prevEl: '.our-team-swiper .swiper-button-prev',
    },
    breakpoints: {
      480: {
      slidesPerView: 2,
      spaceBetween: 35
    },
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
    },
  }
    });
var swiperserts = new Swiper('.swiper-container.sertificates-swiper', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 35,
      navigation: {
      nextEl: '.sertificates-swiper .swiper-button-next',
      prevEl: '.sertificates-swiper .swiper-button-prev',
    },
    breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 35
    },
  }
    });

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
var textWrapper = document.querySelectorAll('.fake_yasearch');
for (let item of textWrapper) {
    item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

const animationLetter = anime.timeline({loop: true})
  .add({
    targets: '.fake_yasearch .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 60*i
  })
  .add({
    targets: '.fake_yasearch',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500
  });


$(document).ready(function() {
    $('.choose-button').click(function (event) {
        event.preventDefault();
        $('.choose-button').removeClass('active');
        $(this).addClass('active');
        window.clearInterval(loop);
        loop = null;
        var id = $(this).attr('data-id');
        if (id) {
            
            $('.order-site-content-inner:visible').removeClass('visible');
            $('.order-site-content').find('#' + id).addClass('visible');
            animationLetter.restart()
        }
    });


function showNextSlide() {
        var $activebutton = $('.choose-button.active');
        var $nextbutton = $activebutton.next();
        var $activeslide = $('.order-site-content-inner.visible');
        var $nextslide = $activeslide.next();
        if ($nextslide.length == 0) {
            $nextslide = $('.order-site-content-inner').first();
        }
        if ($nextbutton.length == 0) {
            $nextbutton = $('.choose-button').first();
        }
        $activeslide.removeClass('visible');
        $nextslide.addClass('visible');
        $activebutton.removeClass('active');
        $nextbutton.addClass('active');
        animationLetter.restart();
    }

var loop = window.setInterval(showNextSlide,5000);

  
    $( window ).resize(function(BorderResize) {
        var borderWidht = $('.order-site-with-bonus').width();
        $('.triangle-decore-l').css({'border-left-width': borderWidht });
        $('.triangle-decore-r').css({'border-left-width': borderWidht });
    });





$( window ).resize();


$('.shops-reviews-slick').slick({
  centerMode: true,
  centerPadding: '470px',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1
      }
    },{
      breakpoint: 1280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1
      }
    },{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    }
  ]
});

$('.shop-gallery-slick').slick({
  centerMode: true,
  centerPadding: '470px',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1
      }
    },{
      breakpoint: 1280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1
      }
    },{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    }
  ]
});
$('.click_drop').click(function () {
         $('.main-header-sub-menu').slideToggle();
     });


if ($(window).outerWidth() < 767) {
     $('.tariff-top-title').click(function () {
         $(this).parent().find('.tariff-column-toggle').slideToggle();
         $(this).find('.down-list').toggleClass('active');
     });
 }




    (function () {

        var youtube = document.querySelectorAll(".youtube");

        for (var i = 0; i < youtube.length; i++) {

            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));

            youtube[i].querySelector('.play-button').addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.parentNode.innerHTML = "";
                this.parentNode.appendChild(iframe);
            });
        };

    })();
});

var speed = 10;



function goCounter(){
    var timestamp = 42,
        counter = Math.ceil(timestamp + speed),
        interval = Math.floor(Math.random() * (4000 - 1000 + 10)) + 400;
    
    $('.advantages-item-num').text(counter);
    setTimeout(function(){ goCounter(); }, interval);
}


goCounter();