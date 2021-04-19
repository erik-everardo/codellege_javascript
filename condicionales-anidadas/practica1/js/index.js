
const button = document.getElementById("botonCalcular");

button.addEventListener("click", function() {
    const primerNumeroInput = Number(document.getElementById("primer-numero").value);
    const segundoNumeroInput = Number(document.getElementById("segundo-numero").value);
    const tercerNumeroInput = Number(document.getElementById("tercer-numero").value);
    let resultado = "";

    if(primerNumeroInput > segundoNumeroInput) {
        if(primerNumeroInput > tercerNumeroInput) {
            resultado = "El primer numero es el mayor";
        } else {
            resultado = "El tercer numero es el mayor"
        }
    } else {
        if(segundoNumeroInput > tercerNumeroInput) {
            resultado = "El segundo numero es el mayor";
        } else {
            resultado = "El tercer numero es el mayor";
        }
    }

    document.getElementById("container-result").innerHTML = resultado;
});