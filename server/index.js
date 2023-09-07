const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");



const navigationController = require('../server/controllers/NavigationController');
const userController = require("../server/controllers/userController");

//middlewares
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());
app.use(express.json());

app.get('/', navigationController.goIndex);


app.get("/login", navigationController.goLogin);

app.get("/registro",navigationController.goRegistro);

app.get("/pelisFree.html", navigationController.goPelisFree);

app.post("/api/registro", userController.create);

app.post("/api/login", userController.login);


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080');
})
