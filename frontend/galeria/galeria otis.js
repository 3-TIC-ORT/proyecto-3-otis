let nosabe = ["imagen 0.jpg", "imagen 1.jpg", "imagen 2.jpg"];
for(let numero = 0; numero < nosabe.length; numero++){
    document.getElementById(`img${numero}`).src = nosabe[numero]; 
}
for(let numere = 0; numere < 6; numere++){
    document.getElementsByClassName("megustaono")[5-numere].style.width = `${numere*100}px`; //despues lo saco, es solo para acordrme de como hacer algo
}