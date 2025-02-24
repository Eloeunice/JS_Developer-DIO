var numeros = [16,2]
var maiorNumero = 0

// UM LOOP QUE LE OS DOIS NUMEROS 
for (numero of numeros ) {
    maiorNumero =  maiorNumero > numero ? maiorNumero : numero
}
console.log(maiorNumero)
