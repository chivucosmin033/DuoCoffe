/**
 * Duo Coffee — Scripts
 * v2.0.0 · Modern Cozy Edition
 */

document.addEventListener('DOMContentLoaded', () => {
  // ─── NAV SCROLL EFFECT ───
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ─── NAV ACTIVE STATE ───
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // ─── MOBILE MENU ───
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navLinks');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      const isOpen = navList.classList.contains('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      navToggle.textContent = isOpen ? '✕' : '☰';
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.textContent = '☰';
      });
    });

    document.addEventListener('click', (e) => {
      if (navList.classList.contains('active') &&
          !navList.contains(e.target) &&
          !navToggle.contains(e.target)) {
        navList.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.textContent = '☰';
      }
    });
  }

  // ─── SMOOTH SCROLL ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    });
  });

  // ─── SCROLL REVEAL ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // ─── INSTAGRAM GRID HOVER ANIMATION ───
  const igItems = document.querySelectorAll('.ig-item');
  igItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-5px) scale(1.02)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });

  // ─── HIGHLIGHT ITEMS HOVER ───
  const highlightItems = document.querySelectorAll('.highlight-item');
  highlightItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const circle = item.querySelector('.highlight-circle');
      if (circle) {
        circle.style.transform = 'scale(1.1)';
        circle.style.transition = 'transform 0.3s ease';
      }
    });
    item.addEventListener('mouseleave', () => {
      const circle = item.querySelector('.highlight-circle');
      if (circle) {
        circle.style.transform = '';
      }
    });
  });

  // ─── FLOATING BUTTONS INTERACTION ───
  const floatingButtons = document.querySelector('.floating-buttons');
  if (floatingButtons) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        floatingButtons.style.opacity = '1';
        floatingButtons.style.transform = 'translateY(0)';
      } else if (currentScrollY < lastScrollY && currentScrollY < 100) {
        floatingButtons.style.opacity = '0';
        floatingButtons.style.transform = 'translateY(20px)';
      }
      
      lastScrollY = currentScrollY;
    });
    
    floatingButtons.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    floatingButtons.style.opacity = '0';
    floatingButtons.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      if (window.scrollY > 300) {
        floatingButtons.style.opacity = '1';
        floatingButtons.style.transform = 'translateY(0)';
      } else {
        floatingButtons.style.opacity = '1';
        floatingButtons.style.transform = 'translateY(0)';
      }
    }, 2000);
  }

  // ─── CONTACT FORM ───
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#e53e3e';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) return;

      if (formSuccess) {
        formSuccess.textContent = '✓ Mesaj trimis! Te contactăm curând. 💜';
        formSuccess.classList.add('show');
      }

      contactForm.reset();

      setTimeout(() => {
        if (formSuccess) {
          formSuccess.classList.remove('show');
        }
      }, 5000);
    });

    contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }

  // ─── PARALLAX EFFECT ON HERO (disabled — static image) ───
  // Parallax removed for a cleaner, static hero image

  // ─── STAGGERED ANIMATION FOR IG ITEMS ───
  const igGrid = document.querySelector('.ig-grid');
  if (igGrid) {
    const igItemsGrid = igGrid.querySelectorAll('.ig-item');
    igItemsGrid.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  }

  // ─── STAGGERED ANIMATION FOR HIGHLIGHTS ───
  const highlightsGrid = document.querySelector('.highlights-grid');
  if (highlightsGrid) {
    const highlightItemsGrid = highlightsGrid.querySelectorAll('.highlight-item');
    highlightItemsGrid.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.08}s`;
    });
  }

  // ─── DARK MODE (removed - site is dark-only) ───

  // ─── COOKIE CONSENT ───
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookies');

  if (cookieBanner && acceptBtn) {
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.classList.add('show');
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.classList.remove('show');
    });
  }

  // ─── NEWSLETTER FORM ───
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        newsletterSuccess.textContent = '✓ Te-ai abonat cu succes! Verifică-ți email-ul 💜';
        newsletterSuccess.classList.add('show');
        newsletterForm.reset();
        setTimeout(() => newsletterSuccess.classList.remove('show'), 5000);
      }
    });
  }

  // ─── BACK TO TOP BUTTON ───
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ─── SCROLL INDICATOR HIDE ───
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '';
        scrollIndicator.style.pointerEvents = '';
      }
    });
  }

  // ─── STAGGERED REVEAL FOR GRIDS ───
  const staggerGrids = document.querySelectorAll('.gallery-grid, .menu-grid, .reviews-grid, .events-grid');
  staggerGrids.forEach(grid => {
    const items = grid.querySelectorAll('.reveal');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
});