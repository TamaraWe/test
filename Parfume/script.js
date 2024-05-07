

document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});




let slideIndex = 0;
const slidesContainer = document.querySelector('.slides-container');

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  const numSlides = slides.length;
  const maxIndex = numSlides - 5;

  if (index < 0) {
    slideIndex = 0;
  } else if (index > maxIndex) {
    slideIndex = maxIndex;
  } else {
    slideIndex = index;
  }

  const translateX = -slideIndex * (100 / 5);
  slidesContainer.style.transform = `translateX(${translateX}%)`;
}

function prevSlide() {
  showSlides(slideIndex - 1);
}

function nextSlide() {
  showSlides(slideIndex + 1);
}

// Show the first set of slides initially
showSlides(slideIndex);
