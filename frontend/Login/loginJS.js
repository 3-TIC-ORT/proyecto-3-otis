let sesion = {
    usuario: "",
    contraseña: "",
};
document.getElementById("entrar").addEventListener("click", seInicioSesion)
function seInicioSesion (){
    sesion.usuario = document.getElementById("usuario").value;
   sesion.contraseña = document.getElementById("contraseña").value;
    postData("inicioSesion", sesion, incorrecto);
    console.log(sesion);
}
function incorrecto (){
    if(data === false){
    document.getElementById("no").style.opacity = "1";
    document.getElementById("nomensaje").innerHTML = "Error al iniciar usuario o contraseña";
    setTimeout (() => {
        document.getElementById("no").style.opacity = "0";
        document.getElementById("nomensaje").innerHTML = "";
    }, 3000);
    } else {
        window.location.href = "../Pantalla6.html"
    }
}