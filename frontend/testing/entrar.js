 document.addEventListener("DOMContentLoaded", () => {
     const botonLogin = document.getElementById("botonLogin");
     if (botonLogin) {
        botonLogin.addEventListener("click", iniciarSesion);
     } else {
        console.log("botonLogin no encontrado");
     }
});
export async function iniciarSesion(sesión) {
    const usuarioVer = document.getElementById("usuario").value;
    const contraseñaVer = document.getElementById("contraseña").value;
    console.log("intento de inicio de sesión:", usuarioVer);

    try 
    {
        if (!usuarioVer || !contraseñaVer) {
            console.log("Usuario o contraseña vacíos");
            document.getElementById("no").style.opacity = "1";
            document.getElementById("nomensaje").innerHTML = "Pls ingresa un usuario y una contraseña";
            setTimeout(() => {
                document.getElementById("no").style.opacity = "0";
                document.getElementById("nomensaje").innerHTML = "";
            }, 3000);
            return;
        }



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
            
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log(data)
                console.log("Usuario encontrado, ID de usuario:", data.idusers);
                if (data.idusers) {
                    const idusers = data.idusers;
                    localStorage.setItem("idusers", idusers);
                    window.location.href = "../Pantalla6.html";
                } else {
                    document.getElementById("no").style.opacity = "1";
                    document.getElementById("nomensaje").innerHTML = "Usuario no encontrado";
                    setTimeout(() => {
                        document.getElementById("no").style.opacity = "0";
                        document.getElementById("nomensaje").innerHTML = "";
                    }, 3000);
                }
                
            } 

        } else {
            const errorText = await response.text();
            console.log("Error en el inicio de sesión:", errorText);

            document.getElementById("no").style.opacity = "1";
            document.getElementById("nomensaje").innerHTML = 
                "Error al iniciar usuario o contraseña";
            setTimeout(() => {
                document.getElementById("no").style.opacity = "1";
                document.getElementById("nomensaje").innerHTML = "";
            }, 3000);
        }

    }catch (error) {
        console.log("error de conexion waaaa:", error);
    }




console.log(botonLogin); 
botonLogin.addEventListener("click", iniciarSesion);
}
