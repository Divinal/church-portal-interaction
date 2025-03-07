
/**
 * JavaScript principal pour le site de l'Église Évangélique du Congo
 */

document.addEventListener('DOMContentLoaded', function() {
  // Navigation - changement de style au défilement
  const navbar = document.querySelector('.navbar');
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('py-2');
      navbar.classList.remove('py-3');
    } else {
      navbar.classList.add('py-3');
      navbar.classList.remove('py-2');
    }
  });
  
  // Animation des éléments au défilement
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Initialiser les animations
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Animer les éléments visibles au chargement
  
  // Définir l'année actuelle dans le footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Retour en haut de page
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Gestion des dropdowns sur mobile
  const navLinks = document.querySelectorAll('.nav-link.dropdown-toggle');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        if (!this.classList.contains('show')) {
          e.preventDefault();
          e.stopPropagation();
          
          // Fermer tous les autres menus déroulants
          navLinks.forEach(otherLink => {
            if (otherLink !== this && otherLink.classList.contains('show')) {
              otherLink.classList.remove('show');
              otherLink.nextElementSibling.classList.remove('show');
            }
          });
          
          // Ouvrir/fermer ce menu déroulant
          this.classList.toggle('show');
          this.nextElementSibling.classList.toggle('show');
        }
      }
    });
  });
  
  // Fermer le menu déroulant quand on clique ailleurs
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      if (!e.target.closest('.nav-item.dropdown')) {
        navLinks.forEach(link => {
          link.classList.remove('show');
          if (link.nextElementSibling) {
            link.nextElementSibling.classList.remove('show');
          }
        });
      }
    }
  });
  
  // Fermer le menu déroulant sur Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navLinks.forEach(link => {
        link.classList.remove('show');
        if (link.nextElementSibling) {
          link.nextElementSibling.classList.remove('show');
        }
      });
      
      // Fermer la navbar sur mobile
      if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
        navbarToggler.click();
      }
    }
  });
});

// Validation de formulaire personnalisée
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      isValid = false;
    } else {
      input.classList.remove('is-invalid');
    }
    
    // Validation spécifique pour l'email
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(input.value.trim())) {
        input.classList.add('is-invalid');
        isValid = false;
      }
    }
  });
  
  return isValid;
}
