const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")

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

