const {Schema ,model} = require('mongoose');

const reservaSchema = new Schema({

  
responsavel :'string', contato:'string', hotel:'string', Tipoap:'string', periodo:'string', 
qntpessoas :'number',


})

module.exports= model ('reserva',reservaSchema);