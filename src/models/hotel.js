const {Schema ,model} = require('mongoose');

const hotelSchema = new Schema({

  nome:'string', estado:'string', cidade:'string', endereço:'string', tipo:'string' , qtdeAptos:'number', 
  diaria:'number', nomeImagem: 'string'
}, { 
  toJSON: {
    virtuals: true, 
  }


});

HotelSchema.virtual('imagem_url').get(function(){
  return 'http://localhost:3000/uploads/${this.nomeImagem}';
});


module.exports= model ('hotel',hotelSchema);    