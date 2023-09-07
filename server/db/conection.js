const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:asdasdf123@cluster0.cpucbsv.mongodb.net/pepe"); //nombre db
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
}

const desconectarDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
    } catch (error) {
        console.log("Error al desconectar de la base de datos: ", error);
    }
};

module.exports = { conectarDB, desconectarDB }