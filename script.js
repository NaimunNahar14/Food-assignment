// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Pagination dots
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
