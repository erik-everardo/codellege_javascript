const buttonIniciarApp = document.getElementById("button-iniciar-app");
const responseContainer = document.getElementById("response-container");

buttonIniciarApp.addEventListener("click", function() {
    let pagoPorHora = prompt("Pago por hora");
    if(pagoPorHora === null) return;
    pagoPorHora = Number(pagoPorHora);
    if(isNaN(pagoPorHora)) {
        alert("Ingrese un numero");
        return;
    }

    let horasTotales = 0;
    for(let i = 1; i <= 6; i++){
        let horas = prompt(`Horas trabajadas el día ${i} de 6`);
        if(horas === null) {
            i--;
        } else {
            horas = Number(horas);
            if(isNaN(horas)) {
                alert("ingrese un numero");
                i--;
            } else{
                horasTotales += horas;
            }
        }
    }
    alert(`Se trabajaron ${horasTotales} y se tiene que pagar $${horasTotales * pagoPorHora} en total`);
});