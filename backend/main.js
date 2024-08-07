import  Express  from "express";


// learn exxpress.JS in 15 minutes!

const app = Express()

app.post("/enviar_datos", async (req, res) => { // endpoint
    const datosUser = req.body
    console.log(datosUser.usuario)
    
})