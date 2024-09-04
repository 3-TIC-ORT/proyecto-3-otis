import { Sequelize } from "sequelize"; // importa cosas utiles de la libreria sequelize

const sequelize = new Sequelize('otis', 'root', '123456789', {
    host:"localhost",
    dialect:"mysql",
    port: 3306,
})

sequelize.authenticate()
    .then(() => {
        console.log("HURRAY!!!!!")
    })
    .catch(err => {
        console.error(err, ":(")
    })

    
export { sequelize }
