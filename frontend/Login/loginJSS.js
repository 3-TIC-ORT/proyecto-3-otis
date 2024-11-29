let nuevacuenta = {
    usuario: "",
    contraseña: "",
};
document.getElementById("crear").addEventListener("click", secreounacuenta)
function secreounacuenta (){
    nuevacuenta.usuario = document.getElementById("usuariocreado").value;
    nuevacuenta.contraseña = document.getElementById("contraseñacreada").value;
}
fetchData("nuevoUsuario", repetido);
function repetido(){
  if(data === 0){
    document.getElementById("no").style.opacity = "1";
    document.getElementById("nomensaje").innerHTML = "Ese nombre de usuario ya existe, elije otro";
    setTimeout (() => {
        document.getElementById("no").style.opacity = "0";
        document.getElementById("nomensajje").innerHTML = "";
    }, 3000);
    } else{
        document.getElementById("no").style.opacity = "1";
        document.getElementById("no").style.backgroundColor = "green";
        document.getElementById("nomensajje").innerHTML = "Ya se creo su cuenta, felicidades";
        setTimeout (() => {
            document.getElementById("no").style.opacity = "0";
            document.getElementById("no").style.backgroundColor = "#C78486";
            document.getElementById("nomensajje").innerHTML = "";
        }, 3000);
    }
}