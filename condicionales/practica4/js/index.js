document.getElementById("boton-calcular").addEventListener("click", function(){
    let precio = Number(document.getElementById("precio-original").value);

    if(precio > 1000) {
        precio *= 0.80;
    }

    document.getElementById("response-container").innerHTML = `El costo total de la compra es: ${precio}`;
});