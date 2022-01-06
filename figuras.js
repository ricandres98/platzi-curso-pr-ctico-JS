/*------------------------
 ---Código del cuadrado---
 ------------------------*/
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado ** 2;
}

console.groupEnd();

/*------------------------
 ---Código del triángulo---
 ------------------------*/
console.group("Triángulos");

function alturaTriangulo() {
    return Math.sqrt((base / 2) ** 2 - lado)
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(lado1, lado2, lado3){
    // Utiliza la fórmula de Heron para calcular el área en base a los tres lados
    // para esto calcula el semiperimetro y luego lo usa en la fórmula
    const semi = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(semi * (semi-lado1) * (semi - lado2) * (semi - lado3));
    return area;
}

function alturaIsosceles(lado1, lado2, lado3) {
    //Verificar si es un triángulo isósceles 
    if (
        lado1 == lado2 && lado2 != lado3
        || lado2 == lado3 && lado3 != lado1
        || lado3 == lado1 && lado1 != lado2
    ) {
        //Determinar cual es la base, es decir, el lado diferente
        //así como también el lado que será la hipotenusa en el teorema de Pitágoras
        let base;
        let hipotenusa;
        if (lado1 == lado2) {
            base = lado3;
            hipotenusa = lado1;
        } else if (lado2 == lado3) {
            base = lado1
            hipotenusa = lado2;
        }else {
            base = lado2;
            hipotenusa = lado3;
        }

        // Para la altura se usa el teorema de Pitágoras
        const altura = Math.sqrt((hipotenusa ** 2) - ((base / 2) ** 2))
        if (altura === 0) {
            console.log(`No es posible construir un triángulo con dichas medidas`);
        }
        else return altura;
    }
    else {
        console.log('¡No es un triángulo isósceles!');
    }
}
console.groupEnd();

/*------------------------
 ---Código del círculo---
 ------------------------*/
console.group("Círculos");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
} 

// Pi
const PI = Math.PI;
console.log("Pi es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área 
function areaCirculo(radio) {
    return (radio ** 2) * PI;
}
console.groupEnd();

// Aquí interactuamos con HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('InputTriangulo1');
    const input2 = document.getElementById('InputTriangulo2');
    const input3 = document.getElementById('InputTriangulo3');
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById('InputTriangulo1');
    const input2 = document.getElementById('InputTriangulo2');
    const input3 = document.getElementById('InputTriangulo3');
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const area = areaTriangulo(value1, value2, value3);
    alert(area);
}

// Círculo

function calcularPerimetroCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}