const buttonInitApp = document.getElementById("btnInitApp");
const responseContainer = document.getElementById("response-container");

buttonInitApp.addEventListener("click", function() {
    // 1º Inicializar una variable
    let resultado = 0;
    for(let i = 1; i <= 10; i++) {
        let numero = Number(prompt(`Ingrese el numero ${i}`));
        resultado += numero;
    }

    responseContainer.innerHTML = `La sumatoria es ${resultado}`;
});