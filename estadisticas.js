const inputNumber = document.getElementById("inputNumber");
const listOfElements = document.getElementById("listOfElements");
const result = document.getElementById("result");

let lista = []

function agregarNuevoElemento() {
    lista.push(Number(inputNumber.value));
    
    //Escribir en pantalla el array
    listOfElements.innerText = "";
    for (let i = 0; i < lista.length - 1; i++) {
        listOfElements.innerText += " " + lista[i] + ", ";
    }
    listOfElements.innerText += " " + lista[lista.length - 1];
}

function borrarDatos() {
    lista = [];
    listOfElements.innerText = "";
    result.innerText = "";
}

function calcularMediaAritmetica(list) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    if (list[0] === undefined) {
        return "error";
    }
    else {
        const sumaLista = list.reduce(
            function(valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        , 0);
    
        const promedioLista = sumaLista / list.length
        return promedioLista;
    }
}

function calcularMediana(list) {
    if (list[0] === undefined) {
        return "error";
    } 
    else {
        const mitadLista = list.length / 2;
        let mediana;

        list.sort(function(a,b) {
            return a - b;
        });

        if (list.length % 2 === 0) {
            const elementoDelMedio1 = list[mitadLista - 1];
            const elementoDelMedio2 = list[mitadLista];
            mediana = calcularMediaAritmetica([elementoDelMedio1, elementoDelMedio2])
        }
        else {
        mediana = list[parseInt(mitadLista)];
        }

        return mediana;
    }
}

function calcularModa(list){
    if (list[0] === undefined) {
        return "error";
    } 
    else {
        const listaCount = {};

        list.map(
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
        
        // Chequeo de si hay más de una moda
       
        let modas = [];
        
        for (let i = 0; i < listaArray.length; i++) {
            
            if (listaArray[i][1] === listaArray[listaArray.length - 1][1]) {
                    modas.push(listaArray[i]);
            }
        }

        // Si todos son modas, nadie es moda
        if (modas.length === lista.length) {
            return "no hay moda";
        } 
        else {
            return modas;
        }
    }
}

// 
function escribirPromedio(){
    if (calcularMediaAritmetica(lista) === "error") {
        result.innerText = "No ha introducido ningún elemento";
    }
    else {
        result.innerText = "El promedio de los elementos en la lista es " + calcularMediaAritmetica(lista);
    }
}

function escribirMediana(){
    if (calcularMediana(lista) === "error") {
        result.innerText = "No ha introducido ningún elemento";
    }
    else {
        result.innerText = "La mediana de los elementos en la lista es " + calcularMediana(lista);
    }
}

function escribirModa(){
    if (calcularModa(lista) === "error") {
        result.innerText = "No ha introducido ningún elemento";
    } 
    else if(calcularModa(lista) === "no hay moda") {
        result.innerText = "No hay moda en este conjunto";
    } else {
        if (calcularModa(lista).length > 1){
            result.innerText = "Las modas de los elementos en la lista son:\n";
            for (item of calcularModa(lista)) {
                result.innerText += item[0] 
                + ", apareciendo "
                + item[1]
                + " veces\n"
            }
        }
        else {
            result.innerText = "La moda de los elementos en la lista es " 
            + calcularModa(lista)[0][0] 
            + ", apareciendo "
            + calcularModa(lista)[0][1]
            + " veces.";
        }
    }
}