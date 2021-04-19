const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let respuestaAcumulada = "";
    for(let i = 0; i<=100; i++) {
        if(i % 2 === 0) {
            respuestaAcumulada += `<li class="list-group-item">El numero ${i} es par</li>`
        }
    }
    responseContainer.innerHTML = respuestaAcumulada;
});