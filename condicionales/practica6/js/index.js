const boton = document.getElementById("calcular");
const textoRespuesta = document.getElementById("respuestaTexto");

boton.addEventListener("click", function() {
    const edad1 = Number(document.getElementById("edad1").value);
    const edad2 = Number(document.getElementById("edad2").value);
    const nombre1 = document.getElementById("nombre1").value;
    const nombre2 = document.getElementById("nombre2").value;

    if(edad1 > edad2) {
        textoRespuesta.innerHTML = `El mayor es ${nombre1}, que tiene ${edad1} años. Es ${edad1 - edad2} años mayor que ${nombre2}`;
    } else if(edad2 > edad1) {
        textoRespuesta.innerHTML = `El mayor es ${nombre2}, que tiene ${edad2} años. Es ${edad2 - edad1} años mayor que ${nombre1}`;
    }
})