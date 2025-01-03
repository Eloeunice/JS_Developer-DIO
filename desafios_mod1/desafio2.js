/**
 Imprimir o maior numero par e o menor numero impar do conjunto
 const entradas = [5,3,4,1,10,8]
 let i = 0 

 function gets(){
    const valor = entradas[i];
    i++;
    return valor;}

function print(texto){
    console.log(texto);}
 */

const entradas = [5,3,4,1,10,8]

let maiorValorPar = 0
let menorValorImpar = 0

for(i in entradas){
    const numeroPar = (entradas[i] % 2 == 0 ) ? entradas[i] : null
    const numeroImpar = (entradas[i] % 2 != 0 ) ? entradas[i] : 1
    if (numeroPar > maiorValorPar){
        maiorValorPar = numeroPar
    }
    else (numeroImpar < menorValorImpar)
        menorValorImpar = numeroImpar
}

console.log(`o maior numero par ${maiorValorPar} e o menor numero impar ${menorValorImpar} do conjunto`)