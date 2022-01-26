let busqueda = [];

function filtrarFase1(lista){
    busqueda = [];
    
    for (let i = 0; i < lista.length; i++){
        if(busqueda[lista[i].fase1]) {
            busqueda[lista[i].fase1] += 1;
        }else {
            busqueda[lista[i].fase1] = 1;
        }
    }
}