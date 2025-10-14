document.addEventListener('DOMContentLoaded', () => {
  
//  const hamburger = document.getElementById('hamburger');
//   const mobileMenu = document.getElementById('mobile-menu');
//   const mobileClose = document.getElementById('mobile-close');
//   const mobileLinks = mobileMenu.querySelectorAll('a');

//   const animateLinks = () => {
//     mobileLinks.forEach((link, index) => {
//       link.style.transition = `all 0.3s ease ${index * 0.1}s`;
//       link.classList.toggle('opacity-0');
//       link.classList.toggle('translate-x-4');
//     });
//   };

//   hamburger.addEventListener('click', () => {
//     mobileMenu.classList.remove('translate-x-full');
//     mobileMenu.classList.add('translate-x-0');

//     // Animate hamburger to X
//     hamburger.children[0].classList.toggle('rotate-45 translate-y-1.5');
//     hamburger.children[1].classList.toggle('opacity-0');
//     hamburger.children[2].classList.toggle('-rotate-45 -translate-y-1.5');

//     animateLinks();
//   });

//   mobileClose.addEventListener('click', () => {
//     mobileMenu.classList.remove('translate-x-0');
//     mobileMenu.classList.add('translate-x-full');

//     // Reset hamburger
//     hamburger.children[0].classList.remove('rotate-45', 'translate-y-1.5');
//     hamburger.children[1].classList.remove('opacity-0');
//     hamburger.children[2].classList.remove('-rotate-45', '-translate-y-1.5');

//     animateLinks();
//   });
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

  

});
const faders = document.querySelectorAll('.fade-in-on-scroll');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.remove('opacity-0', 'translate-y-6', '-translate-y-6');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => observer.observe(fader));
