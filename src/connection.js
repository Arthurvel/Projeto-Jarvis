const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;

const dbpassword = process.env.DB_PASS;

const connect = () =>{
    mongoose.connect(``)

    const connection = monggose.connection;

    connection.on("error", () =>{
        console.error("error ao conectar");
    })

    connect.on("open", () =>{
        console.log("conectado");
    });
}

connect();

module.exports = mongoose;