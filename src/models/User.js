const { DataTypes } = require("sequelize");
const db = require("../db/database");

const User = db.define("Users", {
    username:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    address:{
        type:DataTypes.STRING,
        unique:true,
        require: [true, 'address is required']
    },
    role:{
        type: DataTypes.STRING,
        defaultValue: "player",
        require: [true, 'role is required']
    },
    nonce: {
        type:DataTypes.INTEGER,
        require: [true, 'Nonce is required'],
        unique:true
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    },
    rewards:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})


module.exports = User;