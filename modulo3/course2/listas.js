// FOR EACH -> faz o que determinamos com cada elemento do array

const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value,i) => {
    console.log(value + i)
})

// FILTER -> retorna uma lista nova

 const numerosPares = lista.filter((element) => {
    return (element % 2 == 0)
})

console.log(lista)
console.log(numerosPares)

// MAP -> converter um elemento em outro


class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const nomes = [new Pessoa('Renan'),new Pessoa('Maria'),new Pessoa('Carlos'),new Pessoa('Joao')]
console.log(nomes)

const listaNomes = nomes.map((element) => element.nome) // DEVOLVE OUTRO ARRAY
console.log(listaNomes)


// REDUCE -> reduz a lista para um unico elemento

const listaReduzida = lista.reduce((previous, current) => {
    return previous + current
})

console.log(listaReduzida)


// JOIN

const novosNomes = [{nome: 'Maria'}, {nome: 'Joao'}, {nome: 'Priscila'}, {nome: 'Elo'}]

console.log(novosNomes.join('/'))