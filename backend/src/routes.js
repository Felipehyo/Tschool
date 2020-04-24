const express = require('express');

//Imports of Constrollers
const OngController = require('./controllers/OngController');
const IncidenteConntroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileCotroller');
const SessionController = require('./controllers/SessionController');

const SchoolController = require('./controllers/SchoolController');
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
//Routes School - CRUD
routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.index);
routes.delete('/schools/:id', SchoolController.delete);
routes.put('/schools', SchoolController.update);


module.exports = routes;