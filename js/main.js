/**
 * JavaScript principal pour le site de l'Église Évangélique du Congo
 */

document.addEventListener('DOMContentLoaded', function() {
  // Sélection des éléments
  const navbar = document.querySelector('.navbar');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const currentYear = document.getElementById('currentYear');
  const navLinks = document.querySelectorAll('.nav-link.dropdown-toggle');
  const contactForm = document.getElementById('contactForm');
  const contactToast = document.getElementById('contactToast');

  // Navigation - changement de style au défilement
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('py-2', window.scrollY > 20);
      navbar.classList.toggle('py-3', window.scrollY <= 20);
    });
  }

  // Animation des éléments au défilement
  const animateOnScroll = function() {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight / 1.3) {
        element.classList.add('fade-in');
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Définir l'année actuelle dans le footer
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Retour en haut de page
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      scrollTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Gestion des dropdowns sur mobile
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        e.stopPropagation();
        navLinks.forEach(otherLink => {
          if (otherLink !== this) {
            otherLink.classList.remove('show');
            otherLink.nextElementSibling?.classList.remove('show');
          }
        });
        this.classList.toggle('show');
        this.nextElementSibling?.classList.toggle('show');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth < 992 && !e.target.closest('.nav-item.dropdown')) {
      navLinks.forEach(link => {
        link.classList.remove('show');
        link.nextElementSibling?.classList.remove('show');
      });
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navLinks.forEach(link => {
        link.classList.remove('show');
        link.nextElementSibling?.classList.remove('show');
      });
      if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
        navbarToggler.click();
      }
    }
  });

  // Validation de formulaire personnalisée
  function validateForm(form) {
    if (!form) return false;
    let isValid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(input => {
      const value = input.value.trim();
      if (!value) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }
      if (input.type === 'email' && value) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          input.classList.add('is-invalid');
          isValid = false;
        }
      }
    });
    return isValid;
  }

  // Soumission du formulaire de contact
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateForm(contactForm)) {
        if (contactToast) {
          new bootstrap.Toast(contactToast).show();
        }
        contactForm.reset();
      }
    });
  }
});