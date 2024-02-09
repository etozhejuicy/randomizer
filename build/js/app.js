// анимация на главном экране с кубом
if ($('#cube-animation').length) {
    const animation = lottie.loadAnimation({
        container: document.getElementById('cube-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/animation/cube.json'
    });
}

if ($('#demo-animation').length) {
    const animation = lottie.loadAnimation({
        container: document.getElementById('demo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/animation/demo.json'
    });
}

if ($('#success-animation').length) {
    const animation = lottie.loadAnimation({
        container: document.getElementById('success-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/animation/success.json'
    });
}

// Слайдер победителей
if ($('#swiperWinner').length) {
    var swiperWinner = new Swiper('#swiperWinner', {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: false,
        allowTouchMove: true,
        grabCursor: true,
        init: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                if (swiperWinner.realIndex == 0) {
                    $('body').css('background-image', '');
                    $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
                } else if (swiperWinner.realIndex == 1) {
                    $('body').css('background-image', '');
                    $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
                } else if (swiperWinner.realIndex == 2) {
                    $('body').css('background-image', '');
                    $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
                } else {
                    $('body').css('background-image', '');
                    $('body').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
                }
                console.log(swiperWinner.activeIndex)
            },
        },
    });

    setTimeout(function () {
        swiperWinner.update();
        if (swiperWinner.activeIndex == 0) {
            $('body').css('background-image', '');
            $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
        } else if (swiperWinner.activeIndex == 1) {
            $('body').css('background-image', '');
            $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
        } else if (swiperWinner.activeIndex == 2) {
            $('body').css('background-image', '');
            $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
        } else {
            $('body').css('background-image', '');
            $('body').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
        }
    }, 500);
}