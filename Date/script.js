// Usando un input de tipo date, permitir seleccionar una fecha, y que el color de fondo y el texto que haya en la página cambien para indicar la estación del año de la fecha. BONUS POINT: que permita seleccionar el hemisferio en que estamos (norte o sur) y muestre la estación en relación a eso.

// const fecha = document.getElementById("fecha").value;
// const hemisferio = document.getElementsByTagName("select").value;
const estacion = document.querySelector("h1");
const boton = document.getElementById("generar");


const cambiarLayout = () => {
    const fecha = document.getElementById("fecha").valueAsDate;
    const dia = fecha.getDate() + 1;
    const mes = fecha.getMonth() + 1;
    const mesLimite = {
        estacion1: [1, 2],
        estacion2: [4, 5],
        estacion3: [6, 7],
        estacion4: [10, 11]
    };
    const fechaLimite = 21;
    const hemisferio = document.querySelector("select").value;
    
    const primeraEstacion = mesLimite.estacion1.includes(mes) || (mes===12 && dia >= fechaLimite) || (mes === 3 && dia < fechaLimite);
    const segundaEstacion = mesLimite.estacion2.includes(mes) || (mes===3 && dia >= fechaLimite) || (mes === 6 && dia < fechaLimite);
    const terceraEstacion = mesLimite.estacion3.includes(mes) || (mes===6 && dia >= fechaLimite) || (mes === 9 && dia < fechaLimite);
    // const cuartaEstacion = mesLimite.estacion4.includes(mes) || (mes===9 && dia >= fechaLimite) || (mes === 12 && dia < fechaLimite);
    

    switch (hemisferio) {
        case "sur":
            if(primeraEstacion) {
                document.body.style.backgroundColor = "lightblue";
                estacion.innerHTML = "Es verano"
            } 
            else if (segundaEstacion) {
                document.body.style.backgroundColor = "brown";
                estacion.innerHTML = "Es otoño"
            }
            else if (terceraEstacion) {
                document.body.style.backgroundColor = "blue";
                estacion.innerHTML = "Es invierno"
            }
            else {
                document.body.style.backgroundColor = "green";
                estacion.innerHTML = "Es primavera"
            }
        break
        case "norte":
            if(primeraEstacion) {
                document.body.style.backgroundColor = "white";
                estacion.innerHTML = "Es invierno"
            } 
            else if (segundaEstacion) {
                document.body.style.backgroundColor = "green";
                estacion.innerHTML = "Es primavera"
            }
            else if (terceraEstacion) {
                document.body.style.backgroundColor = "lightblue";
                estacion.innerHTML = "Es verano"
            }
            else {
                document.body.style.backgroundColor = "brown";
                estacion.innerHTML = "Es otoño"
            }
        
        break
    }
    
    
    


}

boton.addEventListener('click', cambiarLayout)