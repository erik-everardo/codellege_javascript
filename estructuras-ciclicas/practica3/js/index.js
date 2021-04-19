const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let contador = 0;
    let suma = 0;
    while(true) {
        let estatura = prompt("Ingrese estatura en centímetros");
        if(estatura === null) {
            break;
        }
        contador++;
        suma += Number(estatura);
    }
    let promedio = suma/contador;

    responseContainer.innerHTML = `El promedio de estatura es ${promedio} cm`;
});