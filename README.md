# Genshin-Portal

Page d'accueil indépendante qui relie plusieurs sites de jeux hébergés séparément sur GitHub Pages.

## Fichiers

- `index.html` : contenu de la page d'accueil et liens vers les sites.
- `css/style.css` : design et adaptation mobile.
- `js/main.js` : petit script d'initialisation.
- `.nojekyll` : évite certains traitements automatiques de GitHub Pages.

## Publication

1. Crée un dépôt GitHub nommé `Genshin-Portal`.
2. Téléverse tous les fichiers de ce dossier en gardant leur structure.
3. Ouvre **Settings → Pages**.
4. Choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis sauvegarde.
5. Attends le déploiement. L'adresse sera `https://XWR3NCHX.github.io/Genshin-Portal/`.

## Comment les liens fonctionnent

Les liens sont dans `index.html` et pointent vers des URL publiques GitHub Pages :
- Personnages : `https://XWR3NCHX.github.io/Genshin-fiche/`
- Artéfacts : `https://XWR3NCHX.github.io/Genshin-artefacts/`

Si le nom du dépôt d'artéfacts diffère, change simplement l'URL dans le deuxième lien. Les deux sites doivent avoir GitHub Pages activé pour que leurs pages s'ouvrent.

Le portail ne copie ni ne modifie les fichiers des autres dépôts. Il s'agit de simples liens HTML (`<a href="...">`). Les données, scripts et listes enregistrées restent séparés.

## Personnaliser le nom ou les liens

Dans `index.html`, cherche `XWR3NCHX.github.io` et remplace l'URL si ton nom d'utilisateur ou le nom d'un dépôt change.

Projet fan-made non officiel.
