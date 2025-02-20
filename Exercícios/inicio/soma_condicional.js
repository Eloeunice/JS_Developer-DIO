/** Descrição:
 Crie uma função que receba dois números e retorne a soma apenas se ambos forem números pares. Caso contrário, retorne uma mensagem de erro.
Requisitos:
Use estrutura de condição (if/else).
Valide o tipo dos argumentos (typeof).*/

function soma(a = 0, b = 0){
    try{
        if (a % 2 == 0 & b % 2 == 0){
            return a + b
        } else if(typeof "NaN"){
            return console.log('Not a Number') 
        }else{return "Ambos não são pares"}
    } catch{console.error(typeof "NaN");
};
 }
console.log(soma('el',2))

