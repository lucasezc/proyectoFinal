const express = require('express');
const path = require('path');
const app = express();

const navigationController = require('../server/controllers/NavigationController');

//middlewares
app.use(express.static(path.join(__dirname, './client')));

app.get('/', navigationController.goIndex);


app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080');
})