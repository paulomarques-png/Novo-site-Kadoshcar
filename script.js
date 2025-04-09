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

document.querySelector('input[type="checkbox"]').addEventListener('change', function() {
    const navheader = document.querySelector('.nav-header');
    if (this.checked) {
        navheader.style.transitionDelay = '0s'; // No delay when changing to the new color
        navheader.style.backgroundColor = 'rgb(139, 29, 84)';
    } else {
        navheader.style.transition = 'background-color 0.2s ease'; // Smooth transition for background color
        navheader.style.transitionDelay = '0.5s'; // Delay of 0.5s before resetting to default
        navheader.style.backgroundColor = ''; // Reset to default
    }
});