

const boton = document.getElementById("boton")

boton.addEventListener("click", sendData)

async function sendData() {

    const usuario = document.getElementById("usuario").value
    const contraseña = document.getElementById("contraseña").value
    console.log("front: " + usuario)
    console.log("front: " + contraseña)

    await fetch("http://localhost:3000/enviar_datos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            usuario: usuario,
            contraseña: contraseña
        })
    })
}

