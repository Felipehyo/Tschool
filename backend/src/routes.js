const express = require('express');

//Imports of Constrollers
const OngController = require('./controllers/OngController');
const IncidenteConntroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileCotroller');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Login
routes.post('/sessions', SessionController.store);

//Routes Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

//Routes Incidents
routes.get('/incidents', IncidenteConntroller.index);
routes.post('/incidents', IncidenteConntroller.store);
routes.delete('/incidents/:id', IncidenteConntroller.delete);
//Routes Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;