'use strict'

const router = require('express').Router({ mergeParams: true });
const usuario = require('../controllers/usuarios');

const auth = require('../middleware/auth');

const { ensureAuth } = auth;

router.route('/get')
.get(ensureAuth, usuario.getUsuario)
.post(ensureAuth, usuario.createUsuarioInf)

router.route('/read/:id')
.get(ensureAuth,usuario.readUsuario)
.put(ensureAuth,usuario.update)
.delete(ensureAuth,usuario.delete);

router.route('/login')
.post(usuario.login);

module.exports = router