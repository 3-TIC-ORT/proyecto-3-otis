document.getElementById('subirForm').addEventListener('submit', async (e) => {
e.preventDefault();

const fileUrl = document.getElementById('fileUrl').value;
const fileType = getFileType(fileUrl);

if(!fileType){
    console.log("formato no valido");
    return;
}

try {
    const respuesta = await fetch("http:localhost:3000/subirarchivos", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fileUrl, fileType})
    });
    if (response.ok) {
        console.log("archivo subido");
    } else {
        console.log("archivo no subido, error");
    }
} catch (error) {
    console.log("falla de conexión", error);
}

});


function tipoDeArchivo(url) {
    const esImagen = /\.(jpg|png|gif)$/;
    const esAudio = /\.(mp3|wav)$/;
    const esVideo = /\.(mp4)$/;

    if (esImagen.test(url)) return "image";
    if (esAudio.test(url)) return "audio";
    if (esVideo.test(url)) return "video";
    return null;

}