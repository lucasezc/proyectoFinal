const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const User = model("user", userSchema);


module.exports = User;
