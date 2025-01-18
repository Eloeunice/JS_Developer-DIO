// Funcao assincrona -> uma tarefa que nao temos controle mas em algum momento é retornado para gente
// uma tarefa que pode ser feita enquanto o código faz outra. "QUANDO ESTIVER PRONTO ME DÁ O RESULTADO, ENQUANTO NÃO FAZ OUTRA COISA"

//Promises -> o resultado é entregue no fim

const numeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {const numero = parseInt(Math.random() * 100)
        resolve(numero)}, 1000)
    
})

numeroQualquer
    .then((value => {console.log(value)})) // o que vai ser retornado
    .catch((error => {console.error(error)})) // caso de algum erro
    .finally(() => {console.log('finalizou')}) // com erro ou nao me entregue isso