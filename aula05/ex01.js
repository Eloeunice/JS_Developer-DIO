/* Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado
    
Dados de entrada: 5, 50, 10, 98, 23
    Saída: 98*/

const { gets, print} = require("./aula.js") 
 const sorteados = [5, 50, 10, 98, 23]
let maiorValor = 0
for(i in sorteados){
    const numeroSorteado = sorteados[i]
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

console.log(maiorValor)