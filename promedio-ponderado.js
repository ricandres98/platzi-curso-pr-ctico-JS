function elementoConPeso(peso, cantidad) {
    this.peso = peso;
    this.cantidad = cantidad;
}

const lista = [];

lista.push(new elementoConPeso(9, 7));
lista.push(new elementoConPeso(3, 5));
lista.push(new elementoConPeso(2, 8));
lista.push(new elementoConPeso(1, 4));

// let acumulador= 0;
// const numerador = lista.reduce(
//     function(valorAnterior, valorActual) {
//         // let acumulador;
//         acumulador += (valorActual.cantidad * valorActual.peso);
//         return acumulador;
//     }
// );
let numeradorPromedioPonderado = 0;
for (elemento of lista) {
    numeradorPromedioPonderado += elemento.cantidad * elemento.peso;
}

let denominadorPromedioPonderado = 0;
for (elemento of lista) {
    denominadorPromedioPonderado += elemento.peso;
}

const promedioPonderado = numeradorPromedioPonderado / denominadorPromedioPonderado;

