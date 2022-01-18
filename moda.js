const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    92
];

function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    
    console.log(
        "La moda es "
        + moda[0]
        + ", ya que aparece "
        + moda[1]
        + " veces."
        );
    return moda;
}





