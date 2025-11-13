const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.nav-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!expanded).toString());
    nav.classList.toggle('open');
  });
}

const testimonials = document.querySelectorAll('.testimonial');
const track = document.querySelector('.testimonial-track');
const prev = document.querySelector('.testimonial-controls .prev');
const next = document.querySelector('.testimonial-controls .next');
let currentIndex = 0;

function updateTestimonials() {
  if (!track) return;
  const width = track.clientWidth / testimonials.length;
  track.style.transform = `translateX(-${currentIndex * (100 / testimonials.length)}%)`;
}

function handlePrev() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonials();
}

function handleNext() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonials();
}

prev?.addEventListener('click', handlePrev);
next?.addEventListener('click', handleNext);

window.addEventListener('resize', updateTestimonials);
updateTestimonials();

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
