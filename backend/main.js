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
import { Archivos } from "./model/modeloArchivos.js";


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
        const hashContraseñaBuscar = await argon2.hash(contraseñaVer);

        if (!hashContraseñaBuscar || !usuarioVer){
            console.log("error al buscar usuario");
        };
        const userBusqueda = await User.findOne({
            where: {
                contraseña: hashContraseñaBuscar, 
                usuario: usuarioVer,
            }
        });

        if (userBusqueda) {
            const idusers = userBusqueda.idusers;}
            res.status(200).json({ 
                message: 'Usuario encontrado e iniciado',
                idusers: idusers 
            });


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

    const imagenSubidaAhora = manejoDeArchivos.fileURL; 
    const videosSubidosAhora = manejoDeArchivos.fileURL;
    const audiosSubidosAhora = manejoDeArchivos.fileURL;

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
/*
app.post("/subir-archivo", async (req, res) => {

    const archivoSubido = req.body; 
    console.log("back: " + JSON.stringify(archivoSubido));

    const { fileUrl, fileType, idusers } = archivoSubido; 

    if (!fileUrl || !fileType || !idusers) {
        return res.status(400).send('Faltan datos requeridos');
    }

    let field;
    switch (fileType) {
        case 'image':
            field = 'imagenesSubidas';
            break;
        case 'audio':
            field = 'audiosSubidos';
            break;
        case 'video':
            field = 'videosSubidos';
            break;
        default:
            return res.status(400).send('Tipo de archivo no soportado');
    }

    try {
        const archivo = await Archivos.update(
            {
                [field]: Archivos.sequelize.fn(
                    'CONCAT', 
                    Archivos.sequelize.col(field), 
                    ',', 
                    fileUrl
                )
            },
            {
                where: { idusers } // Actualizar el registro del usuario correspondiente
            }
        );

        // Enviar una respuesta exitosa
        res.status(200).send('Archivo subido correctamente');

    } catch (error) {
        // Manejo de errores
        console.error('Error al subir el archivo:', error);
        res.status(500).send('Error en el servidor');
    }
});
*/

app.post("/subira rchivos", async (req, res) => {
    const archivoSubido = req.body;
    console.log("back: " + JSON.stringify(archivoSubido));

    const { fileUrl, fileType, idusers } = archivoSubido;
    if (!fileUrl || !fileType || !idusers) {
        return res.status(400).send('Faltan datos requeridos');
    }

    let field;
    switch (fileType) {
        case 'image':
            field = 'imagenesSubidas';
            break;
        case 'audio':
            field = 'audiosSubidos';
            break;
        case 'video':
            field = 'videosSubidos';
            break;
        default:
            return res.status(400).send('Tipo de archivo no soportado');
    }

    try {
        const nuevoArchivo = await Archivos.create({
            idusers, // cambiar por la variable que termine siendo la del usuario cuando averigue
            [field]: fileUrl,
        });

        res.status(201).send('Archivo creado correctamente');
    } catch (error) {
        console.error('Error al crear el archivo:', error);
        res.status(500).send('Error en el servidor');
    }
});


/*

1. conseguir que el inicio de sesión te de el id y funcione bien
2. mandarle las variables a iair para que pase de html al siguiente
3. con el id definido bien mandar a crear los archivos en la tabla 
4. cuando esten bien para subir archivos clasificarlos en la 3ra tabla de gusta y no gusta
5. definir que si es no gusta no los muestra
6. mostrarlos en la galeria
7. vr si los podemos agrandar para que se vean bien
8. poner en las de iair el texto de los formatos
9. corregir ortografía
10. pasar a la presentación

*/