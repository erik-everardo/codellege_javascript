document.getElementById("btn-calcular-area").addEventListener("click", function() {
    let area = (Number(document.getElementById("base").value) * Number(document.getElementById("altura").value))/2;
    document.getElementById("respuesta-container").innerHTML = `<em>El área del triangulo es:</em> ${area}`;
});