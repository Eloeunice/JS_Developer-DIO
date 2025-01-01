const notas = []
notas.push(4)
notas.push(10)
notas.push(5)
notas.push(9)
notas.push(4)


let soma = 0
let media = 0
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
    media = soma / notas.length
} console.log(media)