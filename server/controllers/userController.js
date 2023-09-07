const { default: mongoose } = require("mongoose");
const {conectarDB, desconectarDB} = require("../db/conection");
const User = require("../db/schemas/userSchema");


const create = async (req, res) => {
    const { email, password } = req.body;

    await conectarDB();

    try {
        
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            
            return res.status(409).json({ message: "El correo electrónico ya está registrado." });
        }

        
        const newUser = new User({ email, password });
        await newUser.save();
        
        await desconectarDB();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;
    await conectarDB();
    const user = await User.findOne({ email, password });
    if (!user) {
        
        return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
    await desconectarDB();
    
    res.status(200).json({ message: "Usuario logueado correctamente" });
}



module.exports = {create, login};