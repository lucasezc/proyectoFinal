const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User.js');

// Ruta para registrar un usuario
router.post(
  '/register',
  [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'Por favor, introduce un correo electrónico válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Manejo de errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Verificar si el usuario ya existe
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'El usuario ya existe' });
      }

      user = new User({
        username,
        email,
        password,
      });

      // Encriptar la contraseña
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Guardar el usuario en la base de datos
      await user.save();

      // Generar y responder con el token de autenticación
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, 'admin', { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error de servidor');
    }
  }
);

module.exports = router;
