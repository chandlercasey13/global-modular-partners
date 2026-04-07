// Animation initialization
// Webflow-style animations using Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
  // Set up intersection observer for scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class
        entry.target.classList.add('is-visible');
        
        // Trigger any data-w-id animations
        const dataWId = entry.target.getAttribute('data-w-id');
        if (dataWId) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
        
        // Unobserve after animation triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[data-w-id], .anim-element, .fade-in, .slide-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
  
  console.log('Animations initialized for', document.querySelectorAll('[data-w-id]').length, 'elements');
});
