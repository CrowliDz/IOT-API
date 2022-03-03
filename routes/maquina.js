'use strict'

const router = require('express').Router({ mergeParams: true })
const maquina = require('../controllers/maquina')
const auth = require('../middleware/auth');

const { ensureAuth } = auth;

router.route('/sendLight')
.post(ensureAuth,maquina.sendLight);

router.route('/get')
.get(ensureAuth,maquina.get)
.post(ensureAuth,maquina.create);

router.route('/read/:id')
.put(ensureAuth,maquina.update)
.get(ensureAuth,maquina.read)
.delete(ensureAuth,maquina.delete);
module.exports = router