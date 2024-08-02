
//guardar_localstorage();  //  guardar datos
//obtener_localstorage();  //  llamar datos

function obtener_localstorage(){

    if( localStorage.getItem( "perfil" )){
        let perfil = JSON.parse( localStorage.getItem( "perfil" )); // llamo este dato 
    }
}
function guardar_localstorage(){

    let perfil = {

        usuario: "sofi1234",
        contraseña: "abcde",
        subido: "video 1",
        gusta: ["audio 1", "audio 2", "foto 2"],
        noGusta: ["foto 1"],

    } //  fin variable perfil


localStorage.setItem( "perfil", JSON.stringify( perfil ) );



} //  fin función