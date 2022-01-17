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
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = calcularMediaAritmetica([elemento1, elemento2])
    }
    else {
       mediana = lista[parseInt(mitadLista)];
    }

    return mediana; 
}