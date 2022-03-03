'use strict';
module.exports = (sequelize, DataTypes) => {
    var Maquina = sequelize.define('Maquina', {
        id_maquina: {
            primaryKey: true,
            type: DataTypes.INTEGER(11),
        },
        nombre_maquina: {
            type: DataTypes.STRING,
        },
        estado_maquina: {
            type: DataTypes.INTEGER(11),
        },
        fecha_maquina: {
            type: DataTypes.DATE,
        },
        codigo_maquina: {
            type: DataTypes.STRING,
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
            tableName: 'maquina'
        });

    return Maquina;
}