# Djana Website

Site vitrine statique pour Djana, construit en HTML5, CSS3, Bootstrap 5 et JavaScript pur.

## Structure

```text
djana-website/
  assets/
    css/styles.css
    images/
    js/main.js
  index.html
  services.html
  service-detail.html
  about.html
  portfolio.html
  contact.html
  consultation.html
  devis.html
```

## Lancer le site en local

Ouvrez simplement `index.html` dans un navigateur moderne. Les pages sont statiques et ne nécessitent pas de backend.

## Modifier les couleurs

La palette principale se trouve dans `assets/css/styles.css`, dans le bloc `:root`.

Modifiez par exemple :

```css
--primary-blue: #0068ff;
--secondary-blue: #00a6ff;
--dark: #07111f;
```

## Remplacer le logo et les images

Le logo actuellement utilisé est `assets/images/logo%20bluer.jpg.jpeg`.

Pour le remplacer, placez le nouveau logo dans `assets/images/`, puis mettez à jour le chemin dans les pages HTML.

Les images de portfolio sont des SVG placeholders dans `assets/images/`. Elles peuvent être remplacées par des fichiers `.jpg`, `.png`, `.webp` ou `.svg`.

## Ajouter un service

Les services sont définis dans `assets/js/main.js`, tableau `services`.

Ajoutez un objet avec :

```js
{
  id: "nouveau-service",
  icon: "bi-stars",
  title: "Titre",
  short: "Description courte",
  full: "Description complète",
  includes: ["Prestation 1"],
  benefits: ["Bénéfice 1"],
  process: ["Étape 1"]
}
```

Le service apparaîtra automatiquement sur `services.html` et sera accessible via `service-detail.html?service=nouveau-service`.

## Modifier les formulaires

Les formulaires sont validés côté navigateur par `assets/js/main.js`.

Pour rendre un champ obligatoire, ajoutez l’attribut `required`. Pour valider un email, utilisez `type="email"`.

Les messages de succès sont simulés : aucun backend ni envoi réel n’est configuré.
