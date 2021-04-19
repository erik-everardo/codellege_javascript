const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let mayoresA500 = 0;
    let menoresA500 = 0;
    while(true) {
        let entrada = prompt("Ingrese un numero");
        if(entrada === null) {
            break;
        }
        let cantidad = Number(entrada);
        if(isNaN(cantidad)) {
            alert("Debe ingresar un número");
        } else {
            if(cantidad <= 500) {
                menoresA500++;
            } else {
                mayoresA500++;
            }
        }
    }
    responseContainer.innerHTML = `Ingreso ${mayoresA500} numeros mayores a 500 y ${menoresA500} numeros menores o iguales a 500`;
});