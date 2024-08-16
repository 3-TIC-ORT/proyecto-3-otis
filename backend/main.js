import  Express  from "express";
import  argon2 from "argon2";
import { User } from "./model/modeloUser.js";
import { hash } from "argon2";


const app = Express()

app.post("/enviar_datos", async (req, res) => { // endpoint
    const datosUser = req.body
    const usuarioRegistrado = datosUser.usuario
    const contraseñaRegistrada = datosUser.contraseña

    const user = await User.create({contraseña: contraseñaRegistrada, usuario: usuarioRegistrado})
    //  user =  lo que ingrese la persona en el cuadro de texto
})

app.get("/enviar_datos", async (req, res) => { // endpoint

    const usuarioRegistrado = "ouchurus" // usuario definido
    const contraseñaRegistrada = "papaerpapapre" // contraseña definida

    const user = await User.create({contraseña: contraseñaRegistrada, usuario: usuarioRegistrado})
    //  user =  lo que ingrese la persona en el cuadro de texto

 
    res.send("hola")
})

app.get("/", (req, res) => {
    res.send("pepe")
})

app.listen(3000, () => {
    console.log("hip hip hurra")
})

async function encriptar(password) {
    try {
        let hash = await argon2.hash(password, 2)
        console.log("HOLASOYPEPE")
        return hash;
    } catch (error) {
        console.log("error :(")
    }
}

