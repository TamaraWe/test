
const headerEl = document.querySelector('.nav-container');
const menutrigger = document.querySelector('.navigation');

window.addEventListener('scroll', function(event) {
 if (window.scrollY > 50) {
 headerEl.classList.add('nav-scrolled');
 } else {
 headerEl.classList.remove('nav-scrolled');
 }
});

function menutoggle() {
  menutrigger.classList.toggle('mobile-menu-closed');
}
