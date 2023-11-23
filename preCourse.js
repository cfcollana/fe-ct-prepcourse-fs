// tipo de dato string
var nombre = 'Christian Collana';

// tipo de dato number
var edad = 46;
var edad2 = '46';

console.log('comparacion ==', edad == edad2)
console.log('comparacion ===', edad === edad2)

// tipo de dato boolean
var esEstudiante = true;
var esProfesor = false;

function esEstudianteFunc(condicion) {
    if (esEstudiante === condicion) {
        console.log ('ES ESTUDIANTE')
        return true
    } else {
        console.log ('NO ES ESTUDIANTE')
        return false
    }
}

console.log(esEstudianteFunc(false));


// tipo de dato undefined
var x;

// funciones
function saludar(nombre){
    return "hola " + nombre;
}


console.log(saludar('Christian'))

// Operadores

console.log(1+1);
console.log(10/2);
console.log(5*4);
console.log(10 ** 2);
console.log(49%2);

// operdaores de comparacion

console.log (1==1);
console.log (1 !=2);
console.log (1==='1');
console.log (4>=4);
console.log (4>=3);

// operadores logicos

console.log (1 == 1) && (2 == 2);
console.log (1 == 1) && (2 == 3);

var nombre = 'Chritsian';
console.log(nombre.length)

function idioma(key) {
    if (key === 'es') {
        return 'HOLA'
    } else if (key === 'en') {
        return 'HELLO'
    } else {
        return 'No es un idioma valido'
    }
}

console.log(idioma('fr'));

console.log(Math.pow(2,5));

var numeroRandom = Math.random();
console.log(numeroRandom * 10);
console.log(Math.ceil(numeroRandom * 10));

// es par
function esPar (numero) {
    if (numero % 2 === 0) {
        return 'Es par'
    } else {
        return 'Es impar'
    }
}
console.log(esPar(25));


