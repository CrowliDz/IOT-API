'use strict';
module.exports = (sequelize, DataTypes) => {
    var Luz = sequelize.define('Luz', {
        id_luz: {
            primaryKey: true,
            type: DataTypes.INTEGER(11),
        },
        nombre_luz: {
            type: DataTypes.STRING,
        },
        estado_luz: {
            type: DataTypes.INTEGER(11),
        },
        fecha_luz: {
            type: DataTypes.DATE,
        },
        code_luz: {
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
            tableName: 'luz'
        });

       

    return Luz;
}