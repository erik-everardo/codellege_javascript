const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");
const ahorroAcumulado = document.getElementById("ahorro-acumulado");

buttonIniciarApp.addEventListener("click", function() {
    let contador = 1;
    let suma = 0;
    while(contador <= 12) {
        let ahorro = prompt(`Ingrese el ahorro del mes ${contador}`);
        contador++;
        suma += Number(ahorro);

        let elementoLista = document.createElement("li");
        elementoLista.innerHTML = suma;
        ahorroAcumulado.appendChild(elementoLista);
    }

    responseContainer.innerHTML = `El ahorro del mes es $${suma}`;
});