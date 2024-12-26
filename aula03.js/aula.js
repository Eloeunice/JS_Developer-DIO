// Objeto

const eloiza = {
    nome: "Eloiza Eunice Ferreira de Almeida",
    idade: 19,
    endereco:{
        bairro: "Novo Mato Grosso",
        numero: 3068,
        cidade: "Cuiaba"
    },
    descrever: function (){
        return `Nome: ${this.nome}, Idade: ${this.idade}, Endereço: ${this.endereco.bairro}, ${this.endereco.numero}, ${this.endereco.cidade}`
    }
}

console.log(eloiza)

//Consultando atributos do objeto
console.log(eloiza.idade)
eloiza['idade'] = 20
console.log(eloiza.idade)

//Adicionando atributos ao objeto
eloiza['curso'] = 'Ads'

console.log(eloiza.descrever())


