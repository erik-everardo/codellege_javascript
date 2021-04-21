// 12.	Se necesita el registro de la producción (unidades) logradas por un operario a lo largo de la 
//     semana (lunes a sábado). Elabore un algoritmo que nos muestre si el operario recibirá incentivos 
//     sabiendo que el promedio de producción mínima es de 100 unidades.

const btnCalcular = document.getElementById("calcular");
const camposDias = document.querySelectorAll(".dia");

btnCalcular.addEventListener("click", function() {
    let total = 0;
    camposDias.forEach(function(element) {
        total += Number(element.value);
    });

    if(total/6 >= 100) {
        alert("Recibirá incentivos");
    } else {
        alert("No recibirá incentivos");
    }
});