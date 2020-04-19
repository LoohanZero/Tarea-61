const imagen = document.querySelector(".imagen-subida");
const input = document.getElementById("subir-imagen");
const filtros = document.getElementsByClassName("filtro");
console.log(filtros[0].dataset);

const subirImagen = () => {
    imagen.setAttribute("src", `${input.value}`);
} 

const aplicarFiltro = () => {
    if (event.target.dataset.filtro === "brooklyn") {
        imagen.style.filter = "brightness(110%) contrast(90%)";
    } 
    if (event.target.dataset.filtro === "1977") {
        imagen.style.filter = "brightness(110%) contrast(110%) saturate(130%)";
    } 
    if (event.target.dataset.filtro === "toaster") {
        imagen.style.filter = "brightness(90%) contrast(150%)";
    } 
    if (event.target.dataset.filtro === "moon") {
        imagen.style.filter = "brightness(110%) contrast(110%) grayscale(100%)";
    } 
}

input.addEventListener('change', subirImagen)

for (const filtro of filtros) {
    filtro.addEventListener('click', aplicarFiltro)
}









