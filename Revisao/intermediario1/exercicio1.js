// 1. **Fatorial**: Solicite um número inteiro e exiba o fatorial desse número.

var num = 4
var fatorial = 1 // fatorial de 0 é 1


for (let i = num; i > 1; i--){ // pegar o número, enquanto i for maior que 1, diminui 1
  fatorial *= i // fatorial vai multiplicando pelo valor atual de i
  console.log(fatorial)
}

