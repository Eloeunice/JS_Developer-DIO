const pessoa = {
}

// Objeto é uma cadeia dinamica de chave : valor
const eloiza = {
    nome: "Eloiza",
    idade: 19,
    __proto__: pessoa // fazer uma herança
}

pessoa.genero = "Feminino"


console.log(pessoa['nome'])
console.log(eloiza.genero)


// FUNÇÕES CONSTRUTORAS -> tem um escopo próprio

function Pessoa(nome,idade){
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

const elo = new Pessoa("eloiza", 19)
console.log(elo)


// Todo método da função vira um prototype, toda novo objeto da classe herda seu prototype
class Pessoa1{
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const elo2 = Object.create(Pessoa1)
console.log(elo2)

Pessoa1.prototype.ola = function() {
    console.log('ola')
}

const duda = new Pessoa1()
console.log(duda)