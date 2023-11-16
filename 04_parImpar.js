// Dado este array:
// let arrayNumeros1 = [ 4, 5, 3, 8, 2, 7, 1, 6]
// let arrayNumeros2 = [ 4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 4) Sumar los valores con índice par y restar los impares
// Hay que mostrar por consola cada resultado

let numeros = [4, 5, 3, 8, 2, 7, 1, 6]

let sumPar = 0
let sumImpar = 0
let resultado = 0

for(let i = 0; i < numeros.length; i++){
    if(i % 2 == 0){
        sumPar = sumPar + numeros[i]
    }else{
        sumImpar = sumImpar + numeros[i]
    }
}
resultado = sumPar - sumImpar

console.log(`El resultado es ${resultado}`);