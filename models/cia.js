'use strict';
module.exports = (sequelize, DataTypes) => {
    var Cia = sequelize.define('Cia', {
        idcia: {
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        razon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
            defaultScope: {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            },
            timestamps: false,
            paranoid: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'cia'
        });

    Cia.associate = function (models) {
        Cia.hasMany(models.Departamento);
    };
    return Cia;
}