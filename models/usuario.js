const {Schema ,model} = require('mongoose');

const UsuarioSchema = new Schema({

    email:string,


})

export default model ('usuario',UsuarioSchema);