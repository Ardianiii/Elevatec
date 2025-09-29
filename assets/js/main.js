document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
  });
});

  const scrollElements = document.querySelectorAll('.fade-in-on-scroll');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
  };

  const displayScrollElement = (el) => {
    const delay = el.dataset.delay || 0;
    setTimeout(() => {
      el.style.transition = 'all 0.8s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) translateX(0)';
    }, delay);
  };

  const hideScrollElement = (el) => {
    const direction = el.dataset.direction || 'up';
    el.style.opacity = '0';
    if(direction === 'left') el.style.transform = 'translateX(-20px)';
    if(direction === 'right') el.style.transform = 'translateX(20px)';
    if(direction === 'up') el.style.transform = 'translateY(20px)';
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);

  // Initial state
  scrollElements.forEach(el => hideScrollElement(el));
  handleScrollAnimation();

    const cards = document.querySelectorAll('.case-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));