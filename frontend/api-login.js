const usuario = document.getElementById("usuario").value
const contraseña = document.getElementById("contraseña").value

const boton = document.getElementById("boton")
const botondequenoaparezca = document.getElementById("boton").value

boton.addEventListener("click", sendData)

async function sendData() {

    let pedido = await fetch("/enviar_datos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            usuario: usuario,
            contraseña: contraseña,
        }
    })
}

