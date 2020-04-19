// Permitir ingresar dos colores y una dirección, y cambiar el fondo con un gradiente usando dicha información. BONUS POINT: ver en la sección de Recursos del Trello algunos generadores de gradientes para agregar más funcionalidades/opciones

const botonGenerar = document.getElementById("generar");


const generarGradiente = (event) => {
    const color1 = document.getElementById("first-color").value;
    const color2 = document.getElementById("second-color").value;
    
    const direccion = document.querySelector("select").value;

    document.body.style.background = `linear-gradient(to ${direccion}, ${color1}, ${color2})`;
   
}


botonGenerar.addEventListener('click', generarGradiente);

// background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)
