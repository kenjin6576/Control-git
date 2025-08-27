export function footer() {
let f = document.createElement("footer");
f.className = "footer";
let icons = ["🏠", "📦", "❤️", "🛒"];
icons.forEach((icono) => {
let div = document.createElement("div");
div.className = "div-logo";
div.innerText = icono;
f.appendChild(div);
});
return f;
}