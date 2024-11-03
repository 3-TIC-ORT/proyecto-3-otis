import { sequelize } from "../DB/DBcontroller.js";
import  Sequelize  from "sequelize";

const User = sequelize.define("User", {
    idusers: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});



export {User};