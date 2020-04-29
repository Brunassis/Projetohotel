import hotel, { find } from '../models/hotel';

class HotelController {

    create(req, res) {
        const { body } = req;

        const newHotel = new hotel(body);
        newHotel.save(function (error) {
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

export default new HotelController;