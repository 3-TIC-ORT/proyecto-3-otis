
import sequelize from "../../backend/DB/DBcontroller"

let perfil = {

    usuario: "sofi",
    contraseña: "abcd",
    audiosSubidos: [""], // empieza con: nada
    videosSubidos: [""],
    imagenesSubidas: [""],
    gusta: ["", "", ""], // empieza con: todos los elementos
    noGusta: ["foto 3"], //  empieza con: nada

} //  fin variable perfil


guardar_localstorage();  //  guardar datos  fetch metodo post 
obtener_localstorage();  //  llamar datos   fetch metodo get

function obtener_localstorage(){

    if( localStorage.getItem( "perfil" )) {
        let perfil = JSON.parse( localStorage.getItem( "perfil" )); // llamo este dato, y lo transformo en un objeto
    }
}
function guardar_localstorage() {

localStorage.setItem( "perfil", JSON.stringify( perfil ) );

obtener_localstorage();


document.getElementById('pregunta1').addEventListener('submit', function(event) {
    event.preventDefault(); // no se manda formulario

    var nombreingresado = document.getElementById('usuario').value; // Obtiene el valor del campo de texto
    
   perfil.usuario = nombreingresado; // Asigna el valor a caracteristica de la variable
   guardar_localstorage();

});

document.getElementById('pregunta2').addEventListener('submit', function(event) {
    event.preventDefault(); // no se manda formulario

    var nombreingresado = document.getElementById('contraseña').value; // Obtiene el valor del campo de texto
    
   perfil.contraseña = nombreingresado; // Asigna el valor a caracteristica de la variable
   guardar_localstorage();

});


} //  fin función