// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Animasi saat scroll
  const sections = document.querySelectorAll('.section');
  
  const checkVisibility = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
        section.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  
  // Form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah terkirim!');
    this.reset();
  });