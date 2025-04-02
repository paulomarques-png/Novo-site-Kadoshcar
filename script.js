new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 15,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        593: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        1023: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
  });
  