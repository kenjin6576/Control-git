import { listadeCompras } from "../DataBase/carrito.js";
export function item(producto) {

let item = document.createElement("div");
item.className = "item";

let tarjeta = document.createElement("div");
tarjeta.className = "producto";

let h3 = document.createElement("h3");
h3.textContent = producto.title;

let img = document.createElement("img");
img.src = producto.image;
img.alt = producto.title;

let descripcion = document.createElement("p");
descripcion.textContent = producto.description;

let precio = document.createElement("span");
precio.className = "precio";
precio.textContent = `$${producto.price}`;

tarjeta.appendChild(h3);
tarjeta.appendChild(img);
tarjeta.appendChild(descripcion);
tarjeta.appendChild(precio);
item.appendChild(tarjeta);

item.addEventListener("click", () => {
listadeCompras.push("comal")
console.log(listadeCompras.length);
console.log(listadeCompras)
});
return item;
}

itemModulo.css