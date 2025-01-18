const maria = {
    nome: 'Maria Eduarda',
    idade: 20,
    cidade: 'Cuiabá',
    curso: 'Administração'
}

function descrever(prefixo){
    console.log(prefixo, this.nome)

}

// o prefixo aqui é 'olá' e o contexto é a constante maria -> entao a função vai ler o this.nome no contexto da variavel
descrever.call(maria,'Olá,') // passo o contexto em qual vai se aplicar a função
descrever.apply(maria,['Olá,']) // recebe como parametro um array

