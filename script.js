function toggleMenu() {
  const navLinks = document.querySelector('.nav-menu');
  navLinks.classList.toggle('active');
}

window.addEventListener('click', (event) => {
  const navLinks = document.querySelector('.nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
  }
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      DynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        }, 

        1024: {
            slidesPerView: 3
        }
    }
  });
