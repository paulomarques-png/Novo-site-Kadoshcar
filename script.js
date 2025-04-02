const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
  
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
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // Responsive breakpoints
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        594: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });
  