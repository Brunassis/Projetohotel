const hotel = require('../models/hotel')

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

            hotel.find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    }
}

module.exports = new HotelController;