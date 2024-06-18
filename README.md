# Blabla'drar

## Introduction
Cette application de covoiturage permet aux utilisateurs de rechercher et proposer des trajets pour faire du covoiturage. Elle est construite en utilisant React pour le front-end et Node.js pour le back-end.

## Fonctionnalités 
- Inscription et connexion des utilisateurs
- Création, modification et suppression de trajets
- Modification de son profil utilisateur
- Messagerie interne

## Prérequis 

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :
- [Node.js](http://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Installation

### Cloner le Répository

```bash
git clone https://github.com/votre-utilisateur/votre-repository.git
cd votre-repository
```

### Installer les dépendances
Pour le front-end
```bash
cd client
npm install
```

Pour le back-end
```bash
cd server
npm install
```
### Configurer les variables d'environnement
Créez un fichier `.env` dans le répertoire `server` et remplissez-le avec vos configurations : 

DB_HOST=localhost

DB_USER=root

DB_PASS=password

DB_NAME=covoiturage

### Lancer les services
Lancer le Serveur Backend
```bash
cd server
npm start
```

Lancer l'Application Frontend
```bash
cd client
npm run dev
