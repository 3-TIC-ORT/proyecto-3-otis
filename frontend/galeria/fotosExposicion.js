let imagenes = [];
let felicidad = 0;
fetchData("imG", tenerlasfotos);
function tenerlasfotos(){
    imagenes = data;
    document.getElementById("imagen").src = imagenes[0];
}
document.getElementById("cambio1").addEventListener("click", cambioDeFoto);
document.getElementById("cambio2").addEventListener("click", cambioDeFoto);
function cambioDeFoto(){
    felicidad = felicidad + Number(this.value);
    document.getElementById("imagen").src = imagenes[felicidad-imagenes.length*Math.floor(felicidad/imagenes.length)];
    console.log(imagenes[felicidad-imagenes.length*Math.floor(felicidad/imagenes.length)]);
}