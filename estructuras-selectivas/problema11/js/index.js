// 11.	Elaborar un algoritmo que solicite la edad de 2 hermanos y muestre un mensaje indicando la edad 
//     del mayor y cuantos años de diferencia tiene con el menor.

const btnCalcular = document.getElementById("btnCalcular");
const respuestaContainer = document.getElementById("respuestaContainer");

btnCalcular.addEventListener("click", function() {
    let edad1 = Number(document.getElementById("edad1").value);
    let edad2 = Number(document.getElementById("edad2").value);

    if(edad1 > edad2) {
        respuestaContainer.innerHTML = `<div class="alert alert-info">El hermano mayor tiene ${edad1} años, y es ${edad1 - edad2} año(s) mayor que su hermano, que tiene ${edad2}</div>`;
    } else {
        respuestaContainer.innerHTML = `<div class="alert alert-info">El hermano mayor tiene ${edad2} años, y es ${edad2 - edad1} año(s) mayor que su hermano, que tiene ${edad1}</div>`;
    }
});