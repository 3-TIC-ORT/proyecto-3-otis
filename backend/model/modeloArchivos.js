import { sequelize } from "../DB/DBcontroller.js";
import  Sequelize  from "sequelize";
import { User } from "./modeloUser.js";

const Archivos = sequelize.define("Archivos", {
    idusers: {
    type:Sequelize.INTEGER,
    allowNull: false, 
    },
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
    videosEstablecidos: {    // a partir de aca hay que agregar todo directo a la base de datos tmb
    type:Sequelize.STRING,
    allowNull: true
    },
    imagenesEstablecidas: {
    type:Sequelize.STRING,
    allowNull: true
    },
    audiosEstablecidos: {
    type:Sequelize.STRING,
    allowNull: true 
    }

}, {
    timestamps: false,
});

User.idusers = Archivos.idusers

export { Archivos };
