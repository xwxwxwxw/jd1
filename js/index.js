var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', 
    loop: true, 
    autoplay: {
        delay: 3000, 
        stopOnLastSlide: false, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: '.swiper-pagination',
    },
})