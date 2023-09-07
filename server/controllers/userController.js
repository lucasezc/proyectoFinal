const {conectarDB, desconectarDB} = require("../db/conection");
const User = require("../db/schemas/userSchema");


const create = async (req, res) => {
    const { email, password } = req.body;

    await conectarDB();

    // creamos un usuario con new User y lo guardamos en la base de datos con save()

    const user = new User({ email, password });
    
    // user.save() es una promesa que retorna el usuario guardado
    const newUser = await user.save();
    await desconectarDB();
    res.json(newUser);
}


module.exports = {create};