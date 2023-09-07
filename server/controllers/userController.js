// const { default: mongoose } = require("mongoose");
// const {conectarDB, desconectarDB} = require("../db/conection");
// const User = require("../db/schemas/userSchema");


// const create = async (req, res) => {
//     const { email, password } = req.body;

//     await conectarDB();

//     // creamos un usuario con new User y lo guardamos en la base de datos con save()

//     const user = new User({ email, password });
    
//     // user.save() es una promesa que retorna el usuario guardado
//     const newUser = await user.save();
//     await desconectarDB();
//     res.json(newUser);
// }


// module.exports = {create};

const { default: mongoose } = require("mongoose");
const {conectarDB, desconectarDB} = require("../db/conection");
const User = require("../db/schemas/userSchema");


const create = async (req, res) => {
    const { email, password } = req.body;

    await conectarDB();

    try {
        // Verificar si ya existe un usuario con el mismo correo electrónico
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // El usuario ya existe, devuelve una respuesta de error
            return res.status(409).json({ message: "El correo electrónico ya está registrado." });
        }

        // Si el usuario no existe, crea un nuevo usuario y guárdalo en la base de datos
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
        // Si las credenciales son incorrectas, responde con un código de estado 401 (Unauthorized)
        return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
    await desconectarDB();
    // Si las credenciales son correctas, responde con el código de estado 200 (OK)
    res.status(200).json({ message: "Usuario logueado correctamente" });
}



module.exports = {create, login};