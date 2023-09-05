const mongoose = require('mongoose');

// La cadena de conexión de MongoDB Atlas se encuentra en tu cuenta de MongoDB Atlas
const mongoURI = 'mongodb+srv://admin:asdasdf123@cluster0.cpucbsv.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB Atlas establecida');
});
