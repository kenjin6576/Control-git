import { crearheader } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1Component.js";


function seccion(){

    let seccion = document.createElement('section');

    //Header
    seccion.appendChild(crearheader());

    //Seccion
    seccion.appendChild(seccion1());

   
    
    

    return seccion;
}

document.body.appendChild(seccion());
