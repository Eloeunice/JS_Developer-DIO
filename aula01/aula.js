/* Faça um programa para calcular o valor de uma viagem.
Serão 3 variavies:
    Preço do Combustivel - Gasto médio de Combustivel por km/hr - Distancia em KM da viagem
    
Imprima no console o valor que será gasto de combustivel para realizar esta viagem*/


let preco = 3.50
let litros = 5 
let distancia = 100

let gastoCombustivel = (distancia / litros) * preco
console.log(`Pra uma viagem de ${distancia} km, o valor a ser gasto é de R$ ${gastoCombustivel.toFixed(2)}`)