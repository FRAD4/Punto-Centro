// ====== Punto Centro Fitness — Interactivity ======

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuToggle?.querySelector('.material-symbols-outlined');

  // --- Mobile menu toggle ---
  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenu.classList.toggle('hidden', !isOpen);
    menuIcon.textContent = isOpen ? 'close' : 'menu';
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // --- Close mobile menu on link click ---
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('hidden');
      menuIcon.textContent = 'menu';
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Intersection Observer for fade-in animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section, header, footer').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
  });

  // --- Navbar background on scroll ---
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      navbar.classList.add('bg-surface');
      navbar.classList.remove('bg-surface/90');
    } else {
      navbar.classList.remove('bg-surface');
      navbar.classList.add('bg-surface/90');
    }

    lastScroll = currentScroll;
  }, { passive: true });
});
