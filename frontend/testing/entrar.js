 document.addEventListener("DOMContentLoaded", () => {
     const botonLogin = document.getElementById("botonLogin");
     if (botonLogin) {
        botonLogin.addEventListener("click", iniciarSesion);
     } else {
        console.log("botonLogin no encontrado");
     }
});


async function iniciarSesion() {
    const usuarioVer = document.getElementById("usuario").value;
    const contraseñaVer = document.getElementById("contraseña").value;
    console.log("intento de inicio de sesión:", usuario);

    try {
        const response = await fetch("http://localhost:3000/api/usuarios/login",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                usuarioVer, contraseñaVer
            })
        });

        if (response.ok) {
            console.log("preparado")
        } else {
            const errorText = await response.text();
            console.log("error en preparar el inicio de sesión:", errorText);
        } 

    }catch (error) {
        console.log("error de conexion waaaa:", error);
    }
}


//const btnLogin = document.getElementById("botonLogin");
console.log(botonLogin); 
botonLogin.addEventListener("click", iniciarSesion);

