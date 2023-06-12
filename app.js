// Code for handling the navigation menu
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({behavior: 'smooth'});
  });
});

// Code for handling the slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slideshow-slide');
  const dots = document.querySelectorAll('.slideshow-dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  dots.forEach(dot => {
    dot.className = dot.className.replace(' active', '');
  });
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
