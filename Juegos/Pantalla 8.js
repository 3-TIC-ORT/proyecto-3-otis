function A(){
    this.style.backgroundColor = 'transparent'
    for(let i = 0; i<4; i++){
        if(document.getElementsByClassName("cajaA")[i] === this){
            for(let j = 0; j<4; j++){
                document.getElementsByClassName("cajaB")[i*4+j].style.opacity = "1";
            }
        }
    }

}
for(let k = 0; k<4; k++){
document.getElementsByClassName("cajaA")[k].addEventListener("mouseenter", A);
}

function B(){
    this.style.backgroundColor = 'transparent'
    for(let i = 0; i<16; i++){
        if(document.getElementsByClassName("cajaB")[i] === this){
            for(let j = 0; j<4; j++){
                document.getElementsByClassName("cajaC")[i*4+j].style.opacity = "1";
        }
    }
}
}
for(let k = 0; k<16; k++){
document.getElementsByClassName("cajaB")[k].addEventListener("mouseenter", B);
}

function C(){
    this.style.backgroundColor = 'transparent'
    for(let i = 0; i<64; i++){
        if(document.getElementsByClassName("cajaC")[i] === this){
            for(let j = 0; j<4; j++){
                document.getElementsByClassName("cajaD")[i*4+j].style.opacity = "1";
        }
    }
}
}
for(let k = 0; k<64; k++){
document.getElementsByClassName("cajaC")[k].addEventListener("mouseenter", C);
}

function D(){
    this.style.backgroundColor = 'transparent'
    for(let i = 0; i<256; i++){
        if(document.getElementsByClassName("cajaD")[i] === this){
            for(let j = 0; j<4; j++){
                document.getElementsByClassName("cajaE")[i*4+j].style.opacity = "1";
        }
    }
}
}
for(let k = 0; k<256; k++){
document.getElementsByClassName("cajaD")[k].addEventListener("mouseenter", D);
}

