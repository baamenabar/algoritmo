const colores = [
    "gelb",
    "braun",
    "dunkel-rot",
    "hell-blau",
    "lila",
    "crem",
    "hell-grün",
    "grün",
    "rosa",
    "grau",
];

console.log(5 + 788);

function tiraPeos() {
    console.log(
        "Popel springt nicht wie Herr Schlaumi Beserwiser es sagt boing boing boing boing boing!"
    );
}

function escuchaTeclas(evento) {
    var nombre = evento.target.value;
    console.log(nombre);
    //const nombreo = agregaO(nombre);
    tiraPeos();

    //console.log(nombreo);
    muestraResultado(nombre);
}

document
    .querySelector("input.input-nombre")
    .addEventListener("keyup", escuchaTeclas);

function agregaO(palabra) {
    return palabra.split("").join("o");
}

function muestraResultado(resultadoAEscribir) {
    document.querySelector(".resultado").innerHTML = resultadoAEscribir;
    dibujaCuadraditos(resultadoAEscribir);
}

function dibujaCuadraditos(letritas) {
    letritas = letritas.length < 1 ? " " : letritas;
    var totalDeCuadrados = 25;
    while (letritas.length < totalDeCuadrados) {
        letritas += letritas;
    }
    console.log(letritas);
    var cantidad = letritas.length;
    var contenedor = document.querySelector(".contenedor-de-cuadraditos");
    var cuadrado = plantillaDeCuadrado.content;
    contenedor.innerHTML = "";
    for (var i = 0; i < totalDeCuadrados; i = i + 1) {
        var nuevoCuadrado = cuadrado.cloneNode(true);
        var contenido = letritas[i];
        if (contenido == undefined) {
            contenido = " ";
        }
        contenido = contenido.codePointAt();
        contenido = contenido % colores.length;
        contenido = colores[contenido];
        nuevoCuadrado.firstElementChild.classList.add(contenido);
        contenedor.appendChild(nuevoCuadrado);
    }
}
