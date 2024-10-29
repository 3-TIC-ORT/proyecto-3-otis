let nuevacuenta = {
usuario: "",
contraseña: "",
};
document.getElementById("crear").addEventListener("click", secreounacuenta)
function secreounacuenta (){
    nuevacuenta.usuario = document.getElementById("usuariocreado").value;
    nuevacuenta.contraseña = document.getElementById("contraseñacreada").value;
    postData("nuevousuario", nuevacuenta, repetido);
}
function repetido(){
    alert("este usuario ya existe, elige otro nombre");
}