const savannah = candidatos.filter(function(candidato){
    return candidato.afiliadora == "savannah";
});
const leycy = candidatos.filter(function(candidato){
    return candidato.afiliadora == "leycy";
});

function contactados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 != "noCont";
        }
    );
}

function interesados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 === "interesado";
        }
    );
}
function noInteresados(lista) {
    return lista.filter(
        function(candidato){
            return candidato.fase1 === "noInteresado";
        }
    );
}

function procesosIniciados(lista) {
    return lista.filter(
        function(candidato){
           return candidato.fase1 === "inicio";
        }
    );
} 


// let busqueda = [];

// function filtrarFase1(lista){
//     busqueda = [];
    
//     for (let i = 0; i < lista.length; i++){
//         if(busqueda[lista[i].fase1]) {
//             busqueda[lista[i].fase1] += 1;
//         }else {
//             busqueda[lista[i].fase1] = 1;
//         }
//     }
// }

function buscarRepetidos(lista) {
    const listaCount = {};

    lista.map(
        function(candidato) {
            if(listaCount[candidato.dni]) {
                listaCount[candidato.dni] += 1;
            }
            else {
                listaCount[candidato.dni] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).filter(
        function (item) {
            return item[1] > 1;
        }
    );

    listaArray.map(
        function(elemento) {
            console.log(elemento[0]
                + " aparece "
                + elemento[1]
                + " veces");
        }
    );
    
    const repetidos = [];

    listaArray.forEach(
        function (dni) {
            let dniNumber = dni[0];
            repetidos.push(lista.filter(
                    function(candidato){
                        return candidato.dni === dniNumber;
                    }
                )
            );
        }
    );

    return repetidos;
}

function numeroDeRepetidosEnLista(lista) {
    const dniRepetidos = buscarRepetidos(lista);
    // suma todos los repetidos y resta la cantidad de dnis diferentes, para
    // contar solo las apariciones después de la primera
    const leadsRepetidos = dniRepetidos.reduce(function (acum, item) {
        return acum + item.length
    }, 0) - dniRepetidos.length; 
    
    return leadsRepetidos;
}
// Funciones que escriben en el DOM

const totalGeneral = document.getElementById('total-general');
const repetidosGeneral = document.getElementById('repetidos-general');
const noContGeneral = document.getElementById('noCont-general');
const noCalGeneral = document.getElementById('noCal-general');
const noIntGeneral = document.getElementById('noInt-general');
const intGeneral = document.getElementById('int-general');
const inicioGeneral = document.getElementById('inicio-general');

const elementosBloqueGeneral = [
    totalGeneral,
    repetidosGeneral,
    noContGeneral,
    noCalGeneral,
    noIntGeneral,
    intGeneral,
    inicioGeneral
];

function escribirValor(lugar, valor) {
    lugar.innerHTML = valor;
}
function escribirBloque(bloque, lista) {    
    escribirValor(bloque[0], lista.length);
    escribirValor(bloque[1], numeroDeRepetidosEnLista(lista));
    escribirValor(bloque[2], lista.filter((candidato) => candidato.fase1 === 'noCont').length);
    escribirValor(bloque[3],lista.filter((candidato) => candidato.fase1 === 'noCal').length);
    escribirValor(bloque[4], noInteresados(lista).length);
    escribirValor(bloque[5], interesados(lista).length);
    escribirValor(bloque[6], procesosIniciados(lista).length);
}

escribirBloque(elementosBloqueGeneral, candidatos);

const totalEspec = document.getElementById('total-especifico');
const repetidosEspec = document.getElementById('repetidos-especifico');
const noContEspec = document.getElementById('noCont-especifico');
const noCalEspec = document.getElementById('noCal-especifico');
const noIntEspec = document.getElementById('noInt-especifico');
const intEspec = document.getElementById('int-especifico');
const inicioEspec = document.getElementById('inicio-especifico');

const elementosBloqueEspec = [
    totalEspec,
    repetidosEspec,
    noContEspec,
    noCalEspec,
    noIntEspec,
    intEspec,
    inicioEspec
];

escribirBloque(elementosBloqueEspec, savannah);

// const opcionSavannah = document.getElementById('radio-savannah');
// const opcionLeycy = document.getElementById('radio-leycy');
const listaAfiliadoras = document.listaAfiliadoras;
const listaAfiliadorasArray = listaAfiliadoras.afiliadoras;

listaAfiliadoras.addEventListener('click', () => {
    let i = 0;
    let opcionSeleccionada = '';

    for(i = 0; i < listaAfiliadorasArray.length; i++) {
        if(listaAfiliadorasArray[i].checked) {
            break;
        }
    }
    
    opcionSeleccionada = listaAfiliadorasArray[i].value;

    switch(opcionSeleccionada) {
        case 'savannah': 
            escribirBloque(elementosBloqueEspec, savannah);
            break;

        case 'leycy':
            escribirBloque(elementosBloqueEspec, leycy);
            break;
    }
});