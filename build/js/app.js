var swiper = new Swiper('#swiperWinner', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.update(500);