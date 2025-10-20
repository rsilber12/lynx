

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
        
        AOS.init({
            duration: 2000,
            once: true, 
            offset: 50
        });

    }, 3000);
});




const books = new Swiper('.swiperBooks', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination.books',
        clickable: true,
        // type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next.books',
        prevEl: '.swiper-button-prev.books',
    },
    breakpoints: {
        575: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});




