const crypto = require('crypto');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            unique:true,
            allowNull:false,
            defaultValue: DataTypes.UUIDV4,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        role:{
            type:DataTypes.ENUM('admin','buddy','volunteer'),
            allowNull:false,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        profile_id:{
            type:DataTypes.UUID,
            allowNull:true,
        },
    });
};