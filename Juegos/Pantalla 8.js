function ahorasi(){
    if(document.getElementsByClassName("cajaA").length === 0){
    document.getElementById("caja").style.backgroundColor = "transparent";
    for(let i = 0; i < 4; i++){
    let item = document.createElement("div");
    item.id = `cajaA${i}`;
    item.className = "cajaA"
    document.getElementById("caja").appendChild(item);
    document.getElementById(`cajaA${i}`).addEventListener("mouseenter", cajaA);
} 
}
}
let j = 0;
document.getElementById("caja").addEventListener("mouseenter", ahorasi);
function cajaA(){
    if(this.children.length === 0){
    this.style.backgroundColor = "transparent";
    for(let i = 0; i < 4; i++){
    let item = document.createElement("div");
    item.id = `cajaB${j}`;
    item.className = "cajaB"
    this.appendChild(item);
    document.getElementById(`cajaB${j}`).addEventListener("mouseenter", cajaB); 
    j++;
}
}
}
let k = 0;
function cajaB(){
    if(this.children.length === 0){
        this.style.backgroundColor = "transparent";
        for(let i = 0; i < 4; i++){
        let item = document.createElement("div");
        item.id = `cajaC${k}`;
        item.className = "cajaC"
        this.appendChild(item);
        document.getElementById(`cajaC${k}`).addEventListener("mouseenter", cajaC); 
        k++;
    }
    } 
}
let l = 0;
function cajaC(){
    if(this.children.length === 0){
        this.style.backgroundColor = "transparent";
        for(let i = 0; i < 4; i++){
        let item = document.createElement("div");
        item.id = `cajaD${l}`;
        item.className = "cajaD"
        this.appendChild(item);
        document.getElementById(`cajaD${l}`).addEventListener("mouseenter", cajaD); 
        l++;
    }
    } 
}
let m = 0;
function cajaD(){
    if(this.children.length === 0){
        this.style.backgroundColor = "transparent";
        for(let i = 0; i < 4; i++){
        let item = document.createElement("div");
        item.id = `cajaE${m}`;
        item.className = "cajaE"
        this.appendChild(item);
        document.getElementById(`cajaE${m}`).addEventListener("mouseenter", cajaE); 
        m++;
    }
    } 
}
let n = 0;
function cajaE () {
    if(this.children.length === 0){
        this.style.backgroundColor = "transparent";
        for(let i = 0; i < 4; i++){
        let item = document.createElement("div");
        item.id = `cajaF${n}`;
        item.className = "cajaF"
        this.appendChild(item);
        n++;
    }
    }   
}