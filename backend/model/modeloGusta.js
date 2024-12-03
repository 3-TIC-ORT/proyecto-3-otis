import { sequelize } from "../DB/DBcontroller.js";
import  Sequelize  from "sequelize";
import { User } from "./modeloUser.js";

const Gusta = sequelize.define("Gusta", {
    idusers: {
    type:Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false, 
    },
    archivo: {
    type:Sequelize.STRING,
    allowNull: false
    },
    gusta: {
    type:Sequelize.TINYINT,
    allowNull: false
    },
    

}, {
    timestamps: false,
});

User.hasMany(Gusta, { foreignKey: 'idusers' }); 

export { Gusta };
