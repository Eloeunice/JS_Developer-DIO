// First Class Functions 

function falar(){
    console.log('oi')
}

const referenciaNova = function referenciaNova(){
    console.log('hello')
}

falar()
console.log(referenciaNova())

// As funçoes viram objetos, então podemos usar elas como parametoes, armazenar em constantes

// Function Declaration -> ao d=sofrer hoisting todas as declarações vai pra cima

function nomeFuncao(){}

// Function Expression

const nome_funcao = function (){}

nomeFuncao()
nome_funcao()