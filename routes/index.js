const router = require('express').Router()
const cia = require('./cia')
const departamento = require('./departamento')
const usuario = require('./usuario')
const sensor_luz = require('./sensor_luz')
const luz = require('./luz')


//all of the routing will be done here

module.exports = function (app) {

    app.use('/cia', cia),
    app.use('/departamento', departamento),
    app.use('/usuario', usuario),
    app.use('/sensor_luz', sensor_luz),
    app.use('/luz', luz),

    app.use(router)
}