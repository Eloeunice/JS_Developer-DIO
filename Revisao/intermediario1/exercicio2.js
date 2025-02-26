// 2. **Sequência de Fibonacci**: Gere os primeiros 10 termos da sequência de Fibonacci.

let Fibonacci = [1, 1, 2] // primeiros termos são iguais a 1

// a partir do terceiro termo n = (n-1) + (n-2)
// "Fn=Fn−1+Fn−2,n≥3"

for (let i = 3; i <= 11;i++){
    Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2]
}

console.log(Fibonacci)