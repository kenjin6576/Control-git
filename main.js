function seccion(){

    let seccion = document.createElement('section');
    
    let h1 = document.createElement('h1');
    h1.className = "titulo"
    h1.innerText = "Hola Mundo"; //Sirve para ejecutar acciones
    seccion.appendChild(h1); //Hace que seccion se declare como hijo
    
    let parrafo = document.createElement('p');
    parrafo.innerText = "Introduccion a javascript";
    seccion.appendChild(parrafo);

    return seccion;
}

document.body.appendChild(seccion());
