import reserva, { find } from '../models/reserva';

class ReservaController {

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

            find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    }
}

export default new ReservaController;