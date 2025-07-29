import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1Component.js";


function seccion(){

    let seccion = document.createElement('section');

    //Header
    seccion.appendChild(header());

    //Seccion
    seccion.appendChild(seccion1());

   
    
    

    return seccion;
}

document.body.appendChild(seccion());
