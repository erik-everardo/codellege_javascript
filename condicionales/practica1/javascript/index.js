const btnEvaluar = document.getElementById("boton-evaluar");
const campoNumero1 = document.getElementById("primer-numero");
const campoNumero2 = document.getElementById("segundo-numero");
const alertResultado = document.getElementById("alert-respuesta");

btnEvaluar.addEventListener("click", function() {
    if(Number(campoNumero1.value) > Number(campoNumero2.value)) {
        alertResultado.innerHTML = `El numero mayor es ${campoNumero1.value}`;
    } else {
        alertResultado.innerHTML = `El numero mayor es ${campoNumero2.value}`;
    }
});