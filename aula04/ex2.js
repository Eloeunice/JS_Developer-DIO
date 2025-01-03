// Percorrer uma lista de números de imprimir apenas os pares encontrados

const numbers = [5,6,9,10,45,3,7,1,12,56]

for(i in numbers){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])
    }
}