 //chaves definem o escopo da função e também objetos literais
// arrow function, hoisting n'ao fuciona com arrows functions
// contexto de invocação > as funções sao executadas nos contextos em que são invocadas
// no caso das arrows functions, elas pegam o contexto do escopo na qual estão envolvidas

var obj = {
    sum: function sum(a,b){
        return a + b
    }
}
console.log(obj.sum(1,2))

var propriedade = 'teste'
var objeto = {
    [propriedade + 'concat'] : 'valor da propriedade'
}

console.log(objeto)


