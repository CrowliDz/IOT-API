'use strict';
module.exports = (sequelize, Datatypes) => {
    var Sensor_luz = sequelize.define('Sensor_luz', {
        id_sensorluz: {
            primaryKey: true,
            type: Datatypes.INTEGER(11)
        },
        procentaje_sensorluz: {
            type: Datatypes.STRING,
            allowNull: false
        },
        estado_sensorluz: {
            type: Datatypes.INTEGER(11),
            allowNull: false
        },
        fecha_sensorluz: {
            type: Datatypes.DATE,
            allowNull: true,
        },
    },
        {
            defaultScope: {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
            },
            timestamps: false,
            paranoid: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'sensor_luz'
        });

    return Sensor_luz;
}