// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .process-step, .feature, .contact-item, .badge-item, .faq-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      openItem.classList.remove('active');
      openItem.querySelector('.faq-answer').style.maxHeight = null;
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mesajınız alınmıştır. En kısa sürede size dönüş yapacağız. Teşekkürler!');
  e.target.reset();
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < top + height) ? 'var(--primary)' : '';
    }
  });
});
