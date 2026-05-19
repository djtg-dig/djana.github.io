const services = [
  {
    id: "maintenance-equipements",
    icon: "bi-tools",
    title: "Maintenance des équipements informatiques",
    short: "Diagnostic, réparation, optimisation et maintenance préventive de vos postes et équipements.",
    full: "Djana assure la disponibilité de votre parc informatique avec une maintenance fiable, documentée et orientée continuité de service.",
    includes: ["Diagnostic et réparation des pannes matérielles et logicielles", "Installation et configuration de logiciels", "Optimisation des performances", "Maintenance préventive", "Nettoyage, mises à jour et vérification système"],
    benefits: ["Réduction des interruptions", "Équipements plus durables", "Postes plus rapides et sécurisés", "Support clair pour les utilisateurs"],
    process: ["Audit rapide du matériel", "Plan d’intervention", "Réparation ou optimisation", "Contrôle qualité", "Recommandations de prévention"]
  },
  {
    id: "maintenance-applicative",
    icon: "bi-life-preserver",
    title: "Maintenance applicative et support technique",
    short: "Support utilisateurs, monitoring, sécurité, correction d’incidents et amélioration continue.",
    full: "Nous maintenons vos applications opérationnelles, sécurisées et évolutives afin qu’elles suivent les besoins réels de votre organisation.",
    includes: ["Maintenance corrective et évolutive", "Support technique aux utilisateurs", "Monitoring", "Mises à jour de sécurité", "Gestion des vulnérabilités", "Optimisation des performances", "Gestion des incidents"],
    benefits: ["Applications plus stables", "Incidents traités rapidement", "Sécurité renforcée", "Évolutions maîtrisées"],
    process: ["Prise en charge du périmètre", "Mise en place du suivi", "Correction et priorisation", "Déploiement contrôlé", "Rapports et amélioration continue"]
  },
  {
    id: "developpement-solutions",
    icon: "bi-code-slash",
    title: "Programmation et développement de solutions numériques",
    short: "Applications web, mobiles, desktop, API, bases de données et intégrations modernes.",
    full: "Djana conçoit des solutions numériques sur mesure, sécurisées et adaptées aux réalités opérationnelles locales.",
    includes: ["Applications web", "Applications mobiles", "Applications desktop", "API", "Bases de données", "Systèmes sécurisés", "Intégration de paiement, messagerie et IA", "Maintenance et amélioration continue"],
    benefits: ["Outils adaptés à vos processus", "Gain de productivité", "Données centralisées", "Expérience utilisateur professionnelle"],
    process: ["Analyse fonctionnelle", "Architecture technique", "Design UI/UX", "Développement itératif", "Tests, déploiement et suivi"]
  },
  {
    id: "reseaux-infrastructures",
    icon: "bi-router",
    title: "Réseaux informatiques et infrastructures",
    short: "Audit, architecture, installation, sécurité, supervision et maintenance réseau.",
    full: "Nous déployons des infrastructures réseau robustes pour connecter vos équipes, sécuriser vos ressources et soutenir la croissance.",
    includes: ["Audit réseau", "Architecture LAN, WAN et Wi-Fi professionnel", "Installation routeurs, switchs et points d’accès", "Pare-feu, VPN et segmentation réseau", "Serveurs locaux", "Cloud, stockage et sauvegarde", "Supervision et maintenance"],
    benefits: ["Réseau plus fiable", "Sécurité renforcée", "Meilleure couverture", "Infrastructure prête à évoluer"],
    process: ["Audit terrain", "Conception de l’architecture", "Installation et configuration", "Tests de performance", "Supervision et maintenance"]
  },
  {
    id: "design-ui-ux",
    icon: "bi-palette2",
    title: "Design graphique et expérience utilisateur UI/UX",
    short: "Identité visuelle, supports marketing, interfaces, wireframes et prototypes ergonomiques.",
    full: "Djana crée des expériences visuelles cohérentes qui renforcent la crédibilité des marques et simplifient l’usage des produits numériques.",
    includes: ["Logo", "Identité visuelle", "Charte graphique", "Supports marketing", "Interfaces web et mobiles", "Wireframes", "Prototypes", "Optimisation ergonomique"],
    benefits: ["Image professionnelle", "Parcours utilisateur plus fluide", "Meilleure conversion", "Design cohérent sur tous les supports"],
    process: ["Brief créatif", "Recherche et direction visuelle", "Wireframes", "Design et prototypage", "Livraison des fichiers"]
  },
  {
    id: "publicite-digitale",
    icon: "bi-megaphone",
    title: "Publicité digitale et monétisation intégrée",
    short: "Campagnes, ciblage, visuels, intégration publicitaire et optimisation des conversions.",
    full: "Nous aidons les marques à acquérir de la visibilité, mesurer leurs résultats et intégrer des leviers de monétisation dans leurs produits.",
    includes: ["Campagnes digitales", "Ciblage", "Création de visuels publicitaires", "Intégration publicitaire dans sites et apps", "Espaces publicitaires", "Analyse impressions, clics et conversions", "Optimisation continue"],
    benefits: ["Audience mieux ciblée", "Dépenses publicitaires pilotées", "Revenus additionnels", "Rapports exploitables"],
    process: ["Définition des objectifs", "Création des campagnes", "Lancement et tracking", "Analyse des données", "Optimisation continue"]
  },
  {
    id: "talents-techniques",
    icon: "bi-people",
    title: "Mise à disposition de talents et accompagnement technique",
    short: "Développeurs, designers et experts réseaux intégrés à vos équipes avec suivi qualité.",
    full: "Djana met à disposition des profils techniques capables de renforcer vos équipes et d’accélérer vos projets.",
    includes: ["Développeurs", "Designers", "Experts réseaux", "Intégration dans les équipes clientes", "Accompagnement technique", "Suivi qualité", "Possibilité de recrutement après mission"],
    benefits: ["Accès rapide aux compétences", "Flexibilité opérationnelle", "Encadrement technique", "Réduction des délais de recrutement"],
    process: ["Qualification du besoin", "Sélection des profils", "Intégration", "Suivi de mission", "Bilan et évolution"]
  },
  {
    id: "formation-competences",
    icon: "bi-mortarboard",
    title: "Formation et montée en compétences",
    short: "Formations pratiques en développement, IA, outils numériques et transformation digitale.",
    full: "Avec Djana Academy, nous formons les individus et les équipes aux compétences numériques réellement utiles sur le terrain.",
    includes: ["Formations en développement web/mobile", "IA", "Outils numériques", "Transformation digitale", "Formations sur mesure pour entreprises", "Sessions pratiques", "Suivi des apprenants", "Djana Academy"],
    benefits: ["Compétences immédiatement applicables", "Programmes adaptés", "Suivi pédagogique", "Culture digitale renforcée"],
    process: ["Évaluation du niveau", "Programme adapté", "Sessions pratiques", "Projets encadrés", "Suivi et certification interne"]
  }
];

const projects = [
  { category: "education", title: "Djana Academy", description: "Plateforme de formation numérique orientée compétences pratiques.", tech: "HTML, CSS, JavaScript, LMS", image: "project-academy.svg" },
  { category: "education", title: "Plateforme e-learning", description: "Parcours de cours, quiz et suivi de progression pour apprenants.", tech: "Web, UX, Analytics", image: "project-elearning.svg" },
  { category: "business", title: "Application de gestion", description: "Gestion des opérations, clients, stocks et rapports internes.", tech: "Web App, API, SQL", image: "project-management.svg" },
  { category: "web", title: "Site vitrine entreprise", description: "Présence digitale premium pour une entreprise de services.", tech: "HTML5, Bootstrap, SEO", image: "project-website.svg" },
  { category: "business", title: "Système de réservation", description: "Réservation, notifications et administration centralisée.", tech: "Web, Mobile, Paiement", image: "project-booking.svg" },
  { category: "business", title: "Solution de gestion interne", description: "Automatisation de workflows et tableaux de bord décisionnels.", tech: "Dashboard, API, Cloud", image: "project-internal.svg" }
];

document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupBackToTop();
  setupReveal();
  setupCounters();
  setupForms();
  renderServiceCards();
  renderServiceDetail();
  renderPortfolio();
});

function setupNavbar() {
  const navbar = document.querySelector(".navbar");
  const setState = () => navbar && navbar.classList.toggle("scrolled", window.scrollY > 12);
  setState();
  window.addEventListener("scroll", setState, { passive: true });
}

function setupBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  window.addEventListener("scroll", () => button.classList.toggle("visible", window.scrollY > 500), { passive: true });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .16 });
  items.forEach((item) => observer.observe(item));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: .5 });
  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const target = Number(element.dataset.counter || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function setupForms() {
  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const invalid = validateForm(form);
      if (invalid.length) {
        showStatus(status, "error", "Veuillez vérifier les champs obligatoires et l’adresse email.");
        invalid[0].focus();
        return;
      }
      form.reset();
      showStatus(status, "success", "Votre demande a bien été préparée. L’équipe Djana vous recontactera rapidement.");
    });
  });
}

function validateForm(form) {
  const invalid = [];
  form.querySelectorAll("[required]").forEach((field) => {
    const isEmail = field.type === "email";
    const value = field.value.trim();
    const ok = value && (!isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    field.classList.toggle("is-invalid", !ok);
    if (!ok) invalid.push(field);
  });
  return invalid;
}

function showStatus(status, type, message) {
  if (!status) return;
  status.className = `form-status ${type}`;
  status.textContent = message;
}

function renderServiceCards() {
  const container = document.querySelector("[data-services-grid]");
  if (!container) return;
  container.innerHTML = services.map((service) => `
    <div class="col-md-6 col-xl-3 reveal">
      <article class="card-clean p-4">
        <span class="icon-box mb-4"><i class="bi ${service.icon}"></i></span>
        <h3 class="h5 fw-bold">${service.title}</h3>
        <p class="text-muted-custom">${service.short}</p>
        <a class="btn btn-light-blue mt-2" href="service-detail.html?service=${service.id}">Voir le détail</a>
      </article>
    </div>
  `).join("");
  setupReveal();
}

function renderServiceDetail() {
  const target = document.querySelector("[data-service-detail]");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const service = services.find((item) => item.id === params.get("service")) || services[0];
  document.title = `${service.title} | Djana`;
  const heroTitle = document.querySelector("[data-service-title]");
  const heroText = document.querySelector("[data-service-intro]");
  if (heroTitle) heroTitle.textContent = service.title;
  if (heroText) heroText.textContent = service.short;
  target.innerHTML = `
    <div class="row g-5 align-items-start">
      <div class="col-lg-7">
        <span class="icon-box mb-4"><i class="bi ${service.icon}"></i></span>
        <h2 class="section-title">Une prise en charge complète</h2>
        <p class="section-lead">${service.full}</p>
        <h3 class="h5 fw-bold mt-5">Prestations incluses</h3>
        <ul class="feature-list mt-3">${service.includes.map((item) => `<li><i class="bi bi-check2-circle"></i><span>${item}</span></li>`).join("")}</ul>
      </div>
      <div class="col-lg-5">
        <div class="card-clean p-4 mb-4">
          <h3 class="h5 fw-bold">Bénéfices client</h3>
          <ul class="feature-list mt-3">${service.benefits.map((item) => `<li><i class="bi bi-arrow-right-circle"></i><span>${item}</span></li>`).join("")}</ul>
        </div>
        <div class="card-clean p-4">
          <h3 class="h5 fw-bold">Processus de réalisation</h3>
          <ol class="mt-3 text-muted-custom">${service.process.map((item) => `<li class="mb-2">${item}</li>`).join("")}</ol>
          <div class="d-grid gap-2 mt-4">
            <a class="btn btn-primary" href="devis.html">Demander un devis</a>
            <a class="btn btn-outline-primary" href="consultation.html">Obtenir une consultation gratuite</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPortfolio() {
  const grid = document.querySelector("[data-portfolio-grid]");
  if (!grid) return;
  const buttons = document.querySelectorAll("[data-filter]");
  const draw = (category = "all") => {
    const visible = category === "all" ? projects : projects.filter((project) => project.category === category);
    grid.innerHTML = visible.map((project) => `
      <div class="col-md-6 col-lg-4 reveal">
        <article class="card-clean overflow-hidden">
          <div class="project-thumb"><img src="assets/images/${project.image}" alt="${project.title}"></div>
          <div class="p-4">
            <span class="section-kicker">${project.tech}</span>
            <h2 class="h5 fw-bold mt-2">${project.title}</h2>
            <p class="text-muted-custom">${project.description}</p>
            <a href="contact.html" class="btn btn-light-blue">Voir le projet</a>
          </div>
        </article>
      </div>
    `).join("");
    setupReveal();
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      draw(button.dataset.filter);
    });
  });
  draw();
}
