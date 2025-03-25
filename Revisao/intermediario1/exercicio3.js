// 3. **Números Primos**: Verifique se um número informado pelo usuário é primo.

var num = 10;
let primo = true;

if (num < 2) {
    primo = false;
} 

else if (num === 2) {
    primo = true;
} 

else if (num % 2 === 0) {
    primo = false;
} 
// Testa apenas os ímpares a partir do 3 até a raiz quadrada de num
else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            primo = false;
            break; // Interrompe o loop ao encontrar um divisor
        }
    }
}

console.log(primo);

