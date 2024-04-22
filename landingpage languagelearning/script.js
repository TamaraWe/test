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
let currentIndex = 0;
const intervalTime = 5000; // Change slide every 5 seconds

function showTestimonial(index) {
  testimonials.forEach(testimonial => testimonial.style.display = 'none');
  testimonials[index].style.display = 'flex';
  currentIndex = index;
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Automatically change slide every intervalTime milliseconds
setInterval(nextTestimonial, intervalTime);

// Show the first testimonial by default
showTestimonial(0);
