document.getElementById('subirForm').addEventListener('submit', async (e) => {
e.preventDefault();

const fileUrl = document.getElementById('fileUrl').value;
const fileType = tipoDeArchivo(fileUrl);

if(!fileType){
    console.log("formato no valido");
    return;
}

try {
    console.log('hoa')
    let response = await fetch("http://localhost:3000/subirarchivospost", {
        method: 'POST',
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
    const esImagen = /\.(jpg|png|gif)$/i; // bandera `i` al final
    const esAudio = /\.(mp3|wav)$/i;
    const esVideo = /\.(mp4)$/i;

    if (esImagen.test(url)) return "image";
    if (esAudio.test(url)) return "audio";
    if (esVideo.test(url)) return "video";
    return null;
}



async function cargarArchivos (idusers) {
    try {
        const respuesta = await fetch (`http://localhost:3000/subirarchivos/${idusers}`);
        const data = await respuesta.json();
        if (respuesta.ok) {
            console.log('archivos recibidous sir', data);

            renderImages(data.imagenesSubidas);
            renderVideos(data.videosSubidos);
            renderAudios(data.audiosSubidos);
        } else {
            console.log("error al cargar archivos", data.message);
        }
    } catch (error) {
        console.log("error de conexión", error);
    }
}


function renderImages(imageLinks) {
    const galeriadeimagen = document.getElementById('galeriadeimagen');
    galeriadeimagen.innerHTML = '';

    imageLinks.forEach((link, index) => {
        if (link.includes('#noGusta')) return;
        const contenedorDeImagen = document.createElement('div');
        const img = document.createElement('img');
        img.src = link.replace('#gusta','').replace('#noGusta','');
        img.alt = 'imagen subida';
        img.style.width = '150px'; // cambiar a lo que quiera iair

        const toggleButton = document.createElement('button');
        toggleButton.textContent = link.includes('#gusta') ? 'No me gusta' : 'Me gusta';
        toggleButton.onclick = () => toggleLike('imagenesSubidas', index);

        contenedorDeImagen.appendChild(img);
        contenedorDeImagen.appendChild(toggleButton);
        galeriadeimagen.appendChild(contenedorDeImagen);
    });
}

function renderVideos(videoLinks) {
    const galeriadevideo = document.getElementById('galeriadevideo');
    galeriadevideo.innerHTML = '';

    videoLinks.forEach((link, index) => {
        if (link.includes('#noGusta')) return;
        const contenedorDeVideo = document.createElement('div');
        const video = document.createElement('video');
        video.src = link.replace('#gusta','').replace('#noGusta','');
        video.controls = true;
        video.style.width = '150px'; // cambiar a lo que quiera iair

        const toggleButton = document.createElement('button');
        toggleButton.textContent = link.includes('#gusta') ? 'No me gusta' : 'Me gusta';
        toggleButton.onclick = () => toggleLike('videosSubidos', index);

        contenedorDeVideo.appendChild(video);
        contenedorDeVideo.appendChild(toggleButton);
        galeriadevideo.appendChild(contenedorDeVideo);
        
    });

}

function renderAudios(audioLinks) {
    const galeriadeaudio = document.getElementById('galeriadeaudio');
    galeriadeaudio.innerHTML = '';

    audioLinks.forEach((link, index) => {
        if (link.includes('#noGusta')) return;
        const contenedorDeAudio = document.createElement('div');
        const audio = document.createElement('audio');
        audio.scr = link;
        audio.controls = true;
        galeriadeaudio.appendChild(audio);
        
        const toggleButton = document.createElement('button');
        toggleButton.textContent = link.includes('#gusta') ? 'No me gusta' : 'Me gusta';
        toggleButton.onclick = () => toggleLike('audiosSubidos', index);

        contenedorDeAudio.appendChild(audio);
        contenedorDeAudio.appendChild(toggleButton);
        galeriadeaudio.appendChild(contenedorDeAudio);

    });
}


async function toggleLike(fileType, fileIndex) {
    try {
        const respuesta = await fetch('http://localhost:3000/subirarchivos/toggleLike', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({idusers: 1, fileType, fileIndex }),
        });

        const data = await respuesta.json();
        console.log(data.message);
        loadUserFiles(1);
    } catch (error) {
        console.log('error al cambiar de estado entre gusta y no gusta:', error);
    }
    
} 

function loadUserFiles(idusers){
    FetchUserFiles(idusers).then((files) => {
        renderImages(files.imagenesSubidas);
        renderAudios(files.audiosSubidos);
        renderVideos(files.videosSubidos);
    });
}


