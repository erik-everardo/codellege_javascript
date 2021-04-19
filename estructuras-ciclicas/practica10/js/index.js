const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let primeraPersona = 70;
    let segundaPersona = 150;

    while(primeraPersona !== segundaPersona) {
        primeraPersona++;
        segundaPersona--;
    }
    alert("Se encuentran en el km " + primeraPersona);
});