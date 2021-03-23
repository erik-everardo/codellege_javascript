const radioCirculo = document.getElementById("radio-circulo");

document.getElementById("calcular-area").addEventListener("click", function() {
    let radio = Number(radioCirculo.value);
    document.getElementById("result-container").innerHTML = Math.PI * Math.pow(radio,2);
});