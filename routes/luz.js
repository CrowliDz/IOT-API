'use strict'

const router = require('express').Router({ mergeParams: true })
const luz = require('../controllers/luz')
const auth = require('../middleware/auth');

const { ensureAuth } = auth;

router.route('/sendLight')
.post(ensureAuth,luz.sendLight);

router.route('/get')
.get(ensureAuth,luz.get)
.post(ensureAuth,luz.create);

router.route('/read/:id')
.put(ensureAuth,luz.update)
.get(ensureAuth,luz.read)
.delete(ensureAuth,luz.delete);
module.exports = router