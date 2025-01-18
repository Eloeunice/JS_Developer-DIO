function funcao(){}

const funcao2 = () => {} // arrow function não isola o que está no bloco em um contexto especifico, o que impossibilita o uso de this 


// CLOSURE => Um closure é onde uma função interna tem acesso às variáveis ​​da função externa.


function soma(x){
    return function (y){
        return x + y
    }
}

console.log(soma(10)(20))

// variavel que armazena o x da funcao como 10
const somaParcial = soma(10)

console.log(somaParcial(20)) // vai usar o valor de somaParcial como o x
