let nosabe = ["imagen 0.jpg", "imagen 1.jpg", "imagen 2.jpg"];
for(let numero = 0; numero < nosabe.length; numero++){
    document.getElementById(`img${numero}`).src = nosabe[numero]; 
}