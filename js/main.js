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

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter l'animation
function handleScroll() {
  const newsCards = document.querySelectorAll('.news-card');
  
  newsCards.forEach(card => {
    if (isElementInViewport(card)) {
      card.classList.add('visible');
    }
  });
}

// Ajouter un écouteur d'événements sur le défilement de la page
window.addEventListener('scroll', handleScroll);

// Exécuter la fonction au chargement de la page pour les éléments déjà visibles
document.addEventListener('DOMContentLoaded', handleScroll);


// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter l'animation
function handleScroll() {
  // Cibler toutes les cartes .news-card dans toutes les sections
  const newsCards = document.querySelectorAll('.news-card');
  
  newsCards.forEach(card => {
    if (isElementInViewport(card)) {
      card.classList.add('visible');
    }
  });
}

// Ajouter un écouteur d'événements sur le défilement de la page
window.addEventListener('scroll', handleScroll);

// Exécuter la fonction au chargement de la page pour les éléments déjà visibles
document.addEventListener('DOMContentLoaded', handleScroll);

// Recherche

function searchSite(event) {
  event.preventDefault();
  const query = document.getElementById("searchQuery").value.toLowerCase().trim();
  const resultsList = document.getElementById("resultsList");
  const searchResults = document.getElementById("searchResults");
  const currentPage = window.location.pathname.split("/").pop();
  const pages = [
    "index.html", "institution/synode.html", "institution/conseil-synodal.html",
    "departements/jeunesse.html", "departements/musique.html", "contact.html", "blog.html"
  ];
  
  resultsList.innerHTML = "";
  let found = false;
  
  // Recherche dans les autres pages
  pages.forEach(page => {
    if (page !== currentPage) {
      fetch(page)
        .then(response => response.text())
        .then(html => {
          if (html.toLowerCase().includes(query)) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            
            let link = document.createElement("a");
            link.href = page;
            link.innerHTML = `<strong>${query}</strong> trouvé sur la page : ${page}`;
            
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
            searchResults.style.display = "block";
            found = true;
          }
        });
    }
  });
  
  // Recherche dans la page actuelle
  const contentElements = document.querySelectorAll("main, section, p, h1, h2, h3, h4, h5, h6, li");
  contentElements.forEach(element => {
    if (element.innerText.toLowerCase().includes(query)) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      
      let link = document.createElement("a");
      link.href = "#";
      link.innerHTML = `<strong>${query}</strong> trouvé ici : ${element.innerText.substring(0, 100)}...`;
      link.onclick = function() {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      
      listItem.appendChild(link);
      resultsList.appendChild(listItem);
      searchResults.style.display = "block";
      found = true;
    }
  });
  
  if (!found) {
    alert("Aucun résultat trouvé");
    searchResults.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 992) {
        this.classList.add("show");
        this.querySelector(".dropdown-menu").classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 992) {
        this.classList.remove("show");
        this.querySelector(".dropdown-menu").classList.remove("show");
      }
    });

    dropdown.querySelector(".nav-link.dropdown-toggle").addEventListener("click", function (event) {
      if (window.innerWidth < 992) {
        event.preventDefault();
        let submenu = dropdown.querySelector(".dropdown-menu");
        let isOpen = submenu.classList.contains("show");
        
        // Fermer tous les autres menus ouverts
        document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
          menu.classList.remove("show");
        });
        
        if (!isOpen) {
          submenu.classList.add("show");
        }
      }
    });
  });
});

// Sous - Menu

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown-submenu > a");
  
  dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", function (e) {
          e.preventDefault();
          let submenu = this.nextElementSibling;
          submenu.classList.toggle("show");
      });
  });
});
