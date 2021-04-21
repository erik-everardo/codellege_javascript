// 14.	Realice un algoritmo que, con base en un numero proporcionado (1-7) indique el día de la
// semana que le corresponda (lunes - domingo).

const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    let numero = document.querySelector("#numero");

    switch(numero.value) {
        case "1": alert("Es lunes"); break;
        case "2": alert("Es martes"); break;
        case "3": alert("Es miercoles"); break;
        case "4": alert("Es jueves"); break;
        case "5": alert("Es viernes"); break;
        case "6": alert("Es sabado"); break;
        case "7": alert("Es domingo"); break;
    }
})