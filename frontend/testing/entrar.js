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
                usuarioVer, 
                contraseñaVer
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Usuario encontrado, ID de usuario:", data.idusers);

            const idusers = data.idusers;
            const entramos = 1
            localStorage.setItem("idusers", idusers);

        } else {
            const errorText = await response.text();
            console.log("Error en preparar el inicio de sesión:", errorText);
            const entramos = 0
        }

    }catch (error) {
        console.log("error de conexion waaaa:", error);
    }


}

console.log(botonLogin); 
botonLogin.addEventListener("click", iniciarSesion);

