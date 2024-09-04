import  Express  from "express";
import  argon2 from "argon2";
import { User } from "./model/modeloUser.js";
import { hash } from "argon2";
import express  from "express";
import path from 'path'
import { fileURLToPath } from "url";
import { dirname } from 'path';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __parentDirname = dirname(__dirname);

const app = Express()

app.use(express.json());
app.use(cors)
app.use(express.static(path.join(__parentDirname, 'frontend/')))


app.post("/enviar_datos", async (req, res) => { // endpoint
    
    const datosUser = req.body
    console.log("back: " + datosUser)

    const usuarioRegistrado = datosUser.usuario
    const contraseñaRegistrada = datosUser.contraseña

    const user = await User.create({contraseña: contraseñaRegistrada, usuario: usuarioRegistrado})
    //  user =  lo que ingrese la persona en el cuadro de texto

    res.send('pepe')
})

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend/testing/index.html'));
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
