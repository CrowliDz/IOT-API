'use strict';
module.exports = (sequelize, DataTypes) => {
    var Configus = sequelize.define('Configus', {
        id_config: {
            primaryKey: true,
            type: DataTypes.INTEGER(11),
        },
        alarma_config: {
            type: DataTypes.INTEGER(11),
        },
        min_config: {
            type: DataTypes.INTEGER(11),
        },
        grafica_config: {
            type: DataTypes.INTEGER(11),
        },
        id_usuario: {
            type: DataTypes.INTEGER(11),
        },
        vinculo_config: {
            type: DataTypes.INTEGER(11),
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
            tableName: 'configus'
        });

    return Configus;
}