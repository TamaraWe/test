// Navigation Scroll-Change
const headerEl = document.querySelector('.nav-container');
const menutrigger = document.querySelector('.navigation');
const body = document.querySelector('body');

window.addEventListener('scroll', function(event) {
 if (window.scrollY > 50) {
 headerEl.classList.add('nav-scrolled');
 } else {
 headerEl.classList.remove('nav-scrolled');
 }
});

// Mobile Navigation Menu Toggle
function menutoggle() {
  menutrigger.classList.toggle('mobile-menu-closed');
  body.classList.toggle('no-scroll');
}

// Testimonial Carousel
let testimonials = document.querySelectorAll('.testimonal');
let thumbnails = document.querySelectorAll('.testimonial-thumbs img');

function showTestimonial(index) {
  testimonials.forEach(testimonial => testimonial.style.display = 'none');
  testimonials[index].style.display = 'flex';
}
showTestimonial(0);
