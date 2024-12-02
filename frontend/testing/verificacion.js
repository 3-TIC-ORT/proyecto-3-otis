
function manejoDeArchivos(){

    const idusers = localStorage.getItem('idusers');

    document.getElementById('subirForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const fileUrl = document.getElementById('fileUrl').value;
        const fileType = tipoDeArchivo(fileUrl);

        if (!fileType) {
            console.log("formato no válido");
            document.getElementById("no").style.opacity = "1";
            document.getElementById("nomensaje").innerHTML = "Formato no válido";
            setTimeout(() => {
                document.getElementById("no").style.opacity = "0";
                document.getElementById("nomensaje").innerHTML = "";
            }, 3000);
            return;
        }

        try {
            console.log('hoa');
            let response = await fetch("http://localhost:3000/subirarchivospost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fileUrl, fileType, idusers })
            });

            if (response.ok) {
                console.log("archivo subido");
                await fetch("http://localhost:3000/gusta"),{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({idusers, archivo: fileUrl, gusta: true})
                }
                cargarArchivos(idusers);
            } else {
                console.log("archivo no subido, error");
            }
        } catch (error) {
            console.log("falla de conexión", error);
        }
    });

    function tipoDeArchivo(url) {    
        const esImagen = /\.(jpg|png|gif)$/i;    
        const esAudio = /\.(mp3|wav)$/i;    
        const esVideo = /\.(mp4)$/i;    
        
        if (esImagen.test(url)) return "image";    
        if (esAudio.test(url)) return "audio";    
        if (esVideo.test(url)) return "video";    
          
        return null; 
    }

    async function cargarArchivos(idusers) {
        try {
            const respuesta = await fetch(`http://localhost:3000/subirarchivos/${idusers}`);
            const data = await respuesta.json();
            if (respuesta.ok) {
                console.log('archivos recibidos:', data);

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

    cargarArchivos(idusers);

    function renderImages(imageLinks) {
        const galeriadeimagen = document.getElementById('galeriadeimagen');
        galeriadeimagen.innerHTML = '';

        imageLinks?.forEach((link) => {
            if (link.gusta) {
             const contenedorDeImagen = document.createElement('div');
              const img = document.createElement('img');
              img.src = link;
              img.alt = 'imagen subida';
              img.style.width = '150px'; // cambiar a lo que se desee

             contenedorDeImagen.appendChild(img);
             galeriadeimagen.appendChild(contenedorDeImagen);
            }
        });
    }

    function renderVideos(videoLinks) {
        const galeriadevideo = document.getElementById('galeriadevideo');
        galeriadevideo.innerHTML = '';

        videoLinks?.forEach((link) => {
            if(link.gusta){
             const contenedorDeVideo = document.createElement('div');
             const video = document.createElement('video');
             video.src = link;
             video.controls = true;
             video.style.width = '150px'; // cambiar a lo que se desee

             contenedorDeVideo.appendChild(video);
             galeriadevideo.appendChild(contenedorDeVideo);
            }
        });
    }

    function renderAudios(audioLinks) {
        const galeriadeaudio = document.getElementById('galeriadeaudio');
        galeriadeaudio.innerHTML = '';

        audioLinks?.forEach((link) => {
            if(link.gusta){
             const contenedorDeAudio = document.createElement('div');
             const audio = document.createElement('audio');
             audio.src = link;
             audio.controls = true;

             contenedorDeAudio.appendChild(audio);
             galeriadeaudio.appendChild(contenedorDeAudio);
            }
        });
    }

    async function cambiarGusta(idusers) {
        const response = await fetch(`http://localhost:3000/cambiarGusta/${idusers}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ gusta: false })
        });
    
        if (response.ok) {
            console.log("Gusta cambiado a false");
        } else {
            console.log("Error al cambiar estado de gusta");
        }
    }
    }
   cambiarGusta(idusers);
   
   
    async function toggleLike(fileType, fileIndex) {
        try {
            const respuesta = await fetch('http://localhost:3000/subirarchivos/toggleLike', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idusers, fileType, fileIndex })
            });

            const data = await respuesta.json();
            console.log(data.message);
            cargarArchivos(idusers);
        } catch (error) {
            console.log('error al cambiar de estado entre gusta y no gusta:', error);
        }
    }

    function loadUserFiles(idusers) {
        FetchUserFiles(idusers).then((files) => {
            renderImages(files.imagenesSubidas);
            renderAudios(files.audiosSubidos);
            renderVideos(files.videosSubidos);
        });
    }

    loadUserFiles();


const boton = document.getElementById('enviar');
boton.addEventListener('click', manejoDeArchivos);
