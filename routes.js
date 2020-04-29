const { Router } = require('express');

const SessionController = require('./controllers/SessionController');
const HotelController = require('./controllers/HotelController').default;
const ReservaController = require('./controllers/ReservaController').default;

const routes = new Router();

routes.get('/'), (req, res) => {

    return res.json({ retorno: false })

}


routes.get('/sessions', SessionController.store)
routes.post('/hotel', HotelController.create)
routes.get('/hotel', HotelController.list)

routes.post('/reserva', ReservaController.create)
routes.get('/reserva', ReservaController.list)

module.exports = routes;