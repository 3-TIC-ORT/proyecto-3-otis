document.getElementById("subirAudio").addEventListener("click", subirAudio);
function subirAudio(){
    let miAudio = document.getElementById("input").value;
    postData("audioNuevo" ,miAudio);
    console.log(miAudio);
}