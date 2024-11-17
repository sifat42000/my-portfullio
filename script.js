// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission alert
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  