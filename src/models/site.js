const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class site extends Model {}

site.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notNull:{
                msg: "EL campo Nombre no puede ser nulo"
            }
            // ,isAlpha: {
            //     args: true,
            //     msg: "El nombre solo debe contener letras"
            // }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull : {
                msg: "El campo Descripción no puede ser nulo"
            }
        }
    },
    infoInterest: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            notNull : {
                msg: "El campo de informacion de interes no puede ser nulo"
            }
        }
    },
    imgPath: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "EL campo no puese ser nulo"
            },
            len: {
                args: [3, 255],
                msg : "La url debe ser de 3 a 255 caracteres"
            }
        }
    }
},
{
    sequelize,
    modelName: 'site'
});

module.exports = site;