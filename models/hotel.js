const {Schema ,model} = require('mongoose');

const hotelSchema = new Schema({

  nome :'string', estado:'string', cidade:'string', endereço:'string', tipo:'string' , apQnt:'number', 
  diaria:'number'


})

module.exports= model ('hotel',hotelSchema);