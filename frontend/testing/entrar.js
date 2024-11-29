 /*document.addEventListener("DOMContentLoaded", () => {
     const botonLogin = document.getElementById("botonLogin");
     if (botonLogin) {
        botonLogin.addEventListener("click", iniciarSesion);
     } else {
        console.log("botonLogin no encontrado");
     }
});
async function iniciarSesion(sesión) {
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

*/

let sesion = {
    usuario: "",
    contraseña: "",
};

// Evento de clic para iniciar sesión
document.getElementById("botonLogin").addEventListener("click", seInicioSesion);

function seInicioSesion() {
    sesion.usuario = document.getElementById("usuario").value;
    sesion.contraseña = document.getElementById("contraseña").value;
    console.log(sesion);

    // Llamada a la función de iniciar sesión
    iniciarSesion(sesion);
}

// Función para hacer la solicitud al backend para verificar el inicio de sesión
async function iniciarSesion(sesion) {
    try {
        const response = await fetch("http://localhost:3000/api/usuarios/entrarAMiSesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuarioVer: sesion.usuario,
                contraseñaVer: sesion.contraseña,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Usuario encontrado, ID de usuario:", data.idusers);

            const idusers = data.idusers;
            localStorage.setItem("idusers", idusers);  // Guardar idusers en el localStorage

            // Redirigir a la página siguiente
            window.location.href = "../Pantalla6.html";
        } else {
            const errorText = await response.text();
            console.log("Error en preparar el inicio de sesión:", errorText);

            // Llamar a la función incorrecto para mostrar el mensaje de error
            incorrecto(0);
        }
    } catch (error) {
        console.log("Error de conexión:", error);
        incorrecto(0);  // Llamar a la función incorrecto en caso de error
    }
}

// Función para manejar el resultado del login
function incorrecto(data) {
    if (data === 0) {
        document.getElementById("no").style.opacity = "1";
        document.getElementById("nomensaje").innerHTML = "Error al iniciar usuario o contraseña";
        setTimeout(() => {
            document.getElementById("no").style.opacity = "0";
            document.getElementById("nomensaje").innerHTML = "";
        }, 3000);
    } else {
        window.location.href = "../Pantalla6.html";  // Si el login es exitoso, redirigir
    }
}
