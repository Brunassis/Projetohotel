const express = require('express')

const mongoose = require('mongoose');

const routes = require ('./routes')

class App{

    constructor(){

    this.app=express(); //Instanciando o atributo app como um objeto da classe express();
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect('mongodb+srv://Bruna:<password>@cluster1-brfqp.gcp.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnfiedTopology: true,
    });
    


    this.middlewares();
    this.routes();

    }


middlewares(){

this.app.use(express.json());

}

routes(){

this.app.use(routes);

}


}

module.exports = new App().app