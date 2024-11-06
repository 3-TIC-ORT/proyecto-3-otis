const botonLogin = document.getElementById("botonLogin");

botonLogin.addEventListener("click", iniciarSesion);

async function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    console.log("intento de inicio de sesión:", usuario);

    try {
        const response = await fetch("http://localhost:3000/api/usuarios/login",{
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({usuario, contraseña})
        });

        if (response.ok) {
            console.log("se pudo iniciar sesion eyeyeeyeyeye")
        } else {
            const errorText = await response.text();
            console.log("error en inicio de sesión:", errorText);
        } 
    }catch (error) {
            console.log("error de conexion waaaa:", error);
    }
}


export {iniciarSesion};