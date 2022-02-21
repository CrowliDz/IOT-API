'use strict';
module.exports = (sequelize, DataTypes) => {
    var Usuario = sequelize.define('Usuario', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true
        },
        create_time:{
            type: DataTypes.DATE,
            allowNull: true
        },
        last_update:{
            type: DataTypes.DATE,
            allowNull: true
        },
        iddep:{
            type: DataTypes.INTEGER(11),
            references:{
            model:'departamentos',
            key: 'iddep'
            }
        },
        celular:{
            type: DataTypes.STRING
        },
        last_username:{
            type: DataTypes.STRING,
        },
        activousr:{
            type: DataTypes.STRING,
        }
    }, {
            defaultScope: {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            },
            timestamps: false,
            paranoid: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'usuarios'
        });

        Usuario.associate = function (models) {
            Usuario.belongsTo(models.Departamento, { foreignKey: 'iddep' });
        };

    
    return Usuario;
}