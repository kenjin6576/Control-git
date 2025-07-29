function header (){

let header = document.createElement('header');
header.className = "header";




//titulo
let titulo = document.createElement('titulo');
header.appendChild(titulo);
titulo.innerText = "Kenji";
titulo.className = "titulo1";


//div 
let div = document.createElement('div');
header.appendChild(div);
div.className = "div";

let imagen = document.createElement('img');
imagen.src = "https://avatars.githubusercontent.com/u/197617968?v=4&size=64"
div.appendChild(imagen);
imagen.className = "img";



return header;



}

export{header}