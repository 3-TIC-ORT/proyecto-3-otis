import express from "express";
import argon2 from "argon2";
import {user} from "./model/modeloUser"
import { Archivos } from "./model/modeloArchivos";
const router = express.Router();


router.post('/', async (req, res) => {
    const { fileUrl, fileType, idusers } = req.body;

    if (!fileUrl || !fileType || !idusers){
        return res.status(400).json({message: 'datos incompletos'});
    }

    let field;
    switch (fileType){
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
            return res.status(400).json({message: "tipo de archivo no soportado"});
    }

    try {
        await modeloArchivos.update(
            {[field]: fileUrl},
            {where: {idusers}}
        );
        console.log(`${fileType} subido correctamente`);
        res.status(200).json({message: `${fileType} subido correctamente`});
    } catch (error) {
        console.log('error al subir archivo', error);
        res.status(500).json({message: 'error al subir archivo'});
    }

});


router.get('/:idusers', async (req, res) => {
    const { idusers } = req.params;

    try {
        const archivosDelUsuario = await modeloArchivos.findOne({where: {idusers}});
        
        if(archivosDelUsuario) {
            console.log('archivos del usuario founded:', archivosDelUsuario);

            res.json({
                imagenesSubidas: archivosDelUsuario.imagenesSubidas ? archivosDelUsuario.imagenesSubidas.split(',') : [],
                videosSubidos: archivosDelUsuario.videosSubidos ? archivosDelUsuario.videosSubidos.split(',') : [],
                audiosSubidos: archivosDelUsuario.audiosSubidos ? archivosDelUsuario.audiosSubidos.split(',') : [],
            });
        } else {
            console.log('usuario no encontrado/no subio ningun archivo');
            res.status(404).json({ message: 'usuario no encontrado/no subio ningun archivo'});
        }
    } catch (error) {
        console.log("error al buscar archivos", error);
        res.status(500).json({ message: 'error al buscar archivos'});
    }

});

router.post('/toggleLike', async (req, res) => {
    const { idusers, fileType, fileIndex } = req.body;

    try{
        const archivosDelUsuario = await modeloArchivos.findOne({where: {idusers}});
        if(!archivosDelUsuario || !archivosDelUsuario[fileType]) {
            return res.status(404).json({message: 'usuario o archivo no encontrado'});
        }
        const fileList = archivosDelUsuario[fileType].split(',');
        if (!fileList[fileIndex]) {
            return res.status(404).json({message: 'archivo no encontrado'});
        }

    fileList[fileIndex] = fileList[fileIndex].includes('#noGusta')
    ? fileList[fileIndex].replace('#noGusta','#gusta')
    : fileList[fileIndex].replace('#gusta','#noGusta');

    await modeloArchivos.update({[fileType]: fileList.join(',')}, {where: {idusers}});
    console.log(`estado de archivo actualizado: ${fileList[fileIndex]}`);
    res.json({ message: 'estado de archivo actualizado de forma goody :)'});
} catch (error) {
    console.log('error al actualizar el estado:', error);
    res.status(500).json({ message: 'error al actualizar estado del archivououou'});
}

});


router.post("/login", async (req, res) => {
    const {usuario, contraseña} = req.body;
    console.log (`intento de inicio de sesión para usuario: ${usuario}`);

    try {
        const usuarioEncontrado = await User.findOne({ where: { usuario }});
        if (!usuarioEncontrado) {
            console.log("Usuario no existe");
            return res.status(404).send("usuario no existe/no se encontró");
        }
        const verificarContraseña = await argon2.verify(usuarioEncontrado.contraseña, contraseña);
        if (!verificarContraseña){
            console.log("contraseña incorrecta");
            return res.status(401).send("contraseña incorrecta :P");
        }

        console.log("sesión iniciada con exito yay");
        res.status(200).send("inicio de sesión exitosooo");
    } catch (error) {
        console.error("error en el proceso de iniciar sesión:", error);
        res.status(500).send("error en el servidor");
    }
});


export {rutas};