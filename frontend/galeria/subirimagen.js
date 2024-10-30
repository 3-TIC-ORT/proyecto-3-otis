document.getElementById("subirimagen").addEventListener("click", subirimagen);
function subirimagen(){
    let miimagen = document.getElementById("input").value;
    postData("imagenNueva" ,miimagen);
}