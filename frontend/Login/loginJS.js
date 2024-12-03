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
//fetchData("inicioSecion", incorrecto);//
function incorrecto (){
    if(data === 0){
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