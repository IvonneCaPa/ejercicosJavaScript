// Dado este array:
// let arrayNumeros1 = [ 4, 5, 3, 8, 2, 7, 1, 6]
// let arrayNumeros2 = [ 4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 2) Mostrar por consola el promedio

let arrayNumeros = [ 4, 5, 3, 8, 2, 7, 1, 6]

let suma = 0
let contador = 0

for (let i = 0; i <arrayNumeros.length; i++) {
    suma += arrayNumeros[i]
    contador ++
}

console.log(`El promedio es: ${suma / contador}`);

