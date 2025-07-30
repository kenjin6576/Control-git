export function item(){

    let item = document.createElement("div")
    item.className = "item";

     let titulo = document.createElement("h2")
    titulo.textContent = "Spiderman";
    item.appendChild(titulo);

    let img = document.createElement("img")
    img.src = "https://m.media-amazon.com/images/M/MV5BYWRkN2M1NmQtZjhjMi00ODFjLTk2ODctYWJiOWNkNjg1OGY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    img.className = "Spiderman"
    item.appendChild(img);

    let descripcion = document.createElement("descripcion")
    descripcion.textContent = "Spider-Man, traducido en ocasiones como Hombre Araña,es un superhéroe de los cómics estadounidenses publicados por Marvel Comics. Creado por el guionista y editor Stan Lee y el artista Steve Ditko, apareció por primera vez en la antología Amazing Fantasy #15 (agosto de 1962) durante la Edad de Plata del Cómic. "
    descripcion.className = "info"
    item.appendChild(descripcion);

    return item;

}
