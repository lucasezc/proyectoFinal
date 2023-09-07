const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");


const navigationController = require('../server/controllers/NavigationController');

//middlewares
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());

app.get('/', navigationController.goIndex);


app.get("/login", navigationController.goLogin);

app.get("/registro",navigationController.goRegistro);


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080');
})
