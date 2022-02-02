// Funciones que escriben en el DOM
const totalGeneral = document.getElementById('total-general');
const repetidosGeneral = document.getElementById('repetidos-general');
const contactadosGeneral = document.getElementById('contactados-general');
const noContGeneral = document.getElementById('noCont-general');
const noCalGeneral = document.getElementById('noCal-general');
const noIntGeneral = document.getElementById('noInt-general');
const intGeneral = document.getElementById('int-general');
const inicioGeneral = document.getElementById('inicio-general');

const elementosBloqueGeneral = [
    totalGeneral,
    repetidosGeneral,
    contactadosGeneral,
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
    escribirValor(bloque[2], contactados(lista).length);
    escribirValor(bloque[3], lista.filter((candidato) => candidato.fase1 === 'noCont').length);
    escribirValor(bloque[4],lista.filter((candidato) => candidato.fase1 === 'noCal').length);
    escribirValor(bloque[5], noInteresados(lista).length);
    escribirValor(bloque[6], interesados(lista).length);
    escribirValor(bloque[7], procesosIniciados(lista).length);
}

escribirBloque(elementosBloqueGeneral, candidatos);

const totalEspec = document.getElementById('total-especifico');
const repetidosEspec = document.getElementById('repetidos-especifico');
const contactadosEspec = document.getElementById('contactados-especifico');
const noContEspec = document.getElementById('noCont-especifico');
const noCalEspec = document.getElementById('noCal-especifico');
const noIntEspec = document.getElementById('noInt-especifico');
const intEspec = document.getElementById('int-especifico');
const inicioEspec = document.getElementById('inicio-especifico');

const elementosBloqueEspec = [
    totalEspec,
    repetidosEspec,
    contactadosEspec,
    noContEspec,
    noCalEspec,
    noIntEspec,
    intEspec,
    inicioEspec
];

// escribirBloque(elementosBloqueEspec, savannah);

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

    listaAfiliadoras.classList.add('checked');
});