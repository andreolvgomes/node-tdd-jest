const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');
const SessionController = require('./app/controllers/SessionsController');

routes.post('/sessions', SessionController.store);

// daqui pra baixo só acessa com autenticação
routes.use(authMiddleware);
routes.post('/dashboard', SessionController.dashboard);

module.exports = routes;