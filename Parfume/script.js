// Navigation Scroll-Change
const headerEl = document.querySelector('.nav-container');

window.addEventListener('scroll', function(event) {
 if (window.scrollY > 50) {
 headerEl.classList.add('nav-scrolled');
 } else {
 headerEl.classList.remove('nav-scrolled');
 }
});









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














document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", function() {
    var query = this.value.trim().toLowerCase();
    if (query.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    // Your logic for fetching search results goes here
    // For demonstration purposes, let's assume some static results
    var results = ["Womans fragrances", "Mens fragrances", "Nieschen fragrances", "Caia", "Senseo"];

    // Clear previous results
    searchResults.innerHTML = "";

    // Display new results
    results.forEach(function(result) {
      if (result.toLowerCase().includes(query)) {
        var resultElement = document.createElement("a");
        resultElement.textContent = result;
        searchResults.appendChild(resultElement);
      }
    });

    // Show search results dropdown
    searchResults.style.display = "block";
  });

  // Hide search results dropdown when clicking outside of it
  document.addEventListener("click", function(event) {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });

  // Prevent hiding dropdown when clicking inside it
  searchResults.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});
