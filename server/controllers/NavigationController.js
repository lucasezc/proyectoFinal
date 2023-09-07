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

function goRegistred(req, res){
    const filePath = path.join(__dirname, "../../client/registred.html");
}

function goPelisFree(req, res){
    const filePath = path.join(__dirname, "../../client/pelisFree.html");
}

module.exports = {
    goIndex,
    goLogin,
    goRegistro,
    goRegistred,
    goPelisFree
}