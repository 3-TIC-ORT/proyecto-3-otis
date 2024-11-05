fetchData("audiosSubidos", ponerlosaudios);
function ponerlosaudios(){
    for(let i = 1; i < data.length; i++){
       let item = document.createElement("audio");
       item.id = `audio${i}`;
       item.src = data[i];
       item.className = "audioOculto";
       document.getElementById("ELBODY").appendChild(item);
       let item2 = document.createElement("button");
       item2.id = `boton${i}`;
       item2.className = `audiofalso`;
       item2.value = i
       document.getElementById("audiosdeCoso").appendChild(item2);
       document.getElementById(`boton${i}`).addEventListener("click", reproducir);
    }
}
function reproducir(){
    let oooo = document.getElementById(`audio${this.value}`);
    if(oooo.paused){
        oooo.play();
    } else{
        oooo.pause();
    }
}