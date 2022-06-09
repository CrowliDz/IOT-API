'use strict'

const router = require('express').Router({ mergeParams: true })
const configus = require('../controllers/configus')
const auth = require('../middleware/auth');

const { ensureAuth } = auth;

router.route('/sendLight')
.post(ensureAuth,configus.sendLight);

router.route('/P_ObjetosEnFuncion')
.get(ensureAuth,configus.P_ObjetosEnFuncion);

router.route('/get')
.get(ensureAuth,configus.get)
.post(ensureAuth,configus.create);

router.route('/read/:id')
.put(ensureAuth,configus.update)
.get(ensureAuth,configus.read)
.delete(ensureAuth,configus.delete);
module.exports = router