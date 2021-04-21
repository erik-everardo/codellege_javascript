// 15.	Realizar algoritmo que, con base en una calificación proporcionada (0-10), indique con letra la calificación
//     que le corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D” y de 5 a 0 es “F”.

const calificacion = document.querySelector("#calificacion");

calificacion.addEventListener("change", function() {
    let valorNumerico = Number(calificacion.value);

    switch (valorNumerico) {
        case 10: alert("A"); break;
        case 9: alert("B"); break;
        case 8: alert("C"); break;
        default:
            if(valorNumerico === 6 || valorNumerico === 7) {
                alert("D");
            } 
            if(valorNumerico <= 5) {
                alert("F");
            }
    }
});