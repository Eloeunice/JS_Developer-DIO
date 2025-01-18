//REST E SPREAD OPERATOR

// rest operator -> ...args = traz os argumentos em um array

function sum (...args){
    return args.reduce((acc,value) => acc + value, 0)
} // os arguments não existem nas arrows functions
console.log(sum(5,6,10))


// O rest pode pegar parâmetros restantes da função

// SPREAD OPERATOR -> pega todos os itens do array e trnaforma em parametros para uma função

const str = 'Eloiza Almeida'
const arr = [1,2,3,4]
function logArgs(...args){
    console.log(args)
}
logArgs(...str)
logArgs(...arr)

// podemos utilizar o spread para construir um array

const arr2 = [5,6,7,...arr]
console.log(arr2)