// DESTRUCTURING 
// pegar parte de variáveis e atribuir a outras

var frutas = ['banana', 'maça','laranja', ['Tomate']]

var [banana,maca,laranja] = frutas
console.log(banana, maca, laranja)

// com objetos

var pessoa = {
    name: 'Eloiza'
}

var { name: Nome } = pessoa
console.log(Nome)