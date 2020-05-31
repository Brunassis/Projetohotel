const { Router } = require('express');

import multer from 'multer';
import uploadConfig from './config/upload';

const SessionController = require('./controllers/SessionController');
const HotelController = require('./controllers/HotelController');
const ReservaController = require('./controllers/ReservaController');

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/'), (req, res) => {

    return res.json({ retorno: false })

}


routes.get('/sessions', SessionController.index)
routes.post('/hotel', upload.single('imagem'), HotelController.store)
routes.put('/hotel', HotelController.update)

routes.post('/reserva', ReservaController.create)
routes.get('/reserva', ReservaController.list)

module.exports = routes;