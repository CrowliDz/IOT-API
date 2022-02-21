'use strict'

const models = require('../models');
const Luz = require('../models').Luz
const sequelize = models.Sequelize;
let op = sequelize.Op;


const ERROR = {
    ERROR: {
        status: 500,
        message: 'No se pudo guardar el sensor '
    },
    PASSWORD_FAIL: {
        status: 406,
        message: 'Password Failed',
        code: 'PASSWORD_FAILED'
    },
    AUTH_FAILED: {
        status: 401,
        message: 'Auth Failed',
        code: 'AUTH_FAILED'
    },
    NOT_FOUND: {
        status: 404,
        message: 'No se pudo encontrar el sensor',
        code: 'SENSOR_NOT_FOUND'
    },
    LIMIT: {
        status: 403,
        message: 'Limit Reached'
    },
    DUPLICATE: {
        status: 403,
        message: 'El sensor ya existe'
    },
    CODE_INVALID: {
        status: 403,
        message: 'Invalid Reference Code'
    },
    UNAUTHORIZED: {
        status: 401,
        message: 'Unauthorized'
    },
    REGISTERED: {
        status: 403,
        message: 'Sensor ya existe'
    }
}

function Error(error) {
    const { status, message } = error
    this.status = status
    this.message = message

}

module.exports = {
    get: async function (req, res) {
        try {
            let query = {};
            let busqueda = req.query.busqueda;
            if (busqueda != '') {
                query = {
                    id_luz: {
                        [op.substring]: busqueda
                    }
                }
            }
            let response = await Luz.findAll({
                attributes: ['id_luz', 'nombre_luz','estado_luz', 'fecha_luz'],
                where: query,
            })
            if (response) {
                res.status(200).send({
                    code: 200, response
                })
            } else {
                throw new Error(ERROR.NOT_FOUND)
            }

        }
        catch (error) {
            console.error(error)
            if (error instanceof Error) {
                res.status(error.status).send(error)
            } else {
                res.status(500).send({ ...ERROR.ERROR })
            }

        }
    },

    sendLight: async function (req, res) {
        console.log(req.body.topic)
        console.log(req.body.message)
      },

    create: async function (req, res) {
        try {
            console.log(req.body)
            let new_luz = new Luz(req.body);
            const response = await new_luz.save();
            res.status(200).send({ code: 200, status: response.status });
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                res.status(error.status).send(error)
            } else {
                console.log(error);
                res.status(500).send({ code: 500, message: 'Something Went Wrong' })
            }
        }
    },

    delete: async function (req, res) {
        try {
            const response = await Luz.destroy({
                where: { idluz: req.params.id }
            })
            res.status(200).send({ code: 200, message: ' eliminado', response })
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                res.status(error.status).send(error)
            } else {
                console.log(error);
                res.status(500).send({ code: 500, message: 'Something Went Wrong' })
            }
        }
    },

    update: async function (req, res) {
        try {
            const response = await Luz.update(req.body, {
                where: { id_luz: req.params.id }
            })
            res.status(200).send({ code: 200, message: ' modificado', response })
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                res.status(error.status).send(error)
            } else {
                console.log(error);
                res.status(500).send({ code: 500, message: 'Something Went Wrong' })
            }
        }
    },

 

    read: async function (req, res) {
        try {
            let response = await Luz.findOne({ where: { id_luz: req.params.id } });
            if (response) {
                res.status(200).send({ code: 200, response });
            } else {
                throw new Error(ERROR.NOT_FOUND)
            }
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                res.status(error.status).send(error)
            } else {
                console.log(error);
                res.status(500).send({ code: 500, message: 'Something Went Wrong' })
            }
        }
    }
}