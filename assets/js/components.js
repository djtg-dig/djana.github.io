(function () {
  const components = [
    { selector: "#navbar", path: "assets/components/navbar.html" },
    { selector: "#footer", path: "assets/components/footer.html" },
    { selector: "#whatsapp", path: "assets/components/whatsapp.html" }
  ];

  const fallbackComponents = {
    "#navbar": `
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="assets/images/logo%20bluer.jpg.jpeg" alt="Djana">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
        <li class="nav-item"><a class="nav-link" href="index.html" data-nav-page="index.html">Accueil</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html" data-nav-page="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html" data-nav-page="about.html">À propos</a></li>
        <li class="nav-item"><a class="nav-link" href="portfolio.html" data-nav-page="portfolio.html">Portfolio</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html" data-nav-page="contact.html">Contact</a></li>
        <li class="nav-item ms-lg-2"><a class="btn btn-primary" href="consultation.html">Consultation gratuite</a></li>
      </ul>
    </div>
  </div>
</nav>`,
    "#footer": `
<footer class="footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <img class="footer-logo mb-3" src="assets/images/logo%20bluer.jpg.jpeg" alt="Djana">
        <p>Construire le futur numérique</p>
        <div>
          <a class="social-link" href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a class="social-link" href="https://www.linkedin.com/company/djanatg/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a class="social-link" href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div class="col-6 col-lg-2">
        <h6>Liens rapides</h6>
        <a href="index.html">Accueil</a>
        <a href="services.html">Services</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="about.html">À propos</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="col-6 col-lg-3">
        <h6>Services</h6>
        <a href="service-detail.html?service=developpement-solutions">Développement</a>
        <a href="service-detail.html?service=maintenance-equipements">Maintenance</a>
        <a href="service-detail.html?service=reseaux-infrastructures">Réseaux</a>
        <a href="service-detail.html?service=design-ui-ux">Design UI/UX</a>
        <a href="service-detail.html?service=formation-competences">Formation</a>
      </div>
      <div class="col-lg-3">
        <h6>Contact</h6>
        <a href="mailto:djanatechnology@gmail.com">djanatechnology@gmail.com</a>
        <a href="tel:+243819339737">+243 81 933 9737</a>
        <span>Kinshasa, RDC</span>
      </div>
    </div>
    <hr class="border-secondary my-4">
    <p class="mb-0 small">© 2026 Djana. Tous droits réservés.</p>
  </div>
</footer>`
,
    "#whatsapp": `
<a class="whatsapp-float" href="https://wa.me/243819339737?text=Bonjour%20Djana%2C%20je%20souhaite%20obtenir%20plus%20d%E2%80%99informations%20sur%20vos%20services%20num%C3%A9riques." target="_blank" rel="noopener noreferrer" aria-label="Contacter Djana sur WhatsApp">
  <i class="bi bi-whatsapp"></i>
</a>`
  };

  document.addEventListener("DOMContentLoaded", loadComponents);

  async function loadComponents() {
    // Load static HTML fragments so GitHub Pages can serve the site without a backend.
    await Promise.all(components.map(loadComponent));
    setActiveNavLink();
    refreshPageBehaviors();
    document.dispatchEvent(new CustomEvent("djana:components-loaded"));
  }

  async function loadComponent(component) {
    const target = document.querySelector(component.selector);
    if (!target) return;

    try {
      const response = await fetch(component.path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      target.innerHTML = await response.text();
    } catch (error) {
      console.warn(`Chargement externe indisponible pour ${component.path}. Fallback local utilisé.`, error);
      target.innerHTML = fallbackComponents[component.selector] || "";
    }
  }

  function setActiveNavLink() {
    // The navbar is shared, so the active page is resolved from the current URL.
    const currentPage = getCurrentPage();
    document.querySelectorAll("[data-nav-page]").forEach((link) => {
      const page = link.getAttribute("data-nav-page");
      const isActive = page === currentPage || (currentPage === "service-detail.html" && page === "services.html");
      link.classList.toggle("active", isActive);
    });
  }

  function getCurrentPage() {
    const page = window.location.pathname.split("/").pop();
    return page || "index.html";
  }

  function refreshPageBehaviors() {
    if (typeof window.setupNavbar === "function") window.setupNavbar();
    if (typeof window.setupReveal === "function") window.setupReveal();
  }
})();
