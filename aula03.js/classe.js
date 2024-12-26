// Criando uma classe

class Pessoa{
    nome;
    idade;
    // atributos bases de uma função
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    descrever (){
        return `Nome: ${this.nome}, Idade: ${this.idade}`
    }
}

// Criando uma instância
const eloiza = new Pessoa('eloiza', 19)
console.log(eloiza)
console.log(eloiza.descrever())

// Criando uma função que recebe instancias como parametros

function compararIdade(pessoa1,pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        return `${pessoa1.nome} é mais velha que ${pessoa2.nome}`
    }else if(pessoa1.idade < pessoa2.idade){
        return `${pessoa2.nome} é mais velha que ${pessoa1.nome}`
    }else{
        return `${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`
    }
}

console.log(compararIdade(eloiza, new Pessoa('João', 25)))