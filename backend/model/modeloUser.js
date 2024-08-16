import { sequelize } from "../DB/DBcontroller.js";
import  Sequelize  from "sequelize";

const User = sequelize.define("Users", {
    idusers: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    usuario: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
        /*audiosSubidos: {
        type: Sequelize.BLOB,
        allowNull: true
        },
        videosSubidos: {
        type: Sequelize.BLOB,
        allowNull: true
        },
        imagenesSubidas: {
        type: Sequelize.BLOB,
        allowNull: true
        },
        gusta: {
        type: Sequelize.BLOB,
        allowNull: true
        },
        noGusta: {
        type: Sequelize.BLOB,
        allowNull: true

        },
        */
}, {
    timestamps: false,
});

export { User };