// Hoisting -> içar algo


// Objetos e Métodos 

const pessoa = {
    nome: "Eloiza",
    idade: 19,
    falar : function (){
        console.log(`Meu nome é ${this.nome}`)
    }
    
}

pessoa.cidade = "Cuiabá"

pessoa.falar()
console.log(pessoa)
console.log(pessoa['idade']) // Pega o valor de idade