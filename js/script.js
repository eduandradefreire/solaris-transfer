/* SWIPER */
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


/* RESTANTE DO JS */
$(document).ready(function() {

    /* SCROLL DO HEADER */
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
      } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
      }
    });


    /* CARROUSEL (AGORA FUNCIONA!) */
    const tracks = document.querySelectorAll('.carousel-content');

    tracks.forEach(track => {
      const cards = [...track.children];

      for (const card of cards) {
        track.appendChild(card.cloneNode(true));
      }
    });

});
