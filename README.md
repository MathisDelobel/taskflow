# Installation de l'application 

Bienvenue dans l'application taskflow de type kanban en cours de développement. 

## Prérequis :

Techno utilisées :
- **PostgreSQL** pour la base de données
- **NodeJs** pour le backend
- **React** pour le frontend

## Installation

### **Cloner le dépôt et installer les dépendances**

```bash
git clone git@github.com:MathisDelobel/taskflow.git
cd back
npm i
cd ../front
npm i
```

### **Créer et configurer la BDD Postgres**

1. Créer la BDD
```bash
sudo -u postgres psql
CREATE DATABASE taskflow_db;
CREATE USER taskflow_user WITH PASSWORD 'taskflow_password';
GRANT ALL PRIVILEGES ON DATABASE taskflow_db TO taskflow_user;
```

2. Remplir le .env

3. Créer les tables et fixtures
```bash
cd back
npm run db:seed
npm run db:fixtures
```

### **Lancer l'application**
```bash
cd back
npm run dev
cd ../front
npm run dev
```







