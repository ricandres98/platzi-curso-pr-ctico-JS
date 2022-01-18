const lista1 = [
    100,
    200,
    500,
    4000000000,
];
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length
    return promedioLista;
}

const mitadLista1 = lista1.length / 2;


function calcularMediana(lista) {
    const mitadLista = lista.length / 2;
    let mediana;

    lista.sort(function(a,b) {
        return a - b;
    });

    if (lista.length % 2 === 0) {
        const elementoDelMedio1 = lista[mitadLista - 1];
        const elementoDelMedio2 = lista[mitadLista];
        mediana = calcularMediaAritmetica([elementoDelMedio1, elementoDelMedio2])
    }
    else {
       mediana = lista[parseInt(mitadLista)];
    }

    return mediana; 
}