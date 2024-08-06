let perfil = {

    usuario: "sofi",
    contraseña: "abcd",
    subido: ["video 1"], // empieza con: nada
    gusta: ["audio 1", "audio 2", "foto 2"], // empieza con: todos los elementos
    noGusta: ["foto 1"], //  empieza con: nada

} //  fin variable perfil


guardar_localstorage();  //  guardar datos
obtener_localstorage();  //  llamar datos

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