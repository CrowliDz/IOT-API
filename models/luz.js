'use strict';
module.exports = (sequelize, DataTypes) => {
    var Luz = sequelize.define('Luz', {
        id_luz: {
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        nombre_luz: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado_luz: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        fecha_luz: {
            type: DataTypes.DATE,
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
            tableName: 'luz'
        });

    return Luz;
}