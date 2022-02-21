'use strict'

const router = require('express').Router({ mergeParams: true })
const sensor_luz = require('../controllers/sensor_luz')
const auth = require('../middleware/auth');

const { ensureAuth } = auth;

router.route('/get')
.get(ensureAuth,sensor_luz.get)
.post(ensureAuth,sensor_luz.create);

router.route('/sensor_luz/:id')
.put(ensureAuth,sensor_luz.update)
.get(ensureAuth,sensor_luz.read)
.delete(ensureAuth,sensor_luz.delete)
module.exports = router