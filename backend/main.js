import  Express  from "express";
import  argon2 from "argon2";
import { User } from "./model/modeloUser.js";
import { hash } from "argon2";
import express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from 'path';
import cors from "cors";
import { router } from "./rutas.js";
//import { sendData } from "../frontend/testing/api-login.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __parentDirname = dirname(__dirname);

const app = Express()

app.use(express.json());
app.use(cors());
// app.use('/testing', router);
app.use(express.static(path.join(__dirname, 'frontend/testing')));


app.use("/api/usuarios", router);

app.post("/enviar-datos", async (req, res) => { // endpoint
 
    const datosUser = req.body
    console.log("back: " + JSON.stringify(datosUser));

    const usuarioRegistrado = datosUser.usuario
    const contraseñaRegistrada = datosUser.contraseña

    try {
        const hashContraseña = await argon2.hash(contraseñaRegistrada);
        const user = await User.create({
            contraseña: hashContraseña,
            usuario: usuarioRegistrado
        })

        res.status(200).send('Se envio el usuario')

    } catch(error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send('Error en el servidor');
    }

});


app.get("/", async (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend/testing/index.html'));
});

app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/testing/entrar.html'));
});

app.get("/subirarchivos", async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/testing/verificación.html'));
});

app.post("/subirarchivos", async (req, res) => {
    
});

app.post("/login", async (req, res) => {
   iniciarSesion();
});

app.listen(3000, () => {
    console.log("servidor escuchando puerto 3000 YUPII");
});
