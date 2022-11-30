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
//         - Atendido por otra afiliadora ---> repetido
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
// Afiliadores: - subject1
//              - subject2

const candidatos = [];

// candidato(dni, fase1, fase2, operacion, afiliadora) 
candidatos.push(new candidato("41921818 ","noInteresado","", "","subject2"));
candidatos.push(new candidato("43715311 ","inicio","aprobado","latam","subject2"));
candidatos.push(new candidato("16691705 ","inicio","aprobado","latam","subject2"));
candidatos.push(new candidato("44035801 ","noCont","","","subject2"));
candidatos.push(new candidato("41612900 ","noInteresado","","","subject2"));
candidatos.push(new candidato("41362494 ","noInteresado","","","subject2"));
candidatos.push(new candidato("43327715 ","noCont","","","subject2"));
candidatos.push(new candidato("002193960 ","noInteresado","","","subject2"));
candidatos.push(new candidato("10448699 ","noCont","","","subject2"));
candidatos.push(new candidato("41796151 ","noCont","","","subject2"));
candidatos.push(new candidato("80095923 ","noCont","","","subject2"));
candidatos.push(new candidato("42504867 ","noCont","","","subject2"));
candidatos.push(new candidato("46077914 ","noCal","","","subject2"));
candidatos.push(new candidato("74744386 ","noCont","","","subject2"));
candidatos.push(new candidato("41708041 ","interesado","","","subject2"));
candidatos.push(new candidato("72054922 ","noInteresado","","","subject2"));
candidatos.push(new candidato("42762797 ","noCont","","","subject2"));
candidatos.push(new candidato("40167475 ","noCont","","","subject2"));
candidatos.push(new candidato("40208311 ","noInteresado","","","subject2"));
candidatos.push(new candidato("41163755 ","noCont","","","subject2"));
candidatos.push(new candidato("43519256 ","inicio","aprobado","urbano","subject2"));
candidatos.push(new candidato("42864225 ","noInteresado","","","subject2"));
candidatos.push(new candidato("40218834 ","noCont","","","subject2"));
candidatos.push(new candidato("41141091 ","noInteresado","","","subject2"));
candidatos.push(new candidato("45870376 ","noCal","","","subject2"));
candidatos.push(new candidato("43470005 ","noCal","","","subject2"));
candidatos.push(new candidato("08694673 ","noCal","","","subject2"));
candidatos.push(new candidato("40986514 ","noCal","","","subject2"));
candidatos.push(new candidato("09841642 ","noCont","","","subject2"));
candidatos.push(new candidato("80134324 ","noCal","","","subject2"));
candidatos.push(new candidato("41038395 ","noCont","","","subject2"));
candidatos.push(new candidato("10652868 ","interesado","","","subject2"));
candidatos.push(new candidato("43707334 ","noCal","","","subject2"));
candidatos.push(new candidato("43385156 ","noInteresado","","","subject2"));
candidatos.push(new candidato("41970587 ","noCont","","","subject2"));
candidatos.push(new candidato("10585754 ","noInteresado","","","subject2"));
candidatos.push(new candidato("42715415 ","noInteresado","","","subject2"));
candidatos.push(new candidato("47069210 ","noCont","","","subject2"));
candidatos.push(new candidato("44040070 ","noCont","","","subject2"));
candidatos.push(new candidato("44820667 ","noCont","","","subject2"));
candidatos.push(new candidato("48985534 ","inicio","aprobado","urbano","subject2"));
candidatos.push(new candidato("40611560 ","noCont","","","subject2"));
candidatos.push(new candidato("40097829 ","noCont","","","subject2"));
candidatos.push(new candidato("41763332 ","interesado","","","subject2")); // pendiente fotos
candidatos.push(new candidato("41991493 ","noCont","","","subject2"));
candidatos.push(new candidato("10618688 ","interesado","","","subject2")); // pendiente fotos
candidatos.push(new candidato("923496804 ","interesado","","","subject2"));
candidatos.push(new candidato("09961644 ","inicio","fAnt","latam","subject2")); // Preguntar motivo real por el que desaprueba
candidatos.push(new candidato("09990906 ","noCont","","","subject2"));
candidatos.push(new candidato("9740113 ","noCont","","","subject2"));
candidatos.push(new candidato("06783143 ","noCont","","","subject2"));
candidatos.push(new candidato("71406285 ","noCont","","","subject2"));
candidatos.push(new candidato("45577554 ","interesado","","","subject2"));
candidatos.push(new candidato("41184496 ","noCont","","","subject2"));
candidatos.push(new candidato("001224262 ","interesado","","","subject2"));
candidatos.push(new candidato("43639242 ","interesado","","","subject2"));
candidatos.push(new candidato("42814234 ","noInteresado","","","subject2"));
candidatos.push(new candidato("47871062 ","noInteresado","","","subject2"));
candidatos.push(new candidato("10621671 ","interesado","","","subject2"));
candidatos.push(new candidato("9640803 ","noCont","","","subject2"));
candidatos.push(new candidato("25667255 ","interesado","","","subject2"));
candidatos.push(new candidato("46079780 ","noCont","","","subject2"));
candidatos.push(new candidato("75262775 ","interesado","","","subject2"));
candidatos.push(new candidato("10106761 ","noInteresado","","","subject2"));
candidatos.push(new candidato("47762970 ","noCont","","","subject2"));
candidatos.push(new candidato("3096731 ","interesado","","","subject2"));
candidatos.push(new candidato("10249138 ","noInteresado","","","subject2"));
candidatos.push(new candidato("44808232 ","noCont","","","subject2"));
candidatos.push(new candidato("70156388 ","noCont","","","subject2"));
candidatos.push(new candidato("9677509 ","inicio","nPaga","","subject2"));
candidatos.push(new candidato("43699504 ","noInteresado","","","subject2"));
candidatos.push(new candidato("45529221 ","noCont","","","subject2"));
candidatos.push(new candidato("42012000 ","noCont","","","subject2"));
candidatos.push(new candidato("41580974 ","noInteresado","","","subject2"));
candidatos.push(new candidato("10752508 ","noCont","","","subject2"));
candidatos.push(new candidato("10751214 ","noCont","","","subject2"));
candidatos.push(new candidato("40406997 ","interesado","","","subject2"));
candidatos.push(new candidato("45974688 ","interesado","","","subject2"));
candidatos.push(new candidato("09293258 ","noCont","","","subject2"));
candidatos.push(new candidato("25838473 ","noCont","","","subject2"));
candidatos.push(new candidato("45555164 ","noCont","","","subject2"));
candidatos.push(new candidato("46909970 ","interesado","","","subject2"));
candidatos.push(new candidato("20672442 ","noInteresado","","","subject2"));
candidatos.push(new candidato("72885111 ","noCont","","","subject2"));
candidatos.push(new candidato("45662881 ","noCont","","","subject2"));
candidatos.push(new candidato("4476033 ","noCont","","","subject2"));
candidatos.push(new candidato("45819198 ","noCont","","","subject2"));
candidatos.push(new candidato("9397868 ","noCont","","","subject2"));
candidatos.push(new candidato("43301869 ","noCal","","","subject2"));
candidatos.push(new candidato("71448957 ","noCal","","","subject2"));
candidatos.push(new candidato("47888552 ","noCont","","","subject2"));
candidatos.push(new candidato("73968207 ","noCont","","","subject2"));
candidatos.push(new candidato("7686012 ","interesado","","","subject2"));
candidatos.push(new candidato("47937654 ","noCal","","","subject2"));
candidatos.push(new candidato("71526036 ","noCont","","","subject2"));
candidatos.push(new candidato("42888461 ","noCont","","","subject2"));
candidatos.push(new candidato("46637672 ","noCont","","","subject2"));
candidatos.push(new candidato("70511368 ","noCont","","","subject2"));
candidatos.push(new candidato("43769408 ","noCal","","","subject2"));
candidatos.push(new candidato("7474314 ","noCal","","","subject2"));
candidatos.push(new candidato("8763960 ","noCont","","","subject2"));
candidatos.push(new candidato("71482642 ","noInteresado","","","subject2"));
candidatos.push(new candidato("41005910 ","interesado","","","subject2"));
candidatos.push(new candidato("9658483 ","noInteresado","","","subject2"));
candidatos.push(new candidato("42333166 ","noInteresado","","","subject2"));
candidatos.push(new candidato("41222749 ","interesado","","","subject2"));
candidatos.push(new candidato("41629262 ","noCont","","","subject2"));
candidatos.push(new candidato("40686410 ","noInteresado","","","subject2"));
candidatos.push(new candidato("42326351 ","noCont","","","subject2"));
candidatos.push(new candidato("33658918 ","inicio","aprobado","urbano","subject2"));
candidatos.push(new candidato("42199516 ","noInteresado","","","subject2"));
candidatos.push(new candidato("46851162 ","interesado","","","subject1"));
candidatos.push(new candidato("43374885 ","interesado","","","subject1"));
candidatos.push(new candidato("75572580 ","inicio","proceso","","subject1")); // pendiente revisión
candidatos.push(new candidato("47020913 ","noInteresado","","","subject1"));
candidatos.push(new candidato("72249150 ","noInteresado","","","subject1"));
candidatos.push(new candidato("45873256 ","noInteresado","","","subject1"));
candidatos.push(new candidato("71421612 ","noInteresado","","","subject1"));
candidatos.push(new candidato("40939493 ","noCal","","","subject1"));
candidatos.push(new candidato("42326351 ","noInteresado","","","subject1"));
candidatos.push(new candidato("42986476 ","noCal","","","subject1"));
candidatos.push(new candidato("41807554 ","repetido","","","subject1"));
candidatos.push(new candidato("46995393 ","noCont","","","subject1"));
candidatos.push(new candidato("9740113 ","noCont","","","subject1"));
candidatos.push(new candidato("25765209 ","repetido","","","subject1"));
candidatos.push(new candidato("71728910 ","interesado","","","subject1"));
candidatos.push(new candidato("42888461 ","noCont","","","subject1"));
candidatos.push(new candidato("47314993 ","noInteresado","","","subject1"));
candidatos.push(new candidato("70810007 ","interesado","","","subject1"));
candidatos.push(new candidato("9809311 ","noInteresado","","","subject1"));
candidatos.push(new candidato("46537761 ","interesado","","","subject1"));
candidatos.push(new candidato("47294472 ","noInteresado","","","subject1"));
candidatos.push(new candidato("25683674 ","noInteresado","","","subject1"));
candidatos.push(new candidato("40774522 ","interesado","","","subject1"));
candidatos.push(new candidato("40710065 ","noInteresado","","","subject1"));
candidatos.push(new candidato("48104162 ","noInteresado","","","subject1"));
candidatos.push(new candidato("47845593 ","noInteresado","","","subject1"));
candidatos.push(new candidato("3830458 ","noInteresado","","","subject1"));
candidatos.push(new candidato("9843262 ","noCal","","","subject1"));
candidatos.push(new candidato("7761087 ","noCont","","","subject1"));
candidatos.push(new candidato("45516915 ","noInteresado","","","subject1"));
candidatos.push(new candidato("10019320 ","noCont","","","subject1"));
candidatos.push(new candidato("42213066 ","noInteresado","","","subject1"));
candidatos.push(new candidato("9766917 ","noCont","","","subject1"));
candidatos.push(new candidato("43707334 ","noCal","","","subject1"));
candidatos.push(new candidato("7761087 ","noCont","","","subject1"));
candidatos.push(new candidato("46499080 ","noInteresado","","","subject1"));
candidatos.push(new candidato("46991621 ","noInteresado","","","subject1"));
candidatos.push(new candidato("70251609 ","noCont","","","subject1"));
candidatos.push(new candidato("21568267 ","inicio","proceso","","subject1")); // aclarar
candidatos.push(new candidato("42871587 ","noInteresado","","","subject1"));
candidatos.push(new candidato("45721636 ","noCont","","","subject1"));
candidatos.push(new candidato("41740059 ","noCont","","","subject1"));
candidatos.push(new candidato("44908843 ","repetido","","","subject1"));
candidatos.push(new candidato("10128512 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41048247 ","noCont","","","subject1"));
candidatos.push(new candidato("45997192 ","noInteresado","","","subject1"));
candidatos.push(new candidato("47871062 ","noInteresado","","","subject1"));
candidatos.push(new candidato("71581064 ","interesado","","","subject1"));
candidatos.push(new candidato("25758676 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41749331 ","noCont","","","subject1"));
candidatos.push(new candidato("33658918 ","repetido","","","subject1"));
candidatos.push(new candidato("42392783 ","noInteresado","","","subject1"));
candidatos.push(new candidato("40620867 ","noCont","","","subject1"));
candidatos.push(new candidato("42695426 ","noCont","","","subject1"));
candidatos.push(new candidato("41697534 ","noInteresado","","","subject1"));
candidatos.push(new candidato("46508995 ","noCont","","","subject1"));
candidatos.push(new candidato("40143570 ","noCont","","","subject1"));
candidatos.push(new candidato("40477511 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41878255 ","interesado","","","subject1"));
candidatos.push(new candidato("40054246 ","noCont","","","subject1"));
candidatos.push(new candidato("41743346 ","noCal","","","subject1"));
candidatos.push(new candidato("43888189 ","interesado","","","subject1"));
candidatos.push(new candidato("42809664 ","noInteresado","","","subject1"));
candidatos.push(new candidato("42926129 ","noCal","","","subject1"));
candidatos.push(new candidato("77354331 ","noCal","","","subject1"));
candidatos.push(new candidato("25443826 ","noCal","","","subject1"));
candidatos.push(new candidato("10439127 ","interesado","","","subject1"));
candidatos.push(new candidato("08138533","noCont","","","subject1"));
candidatos.push(new candidato("10760971 ","noCont","","","subject1"));
candidatos.push(new candidato("43366150 ","noCont","","","subject1"));
candidatos.push(new candidato("41795294 ","noInteresado","","","subject1"));
candidatos.push(new candidato("42767307 ","noCont","","","subject1"));
candidatos.push(new candidato("42904299 ","noInteresado","","","subject1"));
candidatos.push(new candidato("72769596 ","noCont","","","subject1"));
candidatos.push(new candidato("46786431 ","noInteresado","","","subject1"));
candidatos.push(new candidato("40188559 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41519728 ","interesado","","","subject1"));
candidatos.push(new candidato("47740915 ","noCont","","","subject1"));
candidatos.push(new candidato("46749068 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41841986 ","noInteresado","","","subject1"));
candidatos.push(new candidato("47736209 ","interesado","","","subject1"));
candidatos.push(new candidato("42809664 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41545560 ","noCal","","","subject1"));
candidatos.push(new candidato("44200654 ","noInteresado","","","subject1"));
candidatos.push(new candidato("44263250 ","noInteresado","","","subject1"));
candidatos.push(new candidato("43715311 ","noInteresado","","","subject1"));
candidatos.push(new candidato("44035801 ","noCont","","","subject1"));
candidatos.push(new candidato("41362494 ","noCont","","","subject1"));
candidatos.push(new candidato("002193960 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41796151 ","interesado","","","subject1"));
candidatos.push(new candidato("42504867 ","noCal","","","subject1"));
candidatos.push(new candidato("74744386 ","noInteresado","","","subject1"));
candidatos.push(new candidato("72054922 ","noCont","","","subject1"));
candidatos.push(new candidato("004564050 ","noInteresado","","","subject1"));
candidatos.push(new candidato("40167475 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41163755 ","inicio","aprobado","plazas","subject1")); // operación pendiente
candidatos.push(new candidato("42864225 ","noInteresado","","","subject1"));
candidatos.push(new candidato("42864225 ","noInteresado","","","subject1"));
candidatos.push(new candidato("42864225 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41141091 ","noCal","","","subject1"));
candidatos.push(new candidato("43470005 ","noInteresado","","","subject1"));
candidatos.push(new candidato("43470005 ","noInteresado","","","subject1")); //repetido en la linea de arriba
candidatos.push(new candidato("40986514 ","noInteresado","","","subject1"));
candidatos.push(new candidato("80134324 ","noCont","","","subject1"));
candidatos.push(new candidato("10652868 ","interesado","","","subject1"));
candidatos.push(new candidato("43385156 ","noCal","","","subject1"));
candidatos.push(new candidato("10585754 ","interesado","","","subject1"));
candidatos.push(new candidato("44820667","noCont","","","subject1"));
candidatos.push(new candidato("40611560 ","noInteresado","","","subject1"));
candidatos.push(new candidato("41763332","interesado","","","subject1"));
candidatos.push(new candidato("10618688","noCont","","","subject1"));
candidatos.push(new candidato("09990906","noCal","","","subject1"));
candidatos.push(new candidato("48363886","noCont","","","subject1"));
candidatos.push(new candidato("70156388","noCal","","","subject1"));
candidatos.push(new candidato("45577554 ","noCont","","","subject1"));
candidatos.push(new candidato("70156388 ","noCal","","","subject1"));
candidatos.push(new candidato("45555164 ","noCal","","","subject1"));
candidatos.push(new candidato("09572222 ","noCal","","","subject1"));
candidatos.push(new candidato("20672442 ","noCal","","","subject1"));
candidatos.push(new candidato("10665442 ","noCal","","","subject1"));
candidatos.push(new candidato("72661980 ","noCal","","","subject1"));
candidatos.push(new candidato("47341688 ","noCal","","","subject1"));
candidatos.push(new candidato("44101394","noCal","","","subject1"));
candidatos.push(new candidato("47953975 ","noCal","","","subject1"));
candidatos.push(new candidato("41430154 ","noCal","","","subject1"));
//candidatos.push(new candidato(" ","","","","subject1"));
