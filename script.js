document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
    });

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    const exploreBtn = document.querySelector('.explore-btn');

    exploreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#products').offsetTop,
            behavior: 'smooth'
        });
    });
});
