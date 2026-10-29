// Les liens entre dépôts sont configurés dans index.html.
// Ce fichier gère uniquement les petits détails interactifs du portail.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="https://XWR3NCHX.github.io/"]').forEach(link => {
    link.addEventListener("click", () => {
      // Aucun changement de données : les sites restent indépendants.
    });
  });
});
