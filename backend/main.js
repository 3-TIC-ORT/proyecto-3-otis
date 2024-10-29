import  Express  from "express";
import  argon2 from "argon2";
import { User } from "./model/modeloUser.js";
import { hash } from "argon2";
import express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from 'path';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __parentDirname = dirname(__dirname);

const app = Express()

app.use(express.json());
app.use(cors());

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

/* async function entrarAMiUsuario (req, res) {
    try {
        const [rows] = await db.execute('SELECT password FROM users WHERE usuario = ?', [usuario]);
        
        if (rows.length === 0){
            console.log("no existe el usuario :p");
            return res.status(404).json({ message: 'no existe el usuarioooo' });
        }
    
        const contraseñaHasheada = rows[0].contraseña;
    
        const compararContraseñas = await argon2.verify(contraseñaHasheada, contraseña);
    
       if (compararContraseñas) {
            console.log('ya estas en tu sesión woooo');
            return res.status(200).json({ message: 'entraste a tu sesion ahora tu alma es mia muejeje' }); 
          } else {
            console.log('Existe usuario, no contraseña'); 
            return res.status(401).json({ message: 'Existe usuario, no contraseña' });
        }
        
       }catch (err) { 
        console.error('no anduvbvbvo', err);
        res.status(500).json({ error: 'funciono mal pipipipi' }); 
      }
} */


app.get("/", async (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend/testing/index.html'));
  // await entrarAMiUsuario(req, res);
});

app.get("/login", async (req, res) => {
    entrarAMiUsuario()
});

app.listen(3000, () => {
    console.log("hip hip hurra")
})
