$(document).ready(function() {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active')
  })
})

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

/* RESTANTE DO JS (vanilla + jQuery) */
document.addEventListener('DOMContentLoaded', function() {

  const sections = Array.from(document.querySelectorAll('section'));
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  const header = document.querySelector('header');

  /* ===========================
      SCROLLREVEAL (APENAS CTA)
  ============================ */
  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.shape', {
    origin: 'right',
    duration: 2000,
    distance: '20%',
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('#banner', {
    origin: 'right',
    duration: 2000,
    distance: '20%',
    opacity: 0,
    easing: 'ease-in-out'
  });

  ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2000,
  reset: true
}).reveal('section');

  /* ===========================
      SCROLL DO HEADER + NAV ACTIVE
  ============================ */
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 150; // AJUSTE FINO DE OFFSET

    let activeSectionIndex = 0;

    if (header) {
      if (window.scrollY <= 0) {
        header.style.boxShadow = 'none';
      } else {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
      }
    }

    /* detectar seção visível */
    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
      }
    });

    $('.nav-item').removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  /* ===========================
      CLICK NA NAV (ATUALIZAR SUBLINHADO)
  ============================ */
  $('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  /* ===========================
      CAROUSEL LOOP
  ============================ */
  const tracks = document.querySelectorAll('.carousel-content');

  tracks.forEach(track => {
    const cards = Array.from(track.children);

    for (const card of cards) {
      track.appendChild(card.cloneNode(true));
    }
  });

});
