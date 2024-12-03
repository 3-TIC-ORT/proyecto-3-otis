import { iniciarSesion } from "../testing/entrar.js";

let sesion = {
    usuario: "",
    contraseña: "",
};
document.getElementById("botonLogin").addEventListener("click", seInicioSesion)

function seInicioSesion (){
    sesion.usuario = document.getElementById("usuario").value;
    sesion.contraseña = document.getElementById("contraseña").value;
    console.log(sesion);
}