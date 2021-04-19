const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let horasDeEstacionamiento = prompt("Horas en el estacionamiento");
    let costo = 0;
    if(horasDeEstacionamiento === null) {
        return;
    }
    horasDeEstacionamiento = Number(horasDeEstacionamiento);
    if(isNaN(horasDeEstacionamiento)) {
        alert("Ingrese un numero");
        return;
    } else {
        for(let i = 1; i <= horasDeEstacionamiento; i++) {
            if(i <= 2) {
                costo += 5;
            } else if(i <= 5) {
                costo += 4;
            } else if(i <= 10) {
                costo += 3;
            } else {
                costo += 2;
            }
        }
        alert("El total a pagar es: $" + costo);
    }
});