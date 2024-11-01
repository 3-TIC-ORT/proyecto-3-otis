fetchData("imagenes", queaparezcan);
function queaparezcan(){
    for(let i = 0; i < data.length; i++){
        let item = document.createElement("section");
        item.className = "adentroestanlasfotos";
        item.id = `section${i}`;
        document.getElementById("maaain").appendChild(item);
        let item2 = document.createElement("img");
        item2.src = data[i];
        item2.className = "imagenes";
        item2.id = `img${i}`
        document.getElementById(`section${i}`).appendChild(item2);
        let item3 = document.createElement("div");
        item3.id = `div${i}`
        document.getElementById(`section${i}`).appendChild(item3);
        let item4 = document.createElement("button");
        item4.className = "megusta";
        item4.id = `gusta${i}`
        item4.value = i
        document.getElementById(`div${i}`).appendChild(item4);
        document.getElementById(`gusta${i}`).addEventListener("click", si);
        let item5 = document.createElement("button");
        item5.className = "ono";
        item5.id = `nogusta${i}`
        item5.value = i
        document.getElementById(`div${i}`).appendChild(item5);
        document.getElementById(`nogusta${i}`).addEventListener("click", no);
    }
}
function si (){
   let imagen = document.getElementById(`img${this.value}`).src;
   postData("imagenBuena", imagen);
   document.getElementById(`section${this.value}`).remove();
}
function no (){
   let imagen = document.getElementById(`img${this.value}`).src;
   postData("imagenMala", imagen);
   document.getElementById(`section${this.value}`).remove();
}