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