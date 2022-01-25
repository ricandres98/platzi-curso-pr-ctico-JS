//Helpers o Utils
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length
    return promedioLista;
}

function esPar(numero) {
    return (numero % 2 === 0);
}


// Mediana General
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

salariosCol.sort(
    function(a,b){
        return a - b;
});
// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana;
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]); 
    }
    else {
        const personaMitad = lista[mitad];
        mediana = personaMitad;
    }
    return mediana;
}



const medianaGeneralCol = medianaSalarios(salariosCol);

//Mediana del top 10%
const spliceStart = parseInt(salariosCol.length * 0.9);
const spliceCount = salariosCol.length - spliceStart;
const salariosColTop10 = salariosCol.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosCol);


console.log({
    medianaGeneralCol,
    medianaTop10Col
});