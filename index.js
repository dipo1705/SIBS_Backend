const express = require('express');
const app = express();
const auth = require('./routes/auth');
const routesApprenants = require('./routes/apprenants');
const routesCohortes = require('./routes/cohortes');
const routesSessions = require('./routes/sessions');

// Configuration du port
const port = 3000;

// Middleware pour la gestion du body JSON
app.use(express.json());

// Routage

app.use('/', routesApprenants);
app.use('/', routesCohortes);
app.use('/', routesSessions);

// Authentification 

router.post('/login', auth.login);
router.get('/logout', auth.logout);
router.post('/signup', auth.register);


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});