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

//await Archivos.sync()    no es asi pero mepa que asi se crea si todavia no existe???
const Archivos = sequelize.define("Archivos", {
    videosSubidos: {
    type:Sequelize.STRING,
    allowNull: true
    },
    imagenesSubidas: {
    type:Sequelize.STRING,
    allowNull: true
    },
    audiosSubidos: {
    type:Sequelize.STRING,
    allowNull: true
    },

}, {
    timestamps: false,
});

export { Archivos };



export {User};