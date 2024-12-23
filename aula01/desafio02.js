let preco = 3.50
let litros = 5 
let distancia = 100
let tipoCombustivel = 'Gasolina'


if (tipoCombustivel == 'Etanol'){
    preco = 3.45
    let gastoCombustivel = (distancia / litros) * preco
    console.log(`Pra uma viagem de ${distancia} km, o valor a ser gasto é de R$ ${gastoCombustivel.toFixed(2)}`)
} else {
    preco = 4.00
    let gastoCombustivel = (distancia / litros) * preco
    console.log(`Pra uma viagem de ${distancia} km, o valor a ser gasto é de R$ ${gastoCombustivel.toFixed(2)}`)
}

