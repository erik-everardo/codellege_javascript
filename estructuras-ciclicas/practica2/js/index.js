const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let contador = 0;
    let suma = 0;
    while(true) {
        let calificacion = prompt("Ingrese calificación");
        if(calificacion === null) {
            break;
        }
        contador++;
        suma += Number(calificacion);
    }
    let promedio = suma/contador;

    responseContainer.innerHTML = `El promedio de calificaciones es ${promedio}`;
});