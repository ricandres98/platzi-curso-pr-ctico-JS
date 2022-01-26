function candidato(dni, fase1, fase2, operacion, afiliadora) {
    this.dni = dni;
    this.fase1 = fase1;
    this.fase2 = fase2;
    this.operacion = operacion;
    this.afiliadora = afiliadora;
}
// Parámetros de clasificación
//
// fase 1: - No contestó ---> noCont
//         - Inició proceso ---> inicio
//         - Interesado, pero no inició ---> interesado
//         - No califica ---> noCal
//         - No le interesa ---> noInteresado
//         - Repetido ---> repetido
//
// fase 2: - Aprobado ---> aprobado
//         - En proceso ---> proceso
//         - Falla polígrafo ---> fPoligr
//         - Falla en antecedentes ---> fAnt
//         - Pierde interés ---> pInteres
//         - No paga al aprobar ---> nPaga
//         - N/A ---> NA
//
// operación: - LATAM ---> latam
//            - URBANO ---> urbano
//            - Centros comerciales ---> plazas
//            - N/A ---> NA
//
// Afiliadoras: - savannah
//              - leycy

const candidatos = [];

// candidato(dni, fase1, fase2, operacion, afiliadora) 
candidatos.push(new candidato("41921818 ","noInteresado","NA", "NA","leycy"));
candidatos.push(new candidato("43715311 ","inicio","aprobado","latam","leycy"));
candidatos.push(new candidato("16691705 ","inicio","aprobado","latam","leycy"));
candidatos.push(new candidato("44035801 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41612900 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("41362494 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("43327715 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("002193960 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("10448699 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41796151 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("80095923 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("42504867 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("46077914 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("74744386 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41708041 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("72054922 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("42762797 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("40167475 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("40208311 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("41163755 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("43519256 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("42864225 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("40218834 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41141091 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("45870376 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("43470005 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("08694673 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("40986514 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("09841642 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("80134324 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("41038395 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("10652868 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("43707334 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("43385156 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("41970587 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("10585754 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("42715415 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("47069210 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("44040070 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("44820667 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("48985534 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("40611560 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("40097829 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41763332 ","interesado","NA","NA","leycy")); // pendiente fotos
candidatos.push(new candidato("41991493 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("10618688 ","interesado","NA","NA","leycy")); // pendiente fotos
candidatos.push(new candidato("923496804 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("09961644 ","inicio","fAnt","latam","leycy")); // Preguntar motivo real por el que desaprueba
candidatos.push(new candidato("09990906 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("9740113 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("06783143 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("71406285 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("45577554 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("41184496 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("001224262 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("43639242 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("42814234 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("47871062 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("10621671 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("9640803 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("25667255 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("46079780 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("75262775 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("10106761 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("47762970 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("3096731 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("10249138 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("44808232 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("70156388 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("9677509 ","inicio","nPaga","NA","leycy"));
candidatos.push(new candidato("43699504 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("45529221 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("42012000 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("41580974 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("10752508 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("10751214 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("40406997 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("45974688 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("09293258 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("25838473 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("45555164 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("46909970 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("20672442 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("72885111 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("45662881 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("4476033 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("45819198 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("9397868 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("43301869 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("71448957 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("47888552 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("73968207 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("7686012 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("47937654 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("71526036 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("42888461 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("46637672 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("70511368 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("43769408 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("7474314 ","noCal","NA","NA","leycy"));
candidatos.push(new candidato("8763960 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("71482642 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("41005910 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("9658483 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("42333166 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("41222749 ","interesado","NA","NA","leycy"));
candidatos.push(new candidato("41629262 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("40686410 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("42326351 ","noCont","NA","NA","leycy"));
candidatos.push(new candidato("33658918 ","inicio","aprobado","urbano","leycy"));
candidatos.push(new candidato("42199516 ","noInteresado","NA","NA","leycy"));
candidatos.push(new candidato("","","","","savannah"));