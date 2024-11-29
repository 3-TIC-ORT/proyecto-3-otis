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
import { where } from "sequelize";


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

app.post("/entrarAMiSesion"), async (req, res) => {
    try{
        const { contraseñaVer, usuarioVer } = req.body

        console.log(req.body)
        console.log(contraseñaVer)

        if (!contraseñaVer || !usuarioVer){
            console.log("error al buscar usuario");
        };
        const id400 = 0
        const idBusqueda = await User.findOne({
            where: {
                contraseña: contraseñaVer,
                usuario: usuarioVer,
                idusers: id400
            }
        }); 

        if (idBusqueda) {
            res.status(200).send('Se encontro, e inicio el user')
        }

    } catch(error) {
        console.error("error al chequear usuario:", error);
        res.status(500).send('Failed to entrar a mi sesion')
    };
};



app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/testing/entrar.html'));
});

app.get("/subirarchivos", async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/testing/verificación.html'));
});

app.post("/subirarchivospost", async (req, res) => {
    res.send('hola')
});

app.post("/login", async (req, res) => {
   iniciarSesion();
});

app.listen(3000, () => {
    console.log("servidor escuchando puerto 3000 YUPII");
});

app.get("/entrar", async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/Login/pantalla 2 iniciar sesión.html'));
});
app.post('/subirarchivospost', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/testing/verificacion.html'));
});
 
/*
app.post("/subirarchivos", async (req, res) => { 

    const archivoSubidoAhora = req.body
    console.log("back: " + JSON.stringify(archivoSubidoAhora));

    const imagenSubidaAhora = manejoDeArchivos.fileURL //poner la variable con lo subido al input
    const videosSubidosAhora = hdeheudh
    const audiosSubidosAhora = hbhjghs

    try {
        const archivoSubidoAhora = await Archivo.create({
            imagenesSubidas: imagenSubidaAhora,
            videosSubidos: videosSubidosAhora,
            audiosSubidosAhora: audiosSubidosAhora,
        })

        res.status(200).send('Se envio el archivo')

    } catch(error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).send('Error en el servidor');
    }

});
*/