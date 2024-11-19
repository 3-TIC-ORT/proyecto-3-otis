import express from "express";
import argon2 from "argon2";
import {User} from "./model/modeloUser.js";
import { Archivos } from "./model/modeloArchivos.js";
const router = express.Router();


router.post('/subirarchivos', async (req, res) => {
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
        await Archivos.update(
            { [field]: Archivos.sequelize.fn('CONCAT', Archivos.sequelize.col(field), ',', fileUrl) },          
            { where:{idusers}}
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
    const { usuario, contraseña } = req.body;

    console.log (`intento de inicio de sesión para usuario: ${usuario}`);

    try{
        const { contraseñaVer, usuarioVer } = req.body

        console.log(req.body)
        console.log(contraseñaVer)

        if (!contraseñaVer || !usuarioVer){
            console.log("error al buscar usuario");
        };

        const idBusqueda = await User.findOne({
            where: {
                usuario: usuarioVer,
            }
        }); 

        if (idBusqueda) {
            res.status(200).send('Se encontro, e inicio el user')
        }

    } catch(error) {
        console.error("error al chequear usuario:", error);
        res.status(500).send('Failed to entrar a mi sesion')
    };
});


export {router};
