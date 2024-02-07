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
                $('.wrapper').css('background-image', '');
                $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
            } else if (swiperWinner.realIndex == 1) {
                $('.wrapper').css('background-image', '');
                $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
            } else if (swiperWinner.realIndex == 2) {
                $('.wrapper').css('background-image', '');
                $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
            } else {
                $('.wrapper').css('background-image', '');
                $('.wrapper').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
            }
            console.log(swiperWinner.activeIndex)
        },
    },
});

setTimeout(function () {
    swiperWinner.update();
    if (swiperWinner.activeIndex == 0) {
        $('.wrapper').css('background-image', '');
        $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
    } else if (swiperWinner.activeIndex == 1) {
        $('.wrapper').css('background-image', '');
        $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
    } else if (swiperWinner.activeIndex == 2) {
        $('.wrapper').css('background-image', '');
        $('.wrapper').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
    } else {
        $('.wrapper').css('background-image', '');
        $('.wrapper').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
    }
}, 500);