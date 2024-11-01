import { sequelize } from "../DB/DBcontroller.js";
import  Sequelize  from "sequelize";

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

