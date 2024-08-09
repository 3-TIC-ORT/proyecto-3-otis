import  Express  from "express";
import  argon2 from "argon2";

// learn exxpress.JS in 15 minutes!

const app = Express()

app.post("/enviar_datos", async (req, res) => { // endpoint
    const datosUser = req.body
    console.log(datosUser.usuario)
    
})



//argon2.hash(contraseña, 2) // poner despues de que ingresa contraseña adentro de la función para encriptar