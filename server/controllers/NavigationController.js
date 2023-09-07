const path = require('path');


function goIndex(req, res){
    const filePath = path.join(__dirname, '../../client/index.html');
    res.sendFile(filePath);
}


function goLogin(req, res){
    const filePath = path.join(__dirname, "../../client/login.html");
    res.sendFile(filePath);
}

function goRegistro(req, res){
    const filePath = path.join(__dirname, "../../client/registro.html");
    res.sendFile(filePath);
}

module.exports = {
    goIndex,
    goLogin,
    goRegistro
}