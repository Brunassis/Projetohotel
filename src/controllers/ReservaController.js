const reserva = require('../models/reserva')
import * as Yup from 'yup';
import Usuario from '../models/usuario';
import Hotel from '../models/Hotel';
import HotelController from '../../../../Projetohotel-master (1)/Projetohotel-master/controllers/HotelController';
class ReservaController {

    async index(req, res){
        const {responsavel } = req.body;
        let reservas = await Reserva.find({ responsavel});
        return res.json(reserva);
    }
    async store(req, res){
        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params; 
        const schema = Yup.object().shape({
            dataFinal: Yup.string().required(),
            dataInicial = Yup.string().required(),
            qtdeHospedes: Yup.number().required(),
       }

        );
        console.log(usuario_id);
        //validando se o hotel existe 
        if(! (await schema.isValid(req.body))){
            return res.status(400).json({mensagem: "dados inválidos!"});
        }
        
        Usuario.findById(usuario_id).catch((err) => {
            return res.status(401).json({mensagem: "Usuario não autorizado!"});
        });

        Hotel.findById(hotel_id).cath((err) => {
            return res.status(400).json({mensagem: "Hotel inválido!"});
        });
        
        let reserva = await Reserva.create({ responsavel: usuario_id, hotel: hotel_id, dataInicial, 
                                             dataFinal, qtdeHospedes });
        await reserva.populate('responsavel').populate('hotel').execPopulate();
        return res.json(reserva);
    }
    
    create(req, res) {
        const { body } = req;

        const newReserva = new reserva(body);
        newReserva.save(function (error) {
            if (error) {
                res.json({ error })
            }
            else {
                res.json('Sucess!')
            }
        });
    }
    list(req, res){

            reserva.find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    }
}

module.exports = new ReservaController;